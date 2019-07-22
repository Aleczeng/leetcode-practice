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

// 2. Add Two Numbers

function ListNode(val) {
    this.val = val;
    this.next = null;
}

let l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);

let l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);

const addTwoNumbers = (l1, l2) => {
    let newListNode = {val: 0, next: null};
    let carry = 0;
    let curr = newListNode;
    while (l1 || l2) {
        curr.val += l1 ? l1.val : 0;
        curr.val += l2 ? l2.val : 0;
        carry = Math.floor(curr.val / 10);
        curr.val = curr.val % 10;
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
        curr.next = {val: carry, next: null};
        curr = curr.next;
    }
    if (carry === 0) {
        curr = newListNode;
        while (curr) {
            if (!curr.next.next) {
                curr.next = null
            }
            curr = curr.next;
        }
    }
    return newListNode;
};

// console.log(addTwoNumbers(l1, l2));


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

// console.log(romanToInt_2('MCDLXXVIIIII'));

// 14. Longest Common Prefix

const longestCommonPrefix = strs => {
    if (strs == null || strs.length < 1) {
        return "";
    }
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        console.log(strs[i].indexOf(prefix));
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix.length < 1) {
                return "";
            }
        }
    }
    return prefix;
};

// console.log(longestCommonPrefix(["c","acc","ccc"]));

// 20. Valid Parentheses
const isValidParentheses = s => {
    if (s == null) {
        return false;
    }
    const parenthesesMap = {
        '(': ')',
        '{': '}',
        '[': ']',
    };

    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] in parenthesesMap) {
            stack.push(s[i]);
        } else if (stack.length > 0) {
            let curr = stack.pop();
            if (parenthesesMap[curr] !== s[i]) {
                return false;
            }
        } else {
            return false;
        }
    }
    return stack.length === 0;
};

// console.log(isValidParentheses('([{()()}])'));

// 21. Merge Two Sorted Lists ??????


// let l1 = new ListNode(1);
// l1.next = new ListNode(2);
// l1.next.next = new ListNode(3);
//
// let l2 = new ListNode(1);
// l2.next = new ListNode(3);
// l2.next.next = new ListNode(4);

const mergeTwoLists = (l1, l2) => {
    let newListNode = {
        val: -1,
        next: null
    };
    let curr = newListNode;
    while (l1 && l2) {
        if (l1.val > l2.val) {
            curr.next = l2;
            l2 = l2.next
        } else {
            curr.next = l1;
            l1 = l1.next
        }
        curr = curr.next;
    }
    curr.next = l1 || l2;
    return newListNode.next;
};

// console.log(mergeTwoLists(l1, l2));


// 26. Remove Duplicates from Sorted Array
const removeDuplicates = nums => {
    let prev = 0;
    let curr = 0;
    while (curr < nums.length) {
        if (nums[curr] === nums[prev]) {
            curr++;
        } else {
            prev++;
            nums[prev] = nums[curr];
            curr++;
        }
    }
    console.log(nums);
    return prev + 1;
};
// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

// 27. Remove Element
const removeElement = (nums, val) => {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            nums.splice(i, 1);
            i--;
        }
    }
    console.log(nums);
    console.log(nums.length);
    return nums.length
};

// removeElement([3,2,2,3], 3);

// 28. Implement strStr()
const strStr = (haystack, needle) => {

    if (needle.length === 0) {
        return 0;
    } else if (haystack.length === 0) {
        return -1;
    }

    let i = 0;
    let j = 0;
    while (i < haystack.length) {

        if (needle[j] === haystack[i]) {
            j++;
        }
        i++;
        if (j === needle.length) {
            return i - j;
        }
        if (j !== 0 && needle[j] !== haystack[i]) {
            i = i - j + 1;
            j = 0;
        }

    }
    return -1;
};

// console.log(strStr('mississippi', 'issip'));


// 35. Search Insert Position
const searchInsert = (nums, target) => {
    if (nums.indexOf(target) > -1) {
        return nums.indexOf(target);
    } else {
        let i = 0;
        while (i < nums.length) {
            if (target >= nums[i] && target < nums[i + 1]) {
                nums.splice(i, 0, target);
                return i + 1;
            } else if (target < nums[i]) {
                return i;
            }
            i++;
        }
        return nums.length;
    }
};

// console.log(searchInsert([1, 3, 5, 6], 0));

// 38. Count and Say
const countAndSay = n => {
    let str = '1';
    for (let i = 1; i < n; i++) {
        let strArray = str.split('');
        let count = 1;
        str = '';
        for (let j = 0; j < strArray.length; j++) {
            if (strArray[j] !== strArray[j + 1]) {
                str += count + strArray[j];
                count = 1;
            } else {
                count++;
            }
        }
    }
    return str;
};

// console.log(countAndSay(5));

// 53. Maximum Subarray

const maxSubArray = nums => {
    let maxSum = nums[0];
    for (let i = 0; i < nums.length; i++) {
        let result = 0;
        for (let j = i; j < nums.length; j++) {
            result += nums[j];
            if (result > maxSum) {
                maxSum = result;
            }
        }
    }
    return maxSum;
};

// console.log(maxSubArray([-2, -1]));

// 58. Length of Last Word
const lengthOfLastWord = s => {
    let sArray = s.split(' ');
    let result = 0;
    for (let i = 0; i < sArray.length; i++) {
        if (sArray[i].length > 0) {
            result = sArray[i].length;
        }
    }
    return result;
};

// console.log(lengthOfLastWord('a '));

// 66. Plus One
const plusOne = digits => {
    let j = 1;
    digits[digits.length - j]++;
    while (digits[digits.length - j] === 10) {
        if (digits[digits.length - j - 1]) {
            digits[digits.length - j] = 0;
            digits[digits.length - j - 1]++;
        } else {
            digits[digits.length - j] = 0;
            digits = [1].concat(digits);
        }
        j++;
    }
    return digits;
};

// console.log(plusOne([9, 9]));

// 67. Add Binary
const addBinary = (a, b) => {
    let i = 1;
    let j = 1;
    let result = '';
    let curr = 0;
    while (i < a.length + 1 || j < b.length + 1) {
        curr += i < a.length + 1 ? parseInt(a[a.length - i++]) : 0;
        curr += j < b.length + 1 ? parseInt(b[b.length - j++]) : 0;
        if (curr > 1) {
            curr = curr % 2;
            result = curr.toString() + result;
            curr = 1;
        } else {
            result = curr.toString() + result;
            curr = 0;
        }
    }
    if (curr > 0) {
        result = curr.toString() + result;
    }
    return result;
};

// console.log(addBinary("1111", "1111"));

// 69. Sqrt(x)
const mySqrt = x => {
    if (x < 2)
        return x;
    let result = 0;
    while (result <= x) {
        if (result * result > x) {
            return result - 1
        }
        result++;
    }
};

// console.log(mySqrt(2));

// 70. Climbing Stairs
const climbStairs = n => {
    let resultArray = [0, 1, 2];
    for (let i = 3; i < n + 1; i++) {
        resultArray[i] = resultArray[i - 1] + resultArray[i - 2];
    }

    return resultArray[n];
};

// console.log(climbStairs(5));

// 83. Remove Duplicates from Sorted List

const head = new ListNode(1);
head.next = new ListNode(1);
head.next.next = new ListNode(2);
// console.log(head);

const deleteDuplicates = head => {
    let curr = head;
    while (curr) {
        if (curr.next && curr.val === curr.next.val) {
            curr.next = curr.next.next;
        } else {
            curr = curr.next
        }
    }
    return head
};

// console.log(deleteDuplicates(head));

// 88. Merge Sorted Array
const merge = (nums1, m, nums2, n) => {
    let len = m + n;
    m--;
    n--;
    while (len--) {
        if (n < 0 || nums1[m] > nums2[n]) {
            nums1[len] = nums1[m--];
        } else {
            nums1[len] = nums2[n--];
        }
    }
    return nums1
};
// console.log(merge([1, 2, 3, 0], 3, [2, 5, 6], 3));

// 118. Pascal's Triangle
const generate = numRows => {
    let resultList = [];
    for (let i = 0; i < numRows; i++) {
        let arrayList = [];
        for (let j = 0; j < i + 1; j++) {
            if (j === 0 || j === i) {
                arrayList[j] = 1;
            } else {
                arrayList[j] = resultList[i - 1][j - 1] + resultList[i - 1][j];
            }
        }
        resultList.push(arrayList);
    }
    console.log(resultList);
};

generate(5);
