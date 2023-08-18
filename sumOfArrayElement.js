function getSumOfArray(numbers){
    let sum = 0;
    for (let i = 0; i < numbers.length; i++){
        const number = numbers[i];
        sum = sum + number;
    }
    return sum;
}


const myNumbers = [5, 7, 8, 9, 12, 11];
const result = getSumOfArray(myNumbers);

console.log(result);

