module.exports = function getZerosCount(number) {
    let result = 0;
    while(number >= 1 && number <= Math.pow(10, 8)) {
        number = number/5;
        result += Math.floor(number);
    }
    return result;
}