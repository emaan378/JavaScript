console.log("Emaan")
let boxes=document.getElementsByClassName("box")
console.log(boxes)
// This is the way to apply Cs on element based on index
boxes[2].style.backgroundColor ="Gray"
// now we try to pick the element through id that is infact more accurate way
document.getElementById("box2").style.backgroundColor="pink"
document.querySelector(".box").style.backgroundColor="green"
// return first element match with.box class
// it green just the first container of class box


// if we want to get each element whoes class is box then we dont do like that 
// document.querySelectorAll(".box").style.backgroundColor="green"

// why because it return the html collection and the consoleshow what is meant to syle the html collection so to avoid this we use loop so we easily get access of each element 
document.querySelectorAll(".box").forEach((e)=>{
    e.style.backgroundColor=" green"
})
// queryselectorall return multiple elements in a nodelist and we have to iterate that and access that one by one
// we can also access through tag name

let e=document.getElementsByTagName("div")
console.log(e)

// if we have to check that is that element match that css property
console.log(e[2].matches("#box2"))