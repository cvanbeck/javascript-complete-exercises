const sumAll = function(num1, num2) {
    let finalSum = 0;
    
    if(typeof num1 !== "number" || typeof num2 !== "number"|| num1 < 0 || num2 < 0){
        return 'ERROR'
    }
    if(num1 > num2){
        [num1, num2] = [num2, num1]
    }
    
    for(num1; num1<=num2;){
        finalSum += num1;
        ++num1
        
    }
    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
