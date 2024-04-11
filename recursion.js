/** product: calculate the product of an array of numbers. */

function product(nums, idx=0) {
  if(idx === nums.length) return 1;
  return nums[idx] * product(nums, idx +1)
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, idx = 0, longestSoFar = 0) {
    if (idx === words.length) return longestSoFar; // if the index of the current word is the last in the array, return longestSoFar
    longestSoFar = Math.max(words[idx].length, longestSoFar); // compare the two arguments and assign the one with the greatest numerical value as the longestSoFar
    return longest(words, idx + 1, longestSoFar); // if nothing has been returned in the first line, run the function again at the next index
  }

/** everyOther: return a string with every other letter. */

function everyOther(str, idx = 0, newStr = "") {
  if (idx >= str.length) return newStr; // if curr indx is same as str.length, return the newStr.
  newStr += str[idx]; // add the str[idx] to the newStr
  return everyOther(str, idx + 2, newStr); // call everyOther again, but increment the index by 2.
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, idx = 0) {
  let leftIdx = idx;
  let rightIdx = str.length - idx - 1; //calculates this index by subtracting the current index idx from the length of the string and subtracting 1 to adjust for zero-based indexing.
  if (leftIdx >= rightIdx) return true; // we have reached the middle of the string
  if (str[leftIdx] !== str[rightIdx]) return false; // checking the values of the string
  return isPalindrome(str, idx + 1); //If the characters at the current left and right indices match, the function makes a recursive call to itself, incrementing the index idx by 1.
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = 0) {
  if (idx === arr.length) return -1; //if at final idx, return.
  if (arr[idx] === val) return idx; // if val matches the idx.val, return
  return findIndex(arr, val, idx + 1); // if not, start over and increment idx by one.
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, idx = 0, newStr = "") {
  if (newStr.length === str.length) return newStr; //if at final idx, return.
  newStr += str[str.length - 1 - idx]; //  iterates through str in reverse order, appending each character to newStr.
  return revString(str, idx + 1, newStr); //start over and increment idx by one.
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let stringArr = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") stringArr.push(obj[key]);
    if (typeof obj[key] === "object") stringArr.push(...gatherStrings(obj[key]));
  }
  return stringArr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length) {
  if (left > right) {
    return -1;
  }
  let middle = Math.floor((right + left) / 2);
  if (arr[middle] === val) {
    return middle;
  }
  if (arr[middle] > val) {
    return binarySearch(arr, val, left, middle - 1);
  }
  return binarySearch(arr, val, middle + 1, right);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
