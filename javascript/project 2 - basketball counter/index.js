let count_home = 0
let count_guest = 0

let el_home_score = document.getElementById('home_score')
let el_guest_score = document.getElementById('guest_score')


console.log(parseInt(el_guest_score.innerText))

function increment_home_plus1() {
    count_home += 1
    el_home_score.innerText = count_home
}

function increment_home_plus2() {
    count_home += 2
    el_home_score.innerText = count_home
}

function increment_home_plus3() {
    count_home += 3
    el_home_score.innerText = count_home
}

function increment_guest_plus1() {
    count_guest += 1
    el_guest_score.innerText = count_guest
}

function increment_guest_plus2() {
    count_guest += 2
    el_guest_score.innerText = count_guest
}

function increment_guest_plus3() {
    count_guest += 3
    el_guest_score.innerText = count_guest
}
