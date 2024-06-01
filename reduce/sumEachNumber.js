const sqrEachNum = (x) => {
    return x.reduce((accu, currentValue, currentIndex, arr) => {
        return accu + currentValue;
    })
}

console.log(sqrEachNum([1, 2, 3, 4, 5]));
