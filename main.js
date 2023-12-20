function isPalindrome(str) {
    str = str.toLowerCase();
    var len = str.length;
    for (var i = 0; i < len/2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

function isPalindromeUpdated(str) {
    str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    var len = str.length;
    for (var i = 0; i < len/2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

function longestPalindromeLength(str) {
    const len = str.length;
    if (len === 0) return "";
    let start = 0; 
    let maxLength = 1;
    for (let i = 0; i < len; i++) {
        for (let j = i + maxLength; j < len; j++) {
            const newStr = str.substring(i, j + 1);
            if (isPalindromeUpdated(newStr)) {
                if (newStr.length > maxLength) {
                    start = i;
                    maxLength = newStr.trim().length;
                }
            }
        }
    }

    return maxLength;
}

console.log(isPalindrome("RAcecar"));
console.log(isPalindromeUpdated("nurses run")); 
console.log(longestPalindromeLength("asdffffgh")); 
console.log(longestPalindromeLength("that is a nice race car"));