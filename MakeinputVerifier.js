function makeInputVerifier(minimum, maximum) {

   var min = minimum;
   var max = maximum;
   return function verify(input) {
      if (input < min) return "Input is less than minimum value";
      else if (input >= min && input <= max) return "Input is in range";
      else return "The input is more than the maximum value";

   }

}

function vowelcount(str) {
   var count = 0;
   var vowels = "aiuoeAIUOE";
   for (var i = 0; i < str.length; i++) {
      if (vowels.indexOf(str[i].toLowerCase()) > -1) {
         count++;
      }
   }
   return "This string has " + count + " Vowels";
}


function titlecase(str) {
   var arr = str.toLowerCase().split(" ");
   var result = arr.map(
      function (val) {
         return val.replace(val.charAt(0), val.charAt(0).toUpperCase());

      }
   );
   return result.join(" ");
}


function getIndexofnumber(arr, num) {
   arr.sort(function (a, b) {
      return a - b;
   });
   for (var i = 0; i < arr.length; i++) {
      if (arr[i] >= num) {
         return i;
      }
   }
   return arr.length;
}


function Removeitem(arr) {
   var args = Array.from(arguments);

   for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < args.length; j++) {
         if (arr[i] === args[j]) {
            delete arr[i];
         }
      }
   }
   return arr.filter(Boolean);
}


function findLongestword(str) {
   var words = str.split(" ");
   var maxLength = 0;
   var longestword;

   for (var i = 0; i < words.length; i++) {
      if (words[i].length > maxLength) {
         maxLength = words[i].length;
         longestword = words[i];

      }
   }
   return longestword;
}



function chunkArray(arr, val) {
   var finalArray = [];
   for (var i = 0; i < arr.length; i += val) {
      finalArray.push(arr.slice(i, val + i));
   }
   return finalArray;
}



function reverseStr(str) {
   var finalstr = "";
   for (var i = str.length; i >= 0; i--) {
      finalstr = finalstr + str[i];
   }
   return finalstr;
}


function mutations(arr) {
   var firstItem = arr[0].toLowerCase();
   var secondItem = arr[1].toLowerCase();

   for (var i = 0; i < secondItem.length; i++) {
      if (firstItem.indexOf(secondItem[i]) === -1)
         return false;
   }
   return true;
}


function fibonacci(nums)
 {
   let fib = [0, 1];
   let data = [];
   for (let i = 2; i <= nums; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
      if ((fib[i] % 2 == 0) && (fib[i] < 10)) {
         data.push(fib[i]);
      }
   }
   return data;
}

const ans = makeInputVerifier(1, 10)
console.log(ans(5))
console.log(vowelcount("shema lucien studies in cse"));
console.log(titlecase('shema lucien studies in cse'));
console.log((getIndexofnumber([10, 3, 5, 9], 5)));
console.log(Removeitem([1, 2, 3, 1, 2, 3], 2, 3));
console.log(findLongestword("shema lucien is studying in cse"));
console.log(chunkArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
console.log(reverseStr("Reverse this string"));
console.log(mutations(["Miss", "Miss"]));
console.log(fibonacci(10));