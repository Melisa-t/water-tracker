
let countEl = document.getElementById("count-el") 
let count = 0 
let saveEl = document.getElementById("save-el") 

 

function increment() {
    count = count + 1 
    countEl.textContent = count * 50 + " ml "
}

function save() {
    let  saveCount = count * 50 + " ml - " 
    saveEl.textContent += saveCount 
    countEl.textContent = count = 0
}