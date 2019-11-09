const sumAll = function(a,b){
    let suma = 0;
    for(let i=a ; i<b+1; i++){
        suma += i;
    }
    return suma;
}

module.exports = sumAll
