console.log("Coding Challenge #1");
// Data 1
const markWeight1 = 78; // kg
const markHeight1 = 1.69; // meters

const johnWeight1 = 92; // kg
const johnHeight1 = 1.95; // meters

// Data 2
const markWeight2 = 95; // kg
const markHeight2 = 1.88; // meters

const johnWeight2 = 85; // kg
const johnHeight2 = 1.76; // meters

// Calculate BMI for Mark and John for Data 1
const markBMI1 = markWeight1 / markHeight1 ** 2;
const johnBMI1 = johnWeight1 / johnHeight1 ** 2;

// Calculate BMI for Mark and John for Data 2
const markBMI2 = markWeight2 / markHeight2 ** 2;
const johnBMI2 = johnWeight2 / johnHeight2 ** 2;

// Check if Mark has a higher BMI than John for both data sets
const markHigherBMI1 = markBMI1 > johnBMI1;
const markHigherBMI2 = markBMI2 > johnBMI2;

// Display the results
console.log("\nData 1:");
console.log("Mark's BMI:", markBMI1);
console.log("John's BMI:", johnBMI1);
console.log("Is Mark's BMI higher than John's? ", markHigherBMI1);

console.log("\nData 2:");
console.log("Mark's BMI:", markBMI2);
console.log("John's BMI:", johnBMI2);
console.log("Is Mark's BMI higher than John's? ", markHigherBMI2);

console.log("\nCoding Challenge #2");

// Check if Mark has a higher BMI than John for Data 2
if (markBMI2 > johnBMI2) {
  console.log(
    `\nMark's BMI (${markBMI2.toFixed(
      1
    )}) is higher than John's (${johnBMI2.toFixed(1)})!`
  );
} else if (johnBMI2 > markBMI2) {
  console.log(
    `\nJohn's BMI (${johnBMI2.toFixed(
      1
    )}) is higher than Mark's (${markBMI2.toFixed(1)})!`
  );
} else {
  console.log(
    `\nMark's BMI (${markBMI2.toFixed(
      1
    )}) is equal to John's (${johnBMI2.toFixed(1)}).`
  );
}

console.log("\nCoding Challenge #3");

// Data 1
const dolphinsScores1 = [96, 108, 89];
const koalasScores1 = [88, 91, 110];

// Data Bonus 1
const dolphinsScoresBonus1 = [97, 112, 101];
const koalasScoresBonus1 = [109, 95, 123];

// Data Bonus 2
const dolphinsScoresBonus2 = [97, 112, 101];
const koalasScoresBonus2 = [109, 95, 106];

function calculateAverage(scores) {
  const total = scores.reduce((acc, score) => acc + score, 0);
  return total / scores.length;
}

function determineWinner(dolphinsAvg, koalasAvg) {
  if (dolphinsAvg >= 100 && dolphinsAvg > koalasAvg) {
    return "Dolphins win!";
  } else if (koalasAvg >= 100 && koalasAvg > dolphinsAvg) {
    return "Koalas win!";
  } else if (
    dolphinsAvg === koalasAvg &&
    dolphinsAvg >= 100 &&
    koalasAvg >= 100
  ) {
    return "It's a draw!";
  } else {
    return "No team wins the trophy.";
  }
}

// Data 1
const dolphinsAvg1 = calculateAverage(dolphinsScores1);
const koalasAvg1 = calculateAverage(koalasScores1);
console.log("\nData 1 Result:", determineWinner(dolphinsAvg1, koalasAvg1));

// Data Bonus 1
const dolphinsAvgBonus1 = calculateAverage(dolphinsScoresBonus1);
const koalasAvgBonus1 = calculateAverage(koalasScoresBonus1);
console.log(
  "Data Bonus 1 Result:",
  determineWinner(dolphinsAvgBonus1, koalasAvgBonus1)
);

// Data Bonus 2
const dolphinsAvgBonus2 = calculateAverage(dolphinsScoresBonus2);
const koalasAvgBonus2 = calculateAverage(koalasScoresBonus2);
console.log(
  "Data Bonus 2 Result:",
  determineWinner(dolphinsAvgBonus2, koalasAvgBonus2)
);

console.log("\nCoding Challenge #4");

// Test data
const bill1 = 275;
const bill2 = 40;
const bill3 = 430;

// Calculate the tip using a ternary operator
const tip1 = bill1 >= 50 && bill1 <= 300 ? bill1 * 0.15 : bill1 * 0.2;
const tip2 = bill2 >= 50 && bill2 <= 300 ? bill2 * 0.15 : bill2 * 0.2;
const tip3 = bill3 >= 50 && bill3 <= 300 ? bill3 * 0.15 : bill3 * 0.2;

// Calculate the total value
const total1 = bill1 + tip1;
const total2 = bill2 + tip2;
const total3 = bill3 + tip3;

// Print the results
console.log(
  `\nThe bill was ${bill1}, the tip was ${tip1}, and the total value ${total1}`
);
console.log(
  `The bill was ${bill2}, the tip was ${tip2}, and the total value ${total2}`
);
console.log(
  `The bill was ${bill3}, the tip was ${tip3}, and the total value ${total3}`
);

console.log("\nCoding Challenge #5");
// Data 1
const dolScores1 = [44, 23, 71];
const koaScores1 = [65, 54, 49];

// Data 2
const dolScores2 = [85, 54, 41];
const koaScores2 = [23, 34, 27];

// Calculate average score using an arrow function
const calcAverage = (scores) =>
  scores.reduce((total, score) => total + score, 0) / scores.length;

// Create a function to check the winner
function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No team wins!");
  }
}

// Calculate average scores for both data sets
const avgDolphins1 = calcAverage(dolScores1);
const avgKoalas1 = calcAverage(koaScores1);
const avgDolphins2 = calcAverage(dolScores2);
const avgKoalas2 = calcAverage(koaScores2);

// Check the winners for both data sets
console.log("Data 1:");
checkWinner(avgDolphins1, avgKoalas1);

console.log("\nData 2:");
checkWinner(avgDolphins2, avgKoalas2);
