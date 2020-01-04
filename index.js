// How many different ways can the letters in the word “physics” be arranged?
// This problem is slightly different because there are two “s” letters. To account for this we divide by the number of duplicate letters factorial. There are 7 letters in the word physics and two duplicate letters so we must find 7!/2!. If the word had multiple duplicates, as in “little,” the formula would be 6!/(2! * 2.
// 7!/2!=(7*6*5*4*3*2*1)/(2*1)= 2,520

function firstFactorial(n){
  let result = 1
  for(let i = 1; i <= n; i++) { result *= i }
  return result
}

function rearrange(string){
  //transform string into an array
  let array = string.split("")
  //if letters on the string are unique factorial is string.length!
  if (new Set(array).size === array.length){
    return firstFactorial(string.length)
  } else { // else if letters in the string are not unique
  // create tuple with {chararacter : repetition}
    let strObj = array.reduce((prev,next) => { 
      prev[next] = (prev[next] + 1) || 1
      return prev
    },{})

    // find total factorial of characters that repeat
    let otherfactorial = Object.values(strObj).reduce((prev, next) =>{
      if (next > 1){prev *= firstFactorial(next)} 
      return prev
    }, 1)

    // string.length! / factorial of letters that repeat
    return firstFactorial(string.length) / otherfactorial
  }
}


console.log("Number of combinations with 'alex':", rearrange("alex"))
console.log("Number of combinations with 'document':", rearrange("documen"))
console.log("Number of combinations with 'physics':",rearrange("physics"))
console.log("Number of combinations with 'little':",rearrange("little"))