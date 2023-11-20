const multiplicartor = (a: number, b: number, printText: string) => {
    console.log(printText, a * b);
}

const parseArguments = (args): Array<number> => {

    if(args.length !== 4) throw new Error ("Wrong number of arguments");

    const firstNumber = Number(args[2]);
    const secondNumber = Number(args[3]);

    if(!isNaN(firstNumber) && !isNaN(secondNumber)){ 
        return [
            firstNumber,
            secondNumber
        ]
    } 
    
    throw new Error("Provided values were not numbers");
}

const cleanArguments = parseArguments(process.argv);

const a: number = Number(process.argv[2]);
const b: number = Number(process.argv[3]);

multiplicartor(a, b, `Multiplied ${a} and ${b} and the result is: `)
