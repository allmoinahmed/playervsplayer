// Selector
const formElm = document.querySelector('form')
const inputElm = document.getElementById('luck-input')
const luckyNumberElm = document.querySelector('.lucky-number span')
const p1btnElm = document.querySelector('.p1btn')
const p2btnElm = document.querySelector('.p2btn')
const p1inputElm = document.querySelector('#p1')
const p2inputElm = document.querySelector('#p2')
const getBtn = document.querySelector('button')
let p1Value = 0
let p2Value = 0
let p1Turn = true
let luckNumber = 0

formElm.addEventListener('submit', (e) => {
    e.preventDefault()
    //Receiving Input
    const luckNumber = inputElm.value
    // Insert into Lucky Number Element
    luckyNumberElm.textContent = luckNumber
    inputElm.value = ''
})

// Player Btn Click Function
function getPlayerCount(b,p,v,d){    
        if(d){
            b.addEventListener('click', (e) => {
                e.preventDefault()
                v++
                p.textContent = v          
                d.removeAttribute('disabled')
                b.setAttribute('disabled', 'disabled')
            })
        }    
}

// Player One
getPlayerCount(p1btnElm, p1inputElm, p1Value, p2btnElm)
getPlayerCount(p2btnElm, p2inputElm, p2Value, p1btnElm)









