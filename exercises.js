//Do not change any of the function names

function multiplyByTen(num) {
  return num*10;
}

function subtractFive(num) {
  return num-5;
}

function areSameLength(str1, str2) {
if(str1===str2){return true;}
else{return false;}
}

function areEqual(x, y) {
if(x==y){
return true;
}
else{
return false;
}

function lessThanNinety(num) {
if(num<90){
return true;
}  
else{return false;}
}

function greaterThanFifty(num) {
if(num>50){return true;}
else{return false;}
}

function add(x, y) {
  return x+y;
}

function subtract(x, y) {
  return y-x;
}

function divide(x, y) {
  return x/y;
}

function multiply(x, y) {
  return x*y;
}

function getRemainder(x, y) {
  return x%y;
}

function isEven(num) {
  //return true if num is even
  //otherwise return false
  if(num%2==0){return true;}
  else{return false;}
}

function isOdd(num) {
  //return true if num is odd
  //otherwise return false
}

function square(num) {
  //square num and return the new value
}

function cube(num) {
  //cube num and return the new value
}

function raiseToPower(num, exponent) {
  //raise num to whatever power is passed in as exponent
}

function roundNumber(num) {
  //round num and return it
}

function roundUp(num) {
  //round num up and return it
}

function addExclamationPoint(str) {
  //add an exclamation point to the end of str and return the new string
  //'hello world' -> 'hello world!'
}

function combineNames(firstName, lastName) {
  //return firstName and lastName combined as one string and separated by a space.
  //'Lambda', 'School' -> 'Lambda School'
}

function getGreeting(name) {
  //Take the name string and concatenate other strings onto it so it takes the following form:
  //'Sam' -> 'Hello Sam!'
}

//If you can't remember these area formulas then head over to Google or look at the test code.

function getRectangleArea(length, width) {
  //return the area of the rectangle by using length and width
}

function getTriangleArea(base, height) {
  //return the area of the triangle by using base and height
}

function getCircleArea(radius) {
  //return the rounded area of the circle given the radius
}

function getRectangularPrismVolume(length, width, height) {
  //return the area of the 3D rectangular prism given the length, width, and height
}

//Do not modify code below this line.
////--------------------------------

module.exports = {
  multiplyByTen: multiplyByTen,
  subtractFive: subtractFive,
  areSameLength: areSameLength,
  areEqual: areEqual,
  lessThanNinety: lessThanNinety,
  greaterThanFifty: greaterThanFifty,
  add: add,
  subtract: subtract,
  divide: divide,
  multiply: multiply,
  getRemainder: getRemainder,
  isEven: isEven,
  isOdd: isOdd,
  square: square,
  cube: cube,
  raiseToPower: raiseToPower,
  roundNumber: roundNumber,
  roundUp: roundUp,
  addExclamationPoint: addExclamationPoint,
  combineNames: combineNames,
  getGreeting: getGreeting,
  getRectangleArea: getRectangleArea,
  getTriangleArea: getTriangleArea,
  getCircleArea: getCircleArea,
  getRectangularPrismVolume: getRectangularPrismVolume
};