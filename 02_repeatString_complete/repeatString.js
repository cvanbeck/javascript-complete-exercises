const repeatString = function(string, length) {
    if(length>=0){
        let outputString = ""
        while(length>0){
            outputString += string
            --length
        }
        return outputString
    }
    else{
        return "ERROR"
    }
};

// Do not edit below this line
module.exports = repeatString;
