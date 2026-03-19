var students = [];
function addStudent() {
    var name = document.getElementById("name").value;
    var roll = document.getElementById("roll").value;
    var math = parseInt(document.getElementById("math").value);
    var science = parseInt(document.getElementById("science").value);
    var english = parseInt(document.getElementById("english").value);
    var student = {
        name: name,
        roll: roll,
        math: math,
        science: science,
        english: english
    };
    students.push(student);
    alert("Student Added");
}
function displayStudents() {
    var text = "";
    for (var i = 0; i < students.length; i++) {
        text = text + "Name: " + students[i].name + "<br>";
        text = text + "Roll: " + students[i].roll + "<br>";
        text = text + "Math: " + students[i].math + "<br>";
        text = text + "Science: " + students[i].science + "<br>";
        text = text + "English: " + students[i].english + "<br><br>";

    }
    document.getElementById("output").innerHTML = text;
}
function showTotals() {
    var text = "";
    for (var i = 0; i < students.length; i++) {
        var total = students[i].math + students[i].science + students[i].english;
        text = text + students[i].name + " Total Marks: " + total + "<br>";
    }
    document.getElementById("output").innerHTML = text;
}
function showAverage() {
    var text = "";
    for (var i = 0; i < students.length; i++) {

        var total = students[i].math + students[i].science + students[i].english;
        var avg = total / 3;

        text = text + students[i].name + " Average: " + avg + "<br>";
    }
    document.getElementById("output").innerHTML = text;
}
function topStudents() {
    var text = "";
    for (var i = 0; i < students.length; i++) {
        var total = students[i].math + students[i].science + students[i].english;
        var avg = total / 3;
        if (avg > 80) {
            text = text + students[i].name + " Average: " + avg + "<br>";
        }
    }
    document.getElementById("output").innerHTML = text;
}
function failedStudents() {
    var text = "";
    for (var i = 0; i < students.length; i++) {

        var total = students[i].math + students[i].science + students[i].english;
        var avg = total / 3;

        if (avg < 40) {

            text = text + students[i].name + " Failed (Average: " + avg + ")" + "<br>";
        }
    }
    document.getElementById("output").innerHTML = text;
}
function countStudents() {
    var total = students.length;
    document.getElementById("output").innerHTML =
        "Total Students: " + total;
}