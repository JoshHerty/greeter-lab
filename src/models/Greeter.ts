export default class Greeter {
  greeting: string;
  constructor(greetingInput: string) {
    this.greeting = greetingInput;
  }
  greet(name: string): string {
    return `${this.greeting}, ${name}!`;
  }
}
