import { google } from 'googleapis'

// Initialize Google Sheets client
export async function getGoogleSheetsClient() {
  const credentialsString = process.env.GOOGLE_SERVICE_ACCOUNT_KEY || '{}'
  const credentials = JSON.parse(credentialsString)
  
  // Fix the private key newlines
  if (credentials.private_key) {
    credentials.private_key = credentials.private_key.replace(/\\n/g, '\n')
  }

  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: [
      'https://www.googleapis.com/auth/spreadsheets',
      'https://www.googleapis.com/auth/drive.file',
    ],
  })

  const sheets = google.sheets({ version: 'v4', auth })
  const drive = google.drive({ version: 'v3', auth })

  return { sheets, drive, auth }
}

// Add a row to Google Sheets
export async function addRowToSheet(
  spreadsheetId: string,
  values: any[]
) {
  const { sheets } = await getGoogleSheetsClient()

  // Append the data
  const response = await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: 'Sheet1!A:AG', // Columns A-AG (33 columns total)
    valueInputOption: 'USER_ENTERED',
    insertDataOption: 'INSERT_ROWS', // Force new row insertion
    requestBody: {
      values: [values],
    },
  })

  // Get the row number that was just added
  const updatedRange = response.data.updates?.updatedRange
  if (updatedRange) {
    const rowMatch = updatedRange.match(/Sheet1!A(\d+):/)
    if (rowMatch) {
      const rowNumber = parseInt(rowMatch[1])
      
      // Clear formatting and apply date formats to specific columns
      await sheets.spreadsheets.batchUpdate({
        spreadsheetId,
        requestBody: {
          requests: [
            // Clear all formatting first
            {
              repeatCell: {
                range: {
                  sheetId: 0, // Default first sheet
                  startRowIndex: rowNumber - 1,
                  endRowIndex: rowNumber,
                  startColumnIndex: 0,
                  endColumnIndex: 33, // Columns A-AG (0-32 = 33 columns)
                },
                fields: 'userEnteredFormat',
              },
            },
            // Apply DATE_TIME format to Column B (Submission Date)
            {
              repeatCell: {
                range: {
                  sheetId: 0,
                  startRowIndex: rowNumber - 1,
                  endRowIndex: rowNumber,
                  startColumnIndex: 1, // Column B (index 1)
                  endColumnIndex: 2,
                },
                cell: {
                  userEnteredFormat: {
                    numberFormat: {
                      type: 'DATE_TIME',
                      pattern: 'm/d/yyyy h:mm:ss',
                    },
                  },
                },
                fields: 'userEnteredFormat.numberFormat',
              },
            },
            // Apply DATE format to Column H (Student Date of Birth)
            {
              repeatCell: {
                range: {
                  sheetId: 0,
                  startRowIndex: rowNumber - 1,
                  endRowIndex: rowNumber,
                  startColumnIndex: 7, // Column H (index 7)
                  endColumnIndex: 8,
                },
                cell: {
                  userEnteredFormat: {
                    numberFormat: {
                      type: 'DATE',
                      pattern: 'm/d/yyyy',
                    },
                  },
                },
                fields: 'userEnteredFormat.numberFormat',
              },
            },
            // Apply DATE_TIME format to Column AC (Signature Date)
            {
              repeatCell: {
                range: {
                  sheetId: 0,
                  startRowIndex: rowNumber - 1,
                  endRowIndex: rowNumber,
                  startColumnIndex: 28, // Column AC (index 28)
                  endColumnIndex: 29,
                },
                cell: {
                  userEnteredFormat: {
                    numberFormat: {
                      type: 'DATE_TIME',
                      pattern: 'm/d/yyyy h:mm:ss',
                    },
                  },
                },
                fields: 'userEnteredFormat.numberFormat',
              },
            },
          ],
        },
      })
    }
  }

  return response.data
}

// Upload file to Google Drive
export async function uploadToDrive(
  file: File,
  folderId?: string
) {
  const { drive } = await getGoogleSheetsClient()

  const fileMetadata: any = {
    name: file.name,
    mimeType: file.type,
  }

  if (folderId) {
    fileMetadata.parents = [folderId]
  }

  // Convert File to Buffer and then to Readable stream
  const buffer = Buffer.from(await file.arrayBuffer())
  const { Readable } = require('stream')
  const stream = Readable.from(buffer)

  const media = {
    mimeType: file.type,
    body: stream,
  }

  const response = await drive.files.create({
    requestBody: fileMetadata,
    media: media,
    fields: 'id, webViewLink, webContentLink',
  })

  return response.data
}

// Make file publicly accessible (read-only)
export async function makeFilePublic(fileId: string) {
  const { drive } = await getGoogleSheetsClient()

  await drive.permissions.create({
    fileId: fileId,
    requestBody: {
      role: 'reader',
      type: 'anyone',
    },
  })
}
