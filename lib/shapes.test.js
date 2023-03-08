const Shapes = require("../lib/shapes");

describe("Shapes", () => {
  describe("Circle", () => {
    it("should return a string when the render method runs", () => {
      const shape = new Shapes.Circles();
      shape.setColor("blue");
      expect(shape.render()).toEqual(
        `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  
  <circle cx="150" cy="100" r="80" fill="blue" />
          
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
          
  </svg>`
      );
    });
  });
  describe("Square", () => {
    it("should return a string when the render method runs", () => {
      const shape = new Shapes.Square();
      shape.setColor("blue");
      expect(shape.render()).toEqual(
        `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  
  <circle cx="150" cy="100" r="80" fill="blue" />
          
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
          
  </svg>`
      );
    });
  });
  describe("Triangle", () => {
    it("should return a string when the render method runs", () => {
      const shape = new Shapes.Triangle();
      shape.setColor("blue");
      expect(shape.render()).toEqual(
        `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  
  <circle cx="150" cy="100" r="80" fill="blue" />
          
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
          
  </svg>`
      );
    });
  });
});
