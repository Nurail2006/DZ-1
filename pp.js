const san = prompt('напиши число?')
const san2 = prompt('напиши число?')
console.log(san , san2);

if (san > san2) {
    console.log(`${san} больше чем ${san2}`);
} else if (san == san2) {
    console.log(`${san} равны ${san2}`);
} else if (san2 > san) {
    console.log(`${san2} больше ${san}`);
} else {
    console.log('нету числа');
}