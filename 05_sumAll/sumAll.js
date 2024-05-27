const sumAll = function(firstInt, secondInt) {
    let initialNum = 0;
    if (firstInt < 0 || secondInt < 0 ||
         !Number.isInteger(firstInt) || !Number.isInteger(secondInt)) {
        return "ERROR";
    }
    if (firstInt < secondInt) {
        for (let i = firstInt; i <= secondInt; i++) {
            initialNum += i; 
        }
    } if (firstInt > secondInt) {
        for (let i = secondInt; i <= firstInt; i++) {
            initialNum += i; 
        }
    } 
    return initialNum;    
};

// Do not edit below this line
module.exports = sumAll;
