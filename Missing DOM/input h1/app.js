const v = document.querySelector('#ip')
const h1 = document.querySelector('h1')
v.addEventListener('input', function (e) {
    h1.innerText = v.value;
})