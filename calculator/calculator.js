function add (a,b) {
	return a+b;
}

function subtract (a,b) {
	return a-b;
}

function sum (arr) {
	return arr.reduce((sum,curr) => {return sum+curr},0);
}

function multiply (arr) {
	return arr.reduce((sum,curr)=> {return sum*curr},1);
}

function power(a,b) {
	return a**b;
}

function factorial(n) {
	if(n==0) return 1;
	return n*factorial(n-1);
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}