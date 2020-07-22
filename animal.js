// Assignment topic 3 brickCalculator.
function totalBrick(building){
    var brickCalculator = 0;
    if ( building<= 10){
        brickCalculator = building*15*1000;
    }
    else if ( building <=20){
        var first10 = 10*15*1000;
        var remaining = building - 10;
        var second10 = remaining*12*1000;
        brickCalculator = first10 + second10;
    }
    else {
        first10 = 10*15*1000;
        second10 = 10*12*1000;
        var remaining = building - 20;
        var restPart = remaining*10*1000;
        brickCalculator = first10 + second10 + restPart;
    }
    return brickCalculator;
}
var count = totalBrick(22);
console.log(count);
// Assignment topic 2
 