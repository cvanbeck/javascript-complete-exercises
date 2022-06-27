const removeFromArray = function(array, ...remove){
    for(removeItem of remove){
        for (item of array){
            if (item === removeItem){
                array.splice(array.indexOf(item), 1)
            } 
        }
    }
    return array
};

// Do not edit below this line
module.exports = removeFromArray;
