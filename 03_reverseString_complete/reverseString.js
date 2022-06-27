const reverseString = function(string) {
    let stringLength = string.length
    let reversedString = ''
    for(stringLength;stringLength>=0;--stringLength){
        reversedString += string.charAt(stringLength)
    
    }  
    return reversedString
};

// Do not edit below this line
module.exports = reverseString;
