let input = "turpentine and turtles";
let emphasis = "eu";
const vowels = Array.from("aeiou");
let resultArray = [];

// Basically this function determines if the input value is an emphasized vowel, and if so, you can tell it by how much to emphasize 
const pushToArray = (input, times = 1) => {
    if(input === emphasis[0] || input === emphasis[1]) {
        times *= 2; // Emphasize by doubling
    }
    for(i = 0; i < times; i++) {
        resultArray.push(input)
    }
    
}

// If the input letter matches vowels, call the function (which will also emphasize selected chars)
for (const each of input) {
    for (const vowel of vowels) {
        if(each === vowel) {
            pushToArray(each);
        }
    }
}

// Join the array with no separator, convert uppercase
let stringified = resultArray.join("").toUpperCase();

console.log(stringified);