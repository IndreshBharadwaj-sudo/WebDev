const v = document.querySelector('#tform');
const twetcon = document.querySelector('#tweeet')
v.addEventListener('submit', function (e) {
    e.preventDefault();
    const usr = document.querySelectorAll('input')[0].value
    const twt = document.querySelectorAll('input')[1].value
    const ntwt = document.createElement('li');
    const btag = document.createElement('b');
    btag.append(usr);
    ntwt.append(btag);
    ntwt.append(`-${twt}`);
    twetcon.append(ntwt);
    document.querySelectorAll('input')[0].value = '';
    document.querySelectorAll('input')[1].value = '';
})
twetcon.addEventListener('click', function (e) {
    e.target.remove();
})