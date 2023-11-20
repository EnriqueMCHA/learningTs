var multiplicartor = function (a, b, printText) {
    console.log(printText, a * b);
};
var parseArguments = function (args) {
    if (args.length !== 4)
        throw new Error("Wrong number of arguments");
    var firstNumber = Number(args[2]);
    var secondNumber = Number(args[3]);
    if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
        return [
            firstNumber,
            secondNumber
        ];
    }
    throw new Error("Provided values were not numbers");
};
var cleanArguments = parseArguments(process.argv);
var a = Number(process.argv[2]);
var b = Number(process.argv[3]);
multiplicartor(a, b, "Multiplied ".concat(a, " and ").concat(b, " and the result is: "));
