// Task 1
var arr = [];
for (var x = 0; x<=10; x++){
    arr[x] = prompt("Enter Student name:");
}

// Task 2
// var arr = [];

// Task 3
// var names = [];

// Task 4
// var nums = [];

// Task 5
// var bol = [];

// Task 6
// var mix = [];

// Task 7
var pakQualifications = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'MPhil', 'PhD'];
document.write("<b>QUalifications: </b><br><br>")
for (i = 0; i <=7; i++){
    document.write(i + ") " + pakQualifications[i] + "<br>");
}

// Task 8
var names = [];
for (i = 0; i <=2; i++){
    names[i] = prompt("Enter Student Names:");
}
var marks = [];
for (i = 0; i <=2; i++){
    marks[i] = prompt("Enter Student marks:");
}
var totalMarks = 500;
var per1 = (marks[0]/totalMarks)*100;
var per2 = (marks[1]/totalMarks)*100;
var per3 = (marks[2]/totalMarks)*100;
document.write("Score of " + names[0] + " is " + marks[0] + " Percentage: " + per1 + "% <br>");
document.write("Score of " + names[1] + " is " + marks[1] + " Percentage: " + per2 + "% <br>");
document.write("Score of " + names[2] + " is " + marks[2] + " Percentage: " + per3 + "% <br>");

// Task 9
var arr = ['red', 'green', 'blue'];
var enterColor = prompt("Enter the color name: ");
arr.unshift(enterColor);
document.write(arr + "<br>");

var arr1 = ['red', 'green', 'blue'];
var enterColor1 = prompt("Enter the color name which will be added in the last: ");
arr1.push(enterColor1);
document.write(arr1 + "<br>");

var arr1 = ['red', 'green', 'blue'];
var enterColor2 = prompt("Enter the first color name: ");
var enterColor3 = prompt("Enter the second color name: ");
arr1.unshift(enterColor2, enterColor3);
document.write(arr1 + "<br>");

arr1.splice(0, 1);
document.write(arr1 + "<br>");

// Task 10
var scores = [320, 230, 480, 120];
document.write("Scores of students: " + scores + "<br>");
scores.sort();
document.write("Ordered Scores of students: " + scores + "<br>");

// Task 11
var cities = ['Karachi', 'Lahore', 'Islamabad', 'Quetta', 'Peshawar'];
document.write("Cities List: <br>" + cities + "<br>");
var city = cities.slice(2,4);
document.write("Selected cities List: <br>" + city + "<br>");

// Task 12
var arr = ["This", " is ", " my ", " cat"];
var joint = arr.join();
document.write(joint + "<br>");

// Task 15
var arr = ['Apple', 'Samsung', 'Motorola', 'Nokia', 'Sony', 'Haier'];
document.write("<select>");
for(var i = 0; i < arr.length; i++){
    document.write("<option>" + arr[i] + "</option>")
}
document.write("</select>");

