const inp = document.querySelector('#searchForm')
// console.log(inp)
inp.addEventListener('submit', async (e) =>
{
    // console.log(e);
    e.preventDefault();
    const images = document.querySelectorAll('img')
    for (let i of images)
        i.remove();
    const m = (inp.elements.query.value);
    const head = { params: { q: m } }
    const res = await axios.get('http://api.tvmaze.com/search/shows', head);
    makeImages(res.data);
    // console.log(res)
    inp.elements.query.value = '';

})


const makeImages = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('img');
            img.src = (result.show.image.medium)
            document.body.append(img);

        }

    }
}
