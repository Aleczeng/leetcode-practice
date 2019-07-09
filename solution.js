// 1. Sum number
var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums.indexOf((target - nums[i]), i + 1) > 0) {
            console.log([i, nums.indexOf((target - nums[i]), i + 1)]);
            return [i, nums.indexOf(target - nums[i])];
        } else {
            console.log("not available");
        }
    }
};

// twoSum([3, 3], 6);

// 7. Reverse Integer
const reverse = inputValue => {
    let isPositive = inputValue > 0;
    let result = parseInt(inputValue.toString().split("").reverse().join(''));
    if (!isPositive) {
        result = -result;
    }
    console.log(result);
};

// reverse(12304);

// 9. Palindrome Number
const isPalindrome = x => {
    if (x > 0) {
        let result = parseInt(x.toString().split('').reverse().join(''));
        return x === result;
    } else return x === 0;
};

// console.log(isPalindrome(120));

// 11. Roman to Integer
// self solution
const romanToInt_1 = s => {
    const table = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
    s = s.split('');
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        let index = table.indexOf(s[i]);
        if (index > -1) {
            if (index === 0) {
                if (table.indexOf(s[i + 1]) === 0 || !s[i + 1]) {
                    result++;
                } else if (table.indexOf(s[i + 1]) < 3) {
                    result--;
                } else {
                    return 'invalid input'
                }
            } else if (index === 1) {
                result = result + 5;
            } else if (index === 2) {
                if (table.indexOf(s[i + 1]) < 3 || !s[i + 1]) {
                    result = result + 10;
                } else if (table.indexOf(s[i + 1]) > 2 && table.indexOf(s[i + 1]) < 5) {
                    result = result - 10;
                } else {
                    return 'invalid input'
                }
            } else if (index === 3) {
                result = result + 50;
            } else if (index === 4) {
                if (table.indexOf(s[i + 1]) < 5 || !s[i + 1]) {
                    result = result + 100;
                } else if (table.indexOf(s[i + 1]) > 4 && table.indexOf(s[i + 1]) < 7) {
                    result = result - 100;
                } else {
                    return 'invalid input'
                }
            } else if (index === 5) {
                result = result + 500;
            } else if (index === 6) {
                result = result + 1000;
            }
        }
    }
    return result;
};

// console.log(romanToInt_1('MCDLXXVI'));

// simple solution
const romanToInt_2 = s => {
    const romanMap = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000};

    let i = s.length;
    let result = 0;

    while (i--) {
        let curr = romanMap[s.charAt(i)];
        let prev = romanMap[s.charAt(i - 1)];
        result += curr;
        if (prev < curr) {
            result -= prev;
            i--;
        }
    }
    return result
};

console.log(romanToInt_2('MCDLXXVIIIII'));
