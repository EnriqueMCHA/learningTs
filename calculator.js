var calculator = function (a, b, op) {
    if (op === "multiply")
        return a * b;
    if (op === "add")
        return a + b;
    if (op === "divide") {
        if (b === 0)
            throw new Error('can\'t divide by 0! sorry!');
        return a / b;
    }
    throw new Error("Operation is not valid");
};
try {
    var result = calculator(1, 0, "divide");
    console.log(result);
    console.log(process.argv);
}
catch (e) {
    console.log("Something went wrong", e);
}
