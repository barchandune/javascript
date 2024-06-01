const square = (y) => {
  return y.reduce(myFunc,0)
}

const myFunc = (total, currentValue, currentIndex, arr) => {
  return total + currentValue*currentValue
}

// Log to console
console.log(square([1,2,3,4]))
