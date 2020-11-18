//print 1 to 10 with while
console.log("\n print 1 to 10 with while\n")
var x = 1;
while(x<=10) {
    console.log(x);
    x++;
}

//print 10 to 1 with while
console.log("\nprint 10 to 1 with while\n")
x = 10;
while(x>0) {
    console.log(x);
    x--;
}

//print 5 to 15 using for loop
console.log("\n print 5 to 15 using for loop\n ")
for(var i = 5; i<=15; i++) {
    console.log(i);
}

//print 15 to 10 using for
console.log("\n print 15 to 10 using for \n ")
for(var i = 15; i>9; i--) {
    console.log(i);
}

//print even numbers using while (1 to 10)

console.log("\nPrinting even number between 1 to 10 using while \n")

x = 1;
while(x<=10) {
    if((x%2 == 0)) console.log(x);  
    x++;
}
//print odd numbers using for (1 to 10)
console.log("\nPrinting odd number between 1 to 10 using for \n")
for(var i = 1; (i<11); i++) {
    
    if(i%2 == 1) console.log(i)
} 
//Printing 10 multiples of 4  using while
console.log("\nPrinting 10 multiples of 4  using while \n");
x= 1;
while(x<11) {
    console.log(x * 4);
    x++;
}
//Printing multiplication table of 6
console.log("\n Printing multiplication table of 6\n");
x=1;
while(x<11) {
    console.log(x + " x 6  = " + x*6 );
    x++;
}
//Printing the factors of a given number
console.log("\n Printing the factors of a given number \n ");
x = 24;
findFactors(x);
function findFactors(a) {
    console.log("Factors are ");
    var factor = 1;
    while(factor <= a) {
        if(a % factor == 0) console.log(factor);
        factor++;
    }
}


//reversing the given number
console.log("\n reversing the given number \n ");
x = 123;
reverseDigits(x);
function reverseDigits(a) {
    var reversed = 0;
    while(a!=0) {
        var digit = a % 10;
        reversed = (reversed*10) + digit;
        a = Math.floor(a/10);
    }
    console.log("Reversed Number : " + reversed);
}

//read 5 numbers and print only even numbers
console.log("\n Printing Even numbers from reading input \n") 
var num = [10,30,23,42,99];
printEvenNumbers(num);
function printEvenNumbers(a) {
    for(var i =0; i < a.length; i++) {
        if(a[i] % 2 == 0) console.log(a[i]);
    }
}

//Fibbonacci Series
console.log("\n Printing Fibonacci Series upto 17 \n");
x = 17;
printFibonacci(x);
function printFibonacci(limit) {
    var a1 = 0;
    var a2 = 1;
    var num;
    do {
        console.log(a1);
        num =  a1 + a2; 
        a1 = a2;
        a2 = num;
    
    
    
    }while(a1 < limit);
    
}




//Armstrong Number
console.log("\n Whether the given number is Armstrong number or not \n") 
x = 153;
checkArmstrong(x);
function checkArmstrong(a) {
    var answer = 0 ;
    var given = a;
    console.log("Given " + given)
    while(a!=0) {
        var digit = a % 10;
        console.log(digit);
        answer = answer + (digit * digit * digit);
        a = Math.floor(a/10);

    }
    // console.log(answer)
    if(given === answer) {
        console.log("Given Number is Armstrong");
    } 
    else{
        console.log("Given number is not an armstrong number");
    } 
}
