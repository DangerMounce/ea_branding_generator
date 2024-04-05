const fs = require('fs');

function generateColorVariants(primaryHex, secondaryHex) {
    primaryHex = `#${primaryHex}`;
    secondaryHex = `#${secondaryHex}`;

    function adjustColor(color, rDiff, gDiff, bDiff) {
        let r = Math.max(0, Math.min(255, parseInt(color.substring(1, 3), 16) + rDiff));
        let g = Math.max(0, Math.min(255, parseInt(color.substring(3, 5), 16) + gDiff));
        let b = Math.max(0, Math.min(255, parseInt(color.substring(5, 7), 16) + bDiff));
        return `#${(r.toString(16).padStart(2, '0') + g.toString(16).padStart(2, '0') + b.toString(16).padStart(2, '0')).toUpperCase()}`;
    }

    const cssContent = `html {
    /* Primary colour of nav bar and buttons */
    --primary: ${primaryHex} !important; 
    /* Unsure where this shows - maybe not needed */
    --secondary: ${secondaryHex} !important;
    /* Button on hover */
    --primary-dark: ${adjustColor(primaryHex, 8, -27, -31)} !important;
    /* Unsure where this shows - maybe not needed */
    --primary-darker: ${adjustColor(primaryHex, -2, -44, -72)} !important;
    /* Nav bar icons - THIS WILL NEED VERIFIED */
    --primary-light: ${adjustColor(primaryHex, 224, 134, 15)} !important;
    /* Nav bar menus - THIS WILL NEED VERIFIED */
    --primary-lighter: ${adjustColor(primaryHex, 237, 141, 15)} !important;
    /* Unsure where this shows - maybe not needed */
    --secondary-dark: ${adjustColor(secondaryHex, 0, -27, -67)} !important;
    /* Unsure where this shows - maybe not needed */
    --secondary-darker: ${adjustColor(secondaryHex, 4, -43, -103)} !important;
    /* Unsure where this shows - maybe not needed */
    --secondary-light: ${adjustColor(secondaryHex, 191, 94, 255)} !important;
    /* Unsure where this shows - maybe not needed */
    --secondary-lighter: ${adjustColor(secondaryHex, 208, 101, 255)} !important;
}`;

    // Write the CSS content to branding.css
    fs.writeFile('branding.css', cssContent, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
}

// Retrieving command line arguments (excluding 'node' and 'script.js')
let args = process.argv.slice(2);

// Check if two colors are provided
if(args.length >= 2) {
    let primary = args[0]; // First argument
    let secondary = args[1]; // Second argument
    generateColorVariants(primary, secondary);
} else {
    console.log("Please provide two hex color values (without #).");
}
