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

console.log(isPalindrome("RAcecar"));
console.log(isPalindromeUpdated("nurses run")); 