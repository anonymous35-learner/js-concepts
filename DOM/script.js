// Selection of an Element---
// var a = document.querySelector("h1")

//Changing HTML----
// var a = document.querySelector("h1")
// a.innerHTML = "Changed HTML"
// console.log(a);
// or 
// document.querySelector("h1").innerHTML ="aa"

// Changing CSS-----
// var a = document.querySelector("h1")
// a.style.color = "red"
// a.style.backgroundColor = "seagreen"

// Event Listener
var a = document.querySelector("h1")
// a.innerHTML = "Kaise ho aap log"
// a.style.color = "yellow"
// a.style.backgroundColor = "Black"

a.addEventListener("click",function(){
    a.innerHTML = "Changed"
    a.style.color = "yellow"
  //  console.log(a);
    
  //  console.log("hey");
    
})
