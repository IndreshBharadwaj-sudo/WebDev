const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/productApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("CONNECTION OPEN!!!!")
    })
    .catch(err => {
        console.log("ERROR!!!!!!!!")
        console.log(err)
    })

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        // min: [0, 'Price Should be Positive']
    },
    onsale: {
        type: Boolean,
        default: false
    },
    categories: [String],
    qty: {
        online: {
            type: Number,
            default: 0
        },
        instore: {
            type: Number,
            default: 0
        }
    },
    size: {
        type: String,
        enum: ['S', 'L', 'M']
    }

})


productSchema.methods.greet = function () {
    console.log('HELLO! HI!!')
    console.log(`-from ${this.name}`)
}

productSchema.methods.toggleOnSale = function () {
    this.onsale = !this.onsale;
    return this.save();
}


productSchema.methods.addCategory = function (newCat) {
    this.categories.push(newCat);
    return this.save();
}

productSchema.statics.fireSale = function () {
    return this.updateMany({}, { onSale: true, price: 0 })
}

const Product = mongoose.model('Product', productSchema)

const findProduct = async () => {
    try {
        const foundProduct = await Product.findOne({ name: 'Ducati' });
        foundProduct.greet()
        await foundProduct.toggleOnSale();
        console.log(foundProduct);
        await foundProduct.addCategory('Outdoors');
        console.log(foundProduct);
    }
    catch (e) {
        console.log('ERROR!!!')
        console.log(e)
    }
}

Product.fireSale().then(res => console.log(res))

// findProduct();

// let bike = new Produc({ name: 'Ducati', price: 100000000, categories: ['SportsBike'], size: 'S' })
// bike.save()
//     .then(data => {
//         console.log('WORKED')
//         console.log(data)
//     })
//     .catch(err => {
//         console.log('ERRORRR!!!!!!!')
//         console.log(err)
//     })


// Produc.findOneAndUpdate({ name: 'Ducati' }, { price: -9 }, { new: true, runValidators: true })
//     .then(data => {
//         console.log('WORKEDDDD')
//         console.log(data)
//     })
//     .catch(err => {
//         console.log('ERRORRR!!!!!!!')
//         console.log(err)
//     })