function oddNumberPushNewArray(numbers){
    let newArray = [];

    for (let i = 0; i < numbers.length; i++){
        const number = numbers[i];
        if(number % 2 === 1){
            newArray.push(number);
        }
    }
    return newArray;
}


const myNumbers = [65, 89, 70, 48, 11, 13];
const newArray = oddNumberPushNewArray(myNumbers);
console.log(newArray);
