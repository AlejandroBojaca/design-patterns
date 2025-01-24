const fs = require("fs");

class RealImage {
  constructor(filename) {
    this.filename = filename;
    this.loadImage();
  }

  loadImage() {
    console.log("LOADING IMAGE");
  }

  display() {
    fs.readFile(this.filename, function (error, data) {
      console.log("READING REAL FILE");
    });
  }
}

class ProxyImage {
  constructor(filename) {
    this.realImage = null;
    this.filename = filename;
  }

  display() {
    if (this.realImage === null) {
      this.realImage = new RealImage(this.filename);
    }
    this.realImage.display();
  }
}

const image = new ProxyImage("image.webp");

image.display();
image.display();
image.display();
