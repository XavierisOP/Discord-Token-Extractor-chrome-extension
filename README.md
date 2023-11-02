# Discord Token Extractor

Extracts the user token from Discord (Discord Account Logged in Browser).

## Description
The Discord Token Extractor is a Chrome extension that allows users to extract their user token from Discord for reference. The extracted token can be copied to the clipboard for further use.

## Features
- Extracts the user token from Discord
- Copies the extracted token to the clipboard

## Installation

### Option 1: Download and Install the Extension
1. Go to the [Releases]([https://github.com/your-username/your-repository/releases](https://github.com/XavierisOP/Discord-Token-Extractor-chrome-extension/releases/tag/v1.5.0)) page of this repository.
2. Download the latest version of the extension's zip file (e.g., `discord-token-extractor-v1.0.zip`).
3. Extract the contents of the zip file to a folder on your computer.
4. Open Google Chrome and go to `chrome://extensions/`.
5. Enable Developer Mode by toggling the switch in the top right corner.
6. Click on "Load unpacked" and select the extracted folder containing the extension.

### Option 2: Build and Install from Source
1. Clone or download this repository to your computer.
2. Open Google Chrome and go to `chrome://extensions/`.
3. Enable Developer Mode by toggling the switch in the top right corner.
4. Click on "Load unpacked" and select the downloaded repository folder.

## Usage
1. Open Discord in Google Chrome.
2. Click on the extension icon in the Chrome toolbar.
3. A popup window will appear with a button labeled "Extract Token".
4. Click on the "Extract Token" button.
5. If successful, the user token will be extracted and copied to the clipboard.
6. Paste the extracted token wherever you need it.

## Permissions
The extension requires the following permissions:
- `activeTab` - Allows the extension to access the currently active tab in Chrome.
- `clipboardWrite` - Enables copying the extracted token to the clipboard.
- `scripting` - Allows the extension to execute scripts on web pages.

## Screenshots
![Screenshot 1](/screenshots/screenshot1.png)
![Screenshot 2](/screenshots/screenshot2.png)

## Contributing
Contributions are welcome! If you encounter any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License
This project is licensed under the [MIT License](LICENSE).
