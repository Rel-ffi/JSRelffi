let wrapper = document.createElement("div");
wrapper.className = 'wrapper';
document.body.appendChild(wrapper);

let H1 = document.createElement("h1");
wrapper.appendChild(H1);

let currentValue = parseInt(localStorage.getItem("price")) || 90;
let lastUpdateTime = parseInt(localStorage.getItem("lastUpdate")) || 0;

let now = Date.now();

if (now - lastUpdateTime > 10_000) {
    currentValue += 10;
    localStorage.setItem("price", currentValue);
    localStorage.setItem("lastUpdate", now);
}
H1.innerText = currentValue + "грн";




