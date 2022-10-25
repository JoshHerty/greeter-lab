import Greeter from "./Greeter";

export default class HtmlGreeter extends Greeter {
  tagName: string;
  constructor(greeting: string, newTagName: string = "h1") {
    super(greeting);
    this.tagName = newTagName;
  }
  greet(name: string): string {
    return `<${this.tagName}>${this.greeting}, ${name}!</${this.tagName}>`;
  }
}
