function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function sum (a) {
	let result = 0;
	for (var i = 0; i<a.length;i++){
		result += a[i];
	}
	return result;
}

function multiply (a) {
	let result = 1;
	for (var i = 0; i<a.length;i++){
		result *= a[i];
	}
	return result;
}

function power(a, b) {
	return Math.pow(a, b);
}

function factorial(a) {
	if (a == 0){
		return 1;
	}
	for (let i = a-1; i>0;i--){
		a *= i;
	}
	return a;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}