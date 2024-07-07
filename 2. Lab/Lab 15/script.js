console.log("********************")
console.log("Lab 15.1")

let country = "Viet Nam"
let continent = "Asia"
let population = 100
let isIsland
let language

if (country == "Island") {
    isIsland = true
} else {
    isIsland = false
}

console.log(typeof isIsland)
console.log(typeof population)
console.log(typeof country)
console.log(typeof language)

console.log("********************")
console.log("Lab 15.2")

language = "Vietnamese"
const ONE = 1
    // ONE = 2 

console.log("********************")
console.log("Lab 15.3")

population /= 2
population += 1
console.log(population)
console.log(population > 6)
console.log(population > 33)
let description = country + "and its " + population + " millions people speak " + language
console.log(description)

console.log("********************")
console.log("Lab 15.4")

description = `${country} and its ${population} millions people speak ${language}`
console.log(description)

console.log("********************")
console.log("Lab 15.5")

population = 100
if (population > 33) {
    console.log(`${country}'s population is above average`)
} else {
    console.log(`${country}'s population is ${33 - population} million below average`)
}

console.log("********************")
console.log("Lab 15.6")

// Dữ liệu 1: Mark nặng 78 kg và cao 1.69 m. John nặng 92 kg và cao 1.95 m.
// Dữ liệu 2: Mark nặng 95 kg và cao 1.88 m. John nặng 85 kg và cao 1.76 m.

let weightMark = 78
let heightMark = 1.69
let weightJohn = 92
let heightJohn = 1.95

weightMark = 95
heightMark = 1.88
weightJohn = 85
heightJohn = 1.76

let bmiMark = weightMark / (heightMark * heightMark)
let bmiJohn = weightJohn / (heightJohn * heightJohn)
let markHigherBMI = bmiMark > bmiJohn

console.log(bmiMark)
console.log(bmiJohn)
console.log(markHigherBMI)

console.log("********************")

if (bmiMark > bmiJohn) {
    console.log("Mark's BMI is higher than John's!")
    console.log(`Mark's BMI ${bmiMark} is higher than John's ${bmiJohn}!`)
} else {
    console.log("John's BMI is higher than Mark's!")
    console.log(`John's BMI ${bmiJohn} is higher than Mark's ${bmiMark}!`)
}