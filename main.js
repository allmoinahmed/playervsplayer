// Selector
const formElm = document.querySelector('form')
const resetBtn = document.querySelector('#resetBtn')
const inputElm = document.getElementById('luck-input')
const luckyNumberElm = document.querySelector('.lucky-number span')
const p1btnElm = document.querySelector('.p1btn')
const p2btnElm = document.querySelector('.p2btn')
const p1inputElm = document.querySelector('#p1')
const p2inputElm = document.querySelector('#p2')
const getBtn = document.querySelector('button')
let winner = document.querySelector('.winner')

let p1Value
let p2Value
let p1Turn
let luckNumber

function initialState(){
    p1Value = 0
    p2Value = 0
    p1Turn = true
    luckNumber = Math.floor(Math.random() * 10)
    luckyNumberElm.textContent = luckNumber
}

initialState()


// Custom Lucky Number
formElm.addEventListener('submit', (e) => {
    e.preventDefault()
    //Receiving Input
    luckNumber = parseInt(inputElm.value)
    // Insert into Lucky Number Element
    luckyNumberElm.textContent = luckNumber
    inputElm.value = ''
})

// Player Btn Click Function
function getPlayerCount(b,p,v,m,d){    
        b.addEventListener('click', (e) => {
            e.preventDefault()                        
            v++
            p.textContent = v
            if( v !== luckNumber && m !== luckNumber ){
                d.removeAttribute('disabled')
                b.setAttribute('disabled', 'disabled')            
            }else{
                getBtn.setAttribute('disabled','disabled')
                winner.textContent = b.textContent + ' is the WINNER'
            }                        
        })                 
}

// Player One
getPlayerCount(p1btnElm, p1inputElm, p1Value,p2Value, p2btnElm)    
getPlayerCount(p2btnElm, p2inputElm, p2Value,p1Value, p1btnElm)

// Reset Button
resetBtn.addEventListener('click', (e) => {
    location.reload()
})





