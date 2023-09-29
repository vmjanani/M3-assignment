const numberOne = parseInt(prompt('Enter an integer (whole number): \n\nNote: Any decimal number will only have their number on the leftside of the decimal used. \n\nExample:"7.01 will be 7."'));

const numberTwo = parseInt(prompt('Enter an integer different from the last integer (whole number). \n\nNote: Any decimal number will only have their number on the leftside of the decimal used. \n\nExample:"7.01 will be 7."'));

// Conditional 'if statement' tests each number for validity.  If both numbers are valid, then the user will receive an alert to which number provided is larger.

if(isNaN(numberOne) || isNaN(numberTwo)){
    alert('Sorry, either one or both integers were not valid.  Try again.');
} else if(numberOne === numberTwo){
    alert('Sorry, try again.  Both of your integers were the same.')
} else if (numberOne > numberTwo) {
    alert(numberOne + ' is the larger integer.')
} else if(numberOne < numberTwo) {
    alert(numberTwo + ' is the larger integer.')
}

console.log(numberOne, numberTwo);