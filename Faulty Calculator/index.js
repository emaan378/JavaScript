// Create a faulty calculator using Javascript 
// This faulty caluclator does following:
// it takes two numbers from users
// it perform the wrong operation as follows:
// + ---->-
// * --->+
// - --->/
// / --->**
function faultyOperator(a, b, op) {
    const ops = {
        '+': (x, y) => x - y,
        '*': (x, y) => x + y,
        '-': (x, y) => x / y,
        '/': (x, y) => x ** y
    }

    const isfaulty = Math.random() < 0.1;
    const actualOp = isfaulty ? ops[op] : eval(`(x, y) => x ${op} y`)

    //  (x, y) => {
    //     if (op === '+') return x + y;
    //     if (op === '-') return x - y;
    //     if (op === '*') return x * y;
    //     if (op === '/') return x / y;

    // }
    return actualOp(a, b);

}
const result = faultyOperator(2, 10, '+');
console.log("The output is ", result)