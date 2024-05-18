function calculate(operand1: number, operand2: number, operator: string): number | string {
    switch (operator) {
        case '+':
            return operand1 + operand2;
        case '-':
            return operand1 - operand2;
        case '*':
            return operand1 * operand2;
        case '/':
            if (operand2 !== 0) {
                return operand1 / operand2;
            } else {
                return "Error: Division by zero";
            }
        default:
            return "Error: Invalid operator";
    }
}

function basicCalculator(): void {
    const operand1 = parseFloat(prompt("Enter the first operand:") || "0");
    const operator = prompt("Enter an operator ('+', '-', '*', '/'):") || "";
    const operand2 = parseFloat(prompt("Enter the second operand:") || "0");

    const result = calculate(operand1, operand2, operator);

    console.log(`Result: ${result}`);
}

basicCalculator();
