
let button_el = document.getElementById('convert-btn') 
let value_el = document.getElementById('input-el')

let len_el = document.getElementById('calculate-length')
let vol_el = document.getElementById('calculate-volume')
let mass_el = document.getElementById('calculate-mass')

button_el.addEventListener('click', function() {
    num = Number(value_el.value);
    len_el.innerHTML = `${num.toFixed(3)} meters = ${meterToFeet(num).toFixed(3)} feat | ${num.toFixed(3)} feet = ${feetToMeter(num).toFixed(3)} meters`
    vol_el.innerHTML = `${num.toFixed(3)} liters = ${literToGallon(num).toFixed(3)} gallons | ${num.toFixed(3)} gallons = ${gallonToLiter(num).toFixed(3)} liters`
    mass_el.innerHTML = `${num.toFixed(3)} kilos = ${kiloToPound(num).toFixed(3)} pounds | ${num.toFixed(3)} pounds = ${poundToKilo(num).toFixed(3)} kilos`

})


function meterToFeet(len) {
    return len * 3.28084;
}

function feetToMeter(len) {
    return len * 0.3048;
}

function literToGallon(volume) {
    return volume * 0.264;
}

function gallonToLiter(volume) {
    return volume * 3.785;
}

function kiloToPound(mass) {
    return mass * 2.2;
}

function poundToKilo(mass) {
    return mass * 0.45359237;
}
