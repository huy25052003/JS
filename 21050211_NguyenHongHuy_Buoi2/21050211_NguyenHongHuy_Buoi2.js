
//Bai 1
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
//Data1
const dolphinsAverage = calcAverage(44, 23, 71);
const koalasAverage = calcAverage(65, 54, 49);

const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
    } else {
        console.log("No team wins!");
    }
};

checkWinner(dolphinsAverage, koalasAverage);
//Data2
checkWinner(calcAverage(85,54,41), calcAverage(23,34,27));

//Bai 2
const calcTip = (bill) => {
    if (bill >= 50 && bill <= 300) {
        return bill * 0.15;
    } else {
        return bill * 0.2;
    }
};

const bills = [125, 555, 44];
const tips = bills.map((bill) => calcTip(bill));
const total = bills.map((bill, index) => bill + tips[index]);
console.log(bills, tips, total);

//Bai 3

const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    }
};

const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    }
};

mark.calcBMI();
john.calcBMI();

mark.bmi = mark.bmi.toFixed(2);
john.bmi = john.bmi.toFixed(2);

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`);
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`);
} else {
    console.log("Both have the same BMI!");
}

//Bai 4

const bills2 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips2 = [];
const total2 = [];
for(let i = 0; i < bills2.length; i++) {
    tips2.push(calcTip(bills2[i]));
    total2.push(bills2[i] + tips2[i]);
}


//Bonus
const calcAverage2 = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
};
// test
const average = calcAverage2(total2);
console.log(bills2);
console.log(tips2);
console.log(total2);
console.log(average);

 
// Filter
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);
// My filter
const myFilter = (arr, callback) => {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}; 
const evenNumbers2 = myFilter(numbers, num => num % 2 === 0);
console.log(evenNumbers2);

//Find
const firstEven = numbers.find(num => num % 2 === 0);
console.log(firstEven);

//Some
const hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven);
//Every
const allEven = numbers.every(num => num % 2 === 0);
console.log(allEven);
//Map
const squareNumbers = numbers.map(num => num ** 2);
console.log(squareNumbers);
//ForEach
const value = [];

numbers.forEach(number => {
    if (number > 1) {
        value.push(number);
    }
});

console.log(value);
