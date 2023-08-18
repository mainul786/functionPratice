function isLeaper(year){
    const remainder = year % 4;
    if(remainder === 0){
        return true;
    } else {
        return false;
    }
}

const year = isLeaper(2020);
console.log(year);