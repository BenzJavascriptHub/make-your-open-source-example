import { SayHelloProps } from "./types";

export function sayHello({ firstname, lastName, age }: SayHelloProps) {
  console.log("Hello");
  console.log(`Your name is ${firstname}`);

  if (lastName) {
    console.log(`Your last name is ${lastName}`);
  }

  if (age) {
    console.log(`You are ${age} years old`);
  }
}
