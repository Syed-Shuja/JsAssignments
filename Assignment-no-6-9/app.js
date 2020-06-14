// Task 1
var a = 10;
document.write("Result: <br>");
document.write("Value of a is: " + a + "<br><br>")
a = ++a;
document.write("Value of ++a is: " + a + "<br>")
document.write("Now the value of a is: " + a + "<br><br>")
a = a++;
document.write("Value of a++ is: " + a + "<br>")
a++;
document.write("Now the value of a is: " + a + "<br><br>")
a = --a;
document.write("The value of --a is: " + a + "<br>")
document.write("Now the value of a is: " + a + "<br><br>")
a = a--;
document.write("Value of a-- is: " + a + "<br>")
a--;
document.write("Now the value of a is: " + a + "<br><br>")

// Task 2
var a = 2, b = 1;
document.write("a is: " + a + "<br>")
document.write("b is: " + b + "<br>")
var result = --a - --b + ++b + b--;
document.write("result is: " + result + "<br><br>");

// --a;  (here first a will be decremented and the value of a becomes 1)
// --a - --b; (1 - 0)
// --a - --b + ++b; (1 - 0 + 1)
// --a - --b + ++b + b--; (1 - 0 + 1 + 1)

// Task 4 (Skiped in assignment file)

// Task 3
var name = prompt("Enter your name");
alert("Welcome " + name);

// Task 5
var num = prompt("Enter any num");
var ans;
for (var i = 1; i <= 10; i++) {
    if (num === "") {
        var num = 5;
        var ans;
        for (var i = 1; i <= 10; i++) {
            ans = num * i;
            document.write(num + "x" + i + "=" + ans + "<br>");
        }
    } else {
        ans = num * i;
        document.write(num + "x" + i + "=" + ans + "<br>");
    }
}

// Task 6
var sub1 = prompt("Enter name of your subject");
var sub2 = prompt("Enter name of your subject");
var sub3 = prompt("Enter name of your subject");
var totalMarks = 100;
var marksSub1 = prompt("Enter your Marks in English");
var marksSub2 = prompt("Enter your Marks in Math");
var marksSub3 = prompt("Enter your Marks in Urdu");
var totalObtMarks = +marksSub1+ +marksSub2+ +marksSub3;
var perSub1 = (marksSub1 / totalMarks) * 100;
var perSub2 = (marksSub2/totalMarks)*100;
var perSub3 = (marksSub3/totalMarks)*100;

document.write("<br><br><br><b>Subject Total Marks Obtained Marks Percentge</b> <br>");
document.write(sub1 + " &nbsp;&nbsp;&nbsp;" + totalMarks + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + marksSub1 + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + perSub1 + "%" + "<br>")
document.write(sub2 + " &nbsp;&nbsp;&nbsp;" + totalMarks + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + marksSub2 + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + perSub2 + "%" + "<br>")
document.write(sub3 + " &nbsp;&nbsp;&nbsp;" + totalMarks + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + marksSub3 + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + perSub3 + "%" + "<br>")
document.write("<b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "300" + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + totalObtMarks + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + perSub1 + "%" + "</b><br>")
