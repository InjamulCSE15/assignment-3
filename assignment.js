// https://github.com/InjamulCSE15/assignment-3

// Convert Kilometer to Meter (Assignment part - 1)
function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;
    if (kilometer <= -1){
        return 'Invalid input! Use positive value.';
    }
    return meter;
}

/* test the function :
 var convert = kilometerToMeter(4);
console.log(convert); */

// Budget calculator (Assignment part - 2)
function budgetCalculator(c, m, l) {
    var clock = c * 50; 
    var mobile = m * 100; 
    var laptop = l * 500;
    var cost = clock + mobile + laptop;
    return cost;
}

/* test the function: 
var result = budgetCalculator(10, 5, 2);
console.log(result);
*/

// Hotel costing calculation (Assignment part - 3)
function hotelCost(perDay) {
    var cost = 0;
    if (perDay == 0){
        return 'Thanks for visit our Hotel...';
    }
    if (perDay <= 10) {
        cost = perDay * 100;
    }
    else if (perDay <= 20) {
        var firstTenDay = 10 * 100;
        var remainDay = perDay - 10;
        var secondTenDay = remainDay * 80;
        cost = firstTenDay + secondTenDay;
    }

    else{
        var firstTenDay = 10 * 100;
        var secondTenDay = 10 * 80;
        var remainDay = perDay - 20;
        var thirdTenDay = remainDay * 50;
        cost = firstTenDay + secondTenDay + thirdTenDay;
    }
    return cost;   
}

/* Test the function:
var result = hotelCost(20);
console.log(result);
*/

// Find longest string from an array (Assignment part - 4)
function megaFriend(name) {
    var longest = 0;
    var longestName;
    var i;
    for (i = 0; i < name.length; i++) {
        if (name[i].length > longest) {
            longest = name[i].length;
            longestName = name[i];
        }
    }
    return longestName;
}

/* test the function:
var array = megaFriend(["Jabbar", "Jalal", "Asha", "Oishi"]);
console.log(array);
*/