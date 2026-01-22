# Project Blueprint


## Project Overview

This is a framework-less web project developed in Firebase Studio, utilizing HTML, CSS, and JavaScript. The project aims to create a modern, responsive, and functional web application.

## Feature: Partnership Inquiry Form

### Purpose
To provide a simple and efficient way for users to submit partnership inquiries directly through the website. This form leverages Formspree for backend processing, eliminating the need for server-side code.

### Implementation Details
- **Technology**: Formspree for form submission handling.
- **Form Fields**:
    - Name (text input)
    - Email (email input)
    - Company (text input)
    - Message (textarea)
- **Styling**: The form will be styled using modern CSS practices to ensure a clean, visually appealing, and responsive design, adhering to the project's overall aesthetic.
- **HTML Structure**: The form will be integrated into `index.html` within a dedicated section.
- **JavaScript (Optional)**: Basic client-side validation or feedback mechanisms might be added to `main.js` if necessary, though Formspree handles the core submission logic.


## Features

-   **Lotto Number Generation:** Generates six unique random numbers between 1 and 45.
-   **Simple UI:** A clean and straightforward user interface.
-   **Dark/White Mode:** Includes a theme switcher to toggle between dark and white modes.

## Current Task: Add Dark/White Mode

### Plan

1.  **CSS Changes:**
    *   Create a `dark-mode.css` file to define the color scheme for dark mode.
    *   Use CSS variables in `style.css` for easily themeable properties.
    *   Add a `dark-mode` class to the `body` to activate the dark theme.
2.  **HTML Changes:**
    *   Add a theme switcher button to the `index.html` file.
3.  **JavaScript Changes:**
    *   Implement the logic in `main.js` to toggle the `dark-mode` class on the `body`.
    *   Use `localStorage` to persist the selected theme across sessions.
4.  **Deployment:**
    *   Commit the changes to the Git repository.
    *   Push the changes to the remote to deploy the update.