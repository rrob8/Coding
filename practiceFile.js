var myStr = "I am a \"double quoted\" string inside \"double quotes\""
console.log(myStr);

var myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
console.log(myStr);
// Tech decode Tutorials video explanation
/* This is a multi line
comment */
/* Data types: 
undefined, null, boolean, string, symbol,
number and object */
/* for variables, use var (global scope) 
'let' keyword only has local scope
const is a variable that we never change */

const name = 11;

// figure out why we can't get console.log to return name//

//same issue with the hotel example//
// Ctrl +B to show or hibe primary sidebar for visual studio code//
/* how to use an ESCAPE CHARACTER to use quotes within quotes, if the quotes are the same
use a BACKSLASH*/





//how to clear the terminal = "cls" + enter//







//need to save between new lines of code, might be another way other than saving//

/*find the value of a character in the
 first, second, third etc place of a string.*/
var firstLetter
var lastName = "Johnson";
var firstLetter= lastName[0];
console.log(firstLetter);
//0 gives the first, 1 the second, 2 is the third//
var secondToLastLetter = lastName[lastName.length - 1];
console.log(secondToLastLetter);
// this works because lastName.length = 7, we are saying 7-1=6. lastName[6](index) gives us the sixth letter which is o//
var ourArray = ["Rob", 30]
//This is an array, can be named anything, just needs brackets and commas//
//can place arrays in another array, nested array//
 //you can data from the array using index notation//
 console.log (ourArray[0]);
 //modify the index of an array by stating the index and setting it equal to a new value//
 ourArray[1]= 99
 console.log(ourArray[1]);
 // you can access arrays within arrays by using more brackets. see the 1,2,3?//
 // difference between an array literal and an array constructor. Constr. example below//
 var sillyConstructor = new Array('haha', 'blah blah', 'poo poo');
 //must say new Array and then use parentheses//
 var newArray = ["Rob", 99, [1,2,3], true, null];
var favoriteNumber = newArray[2][1];
console.log(favoriteNumber);
/* cannot begin a variable with a number:   var 4four = 8  console.log(4four); will give syntax error.
 cannot use a "." or "-" in the name either. neither keywords or reserved words. see online for a list of these
 remember they are case sensitive when calling. */ 
var ourArray = ['steve','P','Cat'];
ourArray.push ('Silly','Hat');
console.log(ourArray);
//you just need parentheses to add push onto the array
/* however if you wrote it ourArray.push (['silly','hat']); 
then you would have made whatever is between brackets as a secondary array */
/* you can remove an item from an array with pop FUNCTION. removes the last variable in the array
you can place this removed variable into a variable */
var pArray = [4,5,'pop me off last!'];
var lastVar = pArray.pop();
console.log(lastVar);
console.log(pArray);
// SHIFT function is similar to POP, however it removes the first element of the array
var xArray = ['shift me off first!', 'leave me', 'i stay'];
var firstxArray = xArray.shift();
console.log(firstxArray);
// UNSHIFT adds an element to the beginning of the Array
var yArray = ['Fud','Safety'];
yArray.shift();
yArray.unshift('Food');
// console.log(yArrary); watch your spelling - Arrary
console.log(yArray);
// parameters of a function
//here is a basic function that subtracts two values
function ourFunctionWithArgs(a,b){
    console.log(a-b);
}
// pass values into it and calling in the same step below
ourFunctionWithArgs(10,6);
//

// minute 58 of the video explains how to delcare a global variable within a function
// if you delcare a variable using the var keyword, inside a function, it is has local scope
// functions will search for the global variable if they have no local variable
//example
var outerWear = 'T-shirt';
function myOutfit() {
    return outerWear;
}
console.log(myOutfit());
//for a function you can declare the variable that you will pass in LATER, in the parentheses
function minusSeven(num){
    return num-7;}
    console.log(minusSeven(10));
    //This gives us three because we are telling the function: num=10, with a return of 10-7
// Boolean practice
function TF (isItTrue){
    if (isItTrue){
        return "yes, it's true";
            }
        return "no, it's false";
    }
console.log(TF (true));
/* notice how we had to place the first portion of the IF statement in its
own curly brackets */
// equality operators ==, can help us see if two values are equal to each other
function testEqual(val) {
    if (val==13){
        return "Equal";
    }
    return "Not Equal";
}
console.log(testEqual(10));
// Strict equals --> ===, such as in numbers vs strings
function testStrict(val){
    if (val===3){
    return "Equal";
}
return "Very Not Equal";
}
console.log(testStrict('3'));
// or, with 2 variables set in the beginning of the function
function compareEquality (a,b){
    if (a===b){
        return "equal";
    }
    return "Defintely Not Equal";
    }
console.log (compareEquality(4,'4'));
// '!=' is the inequality operator, '!==' is the strict inequality operator
function testGreaterThan(val){
    if (val>100) {
        return "Over 100";
    }
if (val>10){ // this is a nested if statement
    return "over 10";
}
return "10 or under";
}
console.log(testGreaterThan(10));
/* what happened here was the function tested if 10 was > 100, since it isn't, 
it went on to test the next part of the function, is 'val' greater than 10. since 10 
is not greater than itself, it went to the last part, which just says if val exists but is 
not greater than 10, return '10 or under'. we could, but do not have to make another 'if'
statement to get a proper return phrase. The code has exhausted all previous commands*/
// greater than or equal to operator '>='
//logical operators
function testLogicalAnd(val) {
    if (val<=50 && val >=25) { //value must be between 25-->50 to get a yes
    return "yes";
     }
      return 'no';
}
console.log(testLogicalAnd(10));
// logical 'OR' operator is two pipes ||
function testLogicalOr (val) {
    if (val <10 || val >20){ // you need to restate the variable name on either side of a "logical or" --> || statement
        return "outside";
    }
    return 'inside';
}
console.log(testLogicalOr(15));
// else statements
function testElse(val){
    var result ='';
    if (val>5){
        result = "Bigger than 5";
            } //can say "else" here
{result = "5 or smaller";}
return result;
}
console.log(testElse(3));
// i didnt even need to put an else statement in there but it will work with one
//
//practice date 8.30.22 21:00
//

// Else If lesson
function testElseIf(val) {
    if (val>10) {
        return "Greater than 10";
    } else if (val<5){
        return "smaller than 5";
    }// else
    {
    return "Between 5 and 10";
    }
}
  console.log(testElseIf(8));
// watch your capitalization 
/* make sure the statement order makes sense, dont ask for "greater than 5" before "greater than 10" 
because the method will stop at 5 */

/* function functionName(variablekeyword){
    if (condition){
        return "desired Message 1";
    }   else if (condition2){
        return "desired Message 2";
    }  else if (condition3){
     return "final message";
    }
    } */
    
 function loveTest(amor){
    if (amor>= 10){    // here we use greater than or equal to 
        return "obsessed";
    }   else if ( amor > 5){
        return "Number 1 fan";
    }  else if (amor < 5 && amor>3){
     return "they aight";
    } else  {
        return "cabbage"        
    }
    } 
    console.log (loveTest(4));

// Coding javascript 9.5.22 6:37 pm 

// Golf game, 1:27 mins into video
//Create an array for the names that will be assigned to scores
var names = ["hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home"]
function golfScore (par, strokes) {
    if (strokes == 1) {
        return names [0]
    } else if (strokes <= par -2){
    return names [1];
}  else if (strokes == par -1){
return names [2];
} else if (strokes == par){
return names [3];
}  else if (strokes == par +1){
return names [4];
}else if (strokes == par +2){
return names [5];
}else if (strokes >= par +3){
return names [6];
}}
console.log (golfScore(7, 6));



// Create an multi-line comment with a table of commands
/* 
Strokes  Return 
1          "Hole-in-one!"
<= par -2   "Eagle"
== par - 1      "Birdie"
par         "Par"
Par + 1     "Bogey"
Par + 2     "Double Bogey"
>= Par + 3     "Go Home" */

// Switch statement
function caseInSwitch(val) {
    var answer ="";
    switch(val) {
       case 1:
        answer = 'alpha';
        break;
       case 2:
        answer = 'beta';
        break;
       case 3:
        answer = 'gamma';
        break;
       case 4:
        answer = 'delta';
    }
    return answer;
}
console.log(caseInSwitch(2));
// second way to use a switch statement from Mozilla
const expr = 'Oranges';
switch (expr) {
    case 'Oranges':
        console.log('Oranges are $0.59 a pound.');
        break;
        case 'Mangoes':
        case 'Papayas':
            console.log('Mangoes and papayas are $2.79 a pound.');
            break;
        default:
            console.log('Sorry, we are out of ${expr}.');
}
//This function works by what you write into the const expr!!! not by a console.log at the end


//coding practice 9.6.22 from video free code camp

// default option in a switch statement

function switchOfStuff(val) {
    var answer = "";
    switch (val) {
        case "a":
            answer = "apple";
            break;
case "b" :
    answer = "bird";
break;
case "c":
    answer = "cat";
break;
default:
answer = "stuff";
break;
    }
return answer;
}

console.log(switchOfStuff("a"));

//another example of switch

function sequentialSizes(val) {
    var answer = "";
switch(val) {
    case 1:
    case 2:
    case 3:
        answer = "Low";
    break;
case 4:
case 5:
case 6:
    answer = "Mid";
    break;
case 7:
case 8:
case 9:
    answer = "High";
    break;
}
return answer;
}

console.log(sequentialSizes(4))

// Replacing if else statement with switch
function chainToSwitch(val) {
    var answer ="";

if (val ==="bob"){
    answer = "Marley";
} else if (val===42){
    answer = "The Answer";
} else if (val ===1){
    answer ="There is no #1";
} else if (val===99){
    answer = "Missed me by this much!";
} else if (val ===7){
    answer = "Ate Nine";
}
return answer; // if you forget to write the return statement the result will be undefined
}
console.log(chainToSwitch(1));

// Rewrite this code using switch(val){}
function newChainToSwitch(val) {
    var answer ="";
switch(val){
case "bob":
    answer: "Marley";
    break;
 case 42:
 answer = "The Answer";
    break;
case 1:
answer="There is no #1";
    break;
case 99:
answer = "Missed me by this much!";
    break;
case 7:
answer = "Ate Nine";
    break;
}
return answer;
}

console.log(newChainToSwitch(99));

// Returning boolean Values from functions
//all comparison operators return a boolean, true or false, value
function isLess(a,b) {
    if (a<b) {
    return true;
    }else {
    return false;
    }
    }
console.log(isLess(16,100));
// Rewrite this to be more efficient
function isveryLess(a,b){
    return (a<b);
}
console.log(isveryLess(50,10));
// Returning Early patterns from functions
function abTest(a,b) {
    if (a<0 || b<0){
        return "no negative numbers allowed";
} 
return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b),2));
} // Math.pow () method returns the value of a base raised to a power
// Math.pow(x,y) = x^y
//math.round() returns the value of a number rounded to the nearest integer
// math.sqrt returns the square root of a number
/* so this function takes the square root of a and adds it to the square root
of b, then squares that sum (the 2), then it rounds that number to the nearest integer*/
console.log(abTest(2,0));
console.log(abTest(2,-1));
/* if we ran the function without the first return statement parameters, once it 
realized there was a negative number and tried to take the square root, it would say NaN*/


// card counting
var count = 0;
 function cc(card){
    switch(card) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count ++;
        break;
    case 10:
    case"J":
    case "Q":
    case "K":
    case "A":
    count --;
    break;
     }
     var holdbet = "Hold"
     if (count>0) {
        holdbet = "Bet"
     }
    return count + " " + holdbet;
 }

 cc(2); cc(4); cc(8); cc('A'); cc("A"); // you can see using single or double quotes to pass in a value into our function does not make a difference
 console.log(cc("K"));
 
 // Objects , 1 hr 49 mins 9.8.22 javascirpt video

 //How to build a property
 var ourDog = { 
    "name": "Hunter",
    "legs": 4,
    "tails": 9,
    "friends":[] // this is an empty array, has no values in it
 };

 // how to access properties
 var dogTails = ourDog.tails;
 console.log(dogTails);
// to access properties that have a space in them, brackets are required. Brackets can be used for numbers too

var testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    'the drink': "Water"
};

var entreeValue = testObj["an entree"];
var drinkValue = testObj['the drink'];
console.log(entreeValue);
// here we set a variable to equal one of the properties in the object.
// This doesn't change that property, but creates a link that we can reference put inputing that variable into the object

var chargerPorts = {
    "Iphone":"Iphone uses Lightning",
    "Android":"Android uses USB C",
    "droidGlobal":"Droid Global uses MicroUSB",
};
// here, phoneMake is the variable we are telling our object what we chose for our phone make
var phoneMake = "Android";
var charger = chargerPorts[phoneMake];
console.log(charger);

// changing properties in objects is done using equals assignment operator
var ourNewDog = { 
    "name": "Hunter",
    "legs": 4,
    "tails": 9,
    "friends":1 };
    ourNewDog.name = "Frank";
    console.log(ourNewDog.name);
// you can add new properties to an object by dot or bracket notation then an equals
var ourNewDog = { 
    "name": "Hunter",
    "legs": 4,
    "tails": 9,
    "friends":1 };
    console.log(ourNewDog.name);
    /* you'll notice in the terminal that since i redeclared ourNewDog object but changed
    the name property back to Hunter, it appears as Hunter */
    ourNewDog['food']= "Kibbles"; // make sure not to put a dot AND a bracket
    console.log(ourNewDog.food);
// Delete a property from an object
delete ourNewDog.tails;
console.log(ourNewDog.tails); // comes back as undefined
// 9.9.22 javascript - Lookup in javascript

function phoneticLookup(val){
var result = "";
var lookup = {  //don't forget to use an equal sign to create the object within the function
    "alpha":"Adams",
    "bravo":"Boston",
    "charlie":"Chicago",
    "delta":"Denver",
    "echo":"Easy",
    "foxtrot":"Frank"
};
result = lookup[val];
return result;
};
console.log(phoneticLookup("foxtrot")); //when console.loging a part of an object use parentheses

// checking if an object has a property
var myObj = {
    gift:"pony",
    pet:"kitten",
    bed:"sleigh",
};

function checkObj(checkProp) {
    if (myObj.hasOwnProperty(checkProp)) { //hasownproperty method
        return myObj[checkProp];
    } else {
        return "Not Found"
        }
    };
    console.log(checkObj("gift"));
    console.log(checkObj("hello"));

    // 9.10.22 practice

    var myStuff ={
 "room": {
    "closet": {
        "rack":"shirts",
        "tubs":"winter clothes"
    },
    "desk":{
        "drawer":"books"
    }
 }
};

var tubContents = myStuff.room.closet.tubs;
//now add a section to the myStuff object
myStuff.room["under bed storage"] = "toys" 
/* if there was a property already called "under bed storage", we would have changed it */
var underBedStorage = myStuff.room["under bed storage"]; 
console.log(tubContents);
console.log(underBedStorage); // shows toys

// accessing nested arrays ------------------------
var myPlants = [  // this is an array with objects, element 0= Flowers, element 1 = trees
    {
    type: "flowers",
    list: [
        "rose",
        "tulip",
        "dandelion",
    ]
    }, // end of the flowers object USE A COMMA NOT A SEMICOLON
    {
type:"trees",
list:[
    "fir",
    "pine",
    "oak",
    "birch"
]      
    }  // end of the trees object
]; // end of the array myPlants

var secondTree = myPlants[1].list[1]; 
/* set up a variable to represent the property you want to see, use = operator
myPlants array [] bracket notation
"." dot notation for the object
[] brackets again to access the list array
"1" for the 2nd item */
console.log(secondTree); // returns pine 







// Record Collection
var collection = {  // create an object called collection
    "Genre1":"NuMetal",
    "NuMetal": {       // has multiple properties
        "Artists":{
    "System of a Down": {
        "albums": {
     "Steal This Album!":[
    "Chic 'N' Stu",
    "Innervison",
    "Bubbles",
    "Boom!",
    "Nuguns",
    "A.D.D.(American Dream Denial)",
    "Mr Jack",
    "I-E-A-I-A-I-O",
    "36",
    "Pictures",
    "Highway Song",
    "Fuck the System",
    "Ego Brain",
    "Thetawaves",
    "Roulette",
    "Streamline"]
}
}
}
}
};
/* Second genre
"Genre2":"Heavy Metal",   
"Heavy Metal": {
    // here the artist1 element is missing
     "album":"City of Evil",
     
     "tracks":[
        "Beast and the Harlot",
        "Burn it Down",
        "Blinded in Chains",
        "Bat Country",
        "Trashed and Scattered",
        "Seized the Day",
        "Sidewinder",
        "The Wicked End",
        "Strength of the World",
        "Betrayed",
        "M.I.A"]  
*/
var collectionCopy =JSON.parse(JSON.stringify(collection));

function updateRecords(Genre,Artists,Artist,Song){ //pass in the id, property, value and update the record collection
     if (Artist ==="") {
        delete collection[Genre][Artists][Artist];
     }
    /* }  else if (prop === "") {
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    }   */
    else if (Artist.length === 0) {
        collection[Genre][Artists][Artist] =''
    }
    /* }  else {
        collection[id][prop] = value; */
                                    // if we have an empty string for the value it should delete that property
                                        // if we have a property of tracks, instead of changing all tracks, it should add it onto the end
    return collection;
};

console.log(updateRecords("NuMetal","Artists","Deftones"));
// now figure out how to add artist but put it in the position above tracks

// Hotel example from javascript book Duckett 9.16.22
var hotel = {
    name: 'Quay',
    rooms: 40,
    booked: 25,
    checkAvailability: function() { 
        return "Rooms Available:"+ " "+ (this.rooms - this.booked);
    } 
}
var hotelName =hotel.name;
console.log(hotelName);

console.log(hotel.checkAvailability());
// to access the function that is associated with checkAvailability, you need to state "()"
// we gave this function the Parameters of rooms and booked#. This gives us a return value of the balance of the rooms left







// Iternate with While Loops
var myLoopArray = [];
var i = 0;
while (i<5) {
 myLoopArray.push(i);   
i++;
}
console.log(myLoopArray); /*notice that the array was EMPTY when we started. The loop pushed i onto 
the array FIRST, then incremented, then pushed it, then incremented 1-->2, then ect.
*/

var acceptedAges = [];
var catAge = 5;
while (catAge<10 || catAge==10) {
    acceptedAges.push(catAge);
    catAge++; 
}
var catMessage = "Cats are accepted at these ages:"
console.log(catMessage);
console.log(acceptedAges);

// Created a new branch js_youtube_practice



