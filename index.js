/* // let myName = "Shivani";
// let yourName = prompt ("What is your name?");
// alert("My name is " + myName + " welcome to my course " + yourName + "!"); */

/* gamelevel
let gameLevel = 1;
gameLevel = 2;
gameLevel = 3;
alert ("Your level is currently : " + gameLevel);
 */


/* var,let,const rules
let myName = "Shivani"
let myVar = "abc"
let my123 = 123
let my_name = "Shivani"
let userScoreFinal = 12 */

/* Greeing Popup
let message = "Hello";
let name1 = "Shivani";
alert(message + " there, " + name1); */

/*String Lengths
alert(prompt("Tweet now??").slice(0,140));
let tweet = prompt("tweet now?");
let countTweet = tweet.length;
let remainTweet = 200 - countTweet;
let tweetUnder140 = tweet.slice(0,140);
alert(tweetUnder140);
console.log('The length of the tweet is ' + countTweet + ' words and the remaining words left is ' +  remainTweet); */

/* //to upper case
let name1 = "shivani";
let name2 = "Kalai";
name1 = name1.toUpperCase();
name2 = name2.toLowerCase();
console.log(name1,name2); */

/* //to upper case
let letter = prompt("What is your name");
let firstLetter = letter.slice(0,1);
console.log(firstLetter); //First letter

firstLetter = firstLetter.toUpperCase();
console.log(firstLetter); //Capitalize first letter

let remainLetter = letter.slice(1);
console.log(remainLetter);//Remain letter

remainLetter = remainLetter.toLowerCase();
console.log(remainLetter);//Loweritalize remain letter

let Greeing = firstLetter + remainLetter;//Greeing

alert("Hello " + Greeing);//Output  */




 /* // If your Dog is a human which age would?
 let dogAge = prompt("What is your Dog age?");
 console.log(dogAge);//Dog age

 humanAge = (dogAge - 2) * 4 + 21; // Doing Math

 alert("If your dog was a human it age would be " + humanAge)//result */

  //funtions
/*  function getMilk(money){
    console.log("Leave house");
    console.log("Move right");
    console.log("Move right");
    console.log("Move up");
    console.log("Move up");
    console.log("Move up");
    console.log("Move up");
    console.log("Move right");
    console.log("Move right");
    
    let numberOfBottes = Math.floor(money / 1.5);

    console.log("Buy " + numberOfBottes + " bottes of milk");

    console.log("Move left");
    console.log("Move left");
    console.log("Move down");
    console.log("Move down");
    console.log("Move down");
    console.log("Move down");
    console.log("Move left");
    console.log("Move left;");
    console.log("Enter house");
    return money % 15; 
}

let change = getMilk(20);//I gave ten Euro one botte of milk is 1.5 euro so it can buy six bottes of milk. */ 
//console.log(change);


/* function lifeInWeeks(age) {
    
    var age = prompt("What is your age?");
    var years = 90 - age;
    var monats = years * 12;
    var weeks = years * 52;
    var days = years * 365;
    
    alert("You have " + days + " days," + weeks + " weeks," + monats + " monats," + years + " years left.");
}
lifeInWeeks(); */


//Love calc
function lovecalc(){
let name = prompt("What is your name?");
let cruschName = prompt("What is your crusch name?");

let random = Math.floor(Math.random() * 100)+ 1;
console.log(random);

alert(name + " " + cruschName + " " + "Love " + random+ "%");
}

lovecalc();