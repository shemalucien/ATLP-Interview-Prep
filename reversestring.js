function reversestring(s) {

    var reversedword = s.split("").reverse().join("")
    return reversedword;
}


function ispalindrome(p) { 
    var reversedword = p.split("").reverse().join("")
    if (p === reversedword)
        console.log('is palindrome');
    else
        console.log('is not palindrome');
}

// JavaScript program to implement the FizzBuzz problem
for (let i=1; i<=100; i++) {
    // Numbers that are divisible by 3 and 5
     // are always divisible by 15
     // Therefore, "FizzBuzz" is printed in place of that number
     if (i%15 == 0) {
     console.log("FizzBuzz" + " ");
     }
    // "Fizz" is printed in place of numbers
     // that are divisible by 3
     else if ((i%3) == 0) {
     console.log("Fizz" + " ");
     }
    // "Buzz" is printed in place of numbers
     // that are divisible by 5
     else if ((i%5) == 0) {
 console.log("Buzz" + " ");
     }
    // If none of the above conditions are satisfied,
     // the number is printed
     else {
     console.log(i + "condition not satisfied ");
     }
    }

function countnumberofcharacters(name) {
    var count = 0;
    for (var i = 0; i < name.length; i++) {
        count++;
    }
    return count;
}


function swap(a, b) {
    console.log("values before swapping are", a, b);
    a = a + b;
    b = a - b;
    a = a - b;
    console.log("values after swapping are", a, b);
}


const reversedword = reversestring("HELLO");
console.log(reversedword);
const pal = ispalindrome('kayaka');
console.log(pal);
console.log(countnumberofcharacters('iradukunda chance desire'));
console.log(swap(10, 20));