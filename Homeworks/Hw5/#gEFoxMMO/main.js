
let arr = [123,'meow',true];

let UlLiBuilder = (arr) => {
    document.write(`<ul>`)
    for (let i = 0; i < arr.length; i++) {
        document.write(`<li>${arr[i]}</li>`)
        
    }
    document.write(`</ul>`)
}

UlLiBuilder(arr);