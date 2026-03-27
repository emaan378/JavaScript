// async function GetData(){
//     // simulate getting data from a server
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve(4500)
//         }, 3000);

//     })

// }
async function GetData() {
    // simulate getting data from a server
    //    let response= await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    let data = await response.json()
    return data

    //   .then(response => response.json())
    //   .then(json => console.log(json))



}
// settle means resolve or reject 
// resolve means promise settled successfully
// reject means promise has not settled successfully
async function main() {
    console.log("Loading Modeules")
    console.log("Do Something ")
    console.log("Load Data")
    let data = await GetData()
    console.log(data)
    console.log("processed Data")
    console.log("Task 2")
}
main()
// POST Request 📤
// A POST request is used to send data TO a server — like submitting a form, creating a new user, or adding a new todo.




