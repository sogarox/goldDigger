

setInterval(() => {
    try {
        const goldFluctuation = ranInt(3000, 5000)
        const data = goldFluctuation.toFixed(2)
        getPrice(data)
    } catch (err) {
        console.error('An unknown and unfixable error just happened, we can proceed to kill ourselves this instant' + err)
    }
}, 3000)

const investBtn = document.getElementById('invest-btn')
const successDialog = document.getElementById('success-dialog')
const closeDialog = document.getElementById('close-dialog')
const investmentAmount = document.getElementById('investment-amount')
let price = 0


function ranInt(min, max) {
    return Math.random() * (max - min) + min
}
getPrice(4000)

function getPrice(data) {
    const priceDisplay = document.getElementById('price-display')
    priceDisplay.innerText = data
    price = data
}



investBtn.addEventListener('click', async (e) => {
    e.preventDefault()
    try {
        console.log('btn works!')
        const amount = investmentAmount.value
        const goldAmount = (amount / price)
        const investment = {
            amount: amount

        }
        await fetch("/api/invest", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },

            body: JSON.stringify({
                date: new Date().toLocaleString(),
                amount: `amount paid: ${amount}`,
                price: `price per Oz: ${price}`,
                goldSold: `gold sold: ${goldAmount}`

            })
        })
        successDialog.style.display = "block"
        document.getElementById('investment-summary').textContent = `You just bought ${goldAmount} ounces (ozt) for £${amount}. \n You will receive documentation shortly.`
    } catch (err) {
        console.error(`error while processing the request: ${err}`)
    }
})

closeDialog.addEventListener('click', (e) => {
    successDialog.style.display = 'none'
})



console.log('alive and breathin')