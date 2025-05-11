let form = document.createElement("form")
form.name = 'form1';
document.body.appendChild(form);

let input = document.createElement("input");
input.placeholder = 'Введіть свій вік ^_^';

let button = document.createElement("button");
button.type = 'submit';
button.innerText = 'Submit';

form.append(input,button);


form.onsubmit = function (ev) {
    ev.preventDefault();
    if (parseInt(input.value) >= 18) {
        console.log(parseInt(input.value));
    }
    else {
        let nope = document.createElement("div");
        nope.className = 'Not-18-Div';

        let nope_h1 = document.createElement("h1");
        nope_h1.innerText = 'Попередження!!!'

        let nope_p = document.createElement("p");
        nope_p.innerText = 'Вийдіть будь-ласка з сайту, не заважайте дорослим розважатись xd';

        document.body.appendChild(nope);
        nope.append(nope_h1, nope_p);
    }
}
