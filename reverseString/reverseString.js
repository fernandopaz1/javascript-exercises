const reverseString = function(palabra) {
    let alreves = "";
    for(let i = 0; i<palabra.length(); i++){
        alreves = palabra.charAt(i)+alreves;
    }
    return alreves;
}

module.exports = reverseString
