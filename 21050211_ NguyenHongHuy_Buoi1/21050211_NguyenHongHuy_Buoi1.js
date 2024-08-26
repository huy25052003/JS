//JavaScript Fundamentals – Part 1

// Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
let markMass = 78;
let markHeight = 1.69;
let johnMass = 92;
let johnHeight = 1.95;
// 2. Calculate both their BMIs using the formula (you can even implement both versions)
let markBMI = markMass / markHeight ** 2;
let johnBMI = johnMass / johnHeight ** 2;
// 3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
let markHigherBMI = markBMI > johnBMI;
if (markHigherBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI})`);
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's BMI (${markBMI})`);
}

//data2
markMass = 95;
markHeight = 1.88;
johnMass = 85;
johnHeight = 1.76;
markBMI = markMass / markHeight ** 2;
johnBMI = johnMass / johnHeight ** 2;
markHigherBMI = markBMI > johnBMI;
if (markHigherBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI})`);
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's BMI (${markBMI})`);
}

// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"\
// funtion to calculate BMI and print the result 
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
function compareBMI(markBMI, johnBMI) {

    let markHigherBMI = markBMI > johnBMI;
    if (markHigherBMI) {
        console.log(`Mark's BMI (${markBMI.toFixed(2)}) is higher than John's (${johnBMI.toFixed(2)})`);
    } else {
        console.log(`John's BMI (${johnBMI.toFixed(2)}) is higher than Mark's (${markBMI.toFixed(2)})`);
    }
}
console.log(compareBMI(markBMI, johnBMI));

// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
let dolphinsScore = (96 + 108 + 89) / 3;
let koalasScore = (88 + 91 + 110) / 3;
console.log(dolphinsScore, koalasScore);
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
if (dolphinsScore > koalasScore) {
    console.log(`Dolphins win the trophy with an average score of ${dolphinsScore}`);
}else if (dolphinsScore < koalasScore) {
    console.log(`Koalas win the trophy with an average score of ${koalasScore}`);
}else{
    console.log(`Both teams have the same average score of ${dolphinsScore}`);
}
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks �
if (dolphinsScore > koalasScore && dolphinsScore >= 100) {
    console.log(`Dolphins win the trophy with an average score of ${dolphinsScore}`);
}else if (dolphinsScore < koalasScore && koalasScore >= 100) {
    console.log(`Koalas win the trophy with an average score of ${koalasScore}`);
}
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
if (dolphinsScore === koalasScore && dolphinsScore >= 100) {
    console.log(`Both teams have the same average score of ${dolphinsScore}`);
}

// Steven wants to build a very simple tip calculator for whenever he goes eating in a
// restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
// 300. If the value is different, the tip is 20%.
// Your tasks:
function tipCalculator(bill) {
    let tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;
    console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
}
// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
// this. It's not allowed to use an if/else statement � (If it's easier for you, you can
// start with an if/else statement, and then try to convert it to a ternary
// operator!)
tipCalculator(275);
tipCalculator(40);
tipCalculator(430);
// 2. Print a string to the console containing the bill value, the tip, and the final value
// (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
// 316.25”
console.log(tipCalculator(275));
console.log(tipCalculator(40));
console.log(tipCalculator(430));

