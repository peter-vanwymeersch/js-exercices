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
    return array.slice(3);
}

var addElementToBeginning = function(array, element) {
    array.unshift(element);
    return array;
}

var sortByLastLetter = function(array) {
    array.sort(a-b);
    return array;
}

var getFirstHalf = function(string) {
    return string.slice(0, Math.ceil(string.length / 2));
}

var makeNegative = function(number) {
    return -Math.abs(number);
}

var numberOfPalindromes = function(array) {
    let nPalindromes;
    nPalindromes = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] == array[i].split("").reverse().join("")) {
            nPalindromes = nPalindromes + 1;
        };
    }
    return nPalindromes;
}

var shortestWord = function(array) {
    let shortestW;
    shortestW = array[0];
    for (let i = 0; i < array.length; i++) {
        if (shortestW.length > array[i].length) {
            shortestW = array[i];
        };
    }
    return shortestW;
}

var longestWord = function(array) {
    let longesttW;
    longestW = array[0];
    for (let i = 0; i < array.length; i++) {
        if (longestW.length < array[i].length) {
            longestW = array[i];
        };
    }
    return longestW;
}

var sumNumbers = function(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    return sum;
}

var repeatElements = function(array) {
    return array.concat(array);
}

var stringToNumber = function(string) {
    return parseFloat(string);
}

var calculateAverage = function(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    return sum / array.length;
}

var getElementsUntilGreaterThanFive = function(array) {
    let array5 = [];
    let i = 0;
    
    while ((array[i] <= 5) && (i < array.length)){
        array5.push(array[i]);
        i++;
    }
    return array5;
}

var convertArrayToObject = function(array) {
    return 'Write your method here';
}

var getAllLetters = function(array) {
    let arrayAL = [];
    let arrayTemp1 = [];
    let arrayTemp2 = [];

    for (let i= 0; i < array.length; i++) {
        arrayTemp1 = array[i].split("");
        arrayAL = arrayAL.concat(arrayTemp1);
        arrayAL.sort();
    }
    for(i=0; i < arrayAL.length; i++){
        if (arrayTemp2.indexOf(arrayAL[i]) === -1) {
            arrayTemp2.push(arrayAL[i]);
        }
    }
    return arrayTemp2;
}

var swapKeysAndValues = function(object) {
    let obj = {};
    
    for (let key in object) {
        key = object[key];       
        obj[key] = key;
    }
    return obj;
}

var sumKeysAndValues = function(object) {
    let sum;

    sum = 0;
    for (let key in object) {
        sum = sum + object[key] + parseFloat(key);
    }
    return sum;
}

var removeCapitals = function(string) {
    let stringLC = [];
    let temp1 = [];
    let temp2 = [];

    temp1 = string.toLowerCase().split("");
    temp2 = string.split("");
    for (let i = 0; i < string.length; i++) {
        if (temp1[i] == temp2[i]) {
            stringLC.push(temp1[i]);
        }
    }
    return stringLC.join("");
}

var roundUp = function(number) {
    return Math.ceil(number);
}

var formatDateNicely = function(date) {
    let jour;
    let mois;

    jour = date.getDate().toString();
    mois = (date.getMonth() + 1).toString();
    if (jour.length < 2) { jour = '0'+jour;}
    if (mois.length < 2) { mois = '0'+mois;}
    return jour+'/'+mois+'/'+date.getUTCFullYear();
}

var getDomainName = function(string) {
    return string.slice((string.indexOf("@") + 1), string.lastIndexOf("."));
}

var titleize = function(string) {
    return 'Write your method here';
}

var checkForSpecialCharacters = function(string) {
    let i = 0;
    let specialCar = false;

    for (let i = 0; i < string.length; i++) {
        if (((string.toLowerCase().charCodeAt(i) >= 97) && (string.toLowerCase().charCodeAt(i) <= 122)) || 
        ((string.charCodeAt(i) >= 48) && (string.charCodeAt(i) <= 57))) {
        } else { 
            specialCar = true;
        }
    }
    return specialCar;
}

var squareRoot = function(number) {
    return Math.sqrt(number);
}

var factorial = function(number) {
    let result;

    result = 1;
    for (let i = 1; i <= number; i++) {
        result = result * i;
    }
    return result;
}

var findAnagrams = function(string) {
    let anagrams = [];

    for (let i = 0; i < string.length; i++) {
        
    }
    return array;
}

var convertToCelsius = function(number) {
    return Math.ceil((5/9) * (number - 32));
}

var letterPosition = function(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i].toLowerCase().charCodeAt(0) - 96;
    }
    return array;
}
