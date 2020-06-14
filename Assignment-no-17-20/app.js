// Task 3
for (var i = 0; i<=10; i++){
    document.write(i + "<br>");
}
document.write("<br><br>");  

// Task 4
var tableNum = prompt("Enter a num to shw its multiplication table:");
var tableLength = prompt("Enter length multiplication table:");
var ans;
for (var i = 1; i <= tableLength; i++){
    ans = tableNum * i;
    document.write(tableNum + " x " + i + " = " + ans + "<br>");
}
document.write("<br><br>");  

// Task 5
var fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry'];
for (var i = 0; i <= fruits.length-1; i++){
    document.write(fruits[i] + "<br>");
}
for (var i = 0; i <= fruits.length-1; i++){
    document.write("Element at index " + i + " is " + fruits[i] + "<br>");
}
document.write("<br><br>");  


// Task 6
document.write("Reverse: <br>");
var arr = [0,1,2,3,4,5,6,7,8,9,10];
arr.reverse();
document.write(arr + "<br>");

document.write("<br><br>");  

document.write("Even: <br>");
var arr2 = [0,1,2,3,4,5,6,7,8,9,10];
for(var i = 0; i <= arr2.length-1; i = i+2){
    document.write(arr2[i] + ",");
}

document.write("<br><br>");  

document.write("Odd: <br>");
var arr2 = [0,1,2,3,4,5,6,7,8,9,10];
for(var i = 1; i <= arr2.length-1; i = i+2){
    document.write(arr2[i] + ",");
}
document.write("<br><br>");  

// Task 7
A = ["cake", "apple pie", "cookie", "chips", "patties"];
var search = prompt("Welcome to ABC Bakery! What do you want to order");
if (A.indexOf(search) !== -1){
    document.write(search + " is available at Index " + A.indexOf(search) + " in our bakery. <br>");
}else {
    document.write(search + " is not available " + " in our bakery. <br>");
}
document.write("<br><br>");  

// Task 8
var arr = [24, 53, 78, 91, 12];
largest = arr[0];
for(var i = 0; i <= arr.length-1; i++){
    if(arr[i] > largest){
        largest = arr[i];
    }
}
document.write("Largest Number is: " + largest);
document.write("<br><br>");  

// Task 9
var arr = [24, 53, 78, 91, 12];
var smallest = arr[0];
for(var i = 0; i <= arr.length-1; i++){
    if(arr[i] < smallest){
        smallest = arr[i];
    }
}
document.write("Smallest Number is: " + smallest);
document.write("<br><br>");

// Task 10
for (var i = 1; i <=100; i++){
    if(i % 5 === 0){
        document.write(i + ", ");
    }
}
document.write("<br><br>");  

