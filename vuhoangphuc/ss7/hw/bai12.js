var harry = { name: 'Harry', surname: 'Wilson', id: '001'};
var jeff = { name: 'Jeff', surname: 'Green', id: '002'};
var peter = {name: 'Peter', surname: 'Parker', id: '003'};
var luke = {name: 'Luke', surname: 'Shaw', id: '004'};
var users = [harry, jeff, peter, luke];
var newArr = []
for (i = 0; i < users.length; i++) {
    newArr.push({id: users[i].id, fullName: users[i].name.concat(' ', users[i].surname)})
}
console.log(newArr);