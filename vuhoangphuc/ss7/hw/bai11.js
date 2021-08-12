let tung = { name: "Tùng", age: 25 };
let phan = { name: "Phan", age: 30 };
let mai = { name: "Mai", age: 28 };
var names = [];
var users = [ tung, phan, mai ]
for (i = 0; i < users.length; i++) {
 names.push(users[i].name)
}
names = names.toString()
alert(names); // John, Pete, Mary
