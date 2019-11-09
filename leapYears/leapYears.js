const leapYears = function(year) {
    if(years%100 == 0 && years%400 !=0){
        return false;
    }
    if(years%4 == 0){
        return true;
    }
    return false;
}

module.exports = leapYears
