## Overview

Welcome to the Web Color Generator with Accessibility Test! This tool is designed to help developers and designers create and test color schemes for web projects, ensuring they meet accessibility standards.

## Features

- Dynamic Color Generation: Easily generate and view different color schemes for various states (hover, default, active).
- Accessibility Testing: Automatically test your color combinations against WCAG AA and AAA standards for color contrast, ensuring your designs are accessible to all users.
- User-Friendly Interface: Intuitive and responsive design that makes it easy to interact with and visualize different color schemes.
- Real-Time Feedback: Get immediate feedback on the accessibility compliance of your color choices, helping you make informed design decisions.

## Running the Development Server

`npm run dev`

## Build Command

`npm run build`

## Usage

1. Generate Colors: Use the tool to generate colors for different states such as hover, default, and active.
2. Accessibility Check: The tool will automatically calculate the contrast ratios and indicate whether the color combinations pass AA and AAA accessibility standards.
3. Adjust as Needed: Modify the colors and re-test until all combinations meet the desired accessibility criteria.

## How It Works

- Color Configuration: The tool takes a color configuration object with properties for hover, default, active, and font color.
- Contrast Calculation: It calculates the contrast ratio between the background colors and the font color.
- Accessibility Validation: Using these ratios, the tool validates whether the colors comply with WCAG AA and AAA standards and displays the results.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch: git checkout -b my-feature-branch
3. Make your changes and commit them: git commit -m 'Add some feature'
4. Push to the branch: git push origin my-feature-branch
5. Submit a pull request.
