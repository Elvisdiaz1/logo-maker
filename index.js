const fs = require("fs");
const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "checkbox",
      message: "What shape do you want?",
      name: "shape",
      choices: ["square", "circle", "triangle"],
    },
    {
      type: "input",
      message: "What color do you want your shape to be?",
      name: "shapeColor",
    },
    {
      type: "input",
      message: "What do you want your logo to say? (Enter only three letters)",
      name: "text",
    },
    {
      type: "input",
      message: "What color do you want your text to be?",
      name: "textColor",
    },
  ])
  .then(({ shape, shapeColor, text, textColor }) => {
    if (shape === "circle") {
      let svgText = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

<circle cx="150" cy="100" r="80" fill="${shapeColor}" />

<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>

</svg>`;
      fs.writeFile("logo.svg", svgText, (err) =>
        err ? console.log(err) : console.log("generated logo.svg")
      );
    } else if (shape === "square") {
      let svgText = `<svg version="1.1" width="500" height="500" xmlns="http://www.w3.org/2000/svg">

 <rect x="100" y="100" width="300" height="200" stroke="black" fill="${shapeColor}" stroke-width="5"/>

  <text x="225" y="245" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>

</svg>`;
      fs.writeFile("logo.svg", svgText, (err) =>
        err ? console.log(err) : console.log("generated logo.svg")
      );
    } else {
      let svgText = `<svg version="1.1"  xmlns="http://www.w3.org/2000/svg">

 <polygon points="200 30, 400 250, 0 250"
     stroke="green" fill="${shapeColor}" stroke-width="5"/>

  <text x="200" y="180" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>

 </svg>`;
      fs.writeFile("logo.svg", svgText, (err) =>
        err ? console.log(err) : console.log("generated logo.svg")
      );
    }
  });
