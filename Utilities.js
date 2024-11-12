// 1. Message Function
// This function takes two parameters: firstName and lastName
// It prints a greeting message to the console
export function Message(firstName, lastName) {
    console.log(`Hey ${firstName} ${lastName}, How are you!`);
}

// 2. Conversion Function
// This function converts Meters to Kilometers
// It takes one parameter: Meters
// It returns a string with both the original value in meters and the converted value in kilometers
export function conversion(Meters) {
    const Kilometers = Meters / 1000;
    return `${Meters}ms is equal to ${Kilometers}kms`;
}

// 3. Addition Function
// This function adds two numbers
// It takes two parameters: a and b
// It returns a string that includes both the input values and their sum
export function addition(a,b) {
    return `Adding ${a} and ${b} gives ${a + b}`;
}

// 4. Square Root Function
// This function calculates the square root of a given value
// It takes one parameter: value
// It returns a string with both the original value and its square root
export function sqrt(value) {
    return `${value}sq. rooted is ${Math.sqrt(value)}`;
}