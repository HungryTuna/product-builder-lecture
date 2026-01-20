# Project Blueprint

## Overview

This project is a simple web application that generates lottery numbers. It features a clean interface and allows users to generate a new set of six unique numbers with a single click.

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