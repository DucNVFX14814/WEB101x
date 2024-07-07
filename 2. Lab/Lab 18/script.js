// // Lab 18.1, 18.2, 18.3

// const myCountry = {
//     country: "Viet Nam",
//     capital: "Ha Noi",
//     language: "Vietnamese",
//     population: 100,
//     neighbours: ["China", "Laos", "Cambodia"],
//     describe: function() {
//         console.log(`${this.country} has ${this.population} million finnish-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`)
//     },
//     checkIsland: function(neighbours) {
//         return neighbours.length == 0
//     }
// }

// console.log(`${myCountry.country} has ${myCountry.population} million finnish-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`)

// myCountry.population += 2
// myCountry["population"] -= 2

// myCountry.describe()
// myCountry.isIsland = myCountry.checkIsland(myCountry.neighbours)
// console.log(myCountry)

// // Lab 18.4

// for (let i = 1; i <= 50; i++) {
//     console.log(`Voter number ${i} is currently voting`)
// }

// // Lab 18.5, 18.7

// const percentageOfWorld = population => population / 7900 * 100
// const populations = [100, 66, 30, 1441]
// const percentages1 = []
// const percentages2 = []
// const percentages3 = []

// for (let i = 0; i < populations.length; i++) {
//     percentages2[i] = percentageOfWorld(populations[i])
// }

// percentages1[0] = percentageOfWorld(populations[0])
// percentages1[1] = percentageOfWorld(populations[1])
// percentages1[2] = percentageOfWorld(populations[2])
// percentages1[3] = percentageOfWorld(populations[3])

// let i = 0
// while (i < populations.length) {
//     percentages3[i] = percentageOfWorld(populations[i])
//     i++
// }

// console.log(percentages1)
// console.log(percentages2)
// console.log(percentages3)

// // Lab 18.6

// const listOfNeighbours = [
//     ['Canada', 'Mexico'],
//     ['Spain'],
//     ['Norway', 'Sweden', 'Russia']
// ];

// for (let i = 0; i < listOfNeighbours.length; i++) {
//     for (let j = 1; j < listOfNeighbours[i].length; j++) {
//         console.log(listOfNeighbours[i][j])
//     }
// }

// // Lab 18.8.1

// const infoMark = {
//     name: "Mark",
//     mass: 78,
//     height: 1.69,
//     calcBMI: function(mass, height) {
//         return mass / (height * height)
//     }
// }

// const infoJohn = {
//     name: "John",
//     mass: 92,
//     height: 1.95,
//     calcBMI: function(mass, height) {
//         return mass / (height * height)
//     }
// }

// infoMark.bmi = infoMark.calcBMI(infoMark.mass, infoMark.height)
// infoJohn.bmi = infoJohn.calcBMI(infoJohn.mass, infoJohn.height)

// if (infoJohn.bmi > infoMark.bmi) {
//     console.log(`John's BMI (${infoJohn.bmi}) is higher than Mark's (${infoMark.bmi})!`)
// } else if (infoJohn.bmi < infoMark.bmi) {
//     console.log(`Mark's BMI (${infoMark.bmi}) is higher than John's (${infoJohn.bmi})!`)
// }

// // Lab 18.8.2

// const calcTip = tip => tip >= 50 && tip <= 300 ? tip * 0.15 : tip * 0.2

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
// const tips = []
// const total = []

// for (let i = 0; i < bills.length; i++) {
//     tips[i] = calcTip(bills[i]);
//     total[i] = tips[i] + bills[i];
// }

// console.log(bills, tips, total)

// // Bonus

// const calcAverage = function(arr) {
//     let sum = 0
//     let length = arr.length
//     for (let i = 0; i < length; i++) {
//         sum += arr[i];
//     }

//     return sum / length
// }

// console.log(calcAverage(bills))