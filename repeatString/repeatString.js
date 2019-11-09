const repeatString = function(palabra,n) {
    let newString="";
    for(let i=0;i<n;i++){
        newString += palabra;
    }
    return newString;
}

module.exports = repeatString;
