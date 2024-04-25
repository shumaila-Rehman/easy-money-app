#! /usr/bin/env node 
import inquirer from "inquirer";
import promptsync from "prompt-sync";
import chalk from "chalk";
let prompt = promptsync();
let myBalance = 10000;
console.log(chalk.magentaBright("\n\t Welcome to Easy Money App\n\t"));
console.log(`Your current balance is ${myBalance}`);
let answers = await inquirer.prompt([
    {
        name: "pin",
        type: "password",
        message: chalk.greenBright("Enter your pin")
    }
]);
let user_answer = await inquirer.prompt([
    {
        name: "name",
        type: "list",
        message: chalk.greenBright("Select one option: "),
        choices: ["Send money", "Bill Payment", "Mobile Packages", "Receive Money"]
    }
]);
if (user_answer.name === "Send money") {
    let send = await inquirer.prompt([
        {
            name: "method",
            type: "list",
            message: chalk.greenBright("Select Option"),
            choices: ["EasyMoney transfer", "Bank Transfer", "Other Wallet",]
        }
    ]);
    if (send.method === "EasyMoney transfer") {
        let answer = await inquirer.prompt([
            {
                name: "sender",
                type: "input",
                message: chalk.greenBright("Enter Sender Name: ")
            },
            {
                name: "Receiver",
                type: "number",
                message: "Enter Receiver's Phone Number: "
            }, {
                name: "Amount",
                type: "number",
                message: chalk.greenBright("Enter amount: ")
            }
        ]);
        console.log(chalk.yellow("Amount has been sent successfully . "));
        let remaining = myBalance -= answer.Amount;
        console.log(chalk.yellowBright(`Your remaining balance is ${myBalance}`));
    }
    else if (send.method === "Bank Transfer") {
        let transfer = await inquirer.prompt([
            {
                name: "bank",
                type: "number",
                message: chalk.green("Enter Bank Account IBN: ")
            },
            {
                name: "amount2",
                type: "number",
                message: chalk.greenBright("Enter Amount: ")
            }
        ]);
        console.log(chalk.yellowBright("Amount has been sent successfully . "));
        let remainingAmount2 = myBalance -= transfer.amount2;
        console.log(`Your remaing balance is ${myBalance}`);
    }
    else {
        let other = await inquirer.prompt([
            {
                name: "wallet",
                type: "input",
                message: "Enter anoter Account Like JazzCash: "
            }, {
                name: "amount3",
                type: "number",
                message: "Enter Amount: "
            }
        ]);
        console.log("Amount has been sent successfully. ");
        let remainingAmount3 = myBalance -= other.amount3;
        console.log(chalk.yellowBright(`Your remaining balance is ${myBalance}`));
    }
}
else if (user_answer.name === "Bill Payment") {
    let bill = await inquirer.prompt([
        {
            name: "billPay",
            type: "list",
            message: chalk.greenBright("Select Option"),
            choices: ["K-electric Bill", "SuiGas Bill", "Other Bill"]
        }
    ]);
    if (bill.billPay === "K-electric Bill") {
        let k_bill = await inquirer.prompt([
            {
                name: "amount4",
                type: "number",
                message: chalk.greenBright("Enter Amount: ")
            },
        ]);
        console.log(chalk.yellow("Bill paid successfully"));
        let remainingAmt = myBalance -= k_bill.amount4;
        console.log(chalk.yellowBright(`Your remaining balance is ${myBalance}`));
    }
    else if (bill.billPay === "SuiGas Bill") {
        let gas = await inquirer.prompt([
            {
                name: "gasbill",
                type: "number",
                message: chalk.greenBright("Enter Amount: ")
            }
        ]);
        console.log(chalk.greenBright("Bill Paid successfully"));
        let rem = myBalance -= gas.gasbill;
        console.log(chalk.greenBright(`Your remaining balance is ${myBalance}`));
    }
    else {
        let other = await inquirer.prompt([
            {
                name: "otherbill",
                type: "number",
                message: chalk.greenBright("Enter Amount: ")
            }
        ]);
        console.log(chalk.yellowBright("Bill paid successfully ! "));
        let remain = myBalance -= other.otherbill;
        console.log(chalk.yellowBright(`your remaining balance is ${myBalance}`));
    }
}
else if (user_answer.name === "Mobile Packages") {
    let MobPkg = await inquirer.prompt([
        {
            name: "mob",
            type: "list",
            message: chalk.greenBright("Enter Desired package: "),
            choices: ["SMS bundle", "Call pkg", "Net pkg"]
        }
    ]);
    if (MobPkg.mob === "SMS bundle") {
        let pkg = await inquirer.prompt([
            {
                name: "pkgamount",
                type: "list",
                message: chalk.greenBright("Select Bundle name: "),
                choices: ["daily bundle", "Weekly bundle", "Monthly bundle"]
            },
        ]);
        if (pkg.pkgamount === "daily bundle") {
            let daily = await inquirer.prompt([
                {
                    name: "amountdaily",
                    type: "number",
                    message: chalk.greenBright("Enter amount: ")
                }
            ]);
            console.log(chalk.yellowBright("Package has been subscribed successfully."));
            let remain1 = myBalance -= daily.amountdaily;
            console.log(chalk.yellowBright(`Your remaining balance is ${myBalance}`));
        }
        else if (pkg.pkgamount === "Weekly bundle") {
            let weekly = await inquirer.prompt([
                {
                    name: "week",
                    type: "number",
                    message: chalk.greenBright("Enter Amount: ")
                }
            ]);
            console.log(chalk.yellowBright("Weekly pakg has been subscribed successfully ! "));
            let remain22 = myBalance -= weekly.week;
            console.log(chalk.yellowBright(`Your remaining balance is ${myBalance}`));
        }
        else {
            let month = await inquirer.prompt([
                {
                    name: "monthly",
                    type: "number",
                    message: chalk.greenBright("Enter Amount")
                }
            ]);
            console.log(chalk.yellowBright("Net pkg has been subscribed successfully ! "));
            let remain23 = myBalance -= month.monthly;
            console.log(chalk.yellowBright(`Your remaining balance is ${myBalance}`));
        }
    }
    else if (MobPkg.mob === "Call pkg") {
        let call = await inquirer.prompt([
            {
                name: "callAmount",
                type: "number",
                message: chalk.greenBright("Enter Amount: ")
            }
        ]);
        console.log(chalk.yellowBright("Call pakg has been subscribed successfully ! "));
        let remain3 = myBalance -= call.callAmount;
        console.log(chalk.yellowBright(`Your remaining balance is ${myBalance}`));
    }
    else {
        let net = await inquirer.prompt([
            {
                name: "netAmount",
                type: "number",
                message: chalk.greenBright("Enter Amount: ")
            }
        ]);
        console.log(chalk.yellowBright("Net pakg has been subscribed successfully ! "));
        let remain4 = myBalance -= net.netAmount;
        console.log(chalk.yellowBright(`Your remaining balance is ${myBalance}`));
    }
}
else {
    let receive = await inquirer.prompt([
        {
            name: "recAmount",
            type: "input",
            message: chalk.greenBright("Enter Receiver Name: ")
        },
        {
            name: "amount33",
            type: "number",
            message: chalk.greenBright("Enter Amount: ")
        }
    ]);
    console.log(chalk.yellowBright("Amount has beed added successfully ! "));
    let added = myBalance += receive.amount33;
    console.log(chalk.yellowBright(`Your new balance is ${myBalance}`));
}
