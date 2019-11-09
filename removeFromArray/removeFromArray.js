const removeFromArray = function(array,element) {
    var newArray = [];
    for(let i = 0; i< arguments[0].length; i++){
        if(arguments[0][i] != arguments[1]){
            newArray.push(arguments[0][i]);
        }
    }
    return newArray;
}

module.exports = removeFromArray
