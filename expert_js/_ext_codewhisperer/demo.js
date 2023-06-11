// Given a string S, the task is to find the length of the longest substring of S which contains at least one vowel.
// Examples:
// Input: S = “geeksforgeeks……………………………………………………………………�
// Output: 5
// Explanation: The longest substring of S which contains at least
// one vowel is “eeksforgeeks………………………………………………………………………
//
function  longestSubstring(str) {
    let vowels = "aeiouAEIOU";
    let maxLength = 0;
    let start = 0;
    let end = 0;
    while (end < str.length) {
        if (vowels.includes(str[end])) {
            maxLength = Math.max(maxLength, end - start + 1);
        } else {
            start++;
        }
        end++;
    }
    return maxLength;
}

