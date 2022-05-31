const array  = [1, 2, 11, 3, 5, 12, 11, 8, 3]; // Modify this array to get the result

const main = (array) => {
    //find the second max element
    let max = array[0];
    let prev = array[1]; // prev contains the second max element
    array.map((item, index) => {
        if (item > max) {
            prev = max;
            max = item;
        }
    })
    let res = [];
    if (prev == max) return res; //if there is no second max item, return a null array
    array.map((item, index) => {
        if (item == prev) res.push(index);
    })
    return res;
}

console.log(main(array));
