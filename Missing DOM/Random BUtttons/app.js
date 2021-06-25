const btn = document.querySelectorAll('button');
function randcol() {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    return `rgb(${r},${g},${b})`;
}
function colorize() {
    this.style.backgroundColor = randcol();
    this.style.color = randcol();

}
for (let but of btn) {
    but.addEventListener('click', colorize)
}
const h1s = document.querySelectorAll('h1');
for (let but of h1s) {
    but.addEventListener('click', colorize)
}