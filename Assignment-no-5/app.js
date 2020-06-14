// Task 1
var a = 3;
var b = 5;
var c = a+b;
document.write ("Sum of " + a + " and " + b + " is " + c + "<br>");

// Task 2
var a = 3;
var b = 5;
var c = a-b;
document.write ("Subtraction of " + a + " and " + b + " is " + c + "<br>");

var a = 3;
var b = 5;
var c = a*b;
document.write ("Multiplication of " + a + " and " + b + " is " + c + "<br>");

var a = 3;
var b = 5;
var c = a/b;
document.write ("Division of " + a + " and " + b + " is " + c + "<br>");

var a = 3;
var b = 5;
var c = a%b;
document.write ("MOD of " + a + " and " + b + " is " + c + "<br>");

// Task 3
var a;
document.write("<br><br><br>Value after variable declaration is " + a + "<br>" );
a = 4;
document.write("Initial value: " + a + "<br>" );
a = ++a;
document.write("Value after increment is: " + a + "<br>" );
a = a+7;
document.write("Value after additoin is: " + a + "<br>" );
a = --a;
document.write("Value after decrement is: " + a + "<br>" );
a = a%3;
document.write("The reminder is: " + a + "<br><br><br><br>" );

// Task 4
var costPerTicket = 600;
var totalCost = costPerTicket*5;
document.write("Total cost to buy 5 tickets to a movie is: " + totalCost + "PKR<br><br><br>");

// Task 5
var num = 4;
var ans;
for (var i = 1; i<=10 ; i++) {
    ans = num * i;
    document.write(num + "x" + i + "=" + ans + "<br>");
}

// Task 6
var tempCelsius = 25;
var tempFahrenheit = (tempCelsius*(9/5)) + 32;
document.write("<br><br><br>" + tempCelsius + "<sup>o</sup>C is " + tempFahrenheit + "<sup>o</sup>F " );
var tempFahrenheit = 70;
var tempCelsius = (tempFahrenheit-32) * (5/9);
document.write("<br>" + tempFahrenheit + "<sup>o</sup>F is " + tempCelsius + "<sup>o</sup>C <br><br><br>" );

// Task 7
var priceItem1 = 650;
var priceItem2 = 100;
var orderedItem1 = 3;
var orderedItem2 = 7;
var shippingCharges = 100;
document.write("Price of Item 1 is " + priceItem1 + "<br>");
document.write("Quantity of Item 1 is " + orderedItem1 + "<br>");
document.write("Price of Item 2 is " + priceItem2 + "<br>");
document.write("Quantity of Item 2 is " + orderedItem2 + "<br>");
document.write("Shipping Charges " + shippingCharges + "<br>");
var totalCost = priceItem1*orderedItem1+priceItem2*orderedItem2+shippingCharges;
document.write("Total cost of your order is " + totalCost + "<br><br><br>");

// Task 8
var totalMarks= 980;
var obtainedMarks= 804;
var per= (obtainedMarks/totalMarks)*100;
document.write ("Total Marks: " + totalMarks + "<br>");
document.write ("Marks Obtained: " + obtainedMarks + "<br>");
document.write ("Percentage " + per + "%" + "<br><br><br>");

// Task 9
var usDollar = 10;
var saudiriyals = 25;
var dollarRate = 104.80;
var riyalRate = 28;
var totalAmount = (usDollar*dollarRate)+(saudiriyals*riyalRate);
document.write("Total Currency in PKR: " + totalAmount + "<br><br><br>");

// Task 10
var num= 4;
var calc= ((num+5)*10)/2;
document.write("The Result is: " + calc + "<br><br><br>")

// Task 11
var crntYear = 2020;
var birthYear = 1993;
var age1 = 2020-1993;
var age2 = (2020-1993)+1;
document.write("They are either " + age1 + " or " + age2 + " years old" + "<br><br><br>");


// Task 12
var radius = 20;
var c = 2*3.142*radius;
var a = 3.142*radius*radius;
document.write("The circumferencce is: " + c + "<br>");
document.write("The area is: " + a + "<br><br><br>");

// Task 13
var favoriteSnacks = "Chocolate Chips";
var currentAge = 15;
var maxAge = 65;
var perDaySnacks = 3;
var totalSnacks = ((maxAge-currentAge)*365)*3;
document.write("You will need " + totalSnacks + " " + favoriteSnacks + " to last until the ripe old age of " + maxAge + ".<br><br><br>");

