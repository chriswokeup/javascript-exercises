const reverseString = function(string) {
    // let reversedString = ''
    // const stringArray = string.split(" ");
    // const reversedStringArray = stringArray.reverse();
    // for (let i = 0; i < reversedStringArray.length; i++) {
    //     let reverseString = reversedStringArray[i].split("").reverse().join("");
    //     reversedString += (reverseString);
    //     reversedString += " ";
    // }
    // return reversedString.slice(0, -1);

    return string.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
