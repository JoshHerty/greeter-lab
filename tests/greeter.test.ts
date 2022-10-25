import Greeter from "../src/models/Greeter";
import HtmlGreeter from "../src/models/HtmlGreeter";
import JavaScriptGreeter from "../src/models/JavaScriptGreeter";
import LoudGreeter from "../src/models/LoudGreeter";

describe(`Greeter class`, () => {
  test(`constructor sets greeting property`, () => {
    // arrange
    const hello: Greeter = new Greeter("howdy");
    // act (n/a)
    // assert
    expect(hello.greeting).toBe("howdy");
  });
  test(`greet method called with "mom" returns and object constructed with params "hi" returns "hi, mom!"`, () => {
    // arrange
    const newGreeting: Greeter = new Greeter("hi");
    // act - call method
    const returnString: string = newGreeting.greet("mom");
    // assert
    expect(returnString).toBe("hi, mom!");
  });
});

describe(`JavaScript Greeter`, () => {
  test(`greet method: greeting "hola" and name "Dominic" returns "console.log('hola, Dominic')"`, () => {
    // arrange
    const objectExample: JavaScriptGreeter = new JavaScriptGreeter("hola");
    // act
    const result: string = objectExample.greet("Dominic");
    // assert
    expect(result).toBe("console.log('hola, Dominic!')");
  });
  test(`greet method: greeting "sup" and name "James" returns "console.log('sup, James')"`, () => {
    // arrange
    const objectExample: JavaScriptGreeter = new JavaScriptGreeter("sup");
    // act
    const result: string = objectExample.greet("James");
    // assert
    expect(result).toBe("console.log('sup, James!')");
  });
});

describe(`Loud Greeter`, () => {
  test(`greet method: greeting "Hello" and "Grant" while calling addVolume once returns "Hello, Grant!!"`, () => {
    // arrange
    const newGreeting: LoudGreeter = new LoudGreeter("Hello");
    // act - addVolume modifies obj (property: extra)
    newGreeting.addVolume();
    const result: string = newGreeting.greet("Grant");
    // assert
    expect(result).toBe("Hello, Grant!!");
  });
});

describe(`HTML Greeter`, () => {
  test(`"<h1>Hello, Grant!</h1>"`, () => {
    // arrange
    const newGreeting: HtmlGreeter = new HtmlGreeter("Hello");
    // act
    const result: string = newGreeting.greet("Grant");
    // assert
    expect(result).toBe("<h1>Hello, Grant!</h1>");
  });
  test(`"<p>Happy Birthday, Birthday kid!</p>"`, () => {
    // arrange
    const newGreeting: HtmlGreeter = new HtmlGreeter("Happy Birthday", "p");
    // act
    const result: string = newGreeting.greet("Birthday kid");
    // assert
    expect(result).toBe("<p>Happy Birthday, Birthday kid!</p>");
  });
  test(`"tagName property is set from constructor, tagName defaults to h1 when 2nd argument is left off"`, () => {
    // arrange
    const newGreeting: HtmlGreeter = new HtmlGreeter("konichiwa", "h2");
    // act - call greet
    const result: string = newGreeting.greet("class");
    // assert
    expect(result).toBe("<h2>qkonichiwa, class!</h2>");
  });
});
