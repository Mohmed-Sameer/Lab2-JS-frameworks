// Import statement
// This line imports specific functions from the 'Utilities.js' file
import {Message, conversion, addition, sqrt} from './Utilities.js';

// Function 

// Calls the Message function with two string arguments
// This likely prints a greeting using the provided names
Message('Mohmed','Sameer');

// Calls the conversion function with a numeric argument
// This function probably converts 3000000 (possibly meters) to another unit (like kilometers)
// The result is logged to the console
console.log(conversion(3000000));

// Calls the addition function with two numeric arguments
// This function adds the two numbers and returns the result
// The result is logged to the console
console.log(addition(424432,224500));

// Calls the sqrt (square root) function with a numeric argument
// This function calculates the square root of 16
// The result is logged to the console
console.log(sqrt(16));