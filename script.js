//Assignment Code
var generateBtn = document.querySelector('#generate');

function generatePassword() {


    var passwordLength = prompt('How long do you want your password?')
    var shouldIncludeLowerCase = confirm('Do you want lowercase letters?');
    var shouldIncludeUpperCase = confirm('Do you want uppercase letters?');
    var shouldIncludeSpecialChars = confirm('Do you want special characters?');
    var shouldIncludeNumbers = confirm('Do you want numbers?');

    // 1. Declare a list of possible characters 

    var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var specialChars = ['!', '@', '#', '>', '%', '(', ')', '*', '/', ';', ',']

    var allowedCharacters = [];

    if (shouldIncludeLowerCase === true) {

        for (var i = 0; i < lowercase.length; i++) {
            allowedCharacters.push(lowercase[i]);
        }

    }
    if (shouldIncludeUpperCase === true) {

        for (var i = 0; i < uppercase.length; i++) {
            allowedCharacters.push(uppercase[i]);
        }

    }
    if (shouldIncludeSpecialChars === true) {

        for (var i = 0; i < specialChars.length; i++) {
            allowedCharacters.push(specialChars[i]);
        }

    }
    if (shouldIncludeNumbers === true) {

        for (var i = 0; i < numbers.length; i++) {
            allowedCharacters.push(numbers[i]);
        }

    }


    // Set password to an empty string by default;
    var password = '';

    // Find 10 random options from our possible characters array
    //    (10 representing the desired length of your password)
    for (i = 0; i < passwordLength; i++) {
        // Get a random character from our possible characters array
        var randomIndex = Math.floor(Math.random() * allowedCharacters.length);
        var randomChar = allowedCharacters[randomIndex];

        // Add that random character to our existing password
        //    example: '' + 'a' ==> 'a'
        //             'a' + 'c' ==> 'ac'
        password = password + randomChar; //can also write like this password += randomChar
    }

    // Log our password into the console
    console.log(password);
    return password; //function run block of code
                        //perform action or calculate values or both
}


//Write password to the #password input
function writePassword() {
    var password = generatePassword(); //
    var passwordText = document.querySelector('#password');

    passwordText.value = password;
}


//Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
// Additions

// 1. Prompt the user for their preferences
// 1. Dynamically set the password length based off user preference
// 2. Dynamically source the possible characters list based off user input
//      What possible ways can you determine the allowed characters
//      based off user preference?
//      BE CREATIVE! Try thinking outside the box on this.

// 3. Writing password result to HTML
// 4. Triggering with a button click
// 5. Add validation! What if the user's requested character count
//    was too low or too high? What if they didn't enter a number?
//    What if they said no to all upper/lowercase, numeric, and
//    special character options? 