//Divisible by 7 or not
console.log("\n Divisible by 7 or not \n")
var x = 300;
if(x % 7) {
    console.log("This number is not divisble by 7");
}
else {
    console.log("This number is divisible by 7");
}

// divisible by 3 or not
console.log("\n divisible by 3 or not\n")
if( !(x % 3)) {
    console.log("This number is divisible by 3");
}
else {
    console.log("This number is not divisible by 3");
}

//Given number is positive or not
console.log("\nGiven number is positive or not\n")
if( x > 0) console.log("Given Number is positive");
else if(x == 0) console.log("Given number is Zero");
else console.log("Give number is negative");


//check number is having 4 at unit's place or not
console.log("\ncheck number is having 4 at unit's place or not\n")
if((x%10) == 4) console.log("This number is having 4 at unit's place");
else console.log("Not 4 at unit's place");

//check number is  3 digit or not
console.log("\ncheck number is  3 digit or not\n")
x = 99;
var condition = x/10;
if(condition >9 && condition<99) console.log("Given number is 3 digit number");
else console.log("Given number is not a 3 digit number");

//check whether the given number is odd or even 
console.log("\ncheck whether the given number is odd or even \n");
if(x % 2 == 0) console.log("Given number is Even");
else console.log("Given number is odd");

//check max between two numbers
console.log("\n check max between two numbers \n")
var num1 = 50;
var num2 =100;
var max = findMax(num1,num2);
function findMax(a,b) {
    if(a>b) return a;
    else return b;
}
console.log(max + "is the greatest between the given two number");


//check min between two numbers
console.log("\n check min between two numbers \n");
var min = findMin(num1, num2);
function findMin(a,b) {
    if(a>b) return b;
    else return a;
}
console.log(min + "is the least between the given two number");


//check max b/w 3 numbers
console.log("\n check max b/w 3 numbers \n")
var num3 = 151;
var max3 = findMax3(num1,num2,num3);

function findMax3(a,b,c) {
    if(a>b) {
        if(a>c) return a;
    }
    else if(b>c) {
        if(b>a) return b;
    }
    else {
        return c;
    }
}
//finding min b/w 3 numbers
console.log("\n finding min b/w 3 numbers \n ")
var min3 = findMin3(num1,num2,num3);

function findMin3(a,b,c) {
    if(a<b) {
        if(a<c) return a;
    }
    else if(b<a){
        if(b<c) return b;
    }
    else return c;
}