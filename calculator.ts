type Operation = "multiply" | "add" | "divide";
type Result = number;

const calculator = (a: number, b: number, op: Operation ): Result => {
   
    if (op === "multiply") return a * b
    if (op === "add") return a + b

    if(op === "divide") {
        if(b === 0)  throw new Error('can\'t divide by 0! sorry!');
        return a / b;
    }

    throw new Error("Operation is not valid");
}

try {
    const result: string | number = calculator(1, 0, "divide");
    console.log(result);
    console.log(process.argv);
} catch (e) {
    console.log("Something went wrong", e);
}
