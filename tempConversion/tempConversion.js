const ftoc = function(Tf) {
  return Math.round((Tf-32)*(5/9)*10)/10;
}

const ctof = function(Tc) {
  return Math.round((Tc*(9/5)+32)*10)/10;
}

module.exports = {
  ftoc,
  ctof
}
