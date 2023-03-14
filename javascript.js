
// Exercise #1
function paymentCal(cost) {
    let payment = 0;
    payment = cost + (cost * 0.01) + 3

    return payment
}

console.log(paymentCal(200))


// Exercise #2
function listName(name1, name2, name3){
    console.log(`Welcome ${name1} ${name2} ${name3}`)
}
//Part 2
function ageOfYears(year){
    let now = 2023;
    age = now - year

    return age
}

console.log(ageOfYears(1990))

// Part 3
function info(p1, year1, p2, year2, p3, year3) {
    console.log(`Welcome ${p1}, you are ${ageOfYears(year1)}. Welcome ${p2}, you are ${ageOfYears(year2)}. Welcome ${p3}, you are ${ageOfYears(year3)}.`)
}

console.log(info('p1', 1994, 'p2', 1995, 'p3', 2000))