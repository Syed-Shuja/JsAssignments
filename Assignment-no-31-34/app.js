// =========== Task 1 =========
// var now = new Date();
// document.write(now);


// =========== Task 2 =========
// var now = new Date();
// var crntMnth = now.getMonth();
// var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Octobar', 'November', 'December'];
// document.write("Current Month: " + months[crntMnth]);


// =========== Task 3 =========
// var now = new Date();
// var crntDay = now.getDay();
// var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
// document.write("Today is: " + days[crntDay]);


// =========== Task 4 =========
// var now = new Date();
// var crntDay = now.getDay();
// if(crntDay === 0 || crntDay === 6){
//     document.write("Its Fun Day");
// }


// =========== Task 5 =========
//  var now = new Date();
//  var crntDate = now.getDate();
//  if (crntDate < 16){
//      document.write("First fifteen days of tha month");
//  }else {
//     document.write("Last fifteen days of tha month");
//  }


// =========== Task 6 =========
// var now = new Date();
// var millSec = now.getTime();
// document.write("Current Date: " + now + "<br>");
// document.write("Elapsed milliseconds since January 1, 1970: " + millSec + "<br>");
// var mins = millSec/(1000*60*60);
// document.write("Elapsed minutes since January 1, 1970: " + mins + "<br>");


// =========== Task 7 =========
//  var now = new Date();
//  var crntHours = now.getHours();
//  if (crntHours < 12){
//      document.write("Its A.M");
//  }else {
//     document.write("Its P.M");
//  }


// =========== Task 8 =========
// var lastDate = new Date("December 31, 2020");
// document.write("Later Date: " + lastDate);


// =========== Task 9 =========
// var previous = new Date("June 18, 2015");
// var now = new Date();
// var millSec1 = now.getTime();
// var millSec2 = previous.getTime();
// var rDays = millSec1 - millSec2;
// var days = rDays/(1000*60*60*24);
// document.write(days + " Days have passed since 1st Ramzan.");


// =========== Task 10 =========
// var refDate = new Date("December 05, 2015");
// var now = new Date("January 01, 2015");
// var millSec1 = now.getTime();
// var millSec2 = refDate.getTime();
// var rSec = millSec2 - millSec1;
// var sec = rSec/(1000*60);
// document.write("On reference date " + refDate + ", " + sec + " Seconds have passed since begning of 2015.");


// =========== Task 11 =========
// var now = new Date();
// document.write("Current Date: " + now + "<br>");
// var hrs = now.getHours();
// var diff = hrs - 1;
// document.write(diff);


// =========== Task 12 =========





// =========== Task 13 =========




// =========== Task 14 =========
// var now = new Date();
// document.write("<b>K-Electric Bill</b> <br><br>");
// document.write("Customer Name: <b>ABC Customer</b> <br>");
// var crntMnth = now.getMonth();
// var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Octobar', 'November', 'December'];
// document.write("Current Month: <b>" + months[crntMnth] + "</b> <br>");
// document.write("Number of Units: <b>410</b> <br>");
// document.write("Charges Per Unit: <b>16</b> <br><br><br>");
// var units = 410;
// var charges = 16;
// var costdd = units*charges;
// document.write("Net amount payable (with due date): <b>" + costdd + "</b> <br>");
// var lPayment = 350;
// document.write("Late Payment surcharge: <b>" + lPayment + "</b> <br>");
// var costad = costdd + lPayment;
// document.write("Gross payable amount (after due date): <b>" + costad + "</b> <br>");
