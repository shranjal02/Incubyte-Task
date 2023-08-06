class GalacticSpacecraft {
  constructor() {
    this.position = { x: 0, y: 0, z: 0 };
    this.directions = ["N", "E", "S", "W", "Up", "Down"];
    this.currentDirection = "N";
  }

  moveForward() {
    switch (this.currentDirection) {
      case "N":
        this.position.y++;
        break;
      case "E":
        this.position.x++;
        break;
      case "S":
        this.position.y--;
        break;
      case "W":
        this.position.x--;
        break;
      case "Up":
        this.position.z++;
        break;
      case "Down":
        this.position.z--;
        break;
    }
  }

  moveBackward() {
    switch (this.currentDirection) {
      case "N":
        this.position.y--;
        break;
      case "E":
        this.position.x--;
        break;
      case "S":
        this.position.y++;
        break;
      case "W":
        this.position.x++;
        break;
      case "Up":
        this.position.z--;
        break;
      case "Down":
        this.position.z++;
        break;
    }
  }

  turnRight() {
    const currentIndex = this.directions.indexOf(this.currentDirection);
    this.currentDirection = this.directions[(currentIndex + 1) % 4];
  }

  turnLeft() {
    const currentIndex = this.directions.indexOf(this.currentDirection);
    this.currentDirection = this.directions[(currentIndex + 3) % 4];
  }

  turnUp() {
    const currentIndex = this.directions.indexOf(this.currentDirection);
    if (currentIndex <= 3) {
      this.currentDirection = this.directions[currentIndex + 4];
    }
  }

  turnDown() {
    const currentIndex = this.directions.indexOf(this.currentDirection);
    if (currentIndex >= 4) {
      this.currentDirection = this.directions[currentIndex - 4];
    }
  }

  executeCommands(commands) {
    for (const command of commands) {
      switch (command) {
        case "f":
          this.moveForward();
          break;
        case "b":
          this.moveBackward();
          break;
        case "r":
          this.turnRight();
          break;
        case "l":
          this.turnLeft();
          break;
        case "u":
          this.turnUp();
          break;
        case "d":
          this.turnDown();
          break;
      }
    }
  }

  getCurrentPosition() {
    return this.position;
  }

  getCurrentDirection() {
    return this.currentDirection;
  }
}

// Example usage and testing:
const spacecraft = new GalacticSpacecraft();
const commands = ["f", "r", "u", "b", "l"];
spacecraft.executeCommands(commands);

console.log("Final Position:", spacecraft.getCurrentPosition());
console.log("Final Direction:", spacecraft.getCurrentDirection());
