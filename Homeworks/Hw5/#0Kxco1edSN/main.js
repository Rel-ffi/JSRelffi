
let UlLiCreator = (text,NumberOfLi) => {
    document.write(`<ul>`)
    for (let i = 0; i <= NumberOfLi; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}
UlLiCreator('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, hic.' , 2)