//Variable Assigning 
/*
var petDog = "Rex";
var petCat = "Pepper";
console.log(petDog);
console.log(petCat);
console.log("My pet dog's name is: ",petDog);
console.log("My pet dog's name is: ",petCat);

var catSound = "purr";
var dogSound = "woof";

console.log(petDog, "says", dogSound);

console.log(petCat, "says", catSound);
//changing existing variable 
catSound = "meow";

console.log(petCat, "now says", catSound);

//Aritmetic & Comparison Operators


console.log(2 + 2);
console.log(1+2+3+4+5);
console.log(20-18);
console.log(2*3);
console.log(8/1);
console.log(3 > 2);
console.log(2 >3);
console.log(10==10);


console.log(1 < 2);

console.log(1 == 2);


var currentTime = 7;

//And Operator &&
console.log(currentTime > 9 && currentTime < 17);

//Or Operator ||
console.log(currentTime < 9 || currentTime > 17);

//Not Operator !
var petHungry = true;
console.log("Pet is hungry: ", !petHungry);
console.log(petHungry);

// modulus operator %
console.log(22 % 5); // returns 2

5===5; // true
5 === "5"; // false

5 !== "5"; // true
5 !== 5; // false;

"inter" + "net"; // "internet"
"cat" + "nap"; // "catnap"
"hello " + "world"; // "hello world"

var fullName = "John" + " " + "Doe"; // "John Doe"

365 + " days in a year"; // "365 days in a year


"Year " + 2024; // "Year 2024"

var age = 25;
var greeting = "I am " + age + " years old."; // "I am 25 years old."

1 + "2"; // "12"
"3" + 4; // "34"

var overtime = 1;
overtime += 2;
overtime += 1;
overtime += 2;
overtime += 3;
console.log("I worked", overtime, "hours extra this week.");



var score = 8;

console.log("Mid-level skills: ", score > 0 && score < 10);

 var i = 7;
 i += 1;
 i += 2;
console.log("Final value of i: ", i);
    


//converting the previous if-else example with switch-case


switch(light) {
   case 'green':
       console.log("Drive");
       break;
   case 'orange':
       console.log("Get ready");
       break;
   case 'red':
       console.log("Don't drive");
       break;
   default:
       //this block will run if no condition matches
       console.log('The light is not green, orange, or red');
}




//if-else example
var age = 10;

if (age >= 65) {
    console.log("You get income from your pension.");
}
else if (age < 65 && age >= 18) {
    console.log("Each month you get a salary.");
}
else if (age<18) {
    console.log("You get an allowance.");
}


//if-else example
var age = 10;

if (age >= 65) {
    console.log("You get income from your pension.");
}
else if (age < 65 && age >= 18) {
    console.log("Each month you get a salary.");
}
else if (age<18) {
    console.log("You get an allowance.");
}
else {
    console.log("The value of the age variable is not numerical");
}

//switch-case example
var day = "Sunday";
switch(day){

    case 'Sunday':
    console.log("Do Something");
    break;

    case 'Monday':
    console.log("Do something");
    break;

    case 'Tuesday':
    console.log("Do Something");
    break;

    case 'Wednesday':
    console.log("Do Something");
    break;

    case 'Thursday':
    console.log("Do Something");
    break;

    case 'Friday':
    console.log("Do Something");
    break;

    case 'Saturday':
    console.log("Do Something");
    break;
    
    default:
    console.log("There is no such day in the week");
}

for (var i=1; i<=5; i++)
{
    console.log(i, "Counting Completed");
}

*/
for (var i=5; i>0; i--)
{
    console.log(i, "Countdown Finished!");
}

var i = 1;
while (i<6){
    console.log(i);
    i++;
}

var i = 5;
while (i>0){
    console.log(i);
    i--;
}

var i=2018;
while (i>2022)
{
    console.log(i);
    i++;
}

//nested loops - one inside another
for (var firstNum = 0; firstNum < 2; firstNum++) {
    for (var secondNum = 0; secondNum < 10; secondNum++) {
        console.log(firstNum + ", " + secondNum);
    }
}

//nested loops - one inside another 
for (var i = 100; i > 10; i = i - 10) {
    for (var j = 10; j > 4; j = j - 5) {
        console.log(i + " divided by " + j + " equals " + i / j);
    }
}



var cubes = 'ABCDEFG';
//styling console output using CSS with a %c format specifier
for (var i = 0; i < 7; i++) {
    var styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
    console.log("%c" + cubes[i], styles)
}




for (var i = 1; i<=10 ; i++){
    if (i == 1) {
        console.log("Gold Medal");
    }
    else if (i == 2) {
        console.log("Silver Medal");
    }
    else if (i==3){
        console.log("Bronze Medal");
    }
    else {
        console.log(i);
    }
}


for (var i = 1; i<=10 ; i++){
    
    switch(i){
        case 1:
        console.log("Gold Medal");
        break;

        case 2:
        console.log("Silver Medal");
        break;

        case 3:
        console.log("Bronze Medal");
        break;

        default:
        console.log(i);
            
  
    }
    
    
}

<script>
// Function to calculate the factorial of a number
    function factorial(n) { 
        if (n === 0 || n === 1) {
            return 1;
        } else {
            return n * factorial(n - 1);
        }
    }   
   
    
</script>
    

function letterFinder(word, match) {
    for (var i = 0; i < word.length; i++)
    {
        if (word[i] == match)
        {
            console.log("Found the", match, "at", i);
        }
        else {
            console.log("---No match found at", i);
        }

    }
}
letterFinder("test", "t");


//push and pop array example
var fruits = [];
fruits.push("apple"); //adds apple to the end of the array
fruits.push("pear"); //adds pear to the end of the array

//to remove an item from the end of an array we use pop
fruits.pop();
console.log(fruits); //prints ["apple"]