function sortByAge (users) {
    var newArr = [];
    var long = users.length;
    var max;
    var maxAge;
    for (i = 0; i < long; i++) {
        maxAge = 0;
        for (k = 0; k < (long - newArr.length); k++) {
           if ((users[k]).age > maxAge) {
               maxAge = users[k].age;
               max = users[k];
           }
        }
        users.splice(users.indexOf(max), 1)
        newArr.push(max);
    }
    return (newArr);
}

var harry = { name: 'Harry', age: 25};
var jeff = { name: 'Jeff', age: 36};
var peter = {name: 'Peter', age: 19};
var luke = {name: 'Luke', age: 28};
var info = [harry, jeff, peter, luke];
console.log(sortByAge(info));
