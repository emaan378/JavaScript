console.log(document.body)
console.log(document.body.childNodes)
console.log(document.body.childNodes[0])
let cons = document.body.childNodes[1]
console.log(cons)
console.log(cons.firstChild)
console.log(cons.lastChild)
console.log(cons.firstElementChild)
cons.lastElementChild.style.color="red"
cons.lastElementChild.style.backgroundColor ="pink"
console.log(cons.lastElementChild)
console.log(cons.lastElementChild.parentElement)
console.log(document.body.firstElementChild.childNodes)
// if we want just children not like textnode or comment node so write children instead of childNode
console.log(document.body.firstElementChild.children)
// get next children through 
console.log(document.body.firstElementChild.children[3].nextElementSibling)
console.log(document.body.firstElementChild.children[3].previousElementSibling)

// text node is not an element