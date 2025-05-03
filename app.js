// Built-in module
import readline from "readline";

// Third-party module
import chalk from "chalk";

// Import local modules
import { add } from "./myModules/add.js";
import { subtract } from "./myModules/subtract.js";
import { multiply } from "./myModules/multiply.js";
import { divide } from "./myModules/divide.js";

// Terminal output and input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Fuction to ask user for input 
function ask(question) {
  return new Promise((resolve) => {
    rl.question(question, resolve);
  });
}

// Main function to run calculator
async function handleCalculation() {
  console.log(chalk.cyan("Welcome to the Calculator App!"));

  const num1 = await ask(chalk.blue("Enter the first number: "));
  const num2 = await ask(chalk.blue("Enter the second number: "));
  const operation = await ask(
    chalk.yellow("Choose operation (add, subtract, multiply, divide): ")
  );

  const a = Number(num1);
  const b = Number(num2);

  let result;

  try {
    if (isNaN(a) || isNaN(b)) {
      throw new Error("Please enter valid numbers.");
    }

    switch (operation.toLowerCase()) {
      case "add":
        result = add(a, b);
        break;
      case "subtract":
        result = subtract(a, b);
        break;
      case "multiply":
        result = multiply(a, b);
        break;
      case "divide":
        result = divide(a, b);
        break;
      default:
        throw new Error(
          "Invalid operation. Use: add, subtract, multiply, or divide."
        );
    }

    console.log(chalk.green(`The result is: ${result}`));
  } catch (error) {
    console.log(chalk.red(`Error: ${error.message}`));
  } finally {
    rl.close();
  }
}

handleCalculation();
