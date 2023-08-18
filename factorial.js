function factorial(number){
let fact = 1;

for (let i = number; i >= 1; i-- ){
    fact = fact * i;
}
return fact;
}

const number = factorial(4);
console.log(number);