const fs = require("fs");
const inquirer = require("inquirer");

inquirer
  .prompt({
    type: "input",
    message: "What shape do you want?",
    name: "shape",
  })
  .then((answer) => console.log(answer));
