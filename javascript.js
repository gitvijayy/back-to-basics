// Hourglass

let arr =
  [1, 1, 1, 0, 0, 0,
    0, 1, 0, 0, 0, 0,
    1, 1, 1, 0, 0, 0,
    0, 0, 2, 4, 4, 0,
    0, 0, 0, 2, 0, 0,
    0, 0, 1, 2, 4, 0]

const hourglass = (arr) => {

}

console.log(hourglass(arr))


//left rotation

let arr = [1, 2, 3, 4, 5]

function rotLeft(a, d) {

  for (var i = 0; i < d; i++) {
    a.push(a[0])
    a.shift()
  }

  return a

}

console.log(rotLeft(arr, 4))
