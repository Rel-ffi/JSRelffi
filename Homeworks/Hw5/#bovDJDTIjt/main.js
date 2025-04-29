
let arr = [
    {id:1, name: 'Example1', age: 20},
    {id:2, name: 'Example2', age: 30},
    {id:3, name: 'Example3', age: 20},
    {id:4, name: 'Example4', age: 40}
]

let UlLiCreator = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        document.write(`<div class="div-section">`);
        document.write(`<p>ID: ${arr[i].id}</p>`);
        document.write(`<p>Name: ${arr[i].name}</p>`);
        document.write(`<p>Age: ${arr[i].age}</p>`);
        document.write(`</div>`);
    }
}
UlLiCreator(arr);