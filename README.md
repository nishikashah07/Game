# Game
Trc
# Committee Management Website

This project is a simple web application designed to collect and store information about committee members. The application features a form that allows users to input their name, year, and contact information. The data is stored in an Excel file for easy access and management.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [License](#license)

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/committee-management.git
    ```

2. Navigate to the project directory:
    ```bash
    cd committee-management
    ```

3. Install the necessary dependencies using Composer (if PhpSpreadsheet is not installed manually):
    ```bash
    composer require phpoffice/phpspreadsheet
    ```

4. Ensure that your web server (e.g., Apache or Nginx) is properly set up to execute PHP scripts.

## Usage

1. Open the `index.html` file in your web browser or deploy it on your web server.
2. Fill out the form with the required details (name, year, contact) and submit it.
3. The submitted data will be stored in an `Excel` file named `data.xlsx` in the project root directory.

### Example

Here’s how the form works:

- **Name**: Enter your full name.
- **Year**: Specify your year (e.g., `2024`).
- **Contact**: Provide your contact information (e.g., `email@example.com`).

Upon submission, the data is automatically saved to the Excel file.

## Technologies

- **HTML/CSS/JavaScript**: Front-end structure and design.
- **PHP**: Backend processing and data handling.
- **PhpSpreadsheet**: PHP library used to create and manipulate Excel files.

## Contributing

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch:
    ```bash
    git checkout -b feature-branch
    ```
3. Make your changes and commit them:
    ```bash
    git commit -m "Description of the changes"
    ```
4. Push to the branch:
    ```bash
    git push origin feature-branch
    ```
5. Submit a pull request.

