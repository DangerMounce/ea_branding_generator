# Branding Colors Generator

This Node.js script generates a CSS file (`branding.css`) containing CSS variables for primary and secondary colors and their variants. It's designed to streamline the process of defining and updating branding colors in customizing CSS in product tours.

## Overview

The script takes two hex color values (without the `#`) as command-line arguments and generates a `branding.css` file. This file includes CSS custom properties for primary and secondary colors, as well as their darker, darker, light, and lighter variants, complete with appropriate comments.

## Requirements

- Node.js installed on your system.

## Usage

1. Clone or download this repository to your local machine.

2. Navigate to the script's directory in your terminal.

3. Run the script using Node.js, passing in the primary and secondary color values as arguments. Replace `primaryColor` and `secondaryColor` with your desired hex color values (without the `#`):

   ```bash
   node script.js primaryColor secondaryColor
   
4. After running the script, check the current directory for the branding.css file, which will contain the CSS variables.

```bash
   html {
    /* Primary color of nav bar and buttons */
    --primary: #primaryColor !important;
    /* Unsure where this shows - maybe not needed */
    --secondary: #secondaryColor !important;
    /* Button on hover */
    --primary-dark: #calculatedValue !important;
    /* Unsure where this shows - maybe not needed */
    --primary-darker: #calculatedValue !important;
    /* Nav bar icons - THIS WILL NEED VERIFIED */
    --primary-light: #calculatedValue !important;
    /* Nav bar menus - THIS WILL NEED VERIFIED */
    --primary-lighter: #calculatedValue !important;
    /* Unsure where this shows - maybe not needed */
    --secondary-dark: #calculatedValue !important;
    /* Unsure where this shows - maybe not needed */
    --secondary-darker: #calculatedValue !important;
    /* Unsure where this shows - maybe not needed */
    --secondary-light: #calculatedValue !important;
    /* Unsure where this shows - maybe not needed */
    --secondary-lighter: #calculatedValue !important;
}
