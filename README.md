# pwr-blder-frontend

## Overview

This is the frontend for pwr-blder-frontend, a React application that interacts with the pwr-blder-api to provide a user interface for managing exercises, workout programs, and user-related functionalities.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/brandonsnover/pwr-blder-frontend.git
    cd pwr-blder-frontend
    ```

2. **Install Dependencies:**

    ```bash
    npm install
    ```

## Usage

**Start the Development Server:**

```bash
npm start
```
The application will be accessible at http://localhost:5173/.

Folder Structure
The project has the following folder structure:

- App.jsx: Main component rendering the application.
- Content.jsx: Component containing methods, handles routing, and renders the body.
- DayShow.jsx: Component to render an individual day in a program.
- ExerciseAdd.jsx: Component to add an exercise to a day.
- ExerciseIndex.jsx: Component to index all the exercises in the database.
- ExerciseShow.jsx: Component to give details of an individual exercise.
- Footer.jsx: Renders the footer for the page.
- Header.jsx: Component to render header for page containing links.
- index.css: Sets the styling for the background image.
- Login.jsx: Component to login a user.
- main.jsx: Top level component.
- Modal.css: Contains styling for the Modal.
- Modal.jsx: Component to render the Modal.
- ProgramIndex.jsx: Component to index all the programs for a user.
- ProgramShow.jsx: Component to render an individual program.
- SignUp.jsx: Component to signup a new user.

`...
Dependencies
React
React Router
Axios
Bootstrap

Install additional dependencies using:

```bash
npm install <package-name>
```

