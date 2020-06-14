// Task 1
var city = prompt("Enter the name of city");
city = city.toLowerCase();
if (city === "karachi") {
    alert("Welcome to the city of lights");
} else {
    alert("Enter Karachi");
}




// Task 2
var gender = prompt("Enter your gender");
gender = gender.toLowerCase();
if (gender === "male") {
    alert("Good Morning Sir!");
} else {
    alert("Good Morning Ma'am");
}




// Task 3
var trafficColor = prompt("Enter traffic signal light color");
trafficColor = trafficColor.toLowerCase();
if (trafficColor === "red") {
    alert("Must Stop");
} else {
    if (trafficColor === "yellow") {
        alert("Ready to Move")
    } else {
        alert("Move now");
    }
}




// Task 4
var x = prompt("Enter remaining fuel in your car");
if (+x < 0.25) {
    alert("Please refill the fuel in your car");
}




// Task 5
var a = 4; 
if (++a === 5) 
{ 
    alert("given condition for variable a is true"); 
}
var b = 82; 
if (b++ === 83) 
{ 
    alert("given condition for variable b is true"); 
}
var c = 12; 
if (c++ === 13) 
{ 
    alert("condition 1 is true"); 
} 
if (c === 13) 
{ 
    alert("condition 2 is true"); 
} 
if (++c < 14) 
{ 
    alert("condition 3 is true"); 
} 
if (c === 14) 
{ 
    alert("condition 4 is true"); 
}
var materialCost = 20000; 
var laborCost = 2000; 
var totalCost = materialCost + laborCost; 
if (totalCost === laborCost + materialCost) 
{ 
    alert("The cost equals"); 
}
if (true) 
{ 
    alert("True"); 
} 
if (false) 
{ 
    alert("False"); 
}
if ("car" < "cat") 
{ 
    alert("car is smaller than cat"); 
}


// Task 6
document.write("<b>Marks Sheet</b><br><br>");
sub1 = prompt("Enter your marks in first subject");
sub2 = prompt("Enter your marks in second subject");
sub3 = prompt("Enter your marks in thirs subject");
totalMarks = prompt("Enter you total Marks");
obMarks = +sub1 + +sub2 + +sub3;
per = (+obMarks / +totalMarks) * 100
document.write("Total Marks" + totalMarks + "<br>");
document.write("Marks Obtained: " + obMarks + "<br>");
document.write("Percentage: " + per + "%<br>");
if (per >= 80) {
    document.write("Grade: A-one<br>");
    document.write("Remarks: Excellent<br>");
}else {
if (per >= 70) {
    document.write("Grade: A<br>");
    document.write("Remarks: Good<br>");
}else {
if (per >= 60) {
    document.write("Grade: B<br>");
    document.write("Remarks: You need to improve<br>");
}else {
if (per < 60) {
    document.write("Grade: Fail<br>");
    document.write("Remarks: Sorry<br>");
}
}
}
}

// Task 7
var x=6;
var y = prompt("Guess the num from 1 to 10");
if (+y === +x ){
    alert("Bingo! Correct Answer");
}else {
    if (+y === +x + 1) {
    alert("Close enough to the corret answer!");
    }else{
        alert ("Wrong answer! Try again");
    }
}


// Task 8
var x = prompt("Enter any number");
if (x%3 === 0){
    alert("Number is Divisible by 3");
}else {
    alert("Number in not Divisible by 3");
}

// Task 9
var x = prompt("Enter any number");
if (x%2 === 0){
    alert("Enterned number is Even");
}else {
    alert("Entered number is Odd");
}

// Task 10
var T = prompt("Enter Temperature from 10 to 40");
if (T > 40) {
    document.write("Its too hot outside.<br>");
}else {
if (T > 30) {
    document.write("The weather today is normal.<br>");
}else {
if (T > 20) {
    document.write("Today's weather is cool.<br>");
}else {
if (T > 10) {
    document.write("OMG! Today's weather is so Cool.<br>");
}
}
}
}

// Task 11
var fNum = prompt("Enter First Number");
var sNUm = prompt("Enter Second Number");
var operator = prompt("Enter any operator (+, - , *, /)");
var ans;
if(operator === '+'){
    ans = fNum + sNUm;
    document.write("The sum of numbers is: " + ans + "<br>");
}else {
    if(operator === '-'){
        ans = fNum - sNUm;
        document.write("The subtraction of numbers is: " + ans + "<br>");
    }else {
        if(operator === '*'){
            ans = fNum * sNUm;
            document.write("The multiplication of numbers is: " + ans + "<br>");
        }else {
            if(operator === '/'){
                ans = fNum / sNUm;
                document.write("The division of numbers is: " + ans + "<br>");
            }
        }
    }
}

