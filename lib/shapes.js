class Circles {
  constructor(text, shapeColor, textColor) {
    if (text.length > 3) {
      throw new Error("text must be 3 characters or less");
    }
    this.text = text;
    this.shapeColor = shapeColor;
    this.textColor = textColor;
  }
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  
  <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
          
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
          
  </svg>`;
  }
}

class Square {
  constructor(text, shapeColor, textColor) {
    if (text.length > 3) {
      throw new Error("text must be 3 characters or less");
    }
    this.text = text;
    this.shapeColor = shapeColor;
    this.textColor = textColor;
  }
  render() {
    return `<svg version="1.1" width="500" height="500" xmlns="http://www.w3.org/2000/svg">
    
  <rect x="100" y="100" width="300" height="200" stroke="black" fill="${this.shapeColor}" stroke-width="5"/>
           
  <text x="240" y="220" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
           
  </svg>`;
  }
}

class Triangles {
  constructor(text, shapeColor, textColor) {
    if (text.length > 3) {
      throw new Error("text must be 3 characters or less");
    }
    this.text = text;
    this.shapeColor = shapeColor;
    this.textColor = textColor;
  }
  render() {
    return `<svg version="1.1"  xmlns="http://www.w3.org/2000/svg">
    
  <polygon points="200 30, 400 250, 0 250"
  stroke="green" fill="${this.shapeColor}" stroke-width="5"/>
           
  <text x="200" y="180" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
           
  </svg>`;
  }
}

module.exports = {
  Square: Square,
  Triangle: Triangles,
  Circles: Circles,
};
