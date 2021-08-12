let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
  ];

function groupById(a) {
    var newObj = new Object();
    for (i = 0; i < a.length; i++) {
        newObj[a[i].id] = a[i];
    }
    // newObj[a[0].id] = a[0];
    // newObj[a[1].id] = a[1];
    // newObj[a[2].id] = a[2];
    return newObj;
}
  
  let usersById = groupById(users);
  console.log(usersById);
  