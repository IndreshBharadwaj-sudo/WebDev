const num = [1, 2, 3, 4, 5, 6, 7, 8];
num.filter(n => {
    return n % 4 == 0;
});

const movies = [
    {
        name: 'para',
        year: 1990
    },
    {
        name: 'par',
        year: 1990
    },
    {
        name: 'pa',
        year: 1990
    },
    {
        name: 'p',
        year: 1990
    }
];
const gmovie = movies.filter(movi => {
    return movi.year >= 1990;
})
const ggmo = gmovie.map(movi => movi.name);

const xm = [11, 2, 33, 4, 2, , 21, 2, 1, 24345, 46, 7, 768, 67543];
const mini = xm.reduce((min, price) => {
    if (price > min)
        return price;
    return min;
})
const ccop = {
    legs: 4, family: 'fine'
}

function raceresult(gold, silver, ...everyone) {
    console.log(`GOLD GOES TO : ${gold}`)
    console.log(`SILVER GOES TO : ${silver}`)
    console.log(`AND THANKS TO : ${everyone}`)
}

const user = {
    ema: 'asdad@gmgmg',
    pass: 'asdff',
    born: 1999,
    died: 1875
}
const { ema, pass, died } = user;