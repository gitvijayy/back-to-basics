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

const rotLeft = (a, d) => {

  for (var i = 0; i < d; i++) {
    a.push(a[0])
    a.shift()
  }

  return a

}

console.log(rotLeft(arr, 4))

// New Year Chaos

const minimumBribes = (q) => {

  let bribes = 0
  for (var i = 0; i < q.length; i++) {
    if (q[i] - i > 3) {
      console.log("Too chaotic")
      return "Too chaotic"
    }
    if (q[i] - i > 2) {
      bribes = bribes + 2
    } else {
      for (var j = i; j < q.length; j++) {
        if (q[i] > q[j]) {
          bribes++
        }

      }
    }
  }
  console.log(bribes)
  return bribes

}

console.log(minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]))
console.log(minimumBribes([1, 2, 5, 3, 4, 7, 8, 6])) 
