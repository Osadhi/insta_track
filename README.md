# Insta Track: Instagram Follower Comparison Tool

Insta Track is a React application designed specifically for Instagram, allowing users to compare lists of followers and accounts they follow. By uploading `follower.json` and `following.json` files exported from Instagram, users can identify non-followers and fans, gaining insights into their Instagram interactions.

## Features

- **File Upload**: Users can upload `follower.json` (followers) and `following.json` (following) files exported from Instagram.
- **Comparison Analysis**: The application compares the lists to identify non-followers and fans.
- **Tabular Display**: Results are organized into tabs for easy navigation between non-followers and fans.
- **Error Handling**: Comprehensive error messages guide users through any issues encountered during the comparison process.
- **Instruction Section**: Detailed instructions are provided for users to maximize the application's utility.

## Installation and Setup

To run the application locally, follow these steps:

1. Clone this repository:

    ```bash
    git clone https://github.com/Osadhi/insta_track.git
    ```

2. Navigate to the project directory:
    ```bash
    cd insta_track
    ```
3. Install dependencies using npm:
    ```bash
    npm install
    ```

4. Start the development server:
    ```bash
    npm run dev
    ```
Access the application in your browser at http://localhost:3000.

## Usage
Upon launching the application, you'll encounter a banner followed by the "Start Tracking" section.

Click "Read Instruction" to review detailed usage guidelines.

Export follower.json containing your Instagram followers and following.json containing accounts you follow from your Instagram account.

Upload follower.json and following.json files using the corresponding file upload forms.

Click "Analyze" to initiate the comparison process.

Results will be presented in tabs, displaying non-followers and fans respectively.

## JSON File Format
`follower.json`: Contains a list of your Instagram followers.

`following.json`: Contains a list of Instagram accounts you follow.

Ensure both files are exported from Instagram and are properly formatted to ensure accurate comparison.

## Contributing
Contributions are encouraged! Please feel free to open an issue or submit a pull request for suggestions, improvements, or bug fixes.

## License
This project is licensed under the MIT License. For more information, see the [LICENSE](./LICENSE) file.