// Get birthday, month, and year from user
var birthYear = parseInt(prompt ("What is your birth year?"));
var birthMonth = parseInt(prompt("What is your birth month?"));
var birthDay = parseInt(prompt("What is your birth day?"));

// shows details user has entered
document.write("You were born on " + birthDay + "/" + birthMonth + "/" + birthYear + "\n");

// make a variable that adds 100 to birthday, so able to calculate years
var birthyear100 = birthYear + 100;

// get current year, month, and day
var currentYear = new Date().getFullYear();
var currentMonth = new Date().getMonth()+1;
var currentDay = new Date().getDate();

// here we minus one since we want accurate amount
var Yearstogo = birthyear100 - currentYear - 1;

// declare months to go
var Monthstogo;

// here we check if month is less than current month or more than current month
if (birthMonth > currentMonth) {
    Monthstogo = birthMonth - currentMonth;
}
else if (birthMonth < currentMonth) {
    Monthstogo = (birthMonth + 12) - currentMonth;
}
else {
Monthstogo = 1; // this will show up as 0 months when written to document

}

// here we check days to go, by days in different months
switch (currentMonth) {
    case 2: 
    var Daystogo = 28 - birthDay;
    break;
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12: 
    var Daystogo = 31 - birthDay;
    break;
    case 4:
    case 6:
    case 9:
    case 11:
        var Daystogo = 30 - birthDay;
        break;
    default:
        var Daystogo = "error";
        break;
}
// here we check if user enters birthdate as today
if (birthYear == currentYear && birthMonth == currentMonth && birthDay == currentDay) {
    document.write("You will be 100 years old in " + (Yearstogo + 1) + " years");
}
// here we check if user enters birthyear as this year or not 
else {
if (birthYear != currentYear) {
document.write("You will be 100 years old in " + Yearstogo + " years" + " and " + (Monthstogo - 1) + " months" + " and " + Daystogo + " days");
}
else
{
    document.write("You will be 100 years old in " + (Yearstogo +1) + " years" + " and " + (Monthstogo -1)+ " months" + " and " + Daystogo + " days");
}
}