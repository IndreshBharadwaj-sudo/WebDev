// const req = new XMLHttpRequest();
// req.onload = function () {
//     console.log('DONE WITH REQ')
//     const data = JSON.parse(this.responseText)
//     console.log(data.bpi.USD.rate)
// }
// req.onerror = function () {
//     console.log('ERROR!!!')
//     console.log(this)
// }
// req.open('GET', 'https://api.coindesk.com/v1/bpi/currentprice.json')
// req.send();


// fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
//     .then(res => {
//         console.log("RESPONSE WAITING TO PARSE.....", res)
//         return res.json();
//     })
//     .then(data => {
//         console.log("DATA PARSED....")
//         console.log(data.bpi.USD.rate)
//     })
//     .catch(e => {
//         console.log("ERROR!!!!!")
//     })


// const req = async () => {
//     try {
//         const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
//         const data = await res.json();
//         console.log(data.bpi.USD.rate);
//     }
//     catch (e) {
//         console.log('ERROR!!!')
//     }
// }


// axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
//     .then(res => {
//         console.log(res.data.bpi.USD.rate)
//     })
//     .catch(e => {
//         console.log("ERROR!!!!", e);
//     })


const price = async () => {
    try {
        const ress = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
        console.log(ress.data.bpi.USD.rate)
    }
    catch (e) {
        console.log("ERROR!!!", e)
    }
}
