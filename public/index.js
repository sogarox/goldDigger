setInterval(() => {
    try {
        const goldFluctuation = ranInt(3000, 5000)
        const data = goldFluctuation.toFixed(2)
        renderPrice(data)
    } catch (err) {
        console.error('An unknown and unfixable error just happened, we can proceed to kill ourselves this instant' + err)
    }
}, 3000)

const investBtn = document.getElementById('invest-btn')

function ranInt(min, max) {
    return Math.random() * (max - min) + min
}
renderPrice(4000)

function renderPrice(data) {
    const priceDisplay = document.getElementById('price-display')
    priceDisplay.innerText = data
}



investBtn.addEventListener('click', (e) => {
    try {
        console.log('btn works!')
    } catch (err) {
        console.error(`error while processing the request: ${err}`)
    }
})



console.log('alive and breathin')