
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
