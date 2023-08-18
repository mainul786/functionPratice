
function isEven(number){
    const remainder = number % 2;
    if(remainder === 0){
        return true;
    } else {
        return false;
    }
}

const even = isEven(151);
console.log(even);