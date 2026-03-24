// Create a bussiness name Generator by combining list of objectives and shop name and other word
// Crazy
// Amazing
// Fire

// Shop Name
// Guarments
// Engine
// Food

// Another Words
// Bros
// Limited
// Hub
let rand = Math.random();
let first, second, third;
// lets generate the first word
if (rand < 0.33) {
    first = "crazy";
}
else if(rand < 0.66 && rand > 0.99){
    first = "Amazing";
}
else {
    first = "Fire";
}
rand = Math.random();
// lets generate the second word
if (rand < 0.33) {
    second = "Guarments";
}
else if(rand < 0.66 && rand > 0.99){
    second = "Engine";
}
else {
    second = "Food";
}
rand = Math.random();
// lets generate the third word
if (rand < 0.33) {
    third = "Bros";
}
else if(rand < 0.66 && rand > 0.99){
    third = "Limited";
}
else {
    third = "Hub";
}
console.log(`${first} ${second} ${third}`)