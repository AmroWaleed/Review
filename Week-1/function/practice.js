//////////////////////////Practice///////////////////
///////////#1//////////

// const myFunction = function (parameter) {}
// const mySecondFunction = function (parameter) {}
// const myFunction = function (parameter) {}
// const functionName = function (paramOne, paramTwo) {}

//////////#2///////////
const fullName = function (firstName, lastName) {
  return firstName + " " + lastName;
};
/////////#3///////////
const average = function (a, b) {
  return (a + b) / 2;
};
//////////#4//////////
const square = function (number) {
  return number * number;
};

const cube = function (number) {
  return number * number * number;
};

// guess the following
cube(25) + 20; // => 645
square(5) + cube(2); // => 33
square(10 / 5) + cube(2 + 1); // => 31
average(square(average(6, 2)), cube(4)); // =>2056

////////////#5////////////
const toThePowerOf = function (base, exponent) {
  return Math.pow(base, exponent);
};
toThePowerOf(2, 3); // => 8
toThePowerOf(4, 2); // => 16

///////////////////////////Extra Practice//////////////////

//////#1//////
const floor = function (number) {
  // TODO: Your code here
};

//////#2///////
const calculateProfit = function (unitsSold, unitCost, unitPrice) {
  return ((unitsSold * unitPrice)-(unitsSold * unitCost));
};
//////#3///////
const calculateTotalBillAmount = function (total, taxPercentage, tip) {
    return (total * taxPercentage)+(total + tip)
  };

///////#4///////
const ageInDays = function (ageInYears) {
    return (ageInDays * 365)
  };  