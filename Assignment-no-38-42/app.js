// =========== Task 1 =========
// var a = prompt("Enter  First value");
// var b = prompt("Enter  Scond value");
// var c;
// function power(){                    // declaring function
//     c = Math.pow(a, b);
//     console.log(c);
// }
// power();                                //calling function


// =========== Task 2 =========
// var b;
// function leap() {
//     var a = prompt("Enter year you want to check");
//     var b = a.slice(2,4);
//     parseInt(b);
//     if(b % 4 === 0){
//         alert("This year is leap year");
//     }else{
//         alert("This year is not leap year");
//     }
// }
// leap();



// =========== Task 3 =========
// var a = prompt("Enter the Value of side a");
// var b = prompt("Enter the Value of side b");
// var c = prompt("Enter the Value of side c");
// var s;
// function sides (){
//     s = (+a + +b + +c)/2
// }
// function  area(){
//     sides();
//     var area = +s*(+s - +a)*(+s - +b)*(+s - +c);
//     console.log(area);
// }
// area();



// =========== Task 4 =========
// var totalMarks = 300;
// var sub1 = prompt("Enter numbers in first subject");
// var sub2 = prompt("Enter numbers in second subject");
// var sub3 = prompt("Enter numbers in third subject");
// var p;
// var average;
// function main(){
//     per();
//     avg();
//     console.log("Percentage = " + p + "%");
//     console.log("Average = " + average);
// }
// function per(){
//     p = ((+sub1 + +sub2 + +sub3)/300)*100;
// }
// function avg(){
//     average = (+sub1 + +sub2 + +sub3)/3;
// }
// main(); 



// =========== Task 5 =========
// var a = prompt("Enter");
// var b = prompt("Enter");
// let c = 0;
// function index(){
//     for(var x = 0; x <= a.length; x++){
//         if (b === a[x]){
//             c = 1;
//             alert(x);
//             break;
//         }   
//     }
//     if (c === 0){
//         alert("Enter valid character");
//     }
// }
// index();



// =========== Task 6 =========
// var a = "A quick brown fox jumps over";
// var b = a.toLowerCase();
// for (let x = 0; x <=25; x++){
//     // if (x <= 25 ){
//         if (b[x] === "a" || b[x] === "e" || b[x] === "i" || b[x] === "o" || b[x] === "u"){
//             b.pop("a", "e", "i", "o", "u");
            
//         }
//     }
// // }

// console.log(b);


// =========== Task 7 =========





// =========== Task 8 =========
// var dist = prompt("Enter the distance in killometers");
// function meters(){
//     var m = +dist / 1000;
//     console.log("Distance in Meters = " + m);
// }

// function centi(){
//     var c = +dist * 100;
//     console.log("Distancce in centimeters = " + c);
// }

// function inches(){
//     var inc = +dist * 39370.1;
//     console.log("Distance in Inches = " + inc);
// }
// function feet(){
//     var f = +dist * 3280.84;
//     console.log("Distance in feet = " + f);
// }

// meters();
// centi();
// inches();
// feet();




// =========== Task 9 =========
// var a = prompt("Enter total working hours");
// var overTime;
// function overTimeCalculation(){
//     overTime = (+a - 40)*12;
//     console.log(overTime);
// }
// if (a > 40){
//     overTimeCalculation();
// }else {
//     alert("No overtime!")
// }


// =========== Task 10 =========
// var amount = prompt("Enter any amount in three digits");
// var b;
// if (amount[1] >= 5){
//     b = amount[1] - 5;
//     console.log("You will have " + amount[0] + " hundred Notes 1 fifty note " + b + " ten notes" );
// }
// else if (amount[1] < 5) {
//     console.log("You will have " + amount[0] + " hundred Notes 0 fifty note " + amount[1] + " ten notes");
// } 
