var friends = [
  { name: "Sumer", age: 21 },
  { name: "Divyank", age: 19 },
  { name: "Saurabh", age: 30 },
  { name: "Vikas", age: 22 },
  { name: "ArifA", age: 20 }
];

function allFriends(arr) {
  return arr
    .filter(friend => friend.age > 20)
    .map(friend => {
      return { name: friend.name + " Singh", age: friend.age };
    })
    .reduce((iterator, currentFriend) => {
      return iterator + " " + currentFriend.name;
    }, "Hello ");
}
console.log(allFriends(friends));

//.forEach(friend => console.log(friend));
