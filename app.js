//1. 

var firstName = prompt("Enter your first name: ");
var lastName = prompt("Enter your last name: ");
var fullName = firstName + " " + lastName;
alert("Hello! " + fullName);

// 2.

var favMobile = prompt("Enter your favorite mobile phone model: ");
document.write("My favorite phone is: " + favMobile + "<br>");
document.write("Length of string: " + favMobile.length);

//3.
var str = "Pakistani";
var nIndex = str.indexOf("n");
document.write("String: " + str + "<br>");
document.write("Index of ' n ': " + nIndex);

//4.

var str = "Hello World";
var lIndex = str.lastIndexOf("l");
document.write("String: " + str + "<br>");
document.write("Last index of ' l ': " + lIndex);

// 5.

var str = "Pakistani";
var Index = str[3];
document.write("String: " + str + "<br>");
document.write("Character at index 3: " + Index);

//6.

var firstName = prompt("Enter your first name: ");
var lastName = prompt("Enter your last name: ");
var fullName = firstName.concat(lastName);
alert("Hello! " + fullName);

// 7. 
var str = "Hyderabad";
var replaceStr = str.replace("Hyder", "Islam");
document.write("City: " + str + "<br>");
document.write("After replacement: " + replaceStr);

//8. 

var str = "Hyderabad";
var replaceStr = str.replace("Hyder", "Islam");
document.write("City: " + str + "<br>");
document.write("After replacement: " + replaceStr);

//9.

var str = "472";
var num = Number(str);
document.write("value: " + str + "<br>");
document.write("Tpye: " + typeof (str) + "<br>");
document.write("value: " + num + "<br>");
document.write("Tpye: " + typeof (num) + "<br>");

//10.
var str = prompt("Enter Input: ");
document.write("User input: " + str + "<br>");
document.write("Upper case: " + str.toUpperCase())

// 11. 

var str = prompt("Enter Input: ");
var firstChar = str.slice(0, 1);
var otherChar = str.slice(1);
var title = firstChar.toUpperCase() + otherChar.toLowerCase();
document.write("User input: " + str + "<br>");
document.write("Title case: " + title);

//12.

var num = 35.36;
var str = num.toString();
var dotIndex = str.indexOf(".");
str = str.slice(0, dotIndex) + str.slice(dotIndex + 1);
document.write("Number: " + num + "<br>");
document.write("Result: " + str);

//13. 

var username = prompt("Enter your name: ");
var charValue;
for (var i = 0; i < username.length; i++) {
    charValue = username[i].charCodeAt(0);
    if (charValue === 33 || charValue === 44 || charValue === 46 || charValue === 64) {
        alert("Please enter a valid username")
    }
}

//14.

var arr = ["cake", "apple pie", "cookie", "chips", "patties"];
var query = prompt("What do you want to order: ");
query = query.toLowerCase();
var check = false;
for (var i = 0; i < arr.length; i++) {
    if (query === arr[i]) {
        document.write(arr[i] + " is available at index " + i + " in our bakery");
        check = true;
    }
}
if (check === false) {
    document.write("We are sorry. " + query + " is not available in our bakery");
}

//15. 

var password = prompt("Enter your password: ");
var passwordLength = false;
var passwordChar = false;
var passwordInt = false;
var passwordStart = true;

// //Checking for Alphabet
for (i = 0; i < password.length; i++) {
    var charValue = password[i].charCodeAt(0);

    //Checking for UpperCase Letters
    if (charValue >= 65 && charValue <= 90) {
        passwordChar = true;
    }

    //Checking for LowerCase Letters
    else if (charValue >= 97 && charValue <= 122) {
        passwordChar = true;
    }
}

// //Checking for Numbers
for (i = 0; i < password.length; i++) {
    var charValue = password[i].charCodeAt(0);
    if (charValue >= 48 && charValue <= 57) {
        passwordInt = true;
    }
}

// //Checking for first letter
var charValue = password.charCodeAt(0);
if (charValue >= 48 && charValue <= 57) {
    passwordStart = false;
}

// //Checking for Length
if (password.length >= 6) {
    passwordLength = true;
}

if (passwordChar === false || passwordInt === false || passwordLength === false || passwordStart === false) {
    alert("Enter valid Password");
}

else {
    alert("Password Approved");
}

//16.

var str = "University of Karachi";
var arr = str.split("");
document.write(arr)
for (var i = 0; i < arr.length; i++) {
    document.write(arr[i] + "<br>");
}

//17.

var str = prompt("Enter your message: ");
document.write("User Input: " + str + "<br>");
document.write("Last character of input: " + str[str.length - 1]);

//18. 
var str = "the quick brown fox jumps over the lazy dog";
var count = (str.match(/the/g)).length;
document.write("Text: " + str + "<br>");
document.write("There are " + count + " occurrence(s) of the word 'the'");


