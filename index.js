const fs = require("fs");
const inquirer = require("inquirer");
const Shapes = require("./lib/shapes");

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
    if (shape == "triangle") {
      const svgData = new Shapes.Triangle(text, shapeColor, textColor);
      const svg = svgData.render();
      fs.writeFile("logo.svg", svg, (err) =>
        err ? console.log(err) : console.log("generated logo.svg")
      );
    } else if (shape == "circle") {
      const svgData = new Shapes.Circles(text, shapeColor, textColor);
      const svg = svgData.render();
      fs.writeFile("logo.svg", svg, (err) =>
        err ? console.log(err) : console.log("generated logo.svg")
      );
    } else {
      const svgData = new Shapes.Square(text, shapeColor, textColor);
      const svg = svgData.render();
      fs.writeFile("logo.svg", svg, (err) =>
        err ? console.log(err) : console.log("generated logo.svg")
      );
    }
  });
