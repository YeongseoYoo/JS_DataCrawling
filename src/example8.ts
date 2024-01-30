interface IUser {
    name: string;
    greeting(): string;
  }
  
  class User8 implements IUser {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    greeting() {
      return `Hello, my name is ${this.name}`;
    }
  }
  