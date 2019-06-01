// Code your solution here!

function printString (myString) {
  console.log(myString[0]);

 if (myString.length > 1) {
   let mySubString = myString.substring(1, myString.length);
   printString(mySubString);
 } else {
   return true;
 }
}

function reverseString (myString, newString = '') {
  if (myString.length > 1) {
    newString += myString.slice(-1)
    return reverseString(myString.slice(0, -1), newString)
  } else {
    return newString + myString.slice(-1)
  }
}

function isPalindrome (myString) {
  if (myString.length > 1){
    console.log(myString)
    if (myString[0] === myString.slice(-1)){
      return isPalindrome(myString.slice(1, -1))
    } else {
      return false
    }
  } else {
    return true
  }

}

function addUpTo(array, index){
  return index ? array[index] + addUpTo(array, --index) : array[index];
}

function maxOf(array, maxInt=array[0]){
  array.shift()

  if (array.length > 0){
    return maxInt > array[0] ? maxOf(array, maxInt) : maxOf(array, array[0])
  } else {
    return maxInt
  }
}

function includesNumber(array, target){
  if (array.length > 0){
    return array.shift() === target ? true : includesNumber(array, target)
  } else {
    return false
  }
}
