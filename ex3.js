input = [3, 10];

const main = (input) => {
    let initial = [];
    for (let i = 1; i <= input[0]; i++) initial.push(0); // Suppose initial value is [0,0,0,...]
    //console.log(initial);
    while (input[1] --) {
        let old = initial[0];
        initial[0] = initial[0] == 0 ? 1 : 0;
        for (let i = 1; i < input[0]; i++) {
            if (old == 1 && initial[i - 1] == 0) {
                old = initial[i];
                initial[i] = initial[i] == 0 ? 1 : 0;
            }
            //old = initial[i];
        }
        console.log(initial);
    }
    return initial;
}

console.log(main(input));