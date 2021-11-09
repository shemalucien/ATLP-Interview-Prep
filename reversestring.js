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