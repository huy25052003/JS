
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

