const v = document.querySelector('#clk');
v.addEventListener('click', function () {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const col = `rgb(${r},${g},${b})`;
    document.body.style.backgroundColor = col;
    const c = document.querySelector('h1')
    c.innerText = col;
})