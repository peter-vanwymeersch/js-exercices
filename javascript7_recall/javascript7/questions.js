var selectElementsStartingWithA = function(array) {
    let arrayA = [];
    for (let i = 0; i < array.length; i++) {
        array[i].toLowerCase();
        if ((array[i].charAt(0)) == 'a') {
            arrayA.push(array[i]);
        }
    }
    return arrayA;
}

var selectElementsStartingWithVowel = function(array) {
    let arrayVowel = [];
    let vowel = "aeiouAEIOU";
        
    for (let i = 0; i < array.length; i++) {
        if (vowel.indexOf(array[i].charAt(0)) >= 0) {
            arrayVowel.push(array[i]);
        }
    }
    return arrayVowel;
}

var removeNullElements = function(array) {
    let removeNull = [];
    
    for (let i = 0; i < array.length; i++) {
        if (array[i] != null) {
            removeNull.push(array[i]);
        }
    }
    return removeNull;
}

var removeNullAndFalseElements = function(array) {
    let removeNull = [];
    
    for (let i = 0; i < array.length; i++) {
        if ((array[i] !== null) && (array[i] !== false)) {
            removeNull.push(array[i]);
        }
    }
    return removeNull;
}

var reverseWordsInArray = function(array) {
    let revWord = [];
    
    for (let i = 0; i < array.length; i++) {
        revWord.push(array[i].split("").reverse().join(""));
    }
    return revWord;
}

var everyPossiblePair = function(array) {
    return 'Write your method here';
}

var allElementsExceptFirstThree = function(array) {
    return 'Write your method here';
}

var addElementToBeginning = function(array, element) {
    return 'Write your method here';
}

var sortByLastLetter = function(array) {
    return 'Write your method here';
}

var getFirstHalf = function(string) {
    return 'Write your method here';
}

var makeNegative = function(number) {
    return 'Write your method here';
}

var numberOfPalindromes = function(array) {
    return 'Write your method here';
}

var shortestWord = function(array) {
    return 'Write your method here';
}

var longestWord = function(array) {
    return 'Write your method here';
}

var sumNumbers = function(array) {
    return 'Write your method here';
}

var repeatElements = function(array) {
    return 'Write your method here';
}

var stringToNumber = function(string) {
    return 'Write your method here';
}

var calculateAverage = function(array) {
    return 'Write your method here';
}

var getElementsUntilGreaterThanFive = function(array) {
    return 'Write your method here';
}

var convertArrayToObject = function(array) {
    return 'Write your method here';
}

var getAllLetters = function(array) {
    return 'Write your method here';
}

var swapKeysAndValues = function(object) {
    return 'Write your method here';
}

var sumKeysAndValues = function(object) {
    return 'Write your method here';
}

var removeCapitals = function(string) {
    return 'Write your method here';
}

var roundUp = function(number) {
    return 'Write your method here';
}

var formatDateNicely = function(date) {
    return 'Write your method here';
}

var getDomainName = function(string) {
    return 'Write your method here';
}

var titleize = function(string) {
    return 'Write your method here';
}

var checkForSpecialCharacters = function(string) {
    return 'Write your method here';
}

var squareRoot = function(number) {
    return 'Write your method here';
}

var factorial = function(number) {
    return 'Write your method here';
}

var findAnagrams = function(string) {
    return 'Write your method here';
}

var convertToCelsius = function(number) {
    return 'Write your method here';
}

var letterPosition = function(array) {
    return 'Write your method here';
}
