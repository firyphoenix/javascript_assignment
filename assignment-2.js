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

console.log("\nPrinting 10 multiples of 4  using while \n");
x= 1;
while(x<11) {
    console.log(x * 4);
    x++;
}

console.log("\n Printing multiplication table of 6\n");
x=1;
while(x<11) {
    console.log(x + " x 6  = " + x*6 );
    x++;
}