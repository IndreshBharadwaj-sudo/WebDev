const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('Connection Timeout :(');
        }
        else {
            success(`Here is fake data from ${url}`);
        }
    }, delay)
}


// fakeRequestCallback('book.com', function (str) {
//     console.log('WORKED');
//     console.log(str);
// }, function (str) {
//     console.log('ERROR!!!');
//     console.log(str);
// })

const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 4500) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(');
            }
            else {
                resolve(`Here is fake data from ${url}`);
            }
        }, delay)
    })
}



// fakeRequestPromise('yelp1.com')
//     .then(() => {
//         console.log("WORKED1");
//         fakeRequestPromise('yelp2.com')
//             .then(() => {
//                 console.log("WORKED2");
//                 fakeRequestPromise('yelp3.com')
//                     .then(() => {
//                         console.log("WORKED3");
//                     })
//                     .catch(() => {
//                         console.log("ERROR3!!!")
//                     })
//             })
//             .catch(() => {
//                 console.log("ERROR2!!!")
//             })
//     })
//     .catch(() => {
//         console.log("ERROR1!!!")
//     })

fakeRequestPromise('yelp1.com')
    .then((data) => {
        console.log("WORKED1");
        console.log(data)
        return fakeRequestPromise('yelp2.com')
    })
    .then((data) => {
        console.log("WORKED2");
        console.log(data)
        return fakeRequestPromise('yelp3.com')
    })
    .then((data) => {
        console.log("WORKED3");
        console.log(data)
    })
    .catch((err) => {
        console.log("ERROR!!!")
        console.log(err)
    })



async function make2req() {
    try {
        let data1 = await fakeRequestPromise('/page1.html')
        console.log(data1);
        let data2 = await fakeRequestPromise('/page2.html')
        console.log(data2);
    }
    catch (e) {
        console.log("CAUGHT AN ERROR!", e)
    }
}





const delayedColor = async (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

delayedColor('red', 1000)
    .then(() => delayedColor('orange', 1000))
    .then(() => delayedColor('yellow', 1000))
    .then(() => delayedColor('green', 1000))
    .then(() => delayedColor('blue', 1000))
    .then(() => delayedColor('indigo', 1000))
    .then(() => delayedColor('violet', 1000))