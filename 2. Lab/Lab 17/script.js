// // Lab 17.1

// function describeCountry(country, population, capitalCity) {
//     return `${country} has ${population} million people and its capital city is ${capitalCity}`
// }

// const describeCountry1 = describeCountry("Viet Nam", 100, "Ha Noi")
// const describeCountry2 = describeCountry("Thailand", 66, "Bangkok")
// const describeCountry3 = describeCountry("England", 30, "London")

// console.log(describeCountry1)
// console.log(describeCountry2)
// console.log(describeCountry3)

// // Lab 17.2

// function percentageOfWorld1(population) {
//     return population / 7900 * 100
// }

// const percentageOfWorld11 = percentageOfWorld1(100)
// const percentageOfWorld12 = percentageOfWorld1(66)
// const percentageOfWorld13 = percentageOfWorld1(30)

// console.log(percentageOfWorld11)
// console.log(percentageOfWorld12)
// console.log(percentageOfWorld13)

// const percentageOfWorld2 = function(population) {
//     return population / 7900 * 100
// }

// const percentageOfWorld21 = percentageOfWorld1(100)
// const percentageOfWorld22 = percentageOfWorld1(66)
// const percentageOfWorld23 = percentageOfWorld1(30)

// console.log(percentageOfWorld21)
// console.log(percentageOfWorld22)
// console.log(percentageOfWorld23)

// // Lab 17.3

// const percentageOfWorld3 = population => population / 7900 * 100

// const percentageOfWorld31 = percentageOfWorld1(100)
// const percentageOfWorld32 = percentageOfWorld1(66)
// const percentageOfWorld33 = percentageOfWorld1(30)

// console.log(percentageOfWorld31)
// console.log(percentageOfWorld32)
// console.log(percentageOfWorld33)

// // Lab 17.4

// const percentageOfWorld = population => population / 7900 * 100

// const describePopulation = (country, population) => `${country} has ${population} million people, which is about ${percentageOfWorld(population)}% of the world`

// const describePopulation1 = describePopulation("Viet Nam", 100)
// const describePopulation2 = describePopulation("Thailand", 66)
// const describePopulation3 = describePopulation("London", 30)

// console.log(describePopulation1)
// console.log(describePopulation2)
// console.log(describePopulation3)

// // Lab 17.5

// const percentageOfWorld = population => population / 7900 * 100
// const populations = [100, 66, 30, 1441]
// const percentages = []

// percentages[0] = percentageOfWorld(populations[0])
// percentages[1] = percentageOfWorld(populations[1])
// percentages[2] = percentageOfWorld(populations[2])
// percentages[3] = percentageOfWorld(populations[3])

// console.log(populations.length == 4)
// console.log(percentages[0])
// console.log(percentages[1])
// console.log(percentages[2])
// console.log(percentages[3])

// // Lab 17.6

// const neighbours = ["China", "Laos", "Cambodia"]

// neighbours.push("Utopia")
// neighbours.pop("Utopia")

// if (!neighbours.includes("Germany")) {
//     console.log("Probably not a central European country")
// }

// if (neighbours.includes("Laos")) {
//     neighbours[neighbours.indexOf("Laos")] = "Thailand"
//     console.log(neighbours)
// }

// // Lab 17.7.1

// const calcAverage = (a, b, c) => (a + b + c) / 3
// const checkWinner = function(avgDolphins, avgKoalas) {
//     if (avgDolphins > avgKoalas * 2) {
//         return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`
//     }
//     if (avgKoalas > avgDolphins * 2) {
//         return `Koalas win (${avgKoalas} vs. ${avgDolphins})`
//     }
//     return "No win"
// }

// const pointDolphins11 = 44
// const pointDolphins12 = 23
// const pointDolphins13 = 71
// const pointKoalas11 = 65
// const pointKoalas12 = 54
// const pointKoalas13 = 49
// const avgDolphins1 = calcAverage(pointDolphins11, pointDolphins12, pointDolphins13)
// const avgKoalas1 = calcAverage(pointKoalas11, pointKoalas12, pointKoalas13)

// console.log(checkWinner(avgDolphins1, avgKoalas1))

// const pointDolphins21 = 85
// const pointDolphins22 = 54
// const pointDolphins23 = 41
// const pointKoalas21 = 23
// const pointKoalas22 = 34
// const pointKoalas23 = 27
// const avgDolphins2 = calcAverage(pointDolphins21, pointDolphins22, pointDolphins23)
// const avgKoalas2 = calcAverage(pointKoalas21, pointKoalas22, pointKoalas23)

// console.log(checkWinner(avgDolphins2, avgKoalas2))

// // Lab 17.7.2

// const calcTip = tip => tip >= 50 && tip <= 300 ? tip * 0.15 : tip * 0.2

// console.log(calcTip(100))

// const tips = []
// const bills = []
// const total = []

// bills[0] = 125
// bills[1] = 555
// bills[2] = 44
// tips[0] = calcTip(bills[0])
// tips[1] = calcTip(bills[1])
// tips[2] = calcTip(bills[2])
// total[0] = bills[3] + tips[0]
// total[1] = bills[1] + tips[1]
// total[2] = bills[2] + tips[2]
// 
// console.log(bills, tips, total)