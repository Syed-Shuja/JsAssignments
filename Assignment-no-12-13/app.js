// Task 1
var x = prompt("Enter any num from 65 to 90 or 97 t0 192");
if (x >= 65 && x <= 90){
    alert("The letter is capital.");
} else {
    if (x >= 97 && x <= 122){
        alert("The letter is lowercase.");
    }
}

// Task 2
var x = prompt("Enter First num:");
var y = prompt("Enter Second num:");
if (x > y){
    alert("The larger num is X " + x + "<br>");
}else {
    if (y > x){
    alert("The larger num is Y " + y + "<br>");
    }else {
        if(x === y){
            alert("Both numbers are equal. <br>");
        }
    }
}

// Task 3
var x = prompt("Enter any num:");
if (x < 0) {
    alert("The number is negative.");
}else {
    if (x > 0){
        alert("The number is positive.");
    }else {
        if (x === 0){
        alert("The number is zero.");
        }
    }
}

// Task 4
var c = prompt("Enter any letter");
if (c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u'){
    alert("The letter is a vowel:");
}else {
    alert("The letter is not a vowel:");
}

// Task 5
var p = prompt("Enter your password here:");
var p2 = prompt("Enter your password again:");
if (p2 === ' '){
    alert("Enter your password");
}else{
if (p === p2){
    alert("Correct! The password you entered matches the original password");
}else {
    alert("Incorrect Password:");
}
}

// Task 6
var greeting; 
var hour = 13; 
if (hour < 18) 
{ greeting = "Good day"; 
}else {
    greeting = "Good evening";
     }

// Task 7
var time = prompt("Enter time in 24 hours format:");
if (time >= 0000 && time < 1200){
    alert("Good Morning!");
}else {
    if (time >= 1200 && time < 1700){
        alert("Good Afernoon!");
    }else {
        if(time >= 1700 && time < 2100){
            alert("Good Evening!");
        }else {
            if(time >= 2100 && time <= 2359){
                alert("Good Night!");
            }
        }
    }
}
