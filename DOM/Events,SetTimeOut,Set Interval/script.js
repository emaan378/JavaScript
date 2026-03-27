// Events are the signals that indicate something happens
let button=document.getElementById("btn")
button.addEventListener("dblclick",()=>{
   document.querySelector(".box").innerHTML="Hey Welcome in the <b>programming world</b>"
})
button.addEventListener("contextmenu",()=>{
   alert("Dont hack us by right Click Please")
})
// Event delegation
// So Event Delegation = putting ONE listener on the parent instead of many listeners on each child!
//  It works because of event bubbling — event travels up from child to parent automatically

