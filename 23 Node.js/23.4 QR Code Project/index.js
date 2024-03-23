/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([{ 
    name: "link",
    message:  "Enter the link of the website you want to convert: ",
    type: 'input'
    
  }])
  .then((answers) => {
    var URL = answers.link;
    var qr_png = qr.image(URL, { type: "png" });
    
    qr_png.pipe(fs.createWriteStream("qr_image.png"));

    fs.writeFile("URL.txt", URL, (err) => {
        if (err) throw err;
        console.log("The link has been saved!");
    });
})

        