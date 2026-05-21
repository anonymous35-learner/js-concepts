// string slicing = creating a substring
//         from a portion of another string

//         string.slice(start, end)

const fullName = "Bro Code";

let firstName = fullName.slice(0, 3);
let lastName = fullName.slice(4, 8);

let firstChar = fullName.slice(0, 1);
let lastChar = fullName.slice(-1);

console.log(firstChar);//B
console.log(lastChar);//e
