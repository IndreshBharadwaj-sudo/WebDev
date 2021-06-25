
const btn = document.querySelector('button');
const ul = document.querySelector('#jokes')
btn.addEventListener('click', async () => {
    const r = await joke();
    const l = document.createElement('li')
    l.append(r);
    ul.append(l);
})


const joke = async () => {
    try {
        const head = { headers: { Accept: 'application/json' } }
        const req = await axios.get('https://icanhazdadjoke.com', head)
        return (req.data.joke);
    }
    catch (e) {
        return 'NO JOKES AVAILABLE :('
    }

}