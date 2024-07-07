// // Lab 16.1

// // ep kieu ve Number
// console.log('9' - '5')
//     // Thuc hien phep tru roi noi chuoi
// console.log('19' - '13' + '17')
//     //Thuc hien phep tru nen da ep kieu ve Number -> thuc hien phep cong
// console.log('19' - '13' + 17)
//     //ep kieu ve Number roi so sanh
// console.log('123' < 57)
//     //thuc hien cac phep toan truoc roi moi thuc hien noi chuoi
// console.log(5 + 6 + '4' + 9 - 4 - 2)

// // Lab 16.2

// let numNeighbours = prompt('How many neighbor countries does your country have?')

// // ep kieu tu string ve Number
// numNeighbours = Number(numNeighbours)
//     // su dung so sanh nghiem ngat === de dam bao phep so sanh dung muc dich
//     // tranh truong hop tu dong ep kieu dan den sai sot
// if (numNeighbours === 1) {
//     console.log("Only 1 border!")
// } else if (numNeighbours > 1) {
//     console.log("More than 1 border")
// } else {
//     console.log("No borders")
// }

// // Lab 16.3

// let check = true
// let country = prompt("Country?")
// let language = prompt("Language?")
// let population = prompt("Population? (Milion)")
// let isIsland = prompt("Is island? (Yes - No)")

// if (language != "English") {
//     check = false
// }
// if (population >= 50) {
//     check = false
// }
// if (isIsland != "Yes") {
//     check = false
// }

// if (country == "Canada") {
//     check = true
// }
// console.log(country, language, population, isIsland, check)
// if (check) {
//     console.log(`You should live in ${country}`)
// } else {
//     console.log(`${country} does not meet your criteria`)
// }

// // Lab 16.4

// let language = prompt("Language?")
// language = String(language)

// switch (language) {
//     case "Chinese":
//     case "Mandarin":
//         console.log("MOST number of native speakers!")
//         break;
//     case "Spanish":
//         console.log("2nd place in number of native speakers")
//         break;
//     case "English":
//         console.log("3rd place")
//         break;
//     case "Hindi":
//         console.log("Number 4")
//         break;
//     case "Arabic":
//         console.log("5th most spoken language")
//         break;
//     default:
//         console.log("Great language too")
//         break;
// }

// // Lab 16.5

// let population = prompt("Population? (Milion)")
// population = Number(population)

// population > 33 ? console.log("Portugal 's population is above average") : console.log("Portugal's population is below average")

// // Lab 16.6.1

// let pointDolphins1 = 96
// let pointDolphins2 = 108
// let pointDolphins3 = 89
// let pointKoalas1 = 88
// let pointKoalas2 = 91
// let pointKoalas3 = 110
// let avgDolphins = (pointDolphins1 + pointDolphins2 + pointDolphins3) / 3
// let avgKoalas = (pointKoalas1 + pointKoalas2 + pointKoalas3) / 3

// console.log(avgDolphins, avgKoalas)
// if (avgDolphins > avgKoalas) {
//     console.log("Dolphins win")
// } else if (avgDolphins < avgKoalas) {
//     console.log("Koalas win")
// } else {
//     console.log("Draw")
// }

// let pointBonus1Dolphins1 = 97
// let pointBonus1Dolphins2 = 112
// let pointBonus1Dolphins3 = 101
// let pointBonus1Koalas1 = 109
// let pointBonus1Koalas2 = 95
// let pointBonus1Koalas3 = 123
// let avgBonus1Dolphins = (pointBonus1Dolphins1 + pointBonus1Dolphins2 + pointBonus1Dolphins3) / 3
// let avgBonus1Koalas = (pointBonus1Koalas1 + pointBonus1Koalas2 + pointBonus1Koalas3) / 3

// console.log(avgBonus1Dolphins, avgBonus1Koalas)
// if (avgBonus1Dolphins > avgBonus1Koalas && avgBonus1Dolphins > 100) {
//     console.log("Dolphins win Bonus 1")
// } else if (avgDolphins < avgKoalas && avgKoalas > 100) {
//     console.log("Koalas win Bonus 1")
// } else {
//     console.log("No win Bonus 1")
// }

// let pointBonus2Dolphins1 = 97
// let pointBonus2Dolphins2 = 112
// let pointBonus2Dolphins3 = 101
// let pointBonus2Koalas1 = 109
// let pointBonus2Koalas2 = 95
// let pointBonus2Koalas3 = 106
// let avgBonus2Dolphins = (pointBonus2Dolphins1 + pointBonus2Dolphins2 + pointBonus2Dolphins3) / 3
// let avgBonus2Koalas = (pointBonus2Koalas1 + pointBonus2Koalas2 + pointBonus2Koalas3) / 3

// console.log(avgBonus2Dolphins, avgBonus2Koalas)
// if (avgBonus2Dolphins > avgBonus1Koalas && avgBonus2Koalas > 100) {
//     console.log("Dolphins win Bonus 2")
// } else if (avgBonus2Dolphins < avgKoalas && avgBonus2Koalas > 100) {
//     console.log("Koalas win Bonus 2")
// } else if (avgBonus2Dolphins == avgBonus2Koalas && avgBonus2Dolphins >= 100) {
//     console.log("Draw Bonus 2")
// } else {
//     console.log("No win Bonus 2")
// }

// Lab 16.6.2

let tip = 275
tip = 40
    // tip = 430

tip >= 50 && tip <= 300 ?
    console.log(`The bill was ${tip}, the tip was ${tip * 0.15}, and the total value ${tip * 1.15}`) :
    console.log(`The bill was ${tip}, the tip was ${tip * 0.2}, and the total value ${tip * 1.2}`)