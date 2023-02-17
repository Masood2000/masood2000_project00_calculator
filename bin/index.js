#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
async function operationTypeSelect() {
    await inquirer.prompt([
        {
            type: "list",
            name: "Operation",
            message: `${chalk.yellow("Please Select any one Option.....")}`,
            choices: ["Addition", "Subtraction", "Multiplication", "Division", "Power"]
        },
        {
            type: "number",
            name: "firstNumber",
            message: "Enter First Number = ",
        },
        {
            type: "number",
            name: "secondNumber",
            message: "Enter Second Number = ",
        },
    ]).then((answers) => {
        if (answers.Operation == "Addition") {
            console.log(`Addition of ${answers.firstNumber} + ${answers.secondNumber} = ${addtion(answers.firstNumber, answers.secondNumber)}`);
        }
        else if (answers.Operation == "Subtraction") {
            console.log(`Subtraction of ${answers.firstNumber} - ${answers.secondNumber} = ${subtraction(answers.firstNumber, answers.secondNumber)}`);
        }
        else if (answers.Operation == "Multiplication") {
            console.log(`Multiplication of ${answers.firstNumber} * ${answers.secondNumber} = ${multiplication(answers.firstNumber, answers.secondNumber)}`);
        }
        else if (answers.Operation == "Division") {
            console.log(`Division of ${answers.firstNumber} / ${answers.secondNumber} = ${division(answers.firstNumber, answers.secondNumber)}`);
        }
        else if (answers.Operation == "Power") {
            console.log(`Power of ${answers.firstNumber} ^ ${answers.secondNumber} = ${power(answers.firstNumber, answers.secondNumber)}`);
        }
    });
}
;
async function againRunCalculator() {
    do {
        await operationTypeSelect();
        console.log("\n");
        var option = await inquirer.prompt([{
                type: "input",
                message: chalk.green("Press Y to continue......... "),
                name: "question",
            }]);
    } while (option.question == "y" || option.question == "Y" || option.question == "YES" || option.question == "yes" || option.question == "Yes");
}
;
againRunCalculator();
function addtion(num1, num2) {
    return num1 + num2;
}
function subtraction(num1, num2) {
    return num1 - num2;
}
function multiplication(num1, num2) {
    return num1 * num2;
}
function division(num1, num2) {
    return num1 / num2;
}
function power(num1, num2) {
    return Math.pow(num1, num2);
}
