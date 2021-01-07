//////////////////Practice/////////////////

/////#1/////
if (10 <= 10) {
}

/////#2/////
true && true && false; // true because we have && with one false
true || (true && false); // true because we have true and one ||
5 === 2 || 1 < 10; // true because we have one true with ||
(!false && true) || (!true && true); // true because we have !
1 < 2 < 3; // true
1 < 3 > 2; // true

//////#3//////
const login = function (userName, password) {
  if (userName == "MrPotato") {
    return "login succecful";
  } else if (userName > 4) {
    return "login succecful";
  } else if (password === "LonelyPotato") {
    return "login succecful";
  } else if (password >= 8) {
    return "login succecful";
  } else {
    return "invaild login information ";
  }
};

/////////#4////////

const isLeapYear = function (year) {
  // TODO: Your code here
};

///////#5//////
const deposit = function (amount) {
  if (typeof amount === Number) {
    return amount ;
  }
  else {
    return "Please enter a valid number";
  }
};
///////////////////////Extra Practice//////////////


////////#1/////////
