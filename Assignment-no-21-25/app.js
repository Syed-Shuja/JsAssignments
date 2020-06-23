// =========== Task 1 =========
// var fName = prompt("Enter your first name: ");
// var lName = prompt("Enter your last name: ");
// var fullName = fName + lName;
// alert("Welcome dear " + fullName);


// =========== Task 2 =========
// var cellName = prompt("Enter your favorite mobile name: ");
// var len = cellName.length;
// document.write("My favorite phone is: " + cellName + "<br>");
// document.write("Length of string: " + len);


// =========== Task 3 =========
// var name = "Pakistani";
// var n = name.indexOf("n");
// document.write("String: " + name + "<br>");
// document.write("Index of 'n': " + n);


// =========== Task 4 =========
// var name = "Hello World";
// var n = name.lastIndexOf("l");
// document.write("String: " + name + "<br>");
// document.write("Last Index of 'l': " + n);


// =========== Task 5 =========
// var name = "Pakistani";
// var n = name.charAt("3");
// document.write("String: " + name + "<br>");
// document.write("Character at index '3' is: " + n);

// =========== Task 6 =========
// var fName = prompt("Enter your first name: ");
// var lName = prompt("Enter your last name: ");
// var fullName = fName.concat(fName);
// alert("Welcome dear " + fullName);

// =========== Task 7 =========
// var str = "Hyderabad";
// var res = str.replace("Hyder", "Islam");
// document.write("City: " + str + "<br>");
// document.write("After replacement: " + res);

// =========== Task 8 =========
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var res = message.replace(/and/g, "&");
// document.write("Message: " + message + "<br>");
// document.write("After replacement: " + res);

// =========== Task 9 =========
// var numS = "472";
// document.write("Value: " + numS + "<br>");
// document.write("Type: " + typeof(numS) + "<br>");
// var numN = Number("472");
// document.write("Value: " + numN + "<br>");
// document.write("Type: " + typeof(numN) + "<br>");


// =========== Task 10 =========
// var str = prompt("Enter a string");
// document.write("User input: " + str + "<br>");
// var upperCase = str.toUpperCase();
// document.write("Upper case: " + upperCase + "<br>");

// =========== Task 11 =========
// var str = prompt("Enter a string");
// document.write("User input: " + str + "<br>");
// var firstChar = str.slice(0,1);
// firstChar = firstChar.toUpperCase();
// var otherChar = str.slice(1);
// otherChar =  otherChar.toLowerCase();
// var str = firstChar.concat(otherChar);
// document.write("Title case: " + str + "<br>");


// =========== Task 12 =========
// var num = "35.36";
// var num1 = num.slice(0,2);
// var num2 = num.slice(3,5);
// var num4 = num1.concat(num2);
// var number = Number(num4);
// document.write("Number: " + num + "<br>");
// document.write("Result: " + number + "<br>");


// =========== Task 13 =========
// var txt = prompt("Enter your name: ");
// var n;
// for( var i=0; i <= txt.length; i++){
//     n = txt[i].charCodeAt(txt[i]);
//     if(n === 33 || n === 44 || n === 46 || n === 64 ){
//     alert("Please enter a valid user name");
//     }
// }


// =========== Task 14 =========
// var item = prompt("Welcome to our bakery! What do you want to odrer Sir/Ma'am: ");
// var iName = item.toLowerCase();
// var arr = ["cake", "apple pie", "cookie", "chips", "patties"];
// for (var i = 0; i < arr.length; i++){
//     if(arr[i] === iName){
//         alert(iName + " is found " + " at index " + arr.indexOf(iName));
//     }else {
//         alert(iName + " is not available");    
//     }
// }


// =========== Task 15 =========
// var pass = prompt("Enter your password here! ");
// if (pass.length != 6){
//     alert("Enter correct password. ");
// }else{
//     for (var i = 0; i < pass.length; i++){

//     }
// }


// =========== Task 16 =========
// var uni = "University of Karachi";
// var res = uni.split("");
// document.write(res);


// =========== Task 17 =========
// var str = prompt("Enter any string: ");
// var chr = str.charAt(str.length-1);
// document.write("User Input: " + str + "<br>");
// document.write("Last character of input: " + chr);


// =========== Task 18 =========
