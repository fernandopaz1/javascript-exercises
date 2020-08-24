const palindromes = function(s) {
    console.log("\n\n");
    let splited= s.split('');
   
    let filtered= splited.filter(letter => {
        let inLower = letter.toLowerCase()
        if(inLower>="a" && inLower<="z") return true;
        else return false;
    })

    let fLower= filtered.map(letter => letter.toLowerCase());     
    
    while(fLower.length>=2){
        let largo=fLower.length;
        if(fLower[0]!=fLower[largo-1]) return false;
        fLower=fLower.slice(1,-1);
    }
    return true;
}

module.exports = palindromes
