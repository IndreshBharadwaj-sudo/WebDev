// function makeColor(r, g, b) {
//     const color = {};
//     color.r = r;
//     color.g = g;
//     color.b = b;
//     color.rgb = function () {
//         const { r, g, b } = this;
//         return `rgb(${r},${g},${b})`;
//     };
//     color.hex = function () {
//         const { r, g, b } = this;
//         return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//     }
//     return color;
// }


// function Color(r, g, b) {
//     this.r = r;
//     this.g = g;
//     this.b = b;
// }

// Color.prototype.rgb = function () {
//     const { r, g, b } = this;
//     return `rgb(${r},${g},${b})`;
// }
// Color.prototype.rgba = function (a = 1) {
//     const { r, g, b } = this;
//     return `rgba(${r},${g},${b},${a})`;
// }

// Color.prototype.hex = function () {
//     const { r, g, b } = this;
//     return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// }

// const c1 = new Color(20, 22, 11);
// const c2 = new Color(225, 22, 11);


class Color {
    constructor(r, g, b, name) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
        this.rgb2hsl();
    }
    innerRGB() {
        const { r, g, b } = this;
        return `${r},${g},${b}`;
    }
    rgb() {
        // const { r, g, b } = this;
        return `rgb(${this.innerRGB()})`;
    }
    rgba(a = 1) {
        // const { r, g, b } = this;
        return `rgba(${this.innerRGB()},${a})`;
    }
    hex() {
        const { r, g, b } = this;
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
    hsl() {
        const { h, s, l } = this;
        return `hsl(${h},${s}%,${l}%)`;
    }
    opposite() {
        const { r, g, b } = this;
        const newHue = (h + 180) % 360;
        return `hsl(${newHue},${s}%,${l}%)`;
    }
    fullysat() {
        const { h, l } = this;
        return `hsl(${h},100%,${l}%)`;
    }
    rgb2hsl() {
        let { r, g, b } = this;
        r = r / 255,
            g = g / 255,
            b = b / 255;
        var max = Math.max(r, g, b);
        var min = Math.min(r, g, b);
        var lum = (max + min) / 2;
        var hue;
        var sat;
        if (max == min) {
            hue = 0;
            sat = 0;
        } else {
            var c = max - min;
            sat = c / (1 - Math.abs(2 * lum - 1));
            switch (max) {
                case r:
                    break;
                case g:
                    hue = (b - r) / c + 2;
                    break;
                case b:
                    hue = (r - g) / c + 4;
                    break;
            }
        }
        hue = Math.round(hue * 60);
        sat = Math.round(sat * 100);
        lum = Math.round(lum * 100);
        this.h = hue;
        this.s = sat;
        this.l = lum;
        // return [hue, sat, lum];
    }

}


const r1 = new Color(230, 126, 34, 'color1');
const r2 = new Color(55, 8, 50, 'color2');




class Pet {
    constructor(name, age) {
        console.log('IN PET CONSTRUCTOR!');
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is eating!`;
    }
}

class Cat extends Pet {
    constructor(name, age, livesLeft = 9) {
        console.log('IN CAT CONSTRUCTOR!');
        super(name, age);
        this.livesLeft = livesLeft;
    }
    meow() {
        return 'MEOWWWW!!';
    }
}

class Dog extends Pet {
    bark() {
        return 'WOOOF!!';
    }
    eat() {
        return `${this.name} scarfs his food!`;
    }
}
