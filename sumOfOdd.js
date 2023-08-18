function addOddNumber(numbers){
    sum = 0;
    for ( let i = 0; i < numbers.length; i++){
        const number = numbers[i];
        if(number % 2 === 1){
            sum = sum + number;
        }
    }
    return sum;
}

const myNumbers = [5, 7, 8, 9, 12, 11];
const oddNumber = addOddNumber(myNumbers);
console.log(oddNumber);