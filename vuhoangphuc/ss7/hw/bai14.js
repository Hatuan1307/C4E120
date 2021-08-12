function getAverageAge (users) {
    var sum = 0;
    var average = 0;
    for (k = 0; k < users.length; k++) {
        sum += users[k].age;
    }
    average = sum / users.length;
    return average;
}



var harry = { name: 'Harry', age: 25};
var jeff = { name: 'Jeff', age: 36};
var peter = {name: 'Peter', age: 19};
var luke = {name: 'Luke', age: 28};
var info = [harry, jeff, peter, luke];
console.log(getAverageAge(info));