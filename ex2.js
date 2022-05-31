const input = [1, 4, 2, 0, 3, 0, 4, 0];

const main = (input) => {
    let pointA = 0, pointB = 0, pointC = 0, pointD = 0;
    let hsA = 0, hsB = 0, hsC = 0, hsD = 0;

    if (input[0] > input[1]) pointA += 3;
    else if (input[0] == input[1]) {
        pointA += 1;
        pointB += 1;
    } else {
        pointB += 3;
    }

    if (input[2] > input[3]) pointC += 3;
    else if (input[0] == input[1]) {
        pointC += 1;
        pointD += 1;
    } else {
        pointD += 3;
    }

    if (input[4] > input[5]) pointA += 3;
    else if (input[0] == input[1]) {
        pointA += 1;
        pointC += 1;
    } else {
        pointC += 3;
    }

    if (input[6] > input[7]) pointB += 3;
    else if (input[0] == input[1]) {
        pointD += 1;
        pointB += 1;
    } else {
        pointD += 3;
    }
    //console.log(pointA, pointB, pointC, pointD);

    hsA = input[0] - input[1] + input[4] - input[5];
    hsB = input[1] - input[0] + input[6] - input[7];
    hsC = input[2] - input[3] + input[5] - input[4];
    hsD = input[3] - input[2] + input[7] - input[6];

    let scoreBoard = [
        { name: "A", score: pointA, hs: hsA },
        { name: "B", score: pointB, hs: hsB },
        { name: "C", score: pointC, hs: hsC },
        { name: "D", score: pointD, hs: hsD }
    ]

    scoreBoard.sort(function (a, b) {
        if (a.score != b.score) return b.score - a.score;
        return b.hs - a.hs;
    })

    

    if (pointB - pointA >= 4) return -1;
    else {
        
        hsA = input[0] - input[1] + input[4] - input[5];
        hsB = input[1] - input[0] + input[6] - input[7];
        hsC = input[2] - input[3] + input[5] - input[4];
        hsD = input[3] - input[2] + input[7] - input[6];

        let scoreBoard = [
            { name: "A", score: pointA, hs: hsA},
            { name: "B", score: pointB, hs: hsB },
            { name: "C", score: pointC, hs: hsC},
            { name: "D", score: pointD, hs: hsD}
        ]

        scoreBoard.sort(function (a, b) {
            if (a.score != b.score) return b.score - a.score;
            return b.hs - a.hs;
        })
        //console.log(scoreBoard)
        let a = hsB > hsA ? hsB - hsA + 1: 5, b = 0, c = 0, d = hsB > hsA ? hsB - hsA + 1: 5;
        return [a, b, c, d];
    }
}
console.log(main(input));