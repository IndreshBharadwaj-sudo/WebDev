const btn = document.querySelector('#v2')
btn.onclick = function () {
    console.log("YOU CLICKED ME")
    console.log("AAAHHHH")
}
btn.onmouseenter = () => {
    console.log('AAhAAAhAAh')
    console.log('FINGER MEeeee... AAh')
}



const btn3 = document.querySelector('#v3');
function twist() {
    console.log('twist')
}
function shout() {
    console.log('shout')
}
btn3.addEventListener('click', twist)
btn3.addEventListener('click', shout)