function getSumOfArrayAnEven(numbers){
    let sum = 0;
    for (let i = 0; i < numbers.length; i++){
        const number = numbers[i];
        if(number % 2 === 0){
            sum = sum + number;
        }
    }
    return sum;
}

const myNumbers = [65, 89, 70, 48, 11, 13];
const result = getSumOfArrayAnEven(myNumbers);
console.log(result);