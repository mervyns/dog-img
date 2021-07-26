const { createCanvas, loadImage } = require('canvas')
const fs = require('fs')
const defaultOptions = {
    format: 'image/png',
    quality: 0.92,
    width: 1500,
    height: 500,
    Canvas: undefined,
    crossOrigin: undefined
};

const options = Object.assign({}, defaultOptions);
const canvas = createCanvas(1500, 500)
const ctx = canvas.getContext("2d");

const backgroundArray = ['space']
const bottomArray = ['rocket']
const bunArray = ['toasted']
const eyeArray = ['pirate']
const handArray = ['ketchup']
const headArray = ['pirate']
const dogArray = ['diamond']
const shoeArray = ['boatShoes']


Promise.all([
    loadImage(`../images/background/${backgroundArray[0]}.png`),
    loadImage(`../images/bottom/${bottomArray[0]}.png`),
    loadImage(`../images/dog/${dogArray[0]}.png`),
    loadImage(`../images/bun/${bunArray[0]}.png`),
    loadImage(`../images/eye/${eyeArray[0]}.png`),
    loadImage(`../images/hand/${handArray[0]}.png`),
    loadImage(`../images/head/${headArray[0]}.png`),
    loadImage(`../images/shoe/${shoeArray[0]}.png`),
]).then(values => {
    ctx.drawImage(values[0],  0, 0)
    ctx.drawImage(values[1],  -100, 135)
    ctx.drawImage(values[2],  0, 0)
    ctx.drawImage(values[3],  0, 0)
    ctx.drawImage(values[4],  0, 0)
    ctx.drawImage(values[5],  0, 0)
    ctx.drawImage(values[6],  0, 0)
    ctx.drawImage(values[7],  0, 0)
    const buffer = canvas.toBuffer('image/png')
    fs.writeFileSync('./test.png', buffer)
})

// const bottomImage = loadImage(`../bottom/${bottomArray[0]}.png`)
// const bunImage = loadImage(`../bun/${bunArray[0]}.png`)
// const eyeImage = loadImage(`../eye/${eyeArray[0]}.png`)
// const handImage = loadImage(`../hand/${handArray[0]}.png`)
// const headImage = loadImage(`../head/${headArray[0]}.png`)
// const dogImage = loadImage(`../dog/${dogArray[0]}.png`)
// const shoeImage = loadImage(`../bottom/${shoeArray[0]}.png`)
// return canvas.toDataURL(options.format, options.quality);
