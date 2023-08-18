function sumOfNumber(numbers){
    let number = 0;
    for (let i = 1; i <= numbers; i++ ){
        number = number + i;
    }
    return number;
}
const sum = sumOfNumber(7);
console.log(sum);
