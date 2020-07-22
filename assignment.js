// Assignment topic 1.
var feetToMile = 50000;
function lengthConvertion(feetToMile){
    return feetToMile/5280;
}
var result = lengthConvertion(feetToMile);
console.log(result);
// End of Topic 1.
//  Assignment topic 2
var numOfChair = 5;
var woodOfChair = 1;
var numOfTable = 10;
var woodOfTable = 2;
var numOfBed = 4;
var woodOfBed = 3;

var totalWoodOfChair = numOfChair*woodOfChair;

    
var totalWoodOfTable = numOfTable*woodOfTable;

var totalWoodOfBed = numOfBed*woodOfBed;

var woodCalculator = totalWoodOfChair + totalWoodOfTable + totalWoodOfBed;
console.log(woodCalculator);
// Assignment topic 3.
var oneToTenStoried = 10;
var elevenToTwentyStoried = 10;
var restOfTheStoried = 5;
var numOfBricksFirstCase = oneToTenStoried*1000*15;

var numOfBricsSecondCase = elevenToTwentyStoried*12*1000;

var numOfBricksThirdCase = restOfTheStoried*1000*10;

var bricCalculator = numOfBricksFirstCase+ numOfBricsSecondCase + numOfBricksThirdCase;
console.log(bricCalculator);
// End of assignment topic 3.
// Assignment topic 4.
var tiny = ['Abul', 'Mokbuol', 'Habibul', 'Jan'];
var min = Math.min(...tiny.map(({ length }) => length));
console.log(min);
