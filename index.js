
let countEl = document.getElementById("count-el") 
let count = 0 
let saveEl = document.getElementById("save-el") 
let totalEl = document.getElementById("total-el")
let totalNumber = 0

 

function increment() {
    count = count + 1 
    countEl.textContent = count * 50 + " ml "
}

function save() {
    let  saveCount = count * 50 + " ml - " 
    saveEl.textContent += saveCount 
    totalNumber += count * 50
    countEl.textContent = count = 0
    if (totalNumber >= 1000){
        totalEl.textContent = totalNumber / 1000 + " L"
    }
    else{
        totalEl.textContent = totalNumber + " ml"
    }
}