// Create a function that takes a string as an argument 
// and returns a coded (h4ck3r 5p34k) version of the string.

  // Examples
        // hackerSpeak("javascript is cool") ➞ "j4v45cr1pt 15 c00l"
        // hackerSpeak("programming is fun") ➞ "pr0gr4mm1ng 15 fun"
        // hackerSpeak("become a coder") ➞ "b3c0m3 4 c0d3r"

  // Notes
        // In order to work properly, 
        // the function should replace all 
        // "a"s with 4, 
        // "e"s with 3, 
        // "i"s with 1, 
        // "o"s with 0,
        // "s"s with 5.
        
        function replacestring(str)
        {
          var newstr;
          var arr=str.toLowerCase().split("");
          //var givenletters="aeios";
          for(var i=0;i<arr.length;i++)
          {
            if(arr[i]==='a')
            {
              arr[i]=4;
            }
            else if(arr[i]==='e')
            {
              arr[i]=3;
            }
            else if(arr[i]==='i')
            {
              arr[i]=1;
            }
            else if(arr[i]==='o')
            {
              arr[i]=0;
            }
            else if(arr[i]==='s')
            {
              arr[i]=5;
            }
           
          }
          return arr.join("");
    
        }
        console.log(replacestring("jAvascript is cool"));