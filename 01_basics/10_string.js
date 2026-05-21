//String methods = allow you to manipulate and work with text (strings)

// let userName = "Brocode"

// userName.indexOf("o");
// console.log(userName.lastIndexOf("e")); //6

//trim the string

// userName = userName.trim();
// console.log(userName);//removes widespace

// userName = userName.toUpperCase();
//  console.log(userName);
// userName = userName.toLowerCase();
//  console.log(userName);
//userName = userName.trim();
//startwith(" ")

// userName = userName.repeat(3);
//  console.log(userName);


//  let userName = "BroCode";

// let result = userName.startsWith(" ");

// if(result){
// console.log("Your username can't begin with ' '");
// }
// else{
// console.log(userName);//Brocode
// }


let phoneNumber = "123-456-7890";

phoneNumber = phoneNumber.replaceAll("-","");

console.log(phoneNumber);//1234567890
