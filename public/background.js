
function getDayOfYear() {
    const now = new Date(); // Get the current date
    const start = new Date(now.getFullYear(), 0, 0); // Get the first day of the year
    const diff = now - start; // Calculate the difference in milliseconds
    const oneDay = 1000 * 60 * 60 * 24; // One day in milliseconds
    const dayOfYear = Math.floor(diff / oneDay); // Calculate the day of the year
    return dayOfYear;
}

console.log(getDayOfYear());  // Outputs the current day of the year




const questions = [
	{
		question:
			"Given an array arr[] of N integers. Find the contiguous sub-array(containing at least one number) which has the maximum sum and return its sum.",
		source: "GeeksforGeeks",
		link_to_solve:
			"https://practice.geeksforgeeks.org/problems/kadanes-algorithm-1587115620/1",
		link_website: "geeksforgeeks",
		topic: "Arrays",
		input: "N = 5, arr[] = {1,2,3,-2,5}",
		output: "9",
		explanation:
			"Max subarray sum is 9 of elements (1, 2, 3, -2, 5) which is a contiguous subarray.",
	},
	{
		question: "Sort an array of 0s, 1s and 2s",
		source: "GeeksforGeeks",
		link_to_solve:
			"https://practice.geeksforgeeks.org/problems/sort-an-array-of-0s-1s-and-2s4231/1",
		link_website: "geeksforgeeks",
		topic: "Arrays",
		input: "N = 5, arr[] = {0, 2, 1, 2, 0}",
		output: "0 0 1 2 2",
		explanation: "0s 1s and 2s are segregated into ascending order.",
	},

	{
		question: "Minimum no. of Jumps to reach end of an array",
		source: "GeeksforGeeks",
		link_to_solve:
			"https://practice.geeksforgeeks.org/problems/minimum-number-of-jumps/0",
		link_website: "geeksforgeeks",
		topic: "arrays",
		input: "N = 11, arr[] = {1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9}",
		output: "3",
		explanation:
			"To reach the end of the array, minimum of 3 jumps are required: 1 -> 3 -> 9 -> 9.",
	},
	{
		question: "Find maximum product subarray",
		source: "GeeksforGeeks",
		link_to_solve:
			"https://practice.geeksforgeeks.org/problems/maximum-product-subarray3604/1",
		link_website: "geeksforgeeks",
		topic: "arrays",
		input: "N = 5, arr[] = {6, -3, -10, 0, 2}",
		output: "180",
		explanation: "The subarray with maximum product is {6, -3, -10}.",
	},
	{
		question: "Find whether an array is a subset of another array",
		source: "GeeksforGeeks",
		link_to_solve:
			"https://practice.geeksforgeeks.org/problems/array-subset-of-another-array/0",
		link_website: "geeksforgeeks",
		topic: "arrays",
		input: "a[] = {11, 1, 13, 21, 3, 7}, b[] = {11, 3, 7, 1}",
		output: "Yes",
		explanation: "Array 'b' is a subset of array 'a'.",
	},
	{
		question: "Smallest Subarray with sum greater than a given value",
		source: "GeeksforGeeks",
		link_to_solve:
			"https://practice.geeksforgeeks.org/problems/smallest-subarray-with-sum-greater-than-x/0",
		link_website: "geeksforgeeks",
		topic: "arrays",
		input: "arr[] = {1, 4, 45, 6, 0, 19}, x = 51",
		output: "3",
		explanation:
			"The subarray {4, 45, 6} has the smallest length and sum greater than 51.",
	},
	{
		question:
			"Given a list of non negative integers, arrange them in such a manner that they form the largest number possible.The result is going to be very large, hence return the result in the form of a string.",
		source: "GeeksforGeeks",
		link_to_solve:
			"https://practice.geeksforgeeks.org/problems/largest-number-formed-from-an-array1117/1",
		link_website: "geeksforgeeks",
		topic: "arrays",
		input: "N = 5, arr[] = {3, 30, 34, 5, 9}",
		output: "9534330",
		explanation: "The largest formed number is 9534330.",
	},
	{
		question: "Find if there is any subarray with sum equal to 0.",
		source: "GeeksforGeeks",
		link_to_solve:
			"https://practice.geeksforgeeks.org/problems/subarray-with-0-sum/0",
		link_website: "geeksforgeeks",
		topic: "arrays",
		input: "arr[] = {4, 2, -3, 1, 6}",
		output: "Yes",
		explanation: "The subarray with sum 0 is {2, -3, 1}.",
	},
	{
		question: "Rotate a matrix by 90 degrees",
		source: "GeeksforGeeks",
		link_to_solve:
			"https://practice.geeksforgeeks.org/problems/rotate-by-90-degree0356/1",
		link_website: "geeksforgeeks",
		topic: "matrix",
		input: "N = 3, matrix[][] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}}",
		output: "3 6 9\n2 5 8\n1 4 7",
		explanation: "The matrix after rotating 90 degrees clockwise.",
	},
	{
		question: "Check whether a String is Palindrome or not",
		source: "GeeksforGeeks",
		link_to_solve:
			"https://practice.geeksforgeeks.org/problems/check-if-strings-are-rotations-of-each-other-or-not-1587115620/1",
		link_website: "geeksforgeeks",
		topic: "strings",
		input: "str = 'malayalam'",
		output: "Yes",
		explanation: "'malayalam' is a palindrome.",
	},
	{
		question:
			"Rearrange characters in a string such that no two adjacent are same.",
		source: "GeeksforGeeks",
		link_to_solve:
			"https://practice.geeksforgeeks.org/problems/rearrange-characters/0",
		link_website: "geeksforgeeks",
		topic: "strings",
		input: "str = 'aaaab'",
		output: "-1",
		explanation:
			"It is not possible to rearrange characters such that no two adjacent characters are same.",
	},
	{
		question: "Print all the permutations of the given string",
		source: "GeeksforGeeks",
		link_to_solve:
			"https://practice.geeksforgeeks.org/problems/permutations-of-a-given-string/0",
		link_website: "geeksforgeeks",
		topic: "strings",
		input: "str = 'ABC'",
		output: "ABC ACB BAC BCA CAB CBA",
		explanation: "All possible permutations of the string 'ABC'.",
	},
	{
		question: "Count All Palindromic Subsequence in a given String.",
		source: "GeeksforGeeks",
		link_to_solve:
			"https://practice.geeksforgeeks.org/problems/count-palindromic-subsequences/1",
		link_website: "geeksforgeeks",
		topic: "strings",
		input: "str = 'abba'",
		output: "4",
		explanation: "The palindromic subsequences are 'a', 'b', 'b', 'abba'.",
	},
	{
		question:
			"Write a program to generate all possible valid IP addresses from given  string.",
		source: "GeeksforGeeks",
		link_to_solve:
			"https://practice.geeksforgeeks.org/problems/generate-ip-addresses/1",

		link_website: "geeksforgeeks",
		topic: "strings",
		input: "str = '25525511135'",
		output: "255.255.11.135 255.255.111.35",
		explanation: "All possible valid IP addresses from the given string.",
	},
	{
		question: "Count of number of given string in 2D character array",
		source: "GeeksforGeeks",
		link_to_solve:
			"https://practice.geeksforgeeks.org/problems/count-occurences-of-a-given-word-in-a-2-d-array/1/",
		link_website: "geeksforgeeks",
		topic: "strings",
		input: "N = 3, M = 3, matrix[][] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}}, str = '8'",
		output: "1",
		explanation:
			"The given string '8' occurs once in the 2D character array.",
	},
	{
		question: "Check if two given strings are isomorphic to each other",
		source: "GeeksforGeeks",
		link_to_solve:
			"https://practice.geeksforgeeks.org/problems/isomorphic-strings/0",
		link_website: "geeksforgeeks",
		topic: "strings",
		input: "str1 = 'aab', str2 = 'xxy'",
		output: "Yes",
		explanation: "The strings 'aab' and 'xxy' are isomorphic.",
	},
	{
		question: "Merge 2 sorted arrays",
		source: "GeeksforGeeks",
		link_to_solve:
			"https://practice.geeksforgeeks.org/problems/merge-two-sorted-arrays-1587115620/1",
		link_website: "geeksforgeeks",
		topic: "searchingAndSorting",
		input: "arr1[] = {1, 3, 5, 7}, arr2[] = {0, 2, 6, 8, 9}",
		output: "0 1 2 3 5 6 7 8 9",
		explanation: "The two sorted arrays merged into one.",
	},
	{
		question: "Write a program to Delete loop in a linked list.",
		source: "GeeksforGeeks",
		link_to_solve:
			"https://practice.geeksforgeeks.org/problems/remove-loop-in-linked-list/1",
		link_website: "geeksforgeeks",
		topic: "linkedlist",
		input: "LinkedList: 1->2->3->4->5->2 (the last node is connected to the second node)",
		output: "1 2 3 4 5",
		explanation: "The loop in the linked list is removed.",
	},
	{
		question: "Reverse a Doubly Linked list.",
		source: "GeeksforGeeks",
		link_to_solve:
			"https://practice.geeksforgeeks.org/problems/reverse-a-linked-list/1",
		link_website: "geeksforgeeks",
		topic: "linkedlist",
		input: "DoublyLinkedList: 1 <-> 2 <-> 3 <-> 4 <-> 5",
		output: "5 <-> 4 <-> 3 <-> 2 <-> 1",
		explanation: "The doubly linked list reversed.",
	},
	{
		question: "Implement 2 stack in an array",
		source: "GeeksforGeeks",
		link_to_solve:
			"https://practice.geeksforgeeks.org/problems/implement-two-stacks-in-an-array/1",
		link_website: "geeksforgeeks",
		topic: "stacks",
		input: "N = 5, arr[] = {5, 2, -1, 0, 3}",
		output: "5 2 -1 0 3",
		explanation: "The two stacks implemented in the array.",
	},
	{
		question: "First negative integer in every window of size 'k'",
		source: "GeeksforGeeks",
		link_to_solve:
			"https://practice.geeksforgeeks.org/problems/first-negative-integer-in-every-window-of-size-k/0",
		link_website: "geeksforgeeks",
		topic: "stacks",
		input: "arr[] = {12, -1, -7, 8, -15, 30, 16, 28}, k = 3",
		output: "-1 -1 -7 -15 -15 0 0",
		explanation: "First negative integer in every window of size 'k'.",
	},
	{
		question: "LRU Cache Implementation",
		source: "GeeksforGeeks",
		link_to_solve:
			"https://practice.geeksforgeeks.org/problems/lru-cache/1",
		link_website: "geeksforgeeks",
		topic: "stacks",
		input: "N = 2, pageRequests = {1, 2, 3, 1, 4, 5}, cacheSize = 3",
		output: "2 2 3 -1 -1 5",
		explanation: "The sequence of cache values based on LRU policy.",
	},
	{
		question: "Implement Stack using Queue",
		source: "GeeksforGeeks",
		link_to_solve:
			"https://practice.geeksforgeeks.org/problems/stack-using-two-queues/1",
		link_website: "geeksforgeeks",
		topic: "stacks",
		input: "N = 5, arr[] = {1, 2, 3, 4, 5}",
		output: "5 4 3 2 1",
		explanation: "The stack implemented using two queues.",
	},
	{
		question:
			"Design a Stack that supports getMin() in O(1) time and O(1) extra space.",
		source: "GeeksforGeeks",
		link_to_solve:
			"https://practice.geeksforgeeks.org/problems/special-stack/1",
		link_website: "geeksforgeeks",
		topic: "stacks",
		input: "N = 5, arr[] = {18, 19, 29, 15, 16}",
		output: "15",
		explanation: "The minimum element in the stack is 15.",
	},
	{
		question: "Implement Queue using Stack",
		source: "GeeksforGeeks",
		link_to_solve:
			"https://practice.geeksforgeeks.org/problems/queue-using-two-stacks/1",
		link_website: "geeksforgeeks",
		topic: "queues",
		input: "N = 5, arr[] = {1, 2, 3, 4, 5}",
		output: "1 2 3 4 5",
		explanation: "The queue implemented using two stacks.",
	},
	{
		question: "Find first non-repeating character in a stream.",
		source: "GeeksforGeeks",
		link_to_solve:
			"https://practice.geeksforgeeks.org/problems/first-non-repeating-character-in-a-stream/0",
		link_website: "geeksforgeeks",
		topic: "queues",
		input: "str = 'aabbcd'",
		output: "a -1 -1 c c d",
		explanation: "The first non-repeating character in each stream window.",
	},
	{
		question: "Find the minimum and maximum amount to buy all N candies",
		source: "GeeksforGeeks",
		link_to_solve:
			"https://practice.geeksforgeeks.org/problems/shop-in-candy-store/0",
		link_website: "geeksforgeeks",
		topic: "greedy",
		input: "N = 4, K = 2, candies[] = {3, 2, 1, 4}",
		output: "3 7",
		explanation: "The minimum and maximum amounts to buy all N candies.",
	},
	{
		question: "Greedy Algorithm to find Minimum number of Coins",
		source: "GeeksforGeeks",
		link_to_solve:
			"https://practice.geeksforgeeks.org/problems/coin-piles/0",
		link_website: "geeksforgeeks",
		topic: "greedy",
		input: "N = 5, coins[] = {25, 10, 5}, V = 30",
		output: "2",
		explanation:
			"The minimum number of coins required to make the value V.",
	},
	{
		question: "Maximize array sum after K negations",
		source: "GeeksforGeeks",
		link_to_solve:
			"https://practice.geeksforgeeks.org/problems/maximize-sum-after-k-negations/0",
		link_website: "geeksforgeeks",
		topic: "greedy",
		input: "N = 5, arr[] = {9, 8, 8, 5}, K = 3",
		output: "32",
		explanation: "The maximum array sum after K negations.",
	},
	{
		question:
			"Program for Least Recently Used (LRU) Page Replacement algorithm",
		source: "GeeksforGeeks",
		link_to_solve:
			"https://practice.geeksforgeeks.org/problems/page-faults-in-lru/0",
		link_website: "geeksforgeeks",
		topic: "greedy",
		input: "N = 9, pages[] = {5, 0, 1, 3, 2, 4, 1, 0, 5}, capacity = 4",
		output: "8",
		explanation:
			"The number of page faults using LRU page replacement algorithm.",
	},
	{
		question:
			"Rearrange characters in a string such that no two adjacent are same",
		source: "GeeksforGeeks",
		link_to_solve:
			"https://practice.geeksforgeeks.org/problems/rearrange-characters/0",
		link_website: "geeksforgeeks",
		topic: "greedy",
		input: "str = 'aaabc'",
		output: "1",
		explanation:
			"The rearranged string where no two adjacent characters are same.",
	},
	{
		question: "Count set bits in an integer",
		source: "GeeksforGeeks",
		link_to_solve:
			"https://practice.geeksforgeeks.org/problems/set-bits0143/1",
		link_website: "geeksforgeeks",
		topic: "bitmanipulation",
		input: "N = 4",
		output: "1",
		explanation: "Number of set bits in the binary representation of N.",
	},
	{
		question:
			"Find the two non-repeating elements in an array of repeating elements",
		source: "GeeksforGeeks",
		link_to_solve:
			"https://practice.geeksforgeeks.org/problems/finding-the-numbers0215/1",
		link_website: "geeksforgeeks",
		topic: "bitmanipulation",
		input: "N = 4, arr[] = {2, 3, 7, 9, 11, 2, 3, 11}",
		output: "7 9",
		explanation: "The two non-repeating elements in the array.",
	},
	{
		question: "Count number of bits to be flipped to convert A to B",
		source: "GeeksforGeeks",
		link_to_solve:
			"https://practice.geeksforgeeks.org/problems/bit-difference/0",
		link_website: "geeksforgeeks",
		topic: "bitmanipulation",
		input: "a = 10, b = 20",
		output: "4",
		explanation: "Number of bits to be flipped to convert A to B.",
	},
	{
		question: "Count total set bits in all numbers from 1 to n",
		source: "GeeksforGeeks",
		link_to_solve:
			"https://practice.geeksforgeeks.org/problems/count-total-set-bits/0",
		link_website: "geeksforgeeks",
		topic: "bitmanipulation",
		input: "N = 4",
		output: "5",
		explanation:
			"Total set bits in the binary representation of numbers from 1 to N.",
	},
	{
		question: "Program to find whether a no is power of two",
		source: "GeeksforGeeks",
		link_to_solve:
			"https://practice.geeksforgeeks.org/problems/power-of-2/0",
		link_website: "geeksforgeeks",
		topic: "bitmanipulation",
		input: "N = 8",
		output: "YES",
		explanation: "The number 8 is a power of 2.",
	},
	{
		question: "Find position of the only set bit",
		source: "GeeksforGeeks",
		link_to_solve:
			"https://practice.geeksforgeeks.org/problems/find-position-of-set-bit3706/1",
		link_website: "geeksforgeeks",
		topic: "bitmanipulation",
		input: "N = 18",
		output: "2",
		explanation:
			"Position of the only set bit in the binary representation of N.",
	},
	{
		question: "Copy set bits in a range",
		source: "GeeksforGeeks",
		link_to_solve:
			"https://practice.geeksforgeeks.org/problems/set-all-the-bits-in-given-range-of-a-number/0",
		link_website: "geeksforgeeks",
		topic: "bitmanipulation",
		input: "N = 17, L = 2, R = 3",
		output: "23",
		explanation: "Number after copying set bits in the range from L to R.",
	},
	{
		question:
			"Divide two integers without using multiplication, division and mod operator",
		source: "GeeksforGeeks",
		link_to_solve:
			"https://practice.geeksforgeeks.org/problems/division-without-using-multiplication-division-and-mod-operator/0/",
		link_website: "geeksforgeeks",
		topic: "bitmanipulation",
		input: "Dividend = 10, Divisor = 3",
		output: "3",
		explanation: "10 divided by 3 equals 3.",
	},
	{
		question:
			"Maximum profit by buying and selling a share at most k times",
		source: "GeeksforGeeks",
		link_to_solve:
			"https://practice.geeksforgeeks.org/problems/maximum-profit4657/1",
		link_website: "geeksforgeeks",
		topic: "dynamicprogramming",
		input: "k = 2, price[] = {10, 22, 5, 75, 65, 80}",
		output: "87",
		explanation:
			"Buy on day 2 (price = 22) and sell on day 3 (price = 5), buy on day 4 (price = 75) and sell on day 6 (price = 80).",
	},
	{
		question: "Maximum profit by buying and selling a share at most twice",
		source: "GeeksforGeeks",
		link_to_solve:
			"https://practice.geeksforgeeks.org/problems/maximum-profit4657/1",
		link_website: "geeksforgeeks",
		topic: "dynamicprogramming",
		input: "price[] = {10, 22, 5, 75, 65, 80}",
		output: "87",
		explanation:
			"Buy on day 2 (price = 22) and sell on day 3 (price = 5), buy on day 4 (price = 75) and sell on day 6 (price = 80).",
	},
	{
		question: "Count All Palindromic Subsequence in a given String",
		source: "GeeksforGeeks",
		link_to_solve:
			"https://practice.geeksforgeeks.org/problems/count-palindromic-subsequences/1",
		link_website: "geeksforgeeks",
		topic: "dynamicprogramming",
		input: "str = 'aab'",
		output: "4",
		explanation:
			"The palindromic subsequences are 'a', 'a', 'b', and 'aa'.",
	},
	{
		question: "Maximum difference of zeros and ones in binary string",
		source: "GeeksforGeeks",
		link_to_solve:
			"https://practice.geeksforgeeks.org/problems/maximum-difference-of-zeros-and-ones-in-binary-string4111/1",
		link_website: "geeksforgeeks",
		topic: "dynamicprogramming",
		input: "str = '11000010001'",
		output: "6",
		explanation:
			"The maximum difference can be achieved by flipping 6 zeros to ones.",
	},
	{
		question: "Find the median of BST in O(n) time and O(1) space",
		source: "GeeksforGeeks",
		link_to_solve:
			"https://practice.geeksforgeeks.org/problems/median-of-bst/1",
		link_website: "geeksforgeeks",
		topic: "trees",
		input: "BST = {6, 3, 8, 1, 4, 7, 9}, N = 7",
		output: "6",
		explanation: "Median of the BST is 6.",
	},
	{
		question: "Find LCA  of 2 nodes in a BST",
		source: "GeeksforGeeks",
		link_to_solve:
			"https://practice.geeksforgeeks.org/problems/lowest-common-ancestor-in-a-bst/1",
		link_website: "geeksforgeeks",
		topic: "trees",
		input: "BST = {5, 3, 6, 2, 4}, Node1 = 2, Node2 = 4",
		output: "3",
		explanation: "Lowest Common Ancestor of nodes 2 and 4 is 3.",
	},
	{
		question:
			"Given an integer n, count the total number of set bits in all numbers from 1 to n.",
		source: "GeeksforGeeks",
		link_to_solve:
			"https://www.geeksforgeeks.org/count-total-set-bits-in-all-numbers-from-1-to-n/",
		link_website: "geeksforgeeks",
		topic: "Bit Manipulation",
		input: "n = 3",
		output: "4",
		explanation: "Total set bits in numbers from 1 to 3: 1 + 1 + 2 = 4.",
	},
	{
		question:
			"Given two integers a and b, count the number of bits needed to be flipped to convert a to b.",
		source: "LeetCode",
		link_to_solve: "https://leetcode.com/problems/number-of-1-bits/",
		link_website: "leetcode",
		topic: "Bit Manipulation",
		input: "a = 10, b = 15",
		output: "4",
		explanation: "To convert 10 to 15, 4 bits need to be flipped.",
	},
	{
		question:
			"Given an integer n, find the next higher number with the same number of set bits.",
		source: "GeeksforGeeks",
		link_to_solve:
			"https://www.geeksforgeeks.org/next-higher-number-with-same-number-of-set-bits/",
		link_website: "geeksforgeeks",
		topic: "Bit Manipulation",
		input: "n = 6",
		output: "9",
		explanation:
			"6 in binary is 0110, next higher number with same set bits is 9 (1001).",
	},
	{
		question: "Given a positive integer, check if it has alternating bits.",
		source: "LeetCode",
		link_to_solve:
			"https://leetcode.com/problems/binary-number-with-alternating-bits/",
		link_website: "leetcode",
		topic: "Bit Manipulation",
		input: "n = 5",
		output: "true",
		explanation: "5 in binary is 101, which has alternating bits.",
	},
	{
		question: "Given a positive integer, reverse its bits.",
		source: "GeeksforGeeks",
		link_to_solve: "https://www.geeksforgeeks.org/reverse-bits/",
		link_website: "geeksforgeeks",
		topic: "Bit Manipulation",
		input: "n = 3",
		output: "3221225472",
		explanation:
			"3 in binary is 11, after reversing it becomes 3221225472.",
	},
	{
		question: "Given a positive integer n, swap consecutive pairs of bits.",
		source: "LeetCode",
		link_to_solve: "https://leetcode.com/problems/reverse-bits/",
		link_website: "leetcode",
		topic: "Bit Manipulation",
		input: "n = 5",
		output: "10",
		explanation:
			"5 in binary is 101, after swapping consecutive pairs of bits it becomes 010, which is 2.",
	},
	{
		question:
			"Given an array of integers, every element appears twice except for one. Find that single one.",
		source: "LeetCode",
		link_to_solve: "https://leetcode.com/problems/single-number/",
		link_website: "leetcode",
		topic: "Bit Manipulation",
		input: "nums = [2,2,1]",
		output: "1",
		explanation: "1 appears only once, others appear twice.",
	},
	{
		question:
			"Given an array of integers, every element appears three times except for one. Find that single one.",
		source: "LeetCode",
		link_to_solve: "https://leetcode.com/problems/single-number-ii/",
		link_website: "leetcode",
		topic: "Bit Manipulation",
		input: "nums = [0,1,0,1,0,1,99]",
		output: "99",
		explanation: "99 appears only once, others appear three times.",
	},
	{
		question:
			"Given an integer array nums where every element appears three times except for one, which appears exactly once. Find the single element and return it.",
		source: "LeetCode",
		link_to_solve: "https://leetcode.com/problems/single-number-iii/",
		link_website: "leetcode",
		topic: "Bit Manipulation",
		input: "nums = [1,2,1,3,2,5]",
		output: "[3,5]",
		explanation: "3 and 5 appear only once, others appear twice.",
	},
	{
		question: "Given an integer n, find whether n is a power of two.",
		source: "LeetCode",
		link_to_solve: "https://leetcode.com/problems/power-of-two/",
		link_website: "leetcode",
		topic: "Bit Manipulation",
		input: "n = 16",
		output: "true",
		explanation: "16 is a power of two.",
	},
	{
		question:
			"Given an integer n, count the number of trailing zeroes in its binary representation.",
		source: "GeeksforGeeks",
		link_to_solve:
			"https://www.geeksforgeeks.org/count-trailing-zeroes-factorial-number/",
		link_website: "geeksforgeeks",
		topic: "Bit Manipulation",
		input: "n = 6",
		output: "1",
		explanation: "6 in binary is 110, it has one trailing zero.",
	},
	{
		question:
			"Given an integer n, find the position of the rightmost set bit.",
		source: "GeeksforGeeks",
		link_to_solve:
			"https://www.geeksforgeeks.org/position-of-rightmost-set-bit/",
		link_website: "geeksforgeeks",
		topic: "Bit Manipulation",
		input: "n = 12",
		output: "3",
		explanation:
			"12 in binary is 1100, rightmost set bit is at position 3.",
	},
	{
		question:
			"Given two integers a and b, find the maximum of two numbers without using if-else or comparison.",
		source: "LeetCode",
		link_to_solve:
			"https://leetcode.com/problems/maximum-of-two-numbers-without-using-comparison/",
		link_website: "leetcode",
		topic: "Bit Manipulation",
		input: "a = 5, b = 7",
		output: "7",
		explanation: "Maximum of 5 and 7 is 7.",
	},
	{
		question:
			"Given a non-empty array of integers, every element appears twice except for one. Find that single one.",
		source: "LeetCode",
		link_to_solve: "https://leetcode.com/problems/single-number-iii/",
		link_website: "leetcode",
		topic: "Bit Manipulation",
		input: "nums = [4,1,2,1,2]",
		output: "4",
		explanation: "4 appears only once, others appear twice.",
	},
	{
		question:
			"Given an array of numbers nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once.",
		source: "LeetCode",
		link_to_solve: "https://leetcode.com/problems/single-number-iii/",
		link_website: "leetcode",
		topic: "Bit Manipulation",
		input: "nums = [1,2,1,3,2,5]",
		output: "[3,5]",
		explanation: "3 and 5 appear only once, others appear twice.",
	},
	{
		question: "Given an integer, reverse its binary representation.",
		source: "LeetCode",
		link_to_solve: "https://leetcode.com/problems/reverse-bits/",
		link_website: "leetcode",
		topic: "Bit Manipulation",
		input: "n = 3",
		output: "3221225472",
		explanation:
			"3 in binary is 11, after reversing it becomes 3221225472.",
	},
	{
		question:
			"Given an array of integers, every element appears thrice except for one, which appears once. Find that single one.",
		source: "LeetCode",
		link_to_solve: "https://leetcode.com/problems/single-number-ii/",
		link_website: "leetcode",
		topic: "Bit Manipulation",
		input: "nums = [0,1,0,1,0,1,99]",
		output: "99",
		explanation: "99 appears only once, others appear thrice.",
	},
	{
		question:
			"Given an array of integers, every element appears three times except for one, which appears exactly once. Find the single element and return it.",
		source: "LeetCode",
		link_to_solve: "https://leetcode.com/problems/single-number-iii/",
		link_website: "leetcode",
		topic: "Bit Manipulation",
		input: "nums = [1,2,1,3,2,5]",
		output: "[3,5]",
		explanation: "3 and 5 appear only once, others appear thrice.",
	},
	{
		question:
			"Given a positive integer n, count the number of 1 bits in its binary representation.",
		source: "GeeksforGeeks",
		link_to_solve:
			"https://www.geeksforgeeks.org/count-set-bits-in-an-integer/",
		link_website: "geeksforgeeks",
		topic: "Bit Manipulation",
		input: "n = 6",
		output: "2",
		explanation: "6 in binary is 110, it has two 1 bits.",
	},
	{
		question:
			"Given two integers a and b, return the sum of the two integers without using the '+' operator.",
		source: "LeetCode",
		link_to_solve: "https://leetcode.com/problems/sum-of-two-integers/",
		link_website: "leetcode",
		topic: "Bit Manipulation",
		input: "a = 5, b = 7",
		output: "12",
		explanation: "Sum of 5 and 7 is 12.",
	},
	{
		question:
			"Given an array arr[] of N integers. Find the contiguous sub-array(containing at least one number) which has the maximum sum and return its sum.",
		source: "GeeksforGeeks",
		link_to_solve:
			"https://practice.geeksforgeeks.org/problems/kadanes-algorithm-1587115620/1",
		link_website: "geeksforgeeks",
		topic: "Arrays",
		input: "N = 5, arr[] = {1,2,3,-2,5}",
		output: "9",
		explanation:
			"Max subarray sum is 9 of elements (1, 2, 3, -2, 5) which is a contiguous subarray.",
	},
	{
		question:
			"Given a string s, generate all possible permutations of its characters.",
		source: "LeetCode",
		link_to_solve: "https://leetcode.com/problems/permutations/",
		link_website: "leetcode",
		topic: "Recursion, Backtracking",
		input: "s = 'abc'",
		output: "[['a','b','c'],['a','c','b'],['b','a','c'],['b','c','a'],['c','a','b'],['c','b','a']]",
		explanation:
			"The output contains all possible permutations of the characters in the string 'abc'.",
	},
	{
		question:
			"Given a set of distinct integers, nums, return all possible subsets (the power set).",
		source: "LeetCode",
		link_to_solve: "https://leetcode.com/problems/subsets/",
		link_website: "leetcode",
		topic: "Recursion, Backtracking",
		input: "nums = [1,2,3]",
		output: "[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]",
		explanation:
			"The output contains all possible subsets of the set [1,2,3].",
	},
	{
		question:
			"Given a collection of distinct integers, return all possible permutations.",
		source: "LeetCode",
		link_to_solve: "https://leetcode.com/problems/permutations/",
		link_website: "leetcode",
		topic: "Recursion, Backtracking",
		input: "nums = [1,2,3]",
		output: "[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]",
		explanation:
			"The output contains all possible permutations of the elements in the array [1,2,3].",
	},
	{
		question:
			"Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.",
		source: "LeetCode",
		link_to_solve:
			"https://leetcode.com/problems/letter-combinations-of-a-phone-number/",
		link_website: "leetcode",
		topic: "Recursion, Backtracking",
		input: "digits = '23'",
		output: '["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]',
		explanation:
			"The output contains all possible letter combinations of the phone number '23'.",
	},
	{
		question:
			"Given an integer array nums of length n, return all possible combinations of k integers out of the array nums.",
		source: "LeetCode",
		link_to_solve: "https://leetcode.com/problems/combinations/",
		link_website: "leetcode",
		topic: "Recursion, Backtracking",
		input: "nums = [1,2,3,4], k = 2",
		output: "[[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]",
		explanation:
			"The output contains all possible combinations of 2 integers from the array [1,2,3,4].",
	},
	{
		question:
			"Given a string containing digits from 2-9 inclusive, return all possible valid words that are formed from mapping the digits to letters according to the phone keypad mapping.",
		source: "LeetCode",
		link_to_solve:
			"https://leetcode.com/problems/letter-combinations-of-a-phone-number/",
		link_website: "leetcode",
		topic: "Recursion, Backtracking",
		input: "digits = '23'",
		output: '["ad","ae","af","bd","be","bf","cd","ce","cf"]',
		explanation:
			"The output contains all possible valid words formed from the phone number '23' mapping.",
	},
	{
		question:
			"Given an m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path. You can only move either down or right at any point in time.",
		source: "LeetCode",
		link_to_solve: "https://leetcode.com/problems/minimum-path-sum/",
		link_website: "leetcode",
		topic: "Recursion, Dynamic Programming",
		input: "grid = [[1,3,1],[1,5,1],[4,2,1]]",
		output: "7",
		explanation:
			"The path that minimizes the sum is [1,3,1,1,1], with a sum of 7.",
	},
	{
		question:
			"Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.",
		source: "LeetCode",
		link_to_solve: "https://leetcode.com/problems/add-digits/",
		link_website: "leetcode",
		topic: "Recursion",
		input: "num = 38",
		output: "2",
		explanation:
			"The process goes as follows: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return 2.",
	},
	{
		question:
			"Given a string containing only digits, restore it by returning all possible valid IP address combinations.",
		source: "LeetCode",
		link_to_solve: "https://leetcode.com/problems/restore-ip-addresses/",
		link_website: "leetcode",
		topic: "Recursion, Backtracking",
		input: "s = '25525511135'",
		output: '["255.255.11.135","255.255.111.35"]',
		explanation:
			"The output contains all possible valid IP address combinations for the string '25525511135'.",
	},
	{
		question:
			"Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.",
		source: "LeetCode",
		link_to_solve: "https://leetcode.com/problems/permutations-ii/",
		link_website: "leetcode",
		topic: "Recursion, Backtracking",
		input: "nums = [1,1,2]",
		output: "[[1,1,2],[1,2,1],[2,1,1]]",
		explanation:
			"The output contains all possible unique permutations of the numbers in the array [1,1,2].",
	},
	{
		question:
			"Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.",
		source: "LeetCode",
		link_to_solve: "https://leetcode.com/problems/palindrome-partitioning/",
		link_website: "leetcode",
		topic: "Recursion, Backtracking",
		input: "s = 'aab'",
		output: '[["a","a","b"],["aa","b"]]',
		explanation:
			"The output contains all possible palindrome partitioning of the string 'aab'.",
	},
	{
		question:
			"Given a list of unique integers nums, return all possible subsets (the power set). The solution set must not contain duplicate subsets.",
		source: "LeetCode",
		link_to_solve: "https://leetcode.com/problems/subsets/",
		link_website: "leetcode",
		topic: "Recursion, Backtracking",
		input: "nums = [1,2,3]",
		output: "[[],[1],[2],[3],[1,2],[1,3],[2,3],[1,2,3]]",
		explanation:
			"The output contains all possible subsets of the set [1,2,3] without any duplicates.",
	},
	{
		question:
			"Given an integer n, return all distinct solutions to the n-queens puzzle. Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space, respectively.",
		source: "LeetCode",
		link_to_solve: "https://leetcode.com/problems/n-queens/",
		link_website: "leetcode",
		topic: "Recursion, Backtracking",
		input: "n = 4",
		output: '[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]] // Other distinct solutions are possible.',
		explanation:
			"The output contains distinct board configurations for the 4-queens puzzle.",
	},
	{
		question:
			"Given an array of strings words and a string pattern, return a list of words[i] that match pattern. You may return the answer in any order.",
		source: "LeetCode",
		link_to_solve:
			"https://leetcode.com/problems/find-and-replace-pattern/",
		link_website: "leetcode",
		topic: "Recursion, Backtracking",
		input: 'words = ["abc","deq","mee","aqq","dkd","ccc"], pattern = "abb"',
		output: '["mee","aqq"]',
		explanation:
			"The output contains words from the list that match the pattern 'abb'.",
	},
	{
		question:
			"Given an integer array nums, return all possible subsets (the power set).",
		source: "LeetCode",
		link_to_solve: "https://leetcode.com/problems/subsets/",
		link_website: "leetcode",
		topic: "Recursion, Backtracking",
		input: "nums = [1,2,2]",
		output: "[[],[1],[1,2],[1,2,2],[2],[2,2]]",
		explanation:
			"The output contains all possible subsets of the array [1,2,2].",
	},
	{
		question:
			"Given an integer array nums, return all possible permutations of its elements. The result must not contain duplicate permutations.",
		source: "LeetCode",
		link_to_solve: "https://leetcode.com/problems/permutations-ii/",
		link_website: "leetcode",
		topic: "Recursion, Backtracking",
		input: "nums = [1,2,2]",
		output: "[[1,2,2],[2,1,2],[2,2,1]]",
		explanation:
			"The output contains all possible permutations of the array [1,2,2] without any duplicates.",
	},
	{
		question:
			"Given a string s, return all the palindromic permutations (without duplicates) of it. Return an empty list if no palindromic permutation could be form.",
		source: "LeetCode",
		link_to_solve:
			"https://leetcode.com/problems/palindrome-permutation-ii/",
		link_website: "leetcode",
		topic: "Recursion, Backtracking",
		input: "s = 'aabb'",
		output: '["abba","baab"]',
		explanation:
			"The output contains all palindromic permutations of the string 'aabb'.",
	},
	{
		question:
			"Given a string s, partition s such that every substring of the partition is a palindrome. Return the minimum cuts needed for a palindrome partitioning of s.",
		source: "LeetCode",
		link_to_solve:
			"https://leetcode.com/problems/palindrome-partitioning-ii/",
		link_website: "leetcode",
		topic: "Recursion, Dynamic Programming",
		input: "s = 'aab'",
		output: "1",
		explanation:
			"The minimum cuts needed for palindrome partitioning of 'aab' is 1, which can be 'aa' and 'b'.",
	},
	{
		question:
			"Given an array arr[] of N integers. Find the contiguous sub-array(containing at least one number) which has the maximum sum and return its sum.",
		source: "GeeksforGeeks",
		link_to_solve:
			"https://practice.geeksforgeeks.org/problems/kadanes-algorithm-1587115620/1",
		link_website: "geeksforgeeks",
		topic: "Arrays",
		input: "N = 5, arr[] = {1,2,3,-2,5}",
		output: "9",
		explanation:
			"Max subarray sum is 9 of elements (1, 2, 3, -2, 5) which is a contiguous subarray.",
	},
	{
		question:
			"Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
		source: "LeetCode",
		link_to_solve: "https://leetcode.com/problems/two-sum/",
		link_website: "leetcode",
		topic: "Arrays",
		input: "nums = [2,7,11,15], target = 9",
		output: "[0,1]",
		explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
	},
	{
		question:
			"Given an array of integers nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. Return the number of unique elements.",
		source: "LeetCode",
		link_to_solve:
			"https://leetcode.com/problems/remove-duplicates-from-sorted-array/",
		link_website: "leetcode",
		topic: "Arrays",
		input: "nums = [0,0,1,1,1,2,2,3,3,4]",
		output: "5",
		explanation:
			"The first five elements after removing duplicates will be [0,1,2,3,4], which is of length 5.",
	},
	{
		question:
			"Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].",
		source: "LeetCode",
		link_to_solve:
			"https://leetcode.com/problems/product-of-array-except-self/",
		link_website: "leetcode",
		topic: "Arrays",
		input: "nums = [1,2,3,4]",
		output: "[24,12,8,6]",
		explanation:
			"Explanation: The product array that is output is [2*3*4,1*3*4,1*2*4,1*2*3]=[24,12,8,6].",
	},
	{
		question:
			"Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.",
		source: "LeetCode",
		link_to_solve:
			"https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/",
		link_website: "leetcode",
		topic: "Arrays",
		input: "grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]",
		output: "8",
		explanation: "There are 8 negatives number in the matrix.",
	},
	{
		question:
			"Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.",
		source: "LeetCode",
		link_to_solve:
			"https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/",
		link_website: "leetcode",
		topic: "Arrays",
		input: "nums = [5,7,7,8,8,10], target = 8",
		output: "[3,4]",
		explanation:
			"The first and last position of the target value 8 is at index 3 and 4 respectively.",
	},
	{
		question:
			"Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.",
		source: "LeetCode",
		link_to_solve: "https://leetcode.com/problems/search-insert-position/",
		link_website: "leetcode",
		topic: "Arrays",
		input: "nums = [1,3,5,6], target = 5",
		output: "2",
		explanation: "The target value 5 is found at index 2.",
	},
	{
		question:
			"Given an array of integers nums, sort the array in ascending order.",
		source: "LeetCode",
		link_to_solve: "https://leetcode.com/problems/sort-an-array/",
		link_website: "leetcode",
		topic: "Sorting",
		input: "nums = [5,2,3,1]",
		output: "[1,2,3,5]",
		explanation: "After sorting, the array becomes [1,2,3,5].",
	},
	{
		question:
			"Given an array of meeting time intervals where intervals[i] = [start_i, end_i], find the minimum number of conference rooms required.",
		source: "LeetCode",
		link_to_solve: "https://leetcode.com/problems/meeting-rooms-ii/",
		link_website: "leetcode",
		topic: "Sorting",
		input: "intervals = [[0,30],[5,10],[15,20]]",
		output: "2",
		explanation: "We need two meeting rooms to hold the meetings.",
	},
	{
		question:
			"Given a list of non-overlapping axis-aligned rectangles rects, write a function pick which randomly and uniformily picks an integer point in the space covered by the rectangles.",
		source: "LeetCode",
		link_to_solve:
			"https://leetcode.com/problems/random-point-in-non-overlapping-rectangles/",
		link_website: "leetcode",
		topic: "Sorting",
		input: "rects = [[1,1,5,5]], pick()",
		output: "[[4,1]]",
		explanation:
			"pick() returns a random point from the rectangle [1,1,5,5], and [4,1] is one of the possible outputs.",
	},
	{
		question:
			"Given an array of integers nums and an integer k, sort the array in such a way that the first k elements are the smallest ones, and the rest of the elements are the rest of the elements in any order.",
		source: "LeetCode",
		link_to_solve:
			"https://leetcode.com/problems/partition-array-for-maximum-sum/",
		link_website: "leetcode",
		topic: "Sorting",
		input: "nums = [4,2,3], k = 1",
		output: "[2,4,3]",
		explanation:
			"After sorting, the first element is 2, which is the smallest, and the rest of the elements remain the same.",
	},
	{
		question:
			"Given an array of intervals where intervals[i] = [start_i, end_i], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.",
		source: "LeetCode",
		link_to_solve: "https://leetcode.com/problems/merge-intervals/",
		link_website: "leetcode",
		topic: "Sorting",
		input: "intervals = [[1,3],[2,6],[8,10],[15,18]]",
		output: "[[1,6],[8,10],[15,18]]",
		explanation:
			"Intervals [1,3] and [2,6] overlap, so they should be merged into [1,6].",
	},
	{
		question:
			"Given an array of meeting time intervals intervals where intervals[i] = [start_i, end_i], return the minimum number of conference rooms required.",
		source: "LeetCode",
		link_to_solve: "https://leetcode.com/problems/meeting-rooms-ii/",
		link_website: "leetcode",
		topic: "Sorting",
		input: "intervals = [[0,30],[5,10],[15,20]]",
		output: "2",
		explanation: "We need two meeting rooms to hold the meetings.",
	},
	{
		question:
			"Given a list of non-overlapping intervals intervals for which intervals[i] = [start_i, end_i], write a function to insert a new interval [start, end] into the intervals.",
		source: "LeetCode",
		link_to_solve: "https://leetcode.com/problems/insert-interval/",
		link_website: "leetcode",
		topic: "Sorting",
		input: "intervals = [[1,3],[6,9]], newInterval = [2,5]",
		output: "[[1,5],[6,9]]",
		explanation: "After insertion, the new intervals become [[1,5],[6,9]].",
	},
	{
		question:
			"Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.",
		source: "LeetCode",
		link_to_solve:
			"https://leetcode.com/problems/median-of-two-sorted-arrays/",
		link_website: "leetcode",
		topic: "Sorting",
		input: "nums1 = [1,3], nums2 = [2]",
		output: "2.0",
		explanation: "The median is 2.0.",
	},
	{
		question:
			"Given an array of strings words, group the anagrams together. You can return the answer in any order.",
		source: "LeetCode",
		link_to_solve: "https://leetcode.com/problems/group-anagrams/",
		link_website: "leetcode",
		topic: "Sorting",
		input: "words = ['eat','tea','tan','ate','nat','bat']",
		output: "[['eat','tea','ate'],['tan','nat'],['bat']]",
		explanation:
			"The groups are 'ate', 'eat', and 'tea' which are anagrams, 'tan' and 'nat' which are anagrams, and 'bat'.",
	},
	{
		question:
			"Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.",
		source: "LeetCode",
		link_to_solve: "https://leetcode.com/problems/move-zeroes/",
		link_website: "leetcode",
		topic: "Sorting",
		input: "nums = [0,1,0,3,12]",
		output: "[1,3,12,0,0]",
		explanation:
			"After moving zeroes to the end, the array becomes [1,3,12,0,0].",
	},
	{
		question:
			"Given an array of integers nums, calculate the pivot index of this array. The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.",
		source: "LeetCode",
		link_to_solve: "https://leetcode.com/problems/find-pivot-index/",
		link_website: "leetcode",
		topic: "Searching",
		input: "nums = [1,7,3,6,5,6]",
		output: "3",
		explanation:
			"The pivot index is 3. Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11, Right sum = nums[4] + nums[5] = 5 + 6 = 11.",
	},
	{
		question: "Implement a function to reverse a singly linked list.",
		source: "LeetCode",
		link_to_solve: "https://leetcode.com/problems/reverse-linked-list/",
		link_website: "leetcode",
		topic: "Linked Lists",
		input: "1->2->3->4->5",
		output: "5->4->3->2->1",
		explanation:
			"The linked list 1->2->3->4->5 is reversed to 5->4->3->2->1.",
	},
	{
		question:
			"Given a singly linked list, determine if it is a palindrome.",
		source: "LeetCode",
		link_to_solve: "https://leetcode.com/problems/palindrome-linked-list/",
		link_website: "leetcode",
		topic: "Linked Lists",
		input: "1->2->2->1",
		output: "true",
		explanation: "The linked list 1->2->2->1 is a palindrome.",
	},
	{
		question:
			"Merge two sorted linked lists and return it as a new sorted list.",
		source: "LeetCode",
		link_to_solve: "https://leetcode.com/problems/merge-two-sorted-lists/",
		link_website: "leetcode",
		topic: "Linked Lists",
		input: "1->2->4, 1->3->4",
		output: "1->1->2->3->4->4",
		explanation:
			"The linked lists 1->2->4 and 1->3->4 are merged into a single sorted linked list 1->1->2->3->4->4.",
	},
	{
		question:
			"Remove all elements from a linked list of integers that have a value equal to val.",
		source: "LeetCode",
		link_to_solve:
			"https://leetcode.com/problems/remove-linked-list-elements/",
		link_website: "leetcode",
		topic: "Linked Lists",
		input: "1->2->6->3->4->5->6, val = 6",
		output: "1->2->3->4->5",
		explanation: "All occurrences of '6' are removed from the linked list.",
	},
	{
		question:
			"Given a linked list, swap every two adjacent nodes and return its head.",
		source: "LeetCode",
		link_to_solve: "https://leetcode.com/problems/swap-nodes-in-pairs/",
		link_website: "leetcode",
		topic: "Linked Lists",
		input: "1->2->3->4",
		output: "2->1->4->3",
		explanation: "Pairs are swapped: 1->2->3->4 becomes 2->1->4->3.",
	},
	{
		question:
			"Given a linked list, rotate the list to the right by k places, where k is non-negative.",
		source: "LeetCode",
		link_to_solve: "https://leetcode.com/problems/rotate-list/",
		link_website: "leetcode",
		topic: "Linked Lists",
		input: "1->2->3->4->5, k = 2",
		output: "4->5->1->2->3",
		explanation: "The list is rotated to the right by 2 places.",
	},
	{
		question:
			"Given a linked list, remove the n-th node from the end of the list and return its head.",
		source: "LeetCode",
		link_to_solve:
			"https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
		link_website: "leetcode",
		topic: "Linked Lists",
		input: "1->2->3->4->5, n = 2",
		output: "1->2->3->5",
		explanation: "The 2nd node from the end of the list is removed.",
	},
	{
		question:
			"Reverse a linked list from position m to n. Do it in one-pass.",
		source: "LeetCode",
		link_to_solve: "https://leetcode.com/problems/reverse-linked-list-ii/",
		link_website: "leetcode",
		topic: "Linked Lists",
		input: "1->2->3->4->5, m = 2, n = 4",
		output: "1->4->3->2->5",
		explanation: "Nodes from position 2 to 4 are reversed.",
	},
	{
		question: "Given a linked list, swap nodes in pairs recursively.",
		source: "LeetCode",
		link_to_solve: "https://leetcode.com/problems/swap-nodes-in-pairs/",
		link_website: "leetcode",
		topic: "Linked Lists",
		input: "1->2->3->4",
		output: "2->1->4->3",
		explanation: "Pairs are swapped: 1->2->3->4 becomes 2->1->4->3.",
	},
	{
		question:
			"Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.",
		source: "LeetCode",
		link_to_solve: "https://leetcode.com/problems/min-stack/",
		link_website: "leetcode",
		topic: "Linked Lists",
		input: "Commands: push(2), push(0), push(3), push(0), getMin(), pop(), getMin()",
		output: "0, 0",
		explanation: "Minimum element retrieved after each operation.",
	},
	{
		question:
			"Given a linked list, remove the duplicates in the list such that each element appears only once.",
		source: "LeetCode",
		link_to_solve:
			"https://leetcode.com/problems/remove-duplicates-from-sorted-list/",
		link_website: "leetcode",
		topic: "Linked Lists",
		input: "1->1->2",
		output: "1->2",
		explanation: "Duplicate elements are removed.",
	},
	{
		question:
			"Given a linked list, remove all elements that contain a specific value.",
		source: "LeetCode",
		link_to_solve:
			"https://leetcode.com/problems/remove-linked-list-elements/",
		link_website: "leetcode",
		topic: "Linked Lists",
		input: "1->2->6->3->4->5->6, val = 6",
		output: "1->2->3->4->5",
		explanation: "All occurrences of '6' are removed from the linked list.",
	},
	{
		question:
			"Given a linked list, swap every k nodes. If the list is not a multiple of k, then leave the remaining nodes as is.",
		source: "LeetCode",
		link_to_solve:
			"https://leetcode.com/problems/reverse-nodes-in-k-group/",
		link_website: "leetcode",
		topic: "Linked Lists",
		input: "1->2->3->4->5, k = 2",
		output: "2->1->4->3->5",
		explanation: "Pairs of nodes are swapped.",
	},
	{
		question:
			"Given a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.",
		source: "LeetCode",
		link_to_solve: "https://leetcode.com/problems/partition-list/",
		link_website: "leetcode",
		topic: "Linked Lists",
		input: "1->4->3->2->5->2, x = 3",
		output: "1->2->2->4->3->5",
		explanation: "Nodes are partitioned around the value 3.",
	},
	{
		question: "Given a linked list, reverse alternate k nodes in it.",
		source: "GeeksforGeeks",
		link_to_solve:
			"https://www.geeksforgeeks.org/reverse-alternate-k-nodes-in-a-singly-linked-list/",
		link_website: "geeksforgeeks",
		topic: "Linked Lists",
		input: "1->2->3->4->5->6->7->8->9->10, k = 3",
		output: "3->2->1->4->5->6->9->8->7->10",
		explanation: "Alternate groups of 3 nodes are reversed.",
	},
	{
		question:
			"Given a linked list, rearrange it such that converted list should be of the form a < b > c < d > e < f .. where a, b, c, d, e, f are consecutive data nodes of the linked list.",
		source: "GeeksforGeeks",
		link_to_solve:
			"https://www.geeksforgeeks.org/convert-given-linked-list-into-that-containing-alternating-ascending-and-descending-orders/",
		link_website: "geeksforgeeks",
		topic: "Linked Lists",
		input: "1->2->3->4->5->6",
		output: "1->3->2->5->4->6",
		explanation: "The rearranged list satisfies the required form.",
	},
	{
		question:
			"Given a linked list, write a function to rearrange the linked list in such a way that all odd position nodes are together and all even positions node are together.",
		source: "GeeksforGeeks",
		link_to_solve:
			"https://www.geeksforgeeks.org/rearrange-a-linked-list-such-that-all-even-and-odd-positioned-nodes-are-together/",
		link_website: "geeksforgeeks",
		topic: "Linked Lists",
		input: "1->2->3->4->5->6->7->8",
		output: "1->3->5->7->2->4->6->8",
		explanation:
			"Odd positioned nodes are together followed by even positioned nodes.",
	},
	{
		question:
			"Given a linked list, sort it in O(n log n) time and constant space.",
		source: "LeetCode",
		link_to_solve: "https://leetcode.com/problems/sort-list/",
		link_website: "leetcode",
		topic: "Linked Lists",
		input: "4->2->1->3",
		output: "1->2->3->4",
		explanation: "The linked list is sorted in ascending order.",
	},
	{
		question:
			"Given a 2D grid of size m x n, find the number of unique paths from the top-left corner to the bottom-right corner, where you can only move either down or right at any point in time.",
		source: "LeetCode",
		link_to_solve: "https://leetcode.com/problems/unique-paths/",
		link_website: "leetcode",
		topic: "Dynamic Programming",
		input: "m = 3, n = 7",
		output: "28",
		explanation: "There are 28 unique paths from (0,0) to (2,6).",
	},
	{
		question:
			"Given an array nums of n integers, find the length of the longest increasing subsequence.",
		source: "LeetCode",
		link_to_solve:
			"https://leetcode.com/problems/longest-increasing-subsequence/",
		link_website: "leetcode",
		topic: "Dynamic Programming",
		input: "nums = [10,9,2,5,3,7,101,18]",
		output: "4",
		explanation:
			"The longest increasing subsequence is [2,3,7,101], therefore the length is 4.",
	},
	{
		question:
			"Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.",
		source: "LeetCode",
		link_to_solve:
			"https://leetcode.com/problems/longest-palindromic-substring/",
		link_website: "leetcode",
		topic: "Dynamic Programming",
		input: "s = 'babad'",
		output: "'bab' or 'aba'",
		explanation: "The longest palindromic substring is 'bab' or 'aba'.",
	},
	{
		question:
			"Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words.",
		source: "LeetCode",
		link_to_solve: "https://leetcode.com/problems/word-break/",
		link_website: "leetcode",
		topic: "Dynamic Programming",
		input: "s = 'leetcode', wordDict = ['leet', 'code']",
		output: "true",
		explanation: "'leetcode' can be segmented into 'leet code'.",
	},
	{
		question:
			"Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.",
		source: "LeetCode",
		link_to_solve: "https://leetcode.com/problems/maximum-subarray/",
		link_website: "leetcode",
		topic: "Dynamic Programming",
		input: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
		output: "6",
		explanation:
			"The contiguous subarray [4,-1,2,1] has the largest sum = 6.",
	},
	{
		question:
			"Given an array of strings words and a width maxWidth, format the text such that each line has exactly maxWidth characters and is fully (left and right) justified.",
		source: "LeetCode",
		link_to_solve: "https://leetcode.com/problems/text-justification/",
		link_website: "leetcode",
		topic: "Dynamic Programming",
		input: "words = ['This', 'is', 'an', 'example', 'of', 'text', 'justification.'], maxWidth = 16",
		output: "['This    is    an', 'example  of text', 'justification.  ']",
		explanation: "Each line is fully justified with maxWidth characters.",
	},
	{
		question:
			"Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.",
		source: "LeetCode",
		link_to_solve: "https://leetcode.com/problems/palindrome-partitioning/",
		link_website: "leetcode",
		topic: "Dynamic Programming",
		input: "s = 'aab'",
		output: "[['a','a','b'],['aa','b']]",
		explanation: "Return the palindrome partitioning of 'aab'.",
	},
	{
		question:
			"Given an integer array nums, find a contiguous subarray which has the largest sum and return its sum.",
		source: "GeeksforGeeks",
		link_to_solve:
			"https://practice.geeksforgeeks.org/problems/kadanes-algorithm-1587115620/1",
		link_website: "geeksforgeeks",
		topic: "Dynamic Programming",
		input: "arr[] = [-2, -3, 4, -1, -2, 1, 5, -3]",
		output: "7",
		explanation: "Max subarray sum is 7 of elements [4, -1, -2, 1, 5].",
	},
	{
		question:
			"Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.",
		source: "LeetCode",
		link_to_solve: "https://leetcode.com/problems/minimum-path-sum/",
		link_website: "leetcode",
		topic: "Dynamic Programming",
		input: "grid = [[1,3,1],[1,5,1],[4,2,1]]",
		output: "7",
		explanation: "The path is [1,3,1,1,1] which minimizes the sum to 7.",
	},
	{
		question:
			"Given two strings text1 and text2, return the length of their longest common subsequence.",
		source: "LeetCode",
		link_to_solve:
			"https://leetcode.com/problems/longest-common-subsequence/",
		link_website: "leetcode",
		topic: "Dynamic Programming",
		input: "text1 = 'abcde', text2 = 'ace'",
		output: "3",
		explanation: "The longest common subsequence is 'ace' with length 3.",
	},
	{
		question:
			"Given an integer array nums, return the number of longest increasing subsequences.",
		source: "LeetCode",
		link_to_solve:
			"https://leetcode.com/problems/number-of-longest-increasing-subsequence/",
		link_website: "leetcode",
		topic: "Dynamic Programming",
		input: "nums = [1,3,5,4,7]",
		output: "2",
		explanation:
			"The two longest increasing subsequences are [1, 3, 4, 7] and [1, 3, 5, 7].",
	},
	{
		question:
			"Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once. Find all the elements that appear twice in this array.",
		source: "LeetCode",
		link_to_solve:
			"https://leetcode.com/problems/find-all-duplicates-in-an-array/",
		link_website: "leetcode",
		topic: "Dynamic Programming",
		input: "nums = [4,3,2,7,8,2,3,1]",
		output: "[2,3]",
		explanation: "There are two 2's and three 3's in the input array.",
	},
	{
		question:
			"Given two words word1 and word2, find the minimum number of operations required to convert word1 to word2. You have the following three operations permitted on a word: Insert a character, Delete a character, Replace a character.",
		source: "LeetCode",
		link_to_solve: "https://leetcode.com/problems/edit-distance/",
		link_website: "leetcode",
		topic: "Dynamic Programming",
		input: "word1 = 'horse', word2 = 'ros'",
		output: "3",
		explanation:
			"The minimum steps are: insert 'r', replace 'o' with 's', and add 's'.",
	},
	{
		question:
			"Given a triangle array, return the minimum path sum from top to bottom. For each step, you may move to an adjacent number of the row below.",
		source: "LeetCode",
		link_to_solve: "https://leetcode.com/problems/triangle/",
		link_website: "leetcode",
		topic: "Dynamic Programming",
		input: "triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]",
		output: "11",
		explanation:
			"The minimum path sum from top to bottom is 11 (i.e., 2 + 3 + 5 + 1 = 11).",
	},
	{
		question:
			"Given an integer n, return the number of distinct ways you can climb to the top (n steps) where you can either climb 1 or 2 steps at a time.",
		source: "LeetCode",
		link_to_solve: "https://leetcode.com/problems/climbing-stairs/",
		link_website: "leetcode",
		topic: "Dynamic Programming",
		input: "n = 3",
		output: "3",
		explanation:
			"There are three ways to climb to the top: 1 step + 1 step + 1 step, 1 step + 2 steps, or 2 steps + 1 step.",
	},
	{
		question:
			"Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.",
		source: "LeetCode",
		link_to_solve: "https://leetcode.com/problems/single-number/",
		link_website: "leetcode",
		topic: "Dynamic Programming",
		input: "nums = [2,2,1]",
		output: "1",
		explanation: "The single number is 1.",
	},
	{
		question:
			"Given an integer array nums, find the contiguous subarray within an array (containing at least one number) which has the largest product.",
		source: "LeetCode",
		link_to_solve:
			"https://leetcode.com/problems/maximum-product-subarray/",
		link_website: "leetcode",
		topic: "Dynamic Programming",
		input: "nums = [2,3,-2,4]",
		output: "6",
		explanation:
			"The contiguous subarray [2,3] has the largest product = 6.",
	},
	{
		question:
			"Given a non-empty array of integers, every element appears three times except for one, which appears exactly once. Find that single one.",
		source: "LeetCode",
		link_to_solve: "https://leetcode.com/problems/single-number-ii/",
		link_website: "leetcode",
		topic: "Dynamic Programming",
		input: "nums = [2,2,3,2]",
		output: "3",
		explanation: "The single number is 3.",
	},
	{
		question:
			"Given a string s, find the longest palindromic subsequence's length in s.",
		source: "LeetCode",
		link_to_solve:
			"https://leetcode.com/problems/longest-palindromic-subsequence/",
		link_website: "leetcode",
		topic: "Dynamic Programming",
		input: "s = 'bbbab'",
		output: "4",
		explanation:
			"The longest palindromic subsequence is 'bbbb', therefore the length is 4.",
	},
	{
		question:
			"Given an array arr[] of N integers. Implement a stack data structure using this array and perform push and pop operations.",
		source: "LeetCode",
		link_to_solve:
			"https://leetcode.com/problems/implement-stack-using-queues/",
		link_website: "leetcode",
		topic: "Stacks & Queues",
		input: "Operations: push(1), push(2), pop(), push(3)",
		output: "[1, 3]",
		explanation:
			"After the given operations, the stack will have elements 1 and 3.",
	},
	{
		question:
			"Given a string S containing only lowercase letters, implement a function to check if it is a palindrome using a stack.",
		source: "LeetCode",
		link_to_solve: "https://leetcode.com/problems/valid-palindrome/",
		link_website: "leetcode",
		topic: "Stacks & Queues",
		input: "S = 'racecar'",
		output: "True",
		explanation: "'racecar' is a palindrome.",
	},
	{
		question:
			"Given a sequence of parentheses, braces, and brackets, determine if the order of the parentheses is valid using a stack.",
		source: "GeeksforGeeks",
		link_to_solve:
			"https://practice.geeksforgeeks.org/problems/parenthesis-checker2744/1",
		link_website: "geeksforgeeks",
		topic: "Stacks & Queues",
		input: "s = '{[()]}'",
		output: "True",
		explanation: "The order of parentheses, braces, and brackets is valid.",
	},
	{
		question:
			"Given a binary tree, implement a function to traverse it in postorder using two stacks.",
		source: "LeetCode",
		link_to_solve:
			"https://leetcode.com/problems/binary-tree-postorder-traversal/",
		link_website: "leetcode",
		topic: "Stacks & Queues",
		input: "Binary Tree: [1,null,2,3]",
		output: "[3,2,1]",
		explanation: "Postorder traversal of the given binary tree is [3,2,1].",
	},
	{
		question:
			"Given a stack, reverse the elements of it using another stack.",
		source: "GeeksforGeeks",
		link_to_solve:
			"https://practice.geeksforgeeks.org/problems/reverse-a-stack/1",
		link_website: "geeksforgeeks",
		topic: "Stacks & Queues",
		input: "Stack: [1,2,3]",
		output: "[3,2,1]",
		explanation: "After reversing, the stack will have elements [3,2,1].",
	},
	{
		question: "Implement a queue using stacks.",
		source: "LeetCode",
		link_to_solve:
			"https://leetcode.com/problems/implement-queue-using-stacks/",
		link_website: "leetcode",
		topic: "Stacks & Queues",
		input: "Operations: push(1), push(2), peek(), pop()",
		output: "1",
		explanation:
			"After the given operations, the queue will have elements 2.",
	},
	{
		question:
			"Given a string containing only digits, implement a function to calculate the arithmetic expression using a stack.",
		source: "GeeksforGeeks",
		link_to_solve:
			"https://practice.geeksforgeeks.org/problems/evaluation-of-postfix-expression/0",
		link_website: "geeksforgeeks",
		topic: "Stacks & Queues",
		input: "Expression = '231*+9-'",
		output: "4",
		explanation: "The arithmetic expression evaluates to 4.",
	},
	{
		question:
			"Implement a queue using two stacks such that enqueue operation is costly.",
		source: "LeetCode",
		link_to_solve:
			"https://leetcode.com/problems/implement-queue-using-stacks/",
		link_website: "leetcode",
		topic: "Stacks & Queues",
		input: "Operations: enqueue(1), enqueue(2), dequeue(), enqueue(3)",
		output: "[2, 3]",
		explanation:
			"After the given operations, the queue will have elements 2 and 3.",
	},
	{
		question:
			"Given a stack, sort its elements in ascending order using another stack.",
		source: "GeeksforGeeks",
		link_to_solve:
			"https://practice.geeksforgeeks.org/problems/sort-a-stack/1",
		link_website: "geeksforgeeks",
		topic: "Stacks & Queues",
		input: "Stack: [3,1,2]",
		output: "[1,2,3]",
		explanation: "After sorting, the stack will have elements [1,2,3].",
	},
	{
		question:
			"Given an array of integers, find the first non-repeating element in it using a queue.",
		source: "LeetCode",
		link_to_solve:
			"https://leetcode.com/problems/first-unique-character-in-a-string/",
		link_website: "leetcode",
		topic: "Stacks & Queues",
		input: "s = 'leetcode'",
		output: "0",
		explanation:
			"The first non-repeating character in 'leetcode' is 'l' at index 0.",
	},
	{
		question:
			"Implement a stack that supports push, pop, top, and retrieving the minimum element in constant time.",
		source: "GeeksforGeeks",
		link_to_solve:
			"https://practice.geeksforgeeks.org/problems/special-stack/1",
		link_website: "geeksforgeeks",
		topic: "Stacks & Queues",
		input: "Operations: push(3), push(5), getMin(), push(2), pop()",
		output: "[2, 3]",
		explanation:
			"After the given operations, the stack will have elements 2 and 3, and the minimum element is 2.",
	},
	{
		question:
			"Construct a binary tree from given inorder and preorder traversal arrays.",
		source: "GeeksforGeeks",
		link_to_solve:
			"https://www.geeksforgeeks.org/construct-tree-from-given-inorder-and-preorder-traversal/",
		link_website: "GeeksforGeeks",
		topic: "Binary Trees",
		input: "inorder = [9, 3, 15, 20, 7], preorder = [3, 9, 20, 15, 7]",
		output: "3",
		explanation:
			"The constructed binary tree will be:\n      3\n     / \\\n    9  20\n      /  \\\n     15   7",
	},
	{
		question: "Find the maximum depth of a binary tree.",
		source: "LeetCode",
		link_to_solve:
			"https://leetcode.com/problems/maximum-depth-of-binary-tree/",
		link_website: "LeetCode",
		topic: "Binary Trees",
		input: "root = [3, 9, 20, null, null, 15, 7]",
		output: "3",
		explanation: "The maximum depth of the binary tree is 3.",
	},
	{
		question: "Check if a binary tree is symmetric.",
		source: "GeeksforGeeks",
		link_to_solve:
			"https://www.geeksforgeeks.org/symmetric-tree-tree-which-is-mirror-image-of-itself/",
		link_website: "GeeksforGeeks",
		topic: "Binary Trees",
		input: "root = [1, 2, 2, 3, 4, 4, 3]",
		output: "true",
		explanation: "The binary tree is symmetric.",
	},
	{
		question:
			"Find the lowest common ancestor of two given nodes in a binary tree.",
		source: "LeetCode",
		link_to_solve:
			"https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/",
		link_website: "LeetCode",
		topic: "Binary Trees",
		input: "root = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4], p = 5, q = 1",
		output: "3",
		explanation: "The lowest common ancestor of nodes 5 and 1 is node 3.",
	},
	{
		question: "Convert a binary tree to its mirror tree.",
		source: "GeeksforGeeks",
		link_to_solve:
			"https://www.geeksforgeeks.org/create-a-mirror-tree-from-the-given-binary-tree/",
		link_website: "GeeksforGeeks",
		topic: "Binary Trees",
		input: "root = [1, 2, 3, 4, 5]",
		output: "[1, 3, 2, null, null, 5, 4]",
		explanation:
			"The mirror tree of the given binary tree is [1, 3, 2, null, null, 5, 4].",
	},
	{
		question: "Find the maximum path sum in a binary tree.",
		source: "LeetCode",
		link_to_solve:
			"https://leetcode.com/problems/binary-tree-maximum-path-sum/",
		link_website: "LeetCode",
		topic: "Binary Trees",
		input: "root = [-10, 9, 20, null, null, 15, 7]",
		output: "42",
		explanation: "The maximum path sum in the binary tree is 42.",
	},
	{
		question: "Check if a binary tree is balanced.",
		source: "GeeksforGeeks",
		link_to_solve:
			"https://www.geeksforgeeks.org/how-to-determine-if-a-binary-tree-is-balanced/",
		link_website: "GeeksforGeeks",
		topic: "Binary Trees",
		input: "root = [3, 9, 20, null, null, 15, 7]",
		output: "true",
		explanation: "The binary tree is balanced.",
	},
	{
		question: "Find the diameter of a binary tree.",
		source: "LeetCode",
		link_to_solve: "https://leetcode.com/problems/diameter-of-binary-tree/",
		link_website: "LeetCode",
		topic: "Binary Trees",
		input: "root = [1, 2, 3, 4, 5]",
		output: "3",
		explanation: "The diameter of the binary tree is 3.",
	},
	{
		question: "Serialize and deserialize a binary tree.",
		source: "GeeksforGeeks",
		link_to_solve:
			"https://www.geeksforgeeks.org/serialize-deserialize-binary-tree/",
		link_website: "GeeksforGeeks",
		topic: "Binary Trees",
		input: "root = [1, 2, 3, null, null, 4, 5]",
		output: "[1, 2, 3, null, null, 4, 5]",
		explanation:
			"The serialized form of the binary tree is [1, 2, 3, null, null, 4, 5].",
	},
	{
		question: "Find the level order traversal of a binary tree.",
		source: "LeetCode",
		link_to_solve:
			"https://leetcode.com/problems/binary-tree-level-order-traversal/",
		link_website: "LeetCode",
		topic: "Binary Trees",
		input: "root = [3, 9, 20, null, null, 15, 7]",
		output: "[[3], [9, 20], [15, 7]]",
		explanation:
			"The level order traversal of the binary tree is [[3], [9, 20], [15, 7]].",
	},
	{
		question: "Find the vertical order traversal of a binary tree.",
		source: "GeeksforGeeks",
		link_to_solve:
			"https://www.geeksforgeeks.org/print-a-binary-tree-in-vertical-order-set-3-using-level-order-traversal/",
		link_website: "GeeksforGeeks",
		topic: "Binary Trees",
		input: "root = [3, 9, 8, 4, 0, 1, 7]",
		output: "[[4], [9], [3, 0, 1], [8], [7]]",
		explanation:
			"The vertical order traversal of the binary tree is [[4], [9], [3, 0, 1], [8], [7]].",
	},
	{
		question: "Check if two binary trees are identical.",
		source: "LeetCode",
		link_to_solve: "https://leetcode.com/problems/same-tree/",
		link_website: "LeetCode",
		topic: "Binary Trees",
		input: "p = [1, 2, 3], q = [1, 2, 3]",
		output: "true",
		explanation: "The two binary trees are identical.",
	},
	{
		question: "Find the width of a binary tree.",
		source: "GeeksforGeeks",
		link_to_solve:
			"https://www.geeksforgeeks.org/find-width-of-a-binary-tree/",
		link_website: "GeeksforGeeks",
		topic: "Binary Trees",
		input: "root = [1, 2, 3, 4, 5, null, 8, null, null, 6, 7]",
		output: "4",
		explanation: "The width of the binary tree is 4.",
	},
	{
		question: "Find the sum of all left leaves in a binary tree.",
		source: "LeetCode",
		link_to_solve: "https://leetcode.com/problems/sum-of-left-leaves/",
		link_website: "LeetCode",
		topic: "Binary Trees",
		input: "root = [3, 9, 20, null, null, 15, 7]",
		output: "24",
		explanation: "The sum of all left leaves in the binary tree is 24.",
	},
	{
		question:
			"Find the closest value in a binary search tree (BST) to a given target value.",
		source: "GeeksforGeeks",
		link_to_solve:
			"https://www.geeksforgeeks.org/find-closest-element-binary-search-tree/",
		link_website: "GeeksforGeeks",
		topic: "Binary Trees",
		input: "root = [4, 2, 5, 1, 3], target = 3.714286",
		output: "4",
		explanation:
			"The closest value in the binary search tree to the target value is 4.",
	},
	{
		question: "Find the sum of all nodes in a binary tree.",
		source: "LeetCode",
		link_to_solve:
			"https://leetcode.com/problems/sum-of-all-nodes-in-binary-tree/",
		link_website: "LeetCode",
		topic: "Binary Trees",
		input: "root = [1, 2, 3, 4, 5]",
		output: "15",
		explanation: "The sum of all nodes in the binary tree is 15.",
	},
	{
		question: "Check if a binary tree is a subtree of another binary tree.",
		source: "GeeksforGeeks",
		link_to_solve:
			"https://www.geeksforgeeks.org/check-binary-tree-subtree-another-binary-tree-set-2/",
		link_website: "GeeksforGeeks",
		topic: "Binary Trees",
		input: "T = [26, 10, 3, 4, 6, null, 3, 4, 6], S = [10, 4, 6]",
		output: "true",
		explanation: "The binary tree S is a subtree of binary tree T.",
	},
	{
		question: "Find the maximum width of a binary tree.",
		source: "LeetCode",
		link_to_solve:
			"https://leetcode.com/problems/maximum-width-of-binary-tree/",
		link_website: "LeetCode",
		topic: "Binary Trees",
		input: "root = [1, 3, 2, 5, 3, null, 9]",
		output: "4",
		explanation: "The maximum width of the binary tree is 4.",
	},
	{
		question:
			"Find the sum of nodes on the longest path from root to leaf in a binary tree.",
		source: "GeeksforGeeks",
		link_to_solve:
			"https://www.geeksforgeeks.org/sum-nodes-longest-path-root-leaf-binary-tree/",
		link_website: "GeeksforGeeks",
		topic: "Binary Trees",
		input: "root = [4, 2, 5, 7, 1, 3, 6]",
		output: "12",
		explanation:
			"The sum of nodes on the longest path from root to leaf in the binary tree is 12.",
	},
	{
		question: "Find the maximum sum rectangle in a 2D matrix.",
		source: "GeeksforGeeks",
		link_to_solve:
			"https://www.geeksforgeeks.org/maximum-sum-rectangle-in-a-2d-matrix-dp-27/",
		link_website: "GeeksforGeeks",
		topic: "2D Arrays",
		input: "matrix = [[1, 2, -1, -4, -20], [-8, -3, 4, 2, 1], [3, 8, 10, 1, 3], [-4, -1, 1, 7, -6]]",
		output: "29",
		explanation:
			"The maximum sum rectangle in the given matrix is [[8, 10, 1], [4, 2, 1], [1, 7, -6]] with sum 29.",
	},
	{
		question:
			"Rotate a given square matrix by 90 degrees in anti-clockwise direction.",
		source: "LeetCode",
		link_to_solve: "https://leetcode.com/problems/rotate-image/",
		link_website: "LeetCode",
		topic: "2D Arrays",
		input: "matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]",
		output: "[[3, 6, 9], [2, 5, 8], [1, 4, 7]]",
		explanation:
			"The given matrix rotated by 90 degrees in anti-clockwise direction is [[3, 6, 9], [2, 5, 8], [1, 4, 7]].",
	},
	{
		question: "Find the median of a row-wise sorted matrix.",
		source: "GeeksforGeeks",
		link_to_solve:
			"https://www.geeksforgeeks.org/find-median-row-wise-sorted-matrix/",
		link_website: "GeeksforGeeks",
		topic: "2D Arrays",
		input: "matrix = [[1, 3, 5], [2, 6, 9], [3, 6, 9]]",
		output: "5",
		explanation: "The median of the given row-wise sorted matrix is 5.",
	},
	{
		question: "Search in a row-wise and column-wise sorted matrix.",
		source: "LeetCode",
		link_to_solve: "https://leetcode.com/problems/search-a-2d-matrix-ii/",
		link_website: "LeetCode",
		topic: "2D Arrays",
		input: "matrix = [[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]], target = 5",
		output: "true",
		explanation: "The target value 5 is present in the given matrix.",
	},
	{
		question: "Find the transpose of a matrix.",
		source: "GeeksforGeeks",
		link_to_solve:
			"https://www.geeksforgeeks.org/program-find-transpose-matrix/",
		link_website: "GeeksforGeeks",
		topic: "2D Arrays",
		input: "matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]",
		output: "[[1, 4, 7], [2, 5, 8], [3, 6, 9]]",
		explanation:
			"The transpose of the given matrix is [[1, 4, 7], [2, 5, 8], [3, 6, 9]].",
	},
	{
		question:
			"Rotate a given square matrix by 90 degrees in clockwise direction.",
		source: "LeetCode",
		link_to_solve: "https://leetcode.com/problems/rotate-image/",
		link_website: "LeetCode",
		topic: "2D Arrays",
		input: "matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]",
		output: "[[7, 4, 1], [8, 5, 2], [9, 6, 3]]",
		explanation:
			"The given matrix rotated by 90 degrees in clockwise direction is [[7, 4, 1], [8, 5, 2], [9, 6, 3]].",
	},
	{
		question: "Find the number of islands in a given boolean 2D matrix.",
		source: "GeeksforGeeks",
		link_to_solve: "https://www.geeksforgeeks.org/find-number-of-islands/",
		link_website: "GeeksforGeeks",
		topic: "2D Arrays",
		input: "grid = [[1, 1, 0, 0, 0], [0, 1, 0, 0, 1], [1, 0, 0, 1, 1], [0, 0, 0, 0, 0], [1, 0, 1, 0, 1]]",
		output: "5",
		explanation: "The given matrix has 5 islands.",
	},
	{
		question: "Print a given matrix in spiral form.",
		source: "LeetCode",
		link_to_solve: "https://leetcode.com/problems/spiral-matrix/",
		link_website: "LeetCode",
		topic: "2D Arrays",
		input: "matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]",
		output: "[1, 2, 3, 6, 9, 8, 7, 4, 5]",
		explanation:
			"The matrix printed in spiral form is [1, 2, 3, 6, 9, 8, 7, 4, 5].",
	},
	{
		question: "Find the longest increasing path in a matrix.",
		source: "GeeksforGeeks",
		link_to_solve:
			"https://www.geeksforgeeks.org/find-the-longest-path-in-a-matrix-with-given-constraints/",
		link_website: "GeeksforGeeks",
		topic: "2D Arrays",
		input: "matrix = [[9, 9, 4], [6, 6, 8], [2, 1, 1]]",
		output: "4",

		explanation:
			"The longest increasing path in the given matrix is [1, 2, 6, 9] with length 4.",
	},
	{
		question: "Find the number of rectangles in a matrix.",
		source: "LeetCode",
		link_to_solve:
			"https://leetcode.com/problems/number-of-rectangles-that-can-form-the-largest-square/",
		link_website: "LeetCode",
		topic: "2D Arrays",
		input: "matrix = [[1, 0, 0, 1, 0], [0, 0, 1, 0, 1], [0, 0, 0, 1, 0], [1, 0, 1, 0, 1]]",
		output: "6",
		explanation: "The given matrix contains 6 rectangles.",
	},
	{
		question: "Find the count of paths with given cost in a given matrix.",
		source: "GeeksforGeeks",
		link_to_solve:
			"https://www.geeksforgeeks.org/count-number-of-ways-to-reach-destination-in-a-maze/",
		link_website: "GeeksforGeeks",
		topic: "2D Arrays",
		input: "maze = [[0, 0, 0, 0], [0, -1, 0, 0], [-1, 0, 0, 0], [0, 0, 0, 0]], cost = 4",
		output: "4",
		explanation:
			"There are 4 paths with cost 4 to reach the destination in the given maze.",
	},
	{
		question: "Find the perimeter of islands in a binary matrix.",
		source: "LeetCode",
		link_to_solve: "https://leetcode.com/problems/island-perimeter/",
		link_website: "LeetCode",
		topic: "2D Arrays",
		input: "grid = [[0, 1, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0], [1, 1, 0, 0]]",
		output: "16",
		explanation:
			"The perimeter of islands in the given binary matrix is 16.",
	},
	{
		question: "Find the longest path with consecutive numbers in a matrix.",
		source: "GeeksforGeeks",
		link_to_solve:
			"https://www.geeksforgeeks.org/longest-possible-route-in-a-matrix-with-hurdles/",
		link_website: "GeeksforGeeks",
		topic: "2D Arrays",
		input: "matrix = [[1, 2, 3], [6, 5, 4], [7, 8, 9]]",
		output: "9",
		explanation:
			"The longest path with consecutive numbers in the given matrix is [1, 2, 3, 4, 5, 6, 7, 8, 9] with length 9.",
	},
	{
		question:
			"Find the shortest distance in a maze from a given source to a destination.",
		source: "LeetCode",
		link_to_solve: "https://leetcode.com/problems/the-maze/",
		link_website: "LeetCode",
		topic: "2D Arrays",
		input: "maze = [[0, 0, 1, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 1, 0], [1, 1, 0, 1, 1], [0, 0, 0, 0, 0]], start = [0, 4], destination = [4, 4]",
		output: "12",
		explanation:
			"The shortest distance from start to destination in the given maze is 12.",
	},
	{
		question: "Find the count of islands in a given boolean 2D matrix.",
		source: "GeeksforGeeks",
		link_to_solve: "https://www.geeksforgeeks.org/find-number-of-islands/",
		link_website: "GeeksforGeeks",
		topic: "2D Arrays",
		input: "grid = [[1, 1, 0, 0, 0], [0, 1, 0, 0, 1], [1, 0, 0, 1, 1], [0, 0, 0, 0, 0], [1, 0, 1, 0, 1]]",
		output: "5",
		explanation: "The given matrix has 5 islands.",
	},
	{
		question:
			"Find the length of the shortest bridge between two islands in a binary matrix.",
		source: "LeetCode",
		link_to_solve: "https://leetcode.com/problems/shortest-bridge/",
		link_website: "LeetCode",
		topic: "2D Arrays",
		input: "A = [[0, 1, 0], [0, 0, 0], [0, 0, 1]]",
		output: "2",
		explanation:
			"The length of the shortest bridge between two islands in the given binary matrix is 2.",
	},
	{
		question:
			"Find the number of submatrices with all ones in a binary matrix.",
		source: "GeeksforGeeks",
		link_to_solve:
			"https://www.geeksforgeeks.org/count-number-sub-matrices-all-ones/",
		link_website: "GeeksforGeeks",
		topic: "2D Arrays",
		input: "matrix = [[1, 1, 1], [1, 1, 1], [1, 1, 1]]",
		output: "14",
		explanation:
			"There are 14 submatrices with all ones in the given binary matrix.",
	},
	{
		question:
			"Find the count of rectangles with given area in a binary matrix.",
		source: "LeetCode",
		link_to_solve:
			"https://leetcode.com/problems/number-of-submatrices-that-sum-to-target/",
		link_website: "LeetCode",
		topic: "2D Arrays",
		input: "matrix = [[0, 1, 0], [1, 1, 1], [0, 1, 0]], target = 0",
		output: "4",
		explanation:
			"There are 4 rectangles with area 0 in the given binary matrix.",
	},
	{
		question: "Find the maximum sum rectangle in a 2D matrix.",
		source: "GeeksforGeeks",
		link_to_solve:
			"https://www.geeksforgeeks.org/maximum-sum-rectangle-in-a-2d-matrix-dp-27/",
		link_website: "GeeksforGeeks",
		topic: "2D Arrays",
		input: "matrix = [[1, 2, -1, -4, -20], [-8, -3, 4, 2, 1], [3, 8, 10, 1, 3], [-4, -1, 1, 7, -6]]",
		output: "29",
		explanation:
			"The maximum sum rectangle in the given matrix is [[8, 10, 1], [4, 2, 1], [1, 7, -6]] with sum 29.",
	},
	{
		question:
			"Rotate a given square matrix by 90 degrees in anti-clockwise direction.",
		source: "LeetCode",
		link_to_solve: "https://leetcode.com/problems/rotate-image/",
		link_website: "LeetCode",
		topic: "2D Arrays",
		input: "matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]",
		output: "[[3, 6, 9], [2, 5, 8], [1, 4, 7]]",
		explanation:
			"The given matrix rotated by 90 degrees in anti-clockwise direction is [[3, 6, 9], [2, 5, 8], [1, 4, 7]].",
	},
	{
		question: "Find the median of a row-wise sorted matrix.",
		source: "GeeksforGeeks",
		link_to_solve:
			"https://www.geeksforgeeks.org/find-median-row-wise-sorted-matrix/",
		link_website: "GeeksforGeeks",
		topic: "2D Arrays",
		input: "matrix = [[1, 3, 5], [2, 6, 9], [3, 6, 9]]",
		output: "5",
		explanation: "The median of the given row-wise sorted matrix is 5.",
	},
	{
		question:
			"Find the shortest path in a weighted graph from source to destination.",
		source: "GeeksforGeeks",
		link_to_solve:
			"https://www.geeksforgeeks.org/shortest-path-unweighted-graph/",
		link_website: "GeeksforGeeks",
		topic: "Graphs",
		input: "graph = {0: [1, 2], 1: [2], 2: []}, source = 0, destination = 2",
		output: "[0, 2]",
		explanation: "The shortest path from node 0 to node 2 is [0, 2].",
	},
	{
		question: "Check if a graph is bipartite.",
		source: "LeetCode",
		link_to_solve: "https://leetcode.com/problems/is-graph-bipartite/",
		link_website: "LeetCode",
		topic: "Graphs",
		input: "graph = [[1, 3], [0, 2], [1, 3], [0, 2]]",
		output: "true",
		explanation: "The given graph is bipartite.",
	},
	{
		question:
			"Find the number of connected components in an undirected graph.",
		source: "GeeksforGeeks",
		link_to_solve:
			"https://www.geeksforgeeks.org/connected-components-in-an-undirected-graph/",
		link_website: "GeeksforGeeks",
		topic: "Graphs",
		input: "graph = {0: [1, 2], 1: [0, 2], 2: [0, 1], 3: [4], 4: [3]}",
		output: "2",
		explanation: "The given graph has 2 connected components.",
	},
	{
		question: "Detect a cycle in a directed graph.",
		source: "LeetCode",
		link_to_solve: "https://leetcode.com/problems/course-schedule/",
		link_website: "LeetCode",
		topic: "Graphs",
		input: "numCourses = 4, prerequisites = [[1,0],[2,1],[3,2],[1,3]]",
		output: "true",
		explanation: "The directed graph contains a cycle.",
	},
	{
		question:
			"Find the shortest path in a weighted graph from source to destination.",
		source: "GeeksforGeeks",
		link_to_solve:
			"https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/",
		link_website: "GeeksforGeeks",
		topic: "Graphs",
		input: "graph = {0: {1: 4, 2: 1}, 1: {2: 2, 3: 5}, 2: {3: 1}, 3: {2: 7}}",
		output: "[0, 2, 3]",
		explanation: "The shortest path from node 0 to node 3 is [0, 2, 3].",
	},
	{
		question:
			"Find if there is a path between two vertices in a directed graph.",
		source: "LeetCode",
		link_to_solve:
			"https://leetcode.com/problems/find-eventual-safe-states/",
		link_website: "LeetCode",
		topic: "Graphs",
		input: "graph = [[1,2],[2,3],[5],[0],[5],[],[]]",
		output: "[2,4,5,6]",
		explanation: "There are four eventual safe states: 2, 4, 5, and 6.",
	},
	{
		question: "Find the articulation points in an undirected graph.",
		source: "GeeksforGeeks",
		link_to_solve:
			"https://www.geeksforgeeks.org/articulation-points-or-cut-vertices-in-a-graph/",
		link_website: "GeeksforGeeks",
		topic: "Graphs",
		input: "graph = {0: [1, 2], 1: [0, 2], 2: [0, 1, 3, 4], 3: [2], 4: [2]}",
		output: "[2]",
		explanation: "Node 2 is an articulation point in the graph.",
	},
	{
		question: "Find the strongly connected components in a directed graph.",
		source: "LeetCode",
		link_to_solve:
			"https://leetcode.com/problems/number-of-strongly-connected-components-in-an-undirected-graph/",
		link_website: "LeetCode",
		topic: "Graphs",
		input: "graph = [[1, 2], [2, 3], [3, 1], [3, 4], [5, 4]]",
		output: "3",
		explanation: "There are 3 strongly connected components in the graph.",
	},
	{
		question: "Find the minimum spanning tree (MST) of a weighted graph.",
		source: "GeeksforGeeks",
		link_to_solve:
			"https://www.geeksforgeeks.org/kruskals-minimum-spanning-tree-algorithm-greedy-algo-2/",
		link_website: "GeeksforGeeks",
		topic: "Graphs",
		input: "graph = {(0, 1): 10, (0, 2): 6, (0, 3): 5, (1, 3): 15, (2, 3): 4}",
		output: "[(2, 3), (0, 3), (0, 1)]",
		explanation:
			"The minimum spanning tree of the given graph is [(2, 3), (0, 3), (0, 1)].",
	},
	{
		question:
			"Find the shortest distance between every pair of vertices in a weighted graph.",
		source: "LeetCode",
		link_to_solve: "https://leetcode.com/problems/network-delay-time/",
		link_website: "LeetCode",
		topic: "Graphs",
		input: "times = [[2,1,1],[2,3,1],[3,4,1]], N = 4, K = 2",
		output: "2",
		explanation:
			"The shortest delay time to reach all other nodes from node 2 is 2.",
	},
	{
		question: "Find the number of islands in a grid.",
		source: "GeeksforGeeks",
		link_to_solve: "https://www.geeksforgeeks.org/find-number-of-islands/",
		link_website: "GeeksforGeeks",
		topic: "Graphs",
		input: "grid = [[1,1,0,0,0],[1,1,0,0,0],[0,0,1,0,0],[0,0,0,1,1]]",
		output: "3",
		explanation: "The grid contains 3 islands.",
	},
	{
		question: "Find the maximum flow in a network flow graph.",
		source: "LeetCode",
		link_to_solve: "https://leetcode.com/problems/network-delay-time/",
		link_website: "LeetCode",
		topic: "Graphs",
		input: "times = [[2,1,1],[2,3,1],[3,4,1]], N = 4, K = 2",
		output: "2",
		explanation: "The maximum flow in the network flow graph is 2.",
	},
	{
		question: "Detect if a directed graph has a cycle using DFS.",
		source: "GeeksforGeeks",
		link_to_solve:
			"https://www.geeksforgeeks.org/detect-cycle-direct-graph-using-colors/",
		link_website: "GeeksforGeeks",
		topic: "Graphs",
		input: "graph = {0: [1, 2], 1: [2], 2: [0], 3: [4], 4: [3]}",
		output: "true",
		explanation: "The directed graph contains a cycle.",
	},
	{
		question: "Find the articulation points in an undirected graph.",
		source: "LeetCode",
		link_to_solve:
			"https://leetcode.com/problems/critical-connections-in-a-network/",
		link_website: "LeetCode",
		topic: "Graphs",
		input: "n = 4, connections = [[0,1],[1,2],[2,0],[1,3]]",
		output: "[[1,3]]",
		explanation: "The critical connection is between nodes 1 and 3.",
	},
	{
		question: "Find if a directed graph has a cycle using DFS.",
		source: "GeeksforGeeks",
		link_to_solve:
			"https://www.geeksforgeeks.org/detect-cycle-undirected-graph/",
		link_website: "GeeksforGeeks",
		topic: "Graphs",
		input: "graph = {0: [1, 2], 1: [2], 2: []}",
		output: "false",
		explanation: "The undirected graph does not contain a cycle.",
	},
	{
		question: "Find the bridges in an undirected graph.",
		source: "LeetCode",
		link_to_solve:
			"https://leetcode.com/problems/critical-connections-in-a-network/",
		link_website: "LeetCode",
		topic: "Graphs",
		input: "n = 4, connections = [[0,1],[1,2],[2,0],[1,3]]",
		output: "[[1,3]]",
		explanation: "The critical connection is between nodes 1 and 3.",
	},
];

let Sheet1 = [
	{
		"Topic:": "Array",
		"Problem: ": "Reverse the array",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/write-a-program-to-reverse-an-array-or-string/",
	},
	{
		"Topic:": "Array",
		"Problem: ": "Find the maximum and minimum element in an array",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/maximum-and-minimum-in-an-array/",
	},
	{
		"Topic:": "Array",
		"Problem: ": 'Find the "Kth" max and min element of an array ',
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/kth-smallest-element/0",
	},
	{
		"Topic:": "Array",
		"Problem: ":
			"Given an array which consists of only 0, 1 and 2. Sort the array without using any sorting algo",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/sort-an-array-of-0s-1s-and-2s/0",
	},
	{
		"Topic:": "Array",
		"Problem: ": "Move all the negative elements to one side of the array ",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/move-negative-numbers-beginning-positive-end-constant-extra-space/",
	},
	{
		"Topic:": "Array",
		"Problem: ":
			"Find the Union and Intersection of the two sorted arrays.",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/union-of-two-arrays/0",
	},
	{
		"Topic:": "Array",
		"Problem: ": "Write a program to cyclically rotate an array by one.",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/cyclically-rotate-an-array-by-one/0",
	},
	{
		"Topic:": "Array",
		"Problem: ": "find Largest sum contiguous Subarray [V. IMP]",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/kadanes-algorithm/0",
	},
	{
		"Topic:": "Array",
		"Problem: ": "Minimise the maximum difference between heights [V.IMP]",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/minimize-the-heights3351/1",
	},
	{
		"Topic:": "Array",
		"Problem: ": "Minimum no. of Jumps to reach end of an array",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/minimum-number-of-jumps/0",
	},
	{
		"Topic:": "Array",
		"Problem: ": "find duplicate in an array of N+1 Integers",
		Done: "<->",
		URL: "https://leetcode.com/problems/find-the-duplicate-number/",
	},
	{
		"Topic:": "Array",
		"Problem: ": "Merge 2 sorted arrays without using Extra space.",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/merge-two-sorted-arrays5135/1",
	},
	{
		"Topic:": "Array",
		"Problem: ": "Kadane's Algo [V.V.V.V.V IMP]",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/kadanes-algorithm/0",
	},
	{
		"Topic:": "Array",
		"Problem: ": "Merge Intervals",
		Done: "<->",
		URL: "https://leetcode.com/problems/merge-intervals/",
	},
	{
		"Topic:": "Array",
		"Problem: ": "Next Permutation",
		Done: "<->",
		URL: "https://leetcode.com/problems/next-permutation/",
	},
	{
		"Topic:": "Array",
		"Problem: ": "Count Inversion",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/inversion-of-array/0",
	},
	{
		"Topic:": "Array",
		"Problem: ": "Best time to buy and Sell stock",
		Done: "<->",
		URL: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
	},
	{
		"Topic:": "Array",
		"Problem: ":
			"find all pairs on integer array whose sum is equal to given number",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/count-pairs-with-given-sum5022/1",
	},
	{
		"Topic:": "Array",
		"Problem: ": "find common elements In 3 sorted arrays",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/common-elements1132/1",
	},
	{
		"Topic:": "Array",
		"Problem: ":
			"Rearrange the array in alternating positive and negative items with O(1) extra space",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/rearrange-array-alternating-positive-negative-items-o1-extra-space/",
	},
	{
		"Topic:": "Array",
		"Problem: ": "Find if there is any subarray with sum equal to 0",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/subarray-with-0-sum/0",
	},
	{
		"Topic:": "Array",
		"Problem: ": "Find factorial of a large number",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/factorials-of-large-numbers/0",
	},
	{
		"Topic:": "Array",
		"Problem: ": "find maximum product subarray ",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/maximum-product-subarray3604/1",
	},
	{
		"Topic:": "Array",
		"Problem: ": "Find longest coinsecutive subsequence",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/longest-consecutive-subsequence/0",
	},
	{
		"Topic:": "Array",
		"Problem: ":
			'Given an array of size n and a number k, fin all elements that appear more than " n/k " times.',
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/given-an-array-of-of-size-n-finds-all-the-elements-that-appear-more-than-nk-times/",
	},
	{
		"Topic:": "Array",
		"Problem: ":
			"Maximum profit by buying and selling a share atmost twice",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/maximum-profit-by-buying-and-selling-a-share-at-most-twice/",
	},
	{
		"Topic:": "Array",
		"Problem: ": "Find whether an array is a subset of another array",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/array-subset-of-another-array/0",
	},
	{
		"Topic:": "Array",
		"Problem: ": "Find the triplet that sum to a given value",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/triplet-sum-in-array/0",
	},
	{
		"Topic:": "Array",
		"Problem: ": "Trapping Rain water problem",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/trapping-rain-water/0",
	},
	{
		"Topic:": "Array",
		"Problem: ": "Chocolate Distribution problem",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/chocolate-distribution-problem/0",
	},
	{
		"Topic:": "Array",
		"Problem: ": "Smallest Subarray with sum greater than a given value",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/smallest-subarray-with-sum-greater-than-x/0",
	},
	{
		"Topic:": "Array",
		"Problem: ": "Three way partitioning of an array around a given value",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/three-way-partitioning/1",
	},
	{
		"Topic:": "Array",
		"Problem: ":
			"Minimum swaps required bring elements less equal K together",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/minimum-swaps-required-to-bring-all-elements-less-than-or-equal-to-k-together/0",
	},
	{
		"Topic:": "Array",
		"Problem: ":
			"Minimum no. of operations required to make an array palindrome",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/palindromic-array/0",
	},
	{
		"Topic:": "Array",
		"Problem: ": "Median of 2 sorted arrays of equal size",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/find-the-median0527/1",
	},
	{
		"Topic:": "Array",
		"Problem: ": "Median of 2 sorted arrays of different size",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/median-of-two-sorted-arrays-of-different-sizes/",
	},
	{
		"Topic:": "Matrix",
		"Problem: ": "Spiral traversal on a Matrix",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/spirally-traversing-a-matrix/0",
	},
	{
		"Topic:": "Matrix",
		"Problem: ": "Search an element in a matriix",
		Done: "<->",
		URL: "https://leetcode.com/problems/search-a-2d-matrix/",
	},
	{
		"Topic:": "Matrix",
		"Problem: ": "Find median in a row wise sorted matrix",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/median-in-a-row-wise-sorted-matrix1527/1",
	},
	{
		"Topic:": "Matrix",
		"Problem: ": "Find row with maximum no. of 1's",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/row-with-max-1s0023/1",
	},
	{
		"Topic:": "Matrix",
		"Problem: ":
			"Print elements in sorted order using row-column wise sorted matrix",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/sorted-matrix/0",
	},
	{
		"Topic:": "Matrix",
		"Problem: ": "Maximum size rectangle",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/max-rectangle/1",
	},
	{
		"Topic:": "Matrix",
		"Problem: ": "Find a specific pair in matrix",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/find-a-specific-pair-in-matrix/",
	},
	{
		"Topic:": "Matrix",
		"Problem: ": "Rotate matrix by 90 degrees",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/rotate-a-matrix-by-90-degree-in-clockwise-direction-without-using-any-extra-space/",
	},
	{
		"Topic:": "Matrix",
		"Problem: ": "Kth smallest element in a row-cpumn wise sorted matrix",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/kth-element-in-matrix/1",
	},
	{
		"Topic:": "Matrix",
		"Problem: ": "Common elements in all rows of a given matrix",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/common-elements-in-all-rows-of-a-given-matrix/",
	},
	{
		"Topic:": "String",
		"Problem: ": "Reverse a String",
		Done: "<->",
		URL: "https://leetcode.com/problems/reverse-string/",
	},
	{
		"Topic:": "String",
		"Problem: ": "Check whether a String is Palindrome or not",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/palindrome-string0817/1",
	},
	{
		"Topic:": "String",
		"Problem: ": "Find Duplicate characters in a string",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/print-all-the-duplicates-in-the-input-string/",
	},
	{
		"Topic:": "String",
		"Problem: ": "Why strings are immutable in Java?",
		Done: "<->",
		URL: "<->",
	},
	{
		"Topic:": "String",
		"Problem: ":
			"Write a Code to check whether one string is a rotation of another",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/a-program-to-check-if-strings-are-rotations-of-each-other/",
	},
	{
		"Topic:": "String",
		"Problem: ":
			"Write a Program to check whether a string is a valid shuffle of two strings or not",
		Done: "<->",
		URL: "https://www.programiz.com/java-programming/examples/check-valid-shuffle-of-strings",
	},
	{
		"Topic:": "String",
		"Problem: ": "Count and Say problem",
		Done: "<->",
		URL: "https://leetcode.com/problems/count-and-say/",
	},
	{
		"Topic:": "String",
		"Problem: ":
			"Write a program to find the longest Palindrome in a string.[ Longest palindromic Substring]",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/longest-palindrome-in-a-string/0",
	},
	{
		"Topic:": "String",
		"Problem: ": "Find Longest Recurring Subsequence in String",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/longest-repeating-subsequence/0",
	},
	{
		"Topic:": "String",
		"Problem: ": "Print all Subsequences of a string.",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/print-subsequences-string/",
	},
	{
		"Topic:": "String",
		"Problem: ": "Print all the permutations of the given string",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/permutations-of-a-given-string/0",
	},
	{
		"Topic:": "String",
		"Problem: ":
			"Split the Binary string into two substring with equal 0’s and 1’s",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/split-the-binary-string-into-substrings-with-equal-number-of-0s-and-1s/",
	},
	{
		"Topic:": "String",
		"Problem: ": "Word Wrap Problem [VERY IMP].",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/word-wrap/0",
	},
	{
		"Topic:": "String",
		"Problem: ": "EDIT Distance [Very Imp]",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/edit-distance3702/1",
	},
	{
		"Topic:": "String",
		"Problem: ":
			"Find next greater number with same set of digits. [Very Very IMP]",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/next-permutation/0",
	},
	{
		"Topic:": "String",
		"Problem: ": "Balanced Parenthesis problem.[Imp]",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/parenthesis-checker/0",
	},
	{
		"Topic:": "String",
		"Problem: ": "Word break Problem[ Very Imp]",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/word-break/0",
	},
	{
		"Topic:": "String",
		"Problem: ": "Rabin Karp Algo",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/rabin-karp-algorithm-for-pattern-searching/",
	},
	{
		"Topic:": "String",
		"Problem: ": "KMP Algo",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/longest-prefix-suffix2527/1",
	},
	{
		"Topic:": "String",
		"Problem: ":
			"Convert a Sentence into its equivalent mobile numeric keypad sequence.",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/convert-a-sentence-into-its-equivalent-mobile-numeric-keypad-sequence0547/1",
	},
	{
		"Topic:": "String",
		"Problem: ":
			"Minimum number of bracket reversals needed to make an expression balanced.",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/count-the-reversals/0",
	},
	{
		"Topic:": "String",
		"Problem: ": "Count All Palindromic Subsequence in a given String.",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/count-palindromic-subsequences/1",
	},
	{
		"Topic:": "String",
		"Problem: ": "Count of number of given string in 2D character array",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/count-occurences-of-a-given-word-in-a-2-d-array/1",
	},
	{
		"Topic:": "String",
		"Problem: ": "Search a Word in a 2D Grid of characters.",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/find-the-string-in-grid/0",
	},
	{
		"Topic:": "String",
		"Problem: ": "Boyer Moore Algorithm for Pattern Searching.",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/boyer-moore-algorithm-for-pattern-searching/",
	},
	{
		"Topic:": "String",
		"Problem: ": "Converting Roman Numerals to Decimal",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/roman-number-to-integer/0",
	},
	{
		"Topic:": "String",
		"Problem: ": "Longest Common Prefix",
		Done: "<->",
		URL: "https://leetcode.com/problems/longest-common-prefix/",
	},
	{
		"Topic:": "String",
		"Problem: ": "Number of flips to make binary string alternate",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/min-number-of-flips/0",
	},
	{
		"Topic:": "String",
		"Problem: ": "Find the first repeated word in string.",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/second-most-repeated-string-in-a-sequence/0",
	},
	{
		"Topic:": "String",
		"Problem: ": "Minimum number of swaps for bracket balancing.",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/minimum-swaps-for-bracket-balancing/0",
	},
	{
		"Topic:": "String",
		"Problem: ": "Find the longest common subsequence between two strings.",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/longest-common-subsequence/0",
	},
	{
		"Topic:": "String",
		"Problem: ":
			"Program to generate all possible valid IP addresses from given  string.",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/generate-ip-addresses/1",
	},
	{
		"Topic:": "String",
		"Problem: ":
			"Write a program to find the smallest window that contains all characters of string itself.",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/smallest-distant-window/0",
	},
	{
		"Topic:": "String",
		"Problem: ":
			"Rearrange characters in a string such that no two adjacent are same",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/rearrange-characters/0",
	},
	{
		"Topic:": "String",
		"Problem: ":
			"Minimum characters to be added at front to make string palindrome",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/minimum-characters-added-front-make-string-palindrome/",
	},
	{
		"Topic:": "String",
		"Problem: ": "Given a sequence of words, print all anagrams together",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/k-anagrams-1/0",
	},
	{
		"Topic:": "String",
		"Problem: ":
			"Find the smallest window in a string containing all characters of another string",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/smallest-window-in-a-string-containing-all-the-characters-of-another-string/0",
	},
	{
		"Topic:": "String",
		"Problem: ": "Recursively remove all adjacent duplicates",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/consecutive-elements/0",
	},
	{
		"Topic:": "String",
		"Problem: ":
			"String matching where one string contains wildcard characters",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/wildcard-string-matching/0",
	},
	{
		"Topic:": "String",
		"Problem: ":
			"Function to find Number of customers who could not get a computer",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/function-to-find-number-of-customers-who-could-not-get-a-computer/",
	},
	{
		"Topic:": "String",
		"Problem: ":
			"Transform One String to Another using Minimum Number of Given Operation",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/transform-one-string-to-another-using-minimum-number-of-given-operation/",
	},
	{
		"Topic:": "String",
		"Problem: ": "Check if two given strings are isomorphic to each other",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/isomorphic-strings/0",
	},
	{
		"Topic:": "String",
		"Problem: ":
			"Recursively print all sentences that can be formed from list of word lists",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/recursively-print-all-sentences-that-can-be-formed-from-list-of-word-lists/",
	},
	{
		"Topic:": "Searching & Sorting",
		"Problem: ":
			"Find first and last positions of an element in a sorted array",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/first-and-last-occurrences-of-x/0",
	},
	{
		"Topic:": "Searching & Sorting",
		"Problem: ":
			"Find a Fixed Point (Value equal to index) in a given array",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/value-equal-to-index-value1330/1",
	},
	{
		"Topic:": "Searching & Sorting",
		"Problem: ": "Search in a rotated sorted array",
		Done: "<->",
		URL: "https://leetcode.com/problems/search-in-rotated-sorted-array/",
	},
	{
		"Topic:": "Searching & Sorting",
		"Problem: ": "square root of an integer",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/square-root/1",
	},
	{
		"Topic:": "Searching & Sorting",
		"Problem: ":
			"Maximum and minimum of an array using minimum number of comparisons",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/middle-of-three2926/1",
	},
	{
		"Topic:": "Searching & Sorting",
		"Problem: ": "Optimum location of point to minimize total distance",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/optimum-location-point-minimize-total-distance/",
	},
	{
		"Topic:": "Searching & Sorting",
		"Problem: ": "Find the repeating and the missing",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/find-missing-and-repeating2512/1",
	},
	{
		"Topic:": "Searching & Sorting",
		"Problem: ": "find majority element",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/majority-element/0",
	},
	{
		"Topic:": "Searching & Sorting",
		"Problem: ": "Searching in an array where adjacent differ by at most k",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/searching-in-an-array-where-adjacent-differ-by-at-most-k0456/1",
	},
	{
		"Topic:": "Searching & Sorting",
		"Problem: ": "find a pair with a given difference",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/find-pair-given-difference/0",
	},
	{
		"Topic:": "Searching & Sorting",
		"Problem: ": "find four elements that sum to a given value",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/find-all-four-sum-numbers/0",
	},
	{
		"Topic:": "Searching & Sorting",
		"Problem: ": "maximum sum such that no 2 elements are adjacent",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/stickler-theif/0",
	},
	{
		"Topic:": "Searching & Sorting",
		"Problem: ": "Count triplet with sum smaller than a given value",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/count-triplets-with-sum-smaller-than-x5549/1",
	},
	{
		"Topic:": "Searching & Sorting",
		"Problem: ": "merge 2 sorted arrays",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/merge-two-sorted-arrays5135/1",
	},
	{
		"Topic:": "Searching & Sorting",
		"Problem: ": "print all subarrays with 0 sum",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/zero-sum-subarrays/0",
	},
	{
		"Topic:": "Searching & Sorting",
		"Problem: ": "Product array Puzzle",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/product-array-puzzle/0",
	},
	{
		"Topic:": "Searching & Sorting",
		"Problem: ": "Sort array according to count of set bits",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/sort-by-set-bit-count/0",
	},
	{
		"Topic:": "Searching & Sorting",
		"Problem: ": "minimum no. of swaps required to sort the array",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/minimum-swaps/1",
	},
	{
		"Topic:": "Searching & Sorting",
		"Problem: ": "Bishu and Soldiers",
		Done: "<->",
		URL: "https://www.hackerearth.com/practice/algorithms/searching/binary-search/practice-problems/algorithm/bishu-and-soldiers/",
	},
	{
		"Topic:": "Searching & Sorting",
		"Problem: ": "Rasta and Kheshtak",
		Done: "<->",
		URL: "https://www.hackerearth.com/practice/algorithms/searching/binary-search/practice-problems/algorithm/rasta-and-kheshtak/",
	},
	{
		"Topic:": "Searching & Sorting",
		"Problem: ": "Kth smallest number again",
		Done: "<->",
		URL: "https://www.hackerearth.com/practice/algorithms/searching/binary-search/practice-problems/algorithm/kth-smallest-number-again-2/",
	},
	{
		"Topic:": "Searching & Sorting",
		"Problem: ": "Find pivot element in a sorted array",
		Done: "<->",
		URL: "http://theoryofprogramming.com/2017/12/16/find-pivot-element-sorted-rotated-array/",
	},
	{
		"Topic:": "Searching & Sorting",
		"Problem: ": "K-th Element of Two Sorted Arrays",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/k-th-element-of-two-sorted-array/0",
	},
	{
		"Topic:": "Searching & Sorting",
		"Problem: ": "Aggressive cows",
		Done: "<->",
		URL: "https://www.spoj.com/problems/AGGRCOW/",
	},
	{
		"Topic:": "Searching & Sorting",
		"Problem: ": "Book Allocation Problem",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/allocate-minimum-number-of-pages/0",
	},
	{
		"Topic:": "Searching & Sorting",
		"Problem: ": "EKOSPOJ:",
		Done: "<->",
		URL: "https://www.spoj.com/problems/EKO/",
	},
	{
		"Topic:": "Searching & Sorting",
		"Problem: ": "Job Scheduling Algo",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/weighted-job-scheduling-log-n-time/",
	},
	{
		"Topic:": "Searching & Sorting",
		"Problem: ": "Missing Number in AP",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/arithmetic-number/0",
	},
	{
		"Topic:": "Searching & Sorting",
		"Problem: ":
			"Smallest number with atleastn trailing zeroes infactorial",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/smallest-factorial-number5929/1",
	},
	{
		"Topic:": "Searching & Sorting",
		"Problem: ": "Painters Partition Problem:",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/allocate-minimum-number-of-pages/0",
	},
	{
		"Topic:": "Searching & Sorting",
		"Problem: ": "ROTI-Prata SPOJ",
		Done: "<->",
		URL: "https://www.spoj.com/problems/PRATA/",
	},
	{
		"Topic:": "Searching & Sorting",
		"Problem: ": "DoubleHelix SPOJ",
		Done: "<->",
		URL: "https://www.spoj.com/problems/ANARC05B/",
	},
	{
		"Topic:": "Searching & Sorting",
		"Problem: ": "Subset Sums",
		Done: "<->",
		URL: "https://www.spoj.com/problems/SUBSUMS/",
	},
	{
		"Topic:": "Searching & Sorting",
		"Problem: ": "Findthe inversion count",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/inversion-of-array/0",
	},
	{
		"Topic:": "Searching & Sorting",
		"Problem: ": "Implement Merge-sort in-place",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/in-place-merge-sort/",
	},
	{
		"Topic:": "Searching & Sorting",
		"Problem: ":
			"Partitioning and Sorting Arrays with Many Repeated Entries",
		Done: "<->",
		URL: "https://www.baeldung.com/java-sorting-arrays-with-repeated-entries",
	},
	{
		"Topic:": "LinkedList",
		"Problem: ":
			"Write a Program to reverse the Linked List. (Both Iterative and recursive)",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/reverse-a-linked-list/",
	},
	{
		"Topic:": "LinkedList",
		"Problem: ": "Reverse a Linked List in group of Given Size. [Very Imp]",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/reverse-a-linked-list-in-groups-of-given-size/1",
	},
	{
		"Topic:": "LinkedList",
		"Problem: ": "Write a program to Detect loop in a linked list.",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/detect-loop-in-linked-list/1",
	},
	{
		"Topic:": "LinkedList",
		"Problem: ": "Write a program to Delete loop in a linked list.",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/remove-loop-in-linked-list/1",
	},
	{
		"Topic:": "LinkedList",
		"Problem: ": "Find the starting point of the loop. ",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/find-first-node-of-loop-in-a-linked-list/",
	},
	{
		"Topic:": "LinkedList",
		"Problem: ": "Remove Duplicates in a sorted Linked List.",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/remove-duplicate-element-from-sorted-linked-list/1",
	},
	{
		"Topic:": "LinkedList",
		"Problem: ": "Remove Duplicates in a Un-sorted Linked List.",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/remove-duplicates-from-an-unsorted-linked-list/1",
	},
	{
		"Topic:": "LinkedList",
		"Problem: ":
			"Write a Program to Move the last element to Front in a Linked List.",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/move-last-element-to-front-of-a-given-linked-list/",
	},
	{
		"Topic:": "LinkedList",
		"Problem: ": "Add “1” to a number represented as a Linked List.",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/add-1-to-a-number-represented-as-linked-list/1",
	},
	{
		"Topic:": "LinkedList",
		"Problem: ": "Add two numbers represented by linked lists.",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/add-two-numbers-represented-by-linked-lists/1",
	},
	{
		"Topic:": "LinkedList",
		"Problem: ": "Intersection of two Sorted Linked List.",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/intersection-of-two-sorted-linked-lists/1",
	},
	{
		"Topic:": "LinkedList",
		"Problem: ": "Intersection Point of two Linked Lists.",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/intersection-point-in-y-shapped-linked-lists/1",
	},
	{
		"Topic:": "LinkedList",
		"Problem: ": "Merge Sort For Linked lists.[Very Important]",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/sort-a-linked-list/1",
	},
	{
		"Topic:": "LinkedList",
		"Problem: ": "Quicksort for Linked Lists.[Very Important]",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/quick-sort-on-linked-list/1",
	},
	{
		"Topic:": "LinkedList",
		"Problem: ": "Find the middle Element of a linked list.",
		Done: "<->",
		URL: "https://leetcode.com/problems/middle-of-the-linked-list/",
	},
	{
		"Topic:": "LinkedList",
		"Problem: ": "Check if a linked list is a circular linked list.",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/circular-linked-list/1",
	},
	{
		"Topic:": "LinkedList",
		"Problem: ": "Split a Circular linked list into two halves.",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/split-a-circular-linked-list-into-two-halves/1",
	},
	{
		"Topic:": "LinkedList",
		"Problem: ":
			"Write a Program to check whether the Singly Linked list is a palindrome or not.",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/check-if-linked-list-is-pallindrome/1",
	},
	{
		"Topic:": "LinkedList",
		"Problem: ": "Deletion from a Circular Linked List.",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/deletion-circular-linked-list/",
	},
	{
		"Topic:": "LinkedList",
		"Problem: ": "Reverse a Doubly Linked list.",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/reverse-a-doubly-linked-list/1",
	},
	{
		"Topic:": "LinkedList",
		"Problem: ": "Find pairs with a given sum in a DLL.",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/find-pairs-given-sum-doubly-linked-list/",
	},
	{
		"Topic:": "LinkedList",
		"Problem: ":
			"Count triplets in a sorted DLL whose sum is equal to given value “X”.",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/count-triplets-sorted-doubly-linked-list-whose-sum-equal-given-value-x/",
	},
	{
		"Topic:": "LinkedList",
		"Problem: ": "Sort a “k”sorted Doubly Linked list.[Very IMP]",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/sort-k-sorted-doubly-linked-list/",
	},
	{
		"Topic:": "LinkedList",
		"Problem: ": "Rotate DoublyLinked list by N nodes.",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/rotate-doubly-linked-list-n-nodes/",
	},
	{
		"Topic:": "LinkedList",
		"Problem: ":
			"Rotate a Doubly Linked list in group of Given Size.[Very IMP]",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/reverse-doubly-linked-list-groups-given-size/",
	},
	{
		"Topic:": "LinkedList",
		"Problem: ": "Can we reverse a linked list in less than O(n) ?",
		Done: "<->",
		URL: "<->",
	},
	{
		"Topic:": "LinkedList",
		"Problem: ":
			"Why Quicksort is preferred for. Arrays and Merge Sort for LinkedLists ?",
		Done: "<->",
		URL: "<->",
	},
	{
		"Topic:": "LinkedList",
		"Problem: ": "Flatten a Linked List",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/flattening-a-linked-list/1",
	},
	{
		"Topic:": "LinkedList",
		"Problem: ": "Sort a LL of 0's, 1's and 2's",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/given-a-linked-list-of-0s-1s-and-2s-sort-it/1",
	},
	{
		"Topic:": "LinkedList",
		"Problem: ": "Clone a linked list with next and random pointer",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/clone-a-linked-list-with-next-and-random-pointer/1",
	},
	{
		"Topic:": "LinkedList",
		"Problem: ": "Merge K sorted Linked list",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/merge-k-sorted-linked-lists/1",
	},
	{
		"Topic:": "LinkedList",
		"Problem: ": "Multiply 2 no. represented by LL",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/multiply-two-linked-lists/1",
	},
	{
		"Topic:": "LinkedList",
		"Problem: ": "Delete nodes which have a greater value on right side",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/delete-nodes-having-greater-value-on-right/1",
	},
	{
		"Topic:": "LinkedList",
		"Problem: ": "Segregate even and odd nodes in a Linked List",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/segregate-even-and-odd-nodes-in-a-linked-list/0",
	},
	{
		"Topic:": "LinkedList",
		"Problem: ": "Program for n’th node from the end of a Linked List",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/nth-node-from-end-of-linked-list/1",
	},
	{
		"Topic:": "LinkedList",
		"Problem: ":
			"Find the first non-repeating character from a stream of characters",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/first-non-repeating-character-in-a-stream/0",
	},
	{
		"Topic:": "Binary Trees",
		"Problem: ": "level order traversal",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/level-order-traversal/1",
	},
	{
		"Topic:": "Binary Trees",
		"Problem: ": "Reverse Level Order traversal",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/reverse-level-order-traversal/1",
	},
	{
		"Topic:": "Binary Trees",
		"Problem: ": "Height of a tree",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/height-of-binary-tree/1",
	},
	{
		"Topic:": "Binary Trees",
		"Problem: ": "Diameter of a tree",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/diameter-of-binary-tree/1",
	},
	{
		"Topic:": "Binary Trees",
		"Problem: ": "Mirror of a tree",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/create-a-mirror-tree-from-the-given-binary-tree/",
	},
	{
		"Topic:": "Binary Trees",
		"Problem: ":
			"Inorder Traversal of a tree both using recursion and Iteration",
		Done: "<->",
		URL: "https://www.techiedelight.com/inorder-tree-traversal-iterative-recursive/",
	},
	{
		"Topic:": "Binary Trees",
		"Problem: ":
			"Preorder Traversal of a tree both using recursion and Iteration",
		Done: "<->",
		URL: "https://www.techiedelight.com/preorder-tree-traversal-iterative-recursive/",
	},
	{
		"Topic:": "Binary Trees",
		"Problem: ":
			"Postorder Traversal of a tree both using recursion and Iteration",
		Done: "<->",
		URL: "https://www.techiedelight.com/postorder-tree-traversal-iterative-recursive/",
	},
	{
		"Topic:": "Binary Trees",
		"Problem: ": "Left View of a tree",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/left-view-of-binary-tree/1",
	},
	{
		"Topic:": "Binary Trees",
		"Problem: ": "Right View of Tree",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/right-view-of-binary-tree/1",
	},
	{
		"Topic:": "Binary Trees",
		"Problem: ": "Top View of a tree",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/top-view-of-binary-tree/1",
	},
	{
		"Topic:": "Binary Trees",
		"Problem: ": "Bottom View of a tree",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/bottom-view-of-binary-tree/1",
	},
	{
		"Topic:": "Binary Trees",
		"Problem: ": "Zig-Zag traversal of a binary tree",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/zigzag-tree-traversal/1",
	},
	{
		"Topic:": "Binary Trees",
		"Problem: ": "Check if a tree is balanced or not",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/check-for-balanced-tree/1",
	},
	{
		"Topic:": "Binary Trees",
		"Problem: ": "Diagonal Traversal of a Binary tree",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/diagonal-traversal-of-binary-tree/",
	},
	{
		"Topic:": "Binary Trees",
		"Problem: ": "Boundary traversal of a Binary tree",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/boundary-traversal-of-binary-tree/1",
	},
	{
		"Topic:": "Binary Trees",
		"Problem: ":
			"Construct Binary Tree from String with Bracket Representation",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/construct-binary-tree-from-string-with-bracket-representation/1",
	},
	{
		"Topic:": "Binary Trees",
		"Problem: ": "Convert Binary tree into Doubly Linked List",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/binary-tree-to-dll/1",
	},
	{
		"Topic:": "Binary Trees",
		"Problem: ": "Convert Binary tree into Sum tree",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/transform-to-sum-tree/1",
	},
	{
		"Topic:": "Binary Trees",
		"Problem: ":
			"Construct Binary tree from Inorder and preorder traversal",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/construct-tree-1/1",
	},
	{
		"Topic:": "Binary Trees",
		"Problem: ":
			"Find minimum swaps required to convert a Binary tree into BST",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/minimum-swap-required-convert-binary-tree-binary-search-tree/",
	},
	{
		"Topic:": "Binary Trees",
		"Problem: ": "Check if Binary tree is Sum tree or not",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/sum-tree/1",
	},
	{
		"Topic:": "Binary Trees",
		"Problem: ": "Check if all leaf nodes are at same level or not",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/leaf-at-same-level/1",
	},
	{
		"Topic:": "Binary Trees",
		"Problem: ":
			"Check if a Binary Tree contains duplicate subtrees of size 2 or more [ IMP ]",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/duplicate-subtree-in-binary-tree/1",
	},
	{
		"Topic:": "Binary Trees",
		"Problem: ": "Check if 2 trees are mirror or not",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/check-mirror-in-n-ary-tree/0",
	},
	{
		"Topic:": "Binary Trees",
		"Problem: ": "Sum of Nodes on the Longest path from root to leaf node ",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/sum-of-the-longest-bloodline-of-a-tree/1",
	},
	{
		"Topic:": "Binary Trees",
		"Problem: ": "Check if given graph is tree or not.  [ IMP ]",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/check-given-graph-tree/",
	},
	{
		"Topic:": "Binary Trees",
		"Problem: ": "Find Largest subtree sum in a tree",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/find-largest-subtree-sum-tree/",
	},
	{
		"Topic:": "Binary Trees",
		"Problem: ":
			"Maximum Sum of nodes in Binary tree such that no two are adjacent ",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/maximum-sum-nodes-binary-tree-no-two-adjacent/",
	},
	{
		"Topic:": "Binary Trees",
		"Problem: ": 'Print all "K" Sum paths in a Binary tree',
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/print-k-sum-paths-binary-tree/",
	},
	{
		"Topic:": "Binary Trees",
		"Problem: ": "Find LCA in a Binary tree",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/lowest-common-ancestor-in-a-binary-tree/1",
	},
	{
		"Topic:": "Binary Trees",
		"Problem: ": "Find distance between 2 nodes in a Binary tree",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/min-distance-between-two-given-nodes-of-a-binary-tree/1",
	},
	{
		"Topic:": "Binary Trees",
		"Problem: ": "Kth Ancestor of node in a Binary tree",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/kth-ancestor-node-binary-tree-set-2/",
	},
	{
		"Topic:": "Binary Trees",
		"Problem: ": "Find all Duplicate subtrees in a Binary tree [ IMP ]",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/duplicate-subtrees/1",
	},
	{
		"Topic:": "Binary Trees",
		"Problem: ": "Tree Isomorphism Problem",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/check-if-tree-is-isomorphic/1",
	},
	{
		"Topic:": "Binary Search Trees",
		"Problem: ": "Fina a value in a BST",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/binary-search-tree-set-1-search-and-insertion/",
	},
	{
		"Topic:": "Binary Search Trees",
		"Problem: ": "Deletion of a node in a BST",
		Done: "<->",
		URL: "https://leetcode.com/problems/delete-node-in-a-bst/",
	},
	{
		"Topic:": "Binary Search Trees",
		"Problem: ": "Find min and max value in a BST",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/minimum-element-in-bst/1",
	},
	{
		"Topic:": "Binary Search Trees",
		"Problem: ": "Find inorder successor and inorder predecessor in a BST",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/predecessor-and-successor/1",
	},
	{
		"Topic:": "Binary Search Trees",
		"Problem: ": "Check if a tree is a BST or not ",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/check-for-bst/1",
	},
	{
		"Topic:": "Binary Search Trees",
		"Problem: ": "Populate Inorder successor of all nodes",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/populate-inorder-successor-for-all-nodes/1",
	},
	{
		"Topic:": "Binary Search Trees",
		"Problem: ": "Find LCA  of 2 nodes in a BST",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/lowest-common-ancestor-in-a-bst/1",
	},
	{
		"Topic:": "Binary Search Trees",
		"Problem: ": "Construct BST from preorder traversal",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/construct-bst-from-given-preorder-traversa/",
	},
	{
		"Topic:": "Binary Search Trees",
		"Problem: ": "Convert Binary tree into BST",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/binary-tree-to-bst/1",
	},
	{
		"Topic:": "Binary Search Trees",
		"Problem: ": "Convert a normal BST into a Balanced BST",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/convert-normal-bst-balanced-bst/",
	},
	{
		"Topic:": "Binary Search Trees",
		"Problem: ": "Merge two BST [ V.V.V>IMP ]",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/merge-two-balanced-binary-search-trees/",
	},
	{
		"Topic:": "Binary Search Trees",
		"Problem: ": "Find Kth largest element in a BST",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/kth-largest-element-in-bst/1",
	},
	{
		"Topic:": "Binary Search Trees",
		"Problem: ": "Find Kth smallest element in a BST",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/find-k-th-smallest-element-in-bst/1",
	},
	{
		"Topic:": "Binary Search Trees",
		"Problem: ":
			'Count pairs from 2 BST whose sum is equal to given value "X"',
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/brothers-from-different-root/1",
	},
	{
		"Topic:": "Binary Search Trees",
		"Problem: ": "Find the median of BST in O(n) time and O(1) space",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/find-median-bst-time-o1-space/",
	},
	{
		"Topic:": "Binary Search Trees",
		"Problem: ": "Count BST ndoes that lie in a given range",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/count-bst-nodes-that-lie-in-a-given-range/1",
	},
	{
		"Topic:": "Binary Search Trees",
		"Problem: ":
			"Replace every element with the least greater element on its right",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/replace-every-element-with-the-least-greater-element-on-its-right/",
	},
	{
		"Topic:": "Binary Search Trees",
		"Problem: ":
			'Given "n" appointments, find the conflicting appointments',
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/given-n-appointments-find-conflicting-appointments/",
	},
	{
		"Topic:": "Binary Search Trees",
		"Problem: ": "Check preorder is valid or not",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/preorder-to-postorder/0",
	},
	{
		"Topic:": "Binary Search Trees",
		"Problem: ": "Check whether BST contains Dead end",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/check-whether-bst-contains-dead-end/1",
	},
	{
		"Topic:": "Binary Search Trees",
		"Problem: ": "Largest BST in a Binary Tree [ V.V.V.V.V IMP ]",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/largest-bst/1",
	},
	{
		"Topic:": "Binary Search Trees",
		"Problem: ": "Flatten BST to sorted list",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/flatten-bst-to-sorted-list-increasing-order/",
	},
	{
		"Topic:": "Greedy",
		"Problem: ": "Activity Selection Problem",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/activity-selection-1587115620/1/",
	},
	{
		"Topic:": "Greedy",
		"Problem: ": "Job SequencingProblem",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/job-sequencing-problem/0",
	},
	{
		"Topic:": "Greedy",
		"Problem: ": "Huffman Coding",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/huffman-encoding/0",
	},
	{
		"Topic:": "Greedy",
		"Problem: ": "Water Connection Problem",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/water-connection-problem/0",
	},
	{
		"Topic:": "Greedy",
		"Problem: ": "Fractional Knapsack Problem",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/fractional-knapsack/0",
	},
	{
		"Topic:": "Greedy",
		"Problem: ": "Greedy Algorithm to find Minimum number of Coins",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/coin-piles/0",
	},
	{
		"Topic:": "Greedy",
		"Problem: ": "Maximum trains for which stoppage can be provided",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/maximum-trains-stoppage-can-provided/",
	},
	{
		"Topic:": "Greedy",
		"Problem: ": "Minimum Platforms Problem",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/minimum-platforms/0",
	},
	{
		"Topic:": "Greedy",
		"Problem: ": "Buy Maximum Stocks if i stocks can be bought on i-th day",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/buy-maximum-stocks-stocks-can-bought-th-day/",
	},
	{
		"Topic:": "Greedy",
		"Problem: ": "Find the minimum and maximum amount to buy all N candies",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/shop-in-candy-store/0",
	},
	{
		"Topic:": "Greedy",
		"Problem: ":
			"Minimize Cash Flow among a given set of friends who have borrowed money from each other",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/minimize-cash-flow-among-given-set-friends-borrowed-money/",
	},
	{
		"Topic:": "Greedy",
		"Problem: ": "Minimum Cost to cut a board into squares",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/minimum-cost-cut-board-squares/",
	},
	{
		"Topic:": "Greedy",
		"Problem: ": "Check if it is possible to survive on Island",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/survival/",
	},
	{
		"Topic:": "Greedy",
		"Problem: ": "Find maximum meetings in one room",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/find-maximum-meetings-in-one-room/",
	},
	{
		"Topic:": "Greedy",
		"Problem: ": "Maximum product subset of an array",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/maximum-product-subset-array/",
	},
	{
		"Topic:": "Greedy",
		"Problem: ": "Maximize array sum after K negations",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/maximize-sum-after-k-negations/0",
	},
	{
		"Topic:": "Greedy",
		"Problem: ": "Maximize the sum of arr[i]*i",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/maximize-arrii-of-an-array/0",
	},
	{
		"Topic:": "Greedy",
		"Problem: ": "Maximum sum of absolute difference of an array",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/maximum-sum-absolute-difference-array/",
	},
	{
		"Topic:": "Greedy",
		"Problem: ":
			"Maximize sum of consecutive differences in a circular array",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/swap-and-maximize/0",
	},
	{
		"Topic:": "Greedy",
		"Problem: ":
			"Minimum sum of absolute difference of pairs of two arrays",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/minimum-sum-absolute-difference-pairs-two-arrays/",
	},
	{
		"Topic:": "Greedy",
		"Problem: ": "Program for Shortest Job First (or SJF) CPU Scheduling",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/program-for-shortest-job-first-or-sjf-cpu-scheduling-set-1-non-preemptive/",
	},
	{
		"Topic:": "Greedy",
		"Problem: ":
			"Program for Least Recently Used (LRU) Page Replacement algorithm",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/page-faults-in-lru/0",
	},
	{
		"Topic:": "Greedy",
		"Problem: ": "Smallest subset with sum greater than all other elements",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/smallest-subset-sum-greater-elements/",
	},
	{
		"Topic:": "Greedy",
		"Problem: ": "Chocolate Distribution Problem",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/chocolate-distribution-problem/0",
	},
	{
		"Topic:": "Greedy",
		"Problem: ": "DEFKIN -Defense of a Kingdom",
		Done: "<->",
		URL: "https://www.spoj.com/problems/DEFKIN/",
	},
	{
		"Topic:": "Greedy",
		"Problem: ": "DIEHARD -DIE HARD",
		Done: "<->",
		URL: "https://www.spoj.com/problems/DIEHARD/",
	},
	{
		"Topic:": "Greedy",
		"Problem: ": "GERGOVIA -Wine trading in Gergovia",
		Done: "<->",
		URL: "https://www.spoj.com/problems/GERGOVIA/",
	},
	{
		"Topic:": "Greedy",
		"Problem: ": "Picking Up Chicks",
		Done: "<->",
		URL: "https://www.spoj.com/problems/GCJ101BB/",
	},
	{
		"Topic:": "Greedy",
		"Problem: ": "CHOCOLA –Chocolate",
		Done: "<->",
		URL: "https://www.spoj.com/problems/CHOCOLA/",
	},
	{
		"Topic:": "Greedy",
		"Problem: ": "ARRANGE -Arranging Amplifiers",
		Done: "<->",
		URL: "https://www.spoj.com/problems/ARRANGE/",
	},
	{
		"Topic:": "Greedy",
		"Problem: ": "K Centers Problem",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/k-centers-problem-set-1-greedy-approximate-algorithm/",
	},
	{
		"Topic:": "Greedy",
		"Problem: ": "Minimum Cost of ropes",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/minimum-cost-of-ropes/0",
	},
	{
		"Topic:": "Greedy",
		"Problem: ":
			"Find smallest number with given number of digits and sum of digits",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/smallest-number5829/1",
	},
	{
		"Topic:": "Greedy",
		"Problem: ":
			"Rearrange characters in a string such that no two adjacent are same",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/rearrange-characters/0",
	},
	{
		"Topic:": "Greedy",
		"Problem: ": "Find maximum sum possible equal sum of three stacks",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/find-maximum-sum-possible-equal-sum-three-stacks/",
	},
	{
		"Topic:": "BackTracking",
		"Problem: ": "Rat in a maze Problem",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/rat-in-a-maze-problem/1",
	},
	{
		"Topic:": "BackTracking",
		"Problem: ": "Printing all solutions in N-Queen Problem",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/printing-solutions-n-queen-problem/",
	},
	{
		"Topic:": "BackTracking",
		"Problem: ": "Word Break Problem using Backtracking",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/word-break-part-2/0",
	},
	{
		"Topic:": "BackTracking",
		"Problem: ": "Remove Invalid Parentheses",
		Done: "<->",
		URL: "https://leetcode.com/problems/remove-invalid-parentheses/",
	},
	{
		"Topic:": "BackTracking",
		"Problem: ": "Sudoku Solver",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/solve-the-sudoku/0",
	},
	{
		"Topic:": "BackTracking",
		"Problem: ": "m Coloring Problem",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/m-coloring-problem/0",
	},
	{
		"Topic:": "BackTracking",
		"Problem: ": "Print all palindromic partitions of a string",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/given-a-string-print-all-possible-palindromic-partition/",
	},
	{
		"Topic:": "BackTracking",
		"Problem: ": "Subset Sum Problem",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/subset-sum-problem2014/1",
	},
	{
		"Topic:": "BackTracking",
		"Problem: ": "The Knight’s tour problem",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/the-knights-tour-problem-backtracking-1/",
	},
	{
		"Topic:": "BackTracking",
		"Problem: ": "Tug of War",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/tug-of-war/",
	},
	{
		"Topic:": "BackTracking",
		"Problem: ": "Find shortest safe route in a path with landmines",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/find-shortest-safe-route-in-a-path-with-landmines/",
	},
	{
		"Topic:": "BackTracking",
		"Problem: ": "Combinational Sum",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/combination-sum/0",
	},
	{
		"Topic:": "BackTracking",
		"Problem: ": "Find Maximum number possible by doing at-most K swaps",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/largest-number-in-k-swaps/0",
	},
	{
		"Topic:": "BackTracking",
		"Problem: ": "Print all permutations of a string ",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/permutations-of-a-given-string/0",
	},
	{
		"Topic:": "BackTracking",
		"Problem: ":
			"Find if there is a path of more than k length from a source",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/find-if-there-is-a-path-of-more-than-k-length-from-a-source/",
	},
	{
		"Topic:": "BackTracking",
		"Problem: ": "Longest Possible Route in a Matrix with Hurdles",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/longest-possible-route-in-a-matrix-with-hurdles/",
	},
	{
		"Topic:": "BackTracking",
		"Problem: ":
			"Print all possible paths from top left to bottom right of a mXn matrix",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/print-all-possible-paths-from-top-left-to-bottom-right-of-a-mxn-matrix/",
	},
	{
		"Topic:": "BackTracking",
		"Problem: ": "Partition of a set intoK subsets with equal sum",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/partition-array-to-k-subsets/1",
	},
	{
		"Topic:": "BackTracking",
		"Problem: ":
			"Find the K-th Permutation Sequence of first N natural numbers",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/find-the-k-th-permutation-sequence-of-first-n-natural-numbers/",
	},
	{
		"Topic:": "Stacks & Queues",
		"Problem: ": " Implement Stack from Scratch",
		Done: "<->",
		URL: "https://www.tutorialspoint.com/javaexamples/data_stack.htm",
	},
	{
		"Topic:": "Stacks & Queues",
		"Problem: ": " Implement Queue from Scratch",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/queue-set-1introduction-and-array-implementation/",
	},
	{
		"Topic:": "Stacks & Queues",
		"Problem: ": "Implement 2 stack in an array",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/implement-two-stacks-in-an-array/1",
	},
	{
		"Topic:": "Stacks & Queues",
		"Problem: ": "find the middle element of a stack",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/design-a-stack-with-find-middle-operation/",
	},
	{
		"Topic:": "Stacks & Queues",
		"Problem: ": 'Implement "N" stacks in an Array',
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/efficiently-implement-k-stacks-single-array/",
	},
	{
		"Topic:": "Stacks & Queues",
		"Problem: ":
			"Check the expression has valid or Balanced parenthesis or not.",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/parenthesis-checker/0",
	},
	{
		"Topic:": "Stacks & Queues",
		"Problem: ": "Reverse a String using Stack",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/reverse-a-string-using-stack/1",
	},
	{
		"Topic:": "Stacks & Queues",
		"Problem: ":
			"Design a Stack that supports getMin() in O(1) time and O(1) extra space.",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/special-stack/1",
	},
	{
		"Topic:": "Stacks & Queues",
		"Problem: ": "Find the next Greater element",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/next-larger-element/0",
	},
	{
		"Topic:": "Stacks & Queues",
		"Problem: ": "The celebrity Problem",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/the-celebrity-problem/1",
	},
	{
		"Topic:": "Stacks & Queues",
		"Problem: ": "Arithmetic Expression evaluation",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/arithmetic-expression-evalution/",
	},
	{
		"Topic:": "Stacks & Queues",
		"Problem: ": "Evaluation of Postfix expression",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/evaluation-of-postfix-expression/0",
	},
	{
		"Topic:": "Stacks & Queues",
		"Problem: ":
			"Implement a method to insert an element at its bottom without using any other data structure.",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/program-to-insert-an-element-at-the-bottom-of-a-stack/",
	},
	{
		"Topic:": "Stacks & Queues",
		"Problem: ": "Reverse a stack using recursion",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/reverse-a-stack-using-recursion/",
	},
	{
		"Topic:": "Stacks & Queues",
		"Problem: ": "Sort a Stack using recursion",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/sort-a-stack/1",
	},
	{
		"Topic:": "Stacks & Queues",
		"Problem: ": "Merge Overlapping Intervals",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/overlapping-intervals/0",
	},
	{
		"Topic:": "Stacks & Queues",
		"Problem: ": "Largest rectangular Area in Histogram",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/maximum-rectangular-area-in-a-histogram/0",
	},
	{
		"Topic:": "Stacks & Queues",
		"Problem: ": "Length of the Longest Valid Substring",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/valid-substring0624/1",
	},
	{
		"Topic:": "Stacks & Queues",
		"Problem: ": "Expression contains redundant bracket or not",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/expression-contains-redundant-bracket-not/",
	},
	{
		"Topic:": "Stacks & Queues",
		"Problem: ": "Implement Stack using Queue",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/stack-using-two-queues/1",
	},
	{
		"Topic:": "Stacks & Queues",
		"Problem: ": "Implement Stack using Deque",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/implement-stack-queue-using-deque/",
	},
	{
		"Topic:": "Stacks & Queues",
		"Problem: ":
			"Stack Permutations (Check if an array is stack permutation of other)",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/stack-permutations-check-if-an-array-is-stack-permutation-of-other/",
	},
	{
		"Topic:": "Stacks & Queues",
		"Problem: ": "Implement Queue using Stack  ",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/queue-using-two-stacks/1",
	},
	{
		"Topic:": "Stacks & Queues",
		"Problem: ": 'Implement "n" queue in an array',
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/efficiently-implement-k-queues-single-array/",
	},
	{
		"Topic:": "Stacks & Queues",
		"Problem: ": "Implement a Circular queue",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/circular-queue-set-1-introduction-array-implementation/",
	},
	{
		"Topic:": "Stacks & Queues",
		"Problem: ": "LRU Cache Implementationa",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/lru-cache/1",
	},
	{
		"Topic:": "Stacks & Queues",
		"Problem: ": "Reverse a Queue using recursion",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/queue-reversal/1",
	},
	{
		"Topic:": "Stacks & Queues",
		"Problem: ": "Reverse the first “K” elements of a queue",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/reverse-first-k-elements-of-queue/1",
	},
	{
		"Topic:": "Stacks & Queues",
		"Problem: ": "Interleave the first half of the queue with second half",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/interleave-first-half-queue-second-half/",
	},
	{
		"Topic:": "Stacks & Queues",
		"Problem: ":
			"Find the first circular tour that visits all Petrol Pumps",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/circular-tour/1",
	},
	{
		"Topic:": "Stacks & Queues",
		"Problem: ": "Minimum time required to rot all oranges",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/rotten-oranges/0",
	},
	{
		"Topic:": "Stacks & Queues",
		"Problem: ": "Distance of nearest cell having 1 in a binary matrix",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/distance-of-nearest-cell-having-1/0",
	},
	{
		"Topic:": "Stacks & Queues",
		"Problem: ": "First negative integer in every window of size “k”",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/first-negative-integer-in-every-window-of-size-k/0",
	},
	{
		"Topic:": "Stacks & Queues",
		"Problem: ": "Check if all levels of two trees are anagrams or not.",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/check-if-all-levels-of-two-trees-are-anagrams-or-not/",
	},
	{
		"Topic:": "Stacks & Queues",
		"Problem: ":
			"Sum of minimum and maximum elements of all subarrays of size “k”.",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/sum-minimum-maximum-elements-subarrays-size-k/",
	},
	{
		"Topic:": "Stacks & Queues",
		"Problem: ":
			"Minimum sum of squares of character counts in a given string after removing “k” characters.",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/game-with-string/0",
	},
	{
		"Topic:": "Stacks & Queues",
		"Problem: ":
			"Queue based approach or first non-repeating character in a stream.",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/first-non-repeating-character-in-a-stream/0",
	},
	{
		"Topic:": "Stacks & Queues",
		"Problem: ": "Next Smaller Element",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/next-smaller-element/",
	},
	{
		"Topic:": "Heap",
		"Problem: ": "Implement a Maxheap/MinHeap using arrays and recursion.",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/building-heap-from-array/",
	},
	{
		"Topic:": "Heap",
		"Problem: ": "Sort an Array using heap. (HeapSort)",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/heap-sort/",
	},
	{
		"Topic:": "Heap",
		"Problem: ": "Maximum of all subarrays of size k.",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/sliding-window-maximum-maximum-of-all-subarrays-of-size-k/",
	},
	{
		"Topic:": "Heap",
		"Problem: ": "“k” largest element in an array",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/k-largest-elements4206/1",
	},
	{
		"Topic:": "Heap",
		"Problem: ": "Kth smallest and largest element in an unsorted array",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/kth-smallestlargest-element-unsorted-array/",
	},
	{
		"Topic:": "Heap",
		"Problem: ": "Merge “K” sorted arrays. [ IMP ]",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/merge-k-sorted-arrays/1",
	},
	{
		"Topic:": "Heap",
		"Problem: ": "Merge 2 Binary Max Heaps",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/merge-two-binary-max-heap/0",
	},
	{
		"Topic:": "Heap",
		"Problem: ": "Kth largest sum continuous subarrays",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/k-th-largest-sum-contiguous-subarray/",
	},
	{
		"Topic:": "Heap",
		"Problem: ": "Leetcode- reorganize strings",
		Done: "<->",
		URL: "https://leetcode.com/problems/reorganize-string/",
	},
	{
		"Topic:": "Heap",
		"Problem: ": "Merge “K” Sorted Linked Lists [V.IMP]",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/merge-k-sorted-linked-lists/1",
	},
	{
		"Topic:": "Heap",
		"Problem: ": "Smallest range in “K” Lists",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/find-smallest-range-containing-elements-from-k-lists/1",
	},
	{
		"Topic:": "Heap",
		"Problem: ": "Median in a stream of Integers",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/find-median-in-a-stream/0",
	},
	{
		"Topic:": "Heap",
		"Problem: ": "Check if a Binary Tree is Heap",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/is-binary-tree-heap/1",
	},
	{
		"Topic:": "Heap",
		"Problem: ": "Connect “n” ropes with minimum cost",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/minimum-cost-of-ropes/0",
	},
	{
		"Topic:": "Heap",
		"Problem: ": "Convert BST to Min Heap",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/convert-bst-min-heap/",
	},
	{
		"Topic:": "Heap",
		"Problem: ": "Convert min heap to max heap",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/convert-min-heap-to-max-heap/",
	},
	{
		"Topic:": "Heap",
		"Problem: ":
			"Rearrange characters in a string such that no two adjacent are same.",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/rearrange-characters/0",
	},
	{
		"Topic:": "Heap",
		"Problem: ":
			"Minimum sum of two numbers formed from digits of an array",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/minimum-sum4058/1",
	},
	{
		"Topic:": "Graph",
		"Problem: ": "Create a Graph, print it (implemented code)",
		Done: "<->",
		URL: "https://1drv.ms/t/s!AqTOHFO77CqEiRua06v1PATyiFg5",
	},
	{
		"Topic:": "Graph",
		"Problem: ": "Create a Graph (for practice)",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/print-adjacency-list-1587115620/1",
	},
	{
		"Topic:": "Graph",
		"Problem: ": "Implement BFS algorithm ",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/bfs-traversal-of-graph/1",
	},
	{
		"Topic:": "Graph",
		"Problem: ": "Implement DFS Algo ",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/depth-first-traversal-for-a-graph/1",
	},
	{
		"Topic:": "Graph",
		"Problem: ": "Detect Cycle in Directed Graph using BFS/DFS Algo ",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/detect-cycle-in-a-directed-graph/1",
	},
	{
		"Topic:": "Graph",
		"Problem: ": "Detect Cycle in UnDirected Graph using BFS/DFS Algo ",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/detect-cycle-in-an-undirected-graph/1",
	},
	{
		"Topic:": "Graph",
		"Problem: ": "Search in a Maze",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/rat-in-a-maze-problem/1",
	},
	{
		"Topic:": "Graph",
		"Problem: ": "Minimum Step by Knight",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/steps-by-knight/0",
	},
	{
		"Topic:": "Graph",
		"Problem: ": "flood fill algo",
		Done: "<->",
		URL: "https://leetcode.com/problems/flood-fill/",
	},
	{
		"Topic:": "Graph",
		"Problem: ": "Clone a graph",
		Done: "<->",
		URL: "https://leetcode.com/problems/clone-graph/",
	},
	{
		"Topic:": "Graph",
		"Problem: ": "Making wired Connections",
		Done: "<->",
		URL: "https://leetcode.com/problems/number-of-operations-to-make-network-connected/",
	},
	{
		"Topic:": "Graph",
		"Problem: ": "word Ladder ",
		Done: "<->",
		URL: "https://leetcode.com/problems/word-ladder/",
	},
	{
		"Topic:": "Graph",
		"Problem: ": "Dijkstra algo",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/",
	},
	{
		"Topic:": "Graph",
		"Problem: ": "Implement Topological Sort ",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/topological-sort/1",
	},
	{
		"Topic:": "Graph",
		"Problem: ":
			"Minimum time taken by each job to be completed given by a Directed Acyclic Graph",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/minimum-time-taken-by-each-job-to-be-completed-given-by-a-directed-acyclic-graph/",
	},
	{
		"Topic:": "Graph",
		"Problem: ":
			"Find whether it is possible to finish all tasks or not from given dependencies",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/find-whether-it-is-possible-to-finish-all-tasks-or-not-from-given-dependencies/",
	},
	{
		"Topic:": "Graph",
		"Problem: ": "Find the no. of Islands",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/find-the-number-of-islands/1",
	},
	{
		"Topic:": "Graph",
		"Problem: ":
			"Given a sorted Dictionary of an Alien Language, find order of characters",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/alien-dictionary/1",
	},
	{
		"Topic:": "Graph",
		"Problem: ": "Implement Kruksal’sAlgorithm",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/kruskals-minimum-spanning-tree-algorithm-greedy-algo-2/",
	},
	{
		"Topic:": "Graph",
		"Problem: ": "Implement Prim’s Algorithm",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/prims-minimum-spanning-tree-mst-greedy-algo-5/",
	},
	{
		"Topic:": "Graph",
		"Problem: ": "Total no. of Spanning tree in a graph",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/total-number-spanning-trees-graph/",
	},
	{
		"Topic:": "Graph",
		"Problem: ": "Implement Bellman Ford Algorithm",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/negative-weight-cycle/0",
	},
	{
		"Topic:": "Graph",
		"Problem: ": "Implement Floyd warshallAlgorithm",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/implementing-floyd-warshall/0",
	},
	{
		"Topic:": "Graph",
		"Problem: ": "Travelling Salesman Problem",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/travelling-salesman-problem-set-1/",
	},
	{
		"Topic:": "Graph",
		"Problem: ": "Graph ColouringProblem",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/graph-coloring-applications/",
	},
	{
		"Topic:": "Graph",
		"Problem: ": "Snake and Ladders Problem",
		Done: "<->",
		URL: "https://leetcode.com/problems/snakes-and-ladders/",
	},
	{
		"Topic:": "Graph",
		"Problem: ": "Find bridge in a graph",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/bridge-in-a-graph/",
	},
	{
		"Topic:": "Graph",
		"Problem: ": "Count Strongly connected Components(Kosaraju Algo)",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/strongly-connected-components-kosarajus-algo/1",
	},
	{
		"Topic:": "Graph",
		"Problem: ": "Check whether a graph is Bipartite or Not",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/bipartite-graph/",
	},
	{
		"Topic:": "Graph",
		"Problem: ": "Detect Negative cycle in a graph",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/detect-negative-cycle-graph-bellman-ford/",
	},
	{
		"Topic:": "Graph",
		"Problem: ": "Longest path in a Directed Acyclic Graph",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/find-longest-path-directed-acyclic-graph/",
	},
	{
		"Topic:": "Graph",
		"Problem: ": "Journey to the Moon",
		Done: "<->",
		URL: "https://www.hackerrank.com/challenges/journey-to-the-moon/problem",
	},
	{
		"Topic:": "Graph",
		"Problem: ": "Cheapest Flights Within K Stops",
		Done: "<->",
		URL: "https://leetcode.com/problems/cheapest-flights-within-k-stops/description/",
	},
	{
		"Topic:": "Graph",
		"Problem: ": "Oliver and the Game",
		Done: "<->",
		URL: "https://www.hackerearth.com/practice/algorithms/graphs/topological-sort/practice-problems/algorithm/oliver-and-the-game-3/",
	},
	{
		"Topic:": "Graph",
		"Problem: ": "Water Jug problem using BFS",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/water-jug-problem-using-bfs/",
	},
	{
		"Topic:": "Graph",
		"Problem: ":
			"Find if there is a path of more thank length from a source",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/find-if-there-is-a-path-of-more-than-k-length-from-a-source/",
	},
	{
		"Topic:": "Graph",
		"Problem: ": "M-ColouringProblem",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/m-coloring-problem/0",
	},
	{
		"Topic:": "Graph",
		"Problem: ":
			"Minimum edges to reverse o make path from source to destination",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/minimum-edges-reverse-make-path-source-destination/",
	},
	{
		"Topic:": "Graph",
		"Problem: ":
			"Paths to travel each nodes using each edge(Seven Bridges)",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/paths-travel-nodes-using-edgeseven-bridges-konigsberg/",
	},
	{
		"Topic:": "Graph",
		"Problem: ": "Vertex Cover Problem",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/vertex-cover-problem-set-1-introduction-approximate-algorithm-2/",
	},
	{
		"Topic:": "Graph",
		"Problem: ": "Chinese Postman or Route Inspection",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/chinese-postman-route-inspection-set-1-introduction/",
	},
	{
		"Topic:": "Graph",
		"Problem: ": "Number of Triangles in a Directed and Undirected Graph",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/number-of-triangles-in-directed-and-undirected-graphs/",
	},
	{
		"Topic:": "Graph",
		"Problem: ":
			"Minimise the cashflow among a given set of friends who have borrowed money from each other",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/minimize-cash-flow-among-given-set-friends-borrowed-money/",
	},
	{
		"Topic:": "Graph",
		"Problem: ": "Two Clique Problem",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/two-clique-problem-check-graph-can-divided-two-cliques/",
	},
	{
		"Topic:": "Trie",
		"Problem: ": "Construct a trie from scratch",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/trie-insert-and-search/",
	},
	{
		"Topic:": "Trie",
		"Problem: ":
			"Find shortest unique prefix for every word in a given list",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/find-all-shortest-unique-prefixes-to-represent-each-word-in-a-given-list/",
	},
	{
		"Topic:": "Trie",
		"Problem: ": "Word Break Problem | (Trie solution)",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/word-break-problem-trie-solution/",
	},
	{
		"Topic:": "Trie",
		"Problem: ": "Given a sequence of words, print all anagrams together",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/k-anagrams-1/0",
	},
	{
		"Topic:": "Trie",
		"Problem: ": "Implement a Phone Directory",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/phone-directory/0",
	},
	{
		"Topic:": "Trie",
		"Problem: ": "Print unique rows in a given boolean matrix",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/unique-rows-in-boolean-matrix/1",
	},
	{
		"Topic:": "Dynamic Programming",
		"Problem: ": "Coin ChangeProblem",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/coin-change2448/1",
	},
	{
		"Topic:": "Dynamic Programming",
		"Problem: ": "Knapsack Problem",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/0-1-knapsack-problem/0",
	},
	{
		"Topic:": "Dynamic Programming",
		"Problem: ": "Binomial CoefficientProblem",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/ncr1019/1",
	},
	{
		"Topic:": "Dynamic Programming",
		"Problem: ": "Permutation CoefficientProblem",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/permutation-coefficient/",
	},
	{
		"Topic:": "Dynamic Programming",
		"Problem: ": "Program for nth Catalan Number",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/program-nth-catalan-number/",
	},
	{
		"Topic:": "Dynamic Programming",
		"Problem: ": "Matrix Chain Multiplication ",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/matrix-chain-multiplication-dp-8/",
	},
	{
		"Topic:": "Dynamic Programming",
		"Problem: ": "Edit Distance",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/edit-distance3702/1",
	},
	{
		"Topic:": "Dynamic Programming",
		"Problem: ": "Subset Sum Problem",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/subset-sum-problem2014/1",
	},
	{
		"Topic:": "Dynamic Programming",
		"Problem: ": "Friends Pairing Problem",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/friends-pairing-problem5425/1",
	},
	{
		"Topic:": "Dynamic Programming",
		"Problem: ": "Gold Mine Problem",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/gold-mine-problem/",
	},
	{
		"Topic:": "Dynamic Programming",
		"Problem: ": "Assembly Line SchedulingProblem",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/assembly-line-scheduling-dp-34/",
	},
	{
		"Topic:": "Dynamic Programming",
		"Problem: ": "Painting the Fenceproblem",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/painting-the-fence3727/1",
	},
	{
		"Topic:": "Dynamic Programming",
		"Problem: ": "Maximize The Cut Segments",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/cutted-segments/0",
	},
	{
		"Topic:": "Dynamic Programming",
		"Problem: ": "Longest Common Subsequence",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/longest-common-subsequence/0",
	},
	{
		"Topic:": "Dynamic Programming",
		"Problem: ": "Longest Repeated Subsequence",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/longest-repeating-subsequence/0",
	},
	{
		"Topic:": "Dynamic Programming",
		"Problem: ": "Longest Increasing Subsequence",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/longest-increasing-subsequence/0",
	},
	{
		"Topic:": "Dynamic Programming",
		"Problem: ": "Space Optimized Solution of LCS",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/space-optimized-solution-lcs/",
	},
	{
		"Topic:": "Dynamic Programming",
		"Problem: ": "LCS (Longest Common Subsequence) of three strings",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/lcs-of-three-strings/0",
	},
	{
		"Topic:": "Dynamic Programming",
		"Problem: ": "Maximum Sum Increasing Subsequence",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/maximum-sum-increasing-subsequence4749/1",
	},
	{
		"Topic:": "Dynamic Programming",
		"Problem: ": "Count all subsequences having product less than K",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/count-subsequences-product-less-k/",
	},
	{
		"Topic:": "Dynamic Programming",
		"Problem: ":
			"Longest subsequence such that difference between adjacent is one",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/longest-subsequence-such-that-difference-between-adjacents-is-one4724/1",
	},
	{
		"Topic:": "Dynamic Programming",
		"Problem: ":
			"Maximum subsequence sum such that no three are consecutive",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/maximum-subsequence-sum-such-that-no-three-are-consecutive/",
	},
	{
		"Topic:": "Dynamic Programming",
		"Problem: ": "Egg Dropping Problem",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/egg-dropping-puzzle/0",
	},
	{
		"Topic:": "Dynamic Programming",
		"Problem: ": "Maximum Length Chain of Pairs",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/max-length-chain/1",
	},
	{
		"Topic:": "Dynamic Programming",
		"Problem: ": "Maximum size square sub-matrix with all 1s",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/largest-square-formed-in-a-matrix/0",
	},
	{
		"Topic:": "Dynamic Programming",
		"Problem: ": "Maximum sum of pairs with specific difference",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/pairs-with-specific-difference/0",
	},
	{
		"Topic:": "Dynamic Programming",
		"Problem: ": "Min Cost PathProblem",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/path-in-matrix3805/1",
	},
	{
		"Topic:": "Dynamic Programming",
		"Problem: ": "Maximum difference of zeros and ones in binary string",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/maximum-difference-of-zeros-and-ones-in-binary-string4111/1",
	},
	{
		"Topic:": "Dynamic Programming",
		"Problem: ": "Minimum number of jumps to reach end",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/minimum-number-of-jumps/0",
	},
	{
		"Topic:": "Dynamic Programming",
		"Problem: ": "Minimum cost to fill given weight in a bag",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/minimum-cost-to-fill-given-weight-in-a-bag1956/1",
	},
	{
		"Topic:": "Dynamic Programming",
		"Problem: ": "Minimum removals from array to make max –min <= K",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/minimum-removals-array-make-max-min-k/",
	},
	{
		"Topic:": "Dynamic Programming",
		"Problem: ": "Longest Common Substring",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/longest-common-substring/0",
	},
	{
		"Topic:": "Dynamic Programming",
		"Problem: ": "Count number of ways to reacha given score in a game",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/reach-a-given-score/0",
	},
	{
		"Topic:": "Dynamic Programming",
		"Problem: ": "Count Balanced Binary Trees of Height h",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/bbt-counter/0",
	},
	{
		"Topic:": "Dynamic Programming",
		"Problem: ": "LargestSum Contiguous Subarray [V>V>V>V IMP ]",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/kadanes-algorithm/0",
	},
	{
		"Topic:": "Dynamic Programming",
		"Problem: ": "Smallest sum contiguous subarray",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/smallest-sum-contiguous-subarray/",
	},
	{
		"Topic:": "Dynamic Programming",
		"Problem: ": "Unbounded Knapsack (Repetition of items allowed)",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/knapsack-with-duplicate-items4201/1",
	},
	{
		"Topic:": "Dynamic Programming",
		"Problem: ": "Word Break Problem",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/word-break/0",
	},
	{
		"Topic:": "Dynamic Programming",
		"Problem: ": "Largest Independent Set Problem",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/largest-independent-set-problem-dp-26/",
	},
	{
		"Topic:": "Dynamic Programming",
		"Problem: ": "Partition problem",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/subset-sum-problem2014/1",
	},
	{
		"Topic:": "Dynamic Programming",
		"Problem: ": "Longest Palindromic Subsequence",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/longest-palindromic-subsequence-dp-12/",
	},
	{
		"Topic:": "Dynamic Programming",
		"Problem: ": "Count All Palindromic Subsequence in a given String",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/count-palindromic-subsequences/1",
	},
	{
		"Topic:": "Dynamic Programming",
		"Problem: ": "Longest Palindromic Substring",
		Done: "<->",
		URL: "https://leetcode.com/problems/longest-palindromic-substring/",
	},
	{
		"Topic:": "Dynamic Programming",
		"Problem: ": "Longest alternating subsequence",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/longest-alternating-subsequence/0",
	},
	{
		"Topic:": "Dynamic Programming",
		"Problem: ": "Weighted Job Scheduling",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/weighted-job-scheduling/",
	},
	{
		"Topic:": "Dynamic Programming",
		"Problem: ": "Coin game winner where every player has three choices",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/coin-game-winner-every-player-three-choices/",
	},
	{
		"Topic:": "Dynamic Programming",
		"Problem: ":
			"Count Derangements (Permutation such that no element appears in its original position) [ IMPORTANT ]",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/count-derangements-permutation-such-that-no-element-appears-in-its-original-position/",
	},
	{
		"Topic:": "Dynamic Programming",
		"Problem: ":
			"Maximum profit by buying and selling a share at most twice [ IMP ]",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/maximum-profit-by-buying-and-selling-a-share-at-most-twice/",
	},
	{
		"Topic:": "Dynamic Programming",
		"Problem: ": "Optimal Strategy for a Game",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/optimal-strategy-for-a-game/0",
	},
	{
		"Topic:": "Dynamic Programming",
		"Problem: ": "Optimal Binary Search Tree",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/optimal-binary-search-tree-dp-24/",
	},
	{
		"Topic:": "Dynamic Programming",
		"Problem: ": "Palindrome PartitioningProblem",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/palindromic-patitioning4845/1",
	},
	{
		"Topic:": "Dynamic Programming",
		"Problem: ": "Word Wrap Problem",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/word-wrap/0",
	},
	{
		"Topic:": "Dynamic Programming",
		"Problem: ": "Mobile Numeric Keypad Problem [ IMP ]",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/mobile-numeric-keypad5456/1",
	},
	{
		"Topic:": "Dynamic Programming",
		"Problem: ": "Boolean Parenthesization Problem",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/boolean-parenthesization/0",
	},
	{
		"Topic:": "Dynamic Programming",
		"Problem: ": "Largest rectangular sub-matrix whose sum is 0",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/largest-rectangular-sub-matrix-whose-sum-0/",
	},
	{
		"Topic:": "Dynamic Programming",
		"Problem: ":
			"Largest area rectangular sub-matrix with equal number of 1’s and 0’s [ IMP ]",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/largest-area-rectangular-sub-matrix-equal-number-1s-0s/",
	},
	{
		"Topic:": "Dynamic Programming",
		"Problem: ": "Maximum sum rectangle in a 2D matrix",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/maximum-sum-rectangle/0",
	},
	{
		"Topic:": "Dynamic Programming",
		"Problem: ":
			"Maximum profit by buying and selling a share at most k times",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/maximum-profit4657/1",
	},
	{
		"Topic:": "Dynamic Programming",
		"Problem: ": "Find if a string is interleaved of two other strings",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/interleaved-strings/1",
	},
	{
		"Topic:": "Dynamic Programming",
		"Problem: ": "Maximum Length of Pair Chain",
		Done: "<->",
		URL: "https://leetcode.com/problems/maximum-length-of-pair-chain/",
	},
	{
		"Topic:": "Bit Manipulation",
		"Problem: ": "Count set bits in an integer",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/set-bits0143/1",
	},
	{
		"Topic:": "Bit Manipulation",
		"Problem: ":
			"Find the two non-repeating elements in an array of repeating elements",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/finding-the-numbers0215/1",
	},
	{
		"Topic:": "Bit Manipulation",
		"Problem: ": "Count number of bits to be flipped to convert A to B",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/bit-difference/0",
	},
	{
		"Topic:": "Bit Manipulation",
		"Problem: ": "Count total set bits in all numbers from 1 to n",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/count-total-set-bits/0",
	},
	{
		"Topic:": "Bit Manipulation",
		"Problem: ": "Program to find whether a no is power of two",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/power-of-2/0",
	},
	{
		"Topic:": "Bit Manipulation",
		"Problem: ": "Find position of the only set bit",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/find-position-of-set-bit3706/1",
	},
	{
		"Topic:": "Bit Manipulation",
		"Problem: ": "Copy set bits in a range",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/copy-set-bits-in-a-range/",
	},
	{
		"Topic:": "Bit Manipulation",
		"Problem: ":
			"Divide two integers without using multiplication, division and mod operator",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/divide-two-integers-without-using-multiplication-division-mod-operator/",
	},
	{
		"Topic:": "Bit Manipulation",
		"Problem: ":
			"Calculate square of a number without using *, / and pow()",
		Done: "<->",
		URL: "https://www.geeksforgeeks.org/calculate-square-of-a-number-without-using-and-pow/",
	},
	{
		"Topic:": "Bit Manipulation",
		"Problem: ": "Power Set",
		Done: "<->",
		URL: "https://practice.geeksforgeeks.org/problems/power-set4302/1",
	},
];

let queLydia = [
	{
		id: 1,
		title: "1. What's the output?",
		text: null,
		code: "function sayHi() {<br>  console.log(name);<br>  console.log(age);<br>  var name = &#x27;Lydia&#x27;;<br>  let age = 21;<br>}<br><br>sayHi();",
		choices: [
			"A: `Lydia` and `undefined`",
			"B: `Lydia` and `ReferenceError`",
			"C: `ReferenceError` and `21`",
			"D: `undefined` and `ReferenceError`",
		],
		answer: "d)Answer: D<br><br>Within the function, we first declare the `name` variable with the `var` keyword. This means that the variable gets hoisted (memory space is set up during the creation phase) with the default value of `undefined`, until we actually get to the line where we define the variable. We haven't defined the variable yet on the line where we try to log the `name` variable, so it still holds the value of `undefined`.<br><br>Variables with the `let` keyword (and `const`) are hoisted, but unlike `var`, don't get _initialized_. They are not accessible before the line we declare (initialize) them. This is called the \"temporal dead zone\". When we try to access the variables before they are declared, JavaScript throws a `ReferenceError`.",
	},
	{
		id: 2,
		title: "2. What's the output?",
		text: null,
		code: "for (var i = 0; i &lt; 3; i++) {<br>  setTimeout(() =&gt; console.log(i), 1);<br>}<br><br>for (let i = 0; i &lt; 3; i++) {<br>  setTimeout(() =&gt; console.log(i), 1);<br>}",
		choices: [
			"A: `0 1 2` and `0 1 2`",
			"B: `0 1 2` and `3 3 3`",
			"C: `3 3 3` and `0 1 2`",
		],
		answer: "c)Answer: C<br><br>Because of the event queue in JavaScript, the `setTimeout` callback function is called _after_ the loop has been executed. Since the variable `i` in the first loop was declared using the `var` keyword, this value was global. During the loop, we incremented the value of `i` by `1` each time, using the unary operator `++`. By the time the `setTimeout` callback function was invoked, `i` was equal to `3` in the first example.<br><br>In the second loop, the variable `i` was declared using the `let` keyword: variables declared with the `let` (and `const`) keyword are block-scoped (a block is anything between `{ }`). During each iteration, `i` will have a new value, and each value is scoped inside the loop.",
	},
	{
		id: 3,
		title: "3. What's the output?",
		text: null,
		code: "const shape = {<br>  radius: 10,<br>  diameter() {<br>    return this.radius * 2;<br>  },<br>  perimeter: () =&gt; 2 * Math.PI * this.radius,<br>};<br><br>console.log(shape.diameter());<br>console.log(shape.perimeter());",
		choices: [
			"A: `20` and `62.83185307179586`",
			"B: `20` and `NaN`",
			"C: `20` and `63`",
			"D: `NaN` and `63`",
		],
		answer: "b)Answer: B<br><br>Note that the value of `diameter` is a regular function, whereas the value of `perimeter` is an arrow function.<br><br>With arrow functions, the `this` keyword refers to its current surrounding scope, unlike regular functions! This means that when we call `perimeter`, it doesn't refer to the shape object, but to its surrounding scope (window for example).<br><br>There is no value `radius` on that object, which returns `NaN`.",
	},
	{
		id: 4,
		title: "4. What's the output?",
		text: null,
		code: "+true;<br>!&#x27;Lydia&#x27;;",
		choices: [
			"A: `1` and `false`",
			"B: `false` and `NaN`",
			"C: `false` and `false`",
		],
		answer: "a)Answer: A<br><br>The unary plus tries to convert an operand to a number. `true` is `1`, and `false` is `0`.<br><br>The string `'Lydia'` is a truthy value. What we're actually asking, is \"is this truthy value falsy?\". This returns `false`.",
	},
	{
		id: 5,
		title: "5. Which one is true?",
		text: null,
		code: "const bird = {<br>  size: &#x27;small&#x27;,<br>};<br><br>const mouse = {<br>  name: &#x27;Mickey&#x27;,<br>  small: true,<br>};",
		choices: [
			"A: `mouse.bird.size` is not valid",
			"B: `mouse[bird.size]` is not valid",
			'C: `mouse[bird["size"]]` is not valid',
			"D: All of them are valid",
		],
		answer: 'a-1)Answer: A<br><br>In JavaScript, all object keys are strings (unless it\'s a Symbol). Even though we might not _type_ them as strings, they are always converted into strings under the hood.<br><br>JavaScript interprets (or unboxes) statements. When we use bracket notation, it sees the first opening bracket `[` and keeps going until it finds the closing bracket `]`. Only then, it will evaluate the statement.<br><br>`mouse[bird.size]`: First it evaluates `bird.size`, which is `"small"`. `mouse["small"]` returns `true`<br><br>However, with dot notation, this doesn\'t happen. `mouse` does not have a key called `bird`, which means that `mouse.bird` is `undefined`. Then, we ask for the `size` using dot notation: `mouse.bird.size`. Since `mouse.bird` is `undefined`, we\'re actually asking `undefined.size`. This isn\'t valid, and will throw an error similar to `Cannot read property "size" of undefined`.',
	},
	{
		id: 6,
		title: "6. What's the output?",
		text: null,
		code: "let c = { greeting: &#x27;Hey!&#x27; };<br>let d;<br><br>d = c;<br>c.greeting = &#x27;Hello&#x27;;<br>console.log(d.greeting);",
		choices: [
			"A: `Hello`",
			"B: `Hey!`",
			"C: `undefined`",
			"D: `ReferenceError`",
			"E: `TypeError`",
		],
		answer: "a-2)Answer: A<br><br>In JavaScript, all objects interact by _reference_ when setting them equal to each other.<br><br>First, variable `c` holds a value to an object. Later, we assign `d` with the same reference that `c` has to the object.<br><br>[![](https://camo.githubusercontent.com/90d7e0a800f423e8e042a55252a744a59cafe8d976d3126da45e0ffa8259078d/68747470733a2f2f692e696d6775722e636f6d2f6b6f356b3066732e706e67)](https://camo.githubusercontent.com/90d7e0a800f423e8e042a55252a744a59cafe8d976d3126da45e0ffa8259078d/68747470733a2f2f692e696d6775722e636f6d2f6b6f356b3066732e706e67)<br><br>When you change one object, you change all of them.",
	},
	{
		id: 7,
		title: "7. What's the output?",
		text: null,
		code: "let a = 3;<br>let b = new Number(3);<br>let c = 3;<br><br>console.log(a == b);<br>console.log(a === b);<br>console.log(b === c);",
		choices: [
			"A: `true` `false` `true`",
			"B: `false` `false` `true`",
			"C: `true` `false` `false`",
			"D: `false` `true` `true`",
		],
		answer: "c-1)Answer: C<br><br>`new Number()` is a built-in function constructor. Although it looks like a number, it's not really a number: it has a bunch of extra features and is an object.<br><br>When we use the `==` operator (Equality operator), it only checks whether it has the same _value_. They both have the value of `3`, so it returns `true`.<br><br>However, when we use the `===` operator (Strict equality operator), both value _and_ type should be the same. It's not: `new Number()` is not a number, it's an **object**. Both return `false.`",
	},
	{
		id: 8,
		title: "8. What's the output?",
		text: null,
		code: "class Chameleon {<br>  static colorChange(newColor) {<br>    this.newColor = newColor;<br>    return this.newColor;<br>  }<br><br>  constructor({ newColor = &#x27;green&#x27; } = {}) {<br>    this.newColor = newColor;<br>  }<br>}<br><br>const freddie = new Chameleon({ newColor: &#x27;purple&#x27; });<br>console.log(freddie.colorChange(&#x27;orange&#x27;));",
		choices: ["A: `orange`", "B: `purple`", "C: `green`", "D: `TypeError`"],
		answer: "d-1)Answer: D<br><br>The `colorChange` function is static. Static methods are designed to live only on the constructor in which they are created, and cannot be passed down to any children or called upon class instances. Since `freddie` is an instance of class Chameleon, the function cannot be called upon it. A `TypeError` is thrown.",
	},
	{
		id: 9,
		title: "9. What's the output?",
		text: null,
		code: "let greeting;<br>greetign = {}; // Typo!<br>console.log(greetign);",
		choices: [
			"A: `{}`",
			"B: `ReferenceError: greetign is not defined`",
			"C: `undefined`",
		],
		answer: 'a-3)Answer: A<br><br>It logs the object, because we just created an empty object on the global object! When we mistyped `greeting` as `greetign`, the JS interpreter actually saw this as:<br><br>1.  `global.greetign = {}` in Node.js<br>2.  `window.greetign = {}`, `frames.greetign = {}` and `self.greetign` in browsers.<br>3.  `self.greetign` in web workers.<br>4.  `globalThis.greetign` in all environments.<br><br>In order to avoid this, we can use `"use strict"`. This makes sure that you have declared a variable before setting it equal to anything.',
	},
	{
		id: 10,
		title: "10. What happens when we do this?",
		text: null,
		code: "function bark() {<br>  console.log(&#x27;Woof!&#x27;);<br>}<br><br>bark.animal = &#x27;dog&#x27;;",
		choices: [
			"A: Nothing, this is totally fine!",
			"B: `SyntaxError`. You cannot add properties to a function this way.",
			'C: `"Woof"` gets logged.',
			"D: `ReferenceError`",
		],
		answer: "a-4)Answer: A<br><br>This is possible in JavaScript, because functions are objects! (Everything besides primitive types are objects)<br><br>A function is a special type of object. The code you write yourself isn't the actual function. The function is an object with properties. This property is invocable.",
	},
	{
		id: 11,
		title: "11. What's the output?",
		text: null,
		code: "function Person(firstName, lastName) {<br>  this.firstName = firstName;<br>  this.lastName = lastName;<br>}<br><br>const member = new Person(&#x27;Lydia&#x27;, &#x27;Hallie&#x27;);<br>Person.getFullName = function() {<br>  return `${this.firstName} ${this.lastName}`;<br>};<br><br>console.log(member.getFullName());",
		choices: [
			"A: `TypeError`",
			"B: `SyntaxError`",
			"C: `Lydia Hallie`",
			"D: `undefined` `undefined`",
		],
		answer: "a-5)Answer: A<br><br>In JavaScript, functions are objects, and therefore, the method `getFullName` gets added to the constructor function object itself. For that reason, we can call `Person.getFullName()`, but `member.getFullName` throws a `TypeError`.<br><br>If you want a method to be available to all object instances, you have to add it to the prototype property:<br><br>Person.prototype.getFullName \\= function() {<br>  return \\`${this.firstName} ${this.lastName}\\`;<br>};",
	},
	{
		id: 12,
		title: "12. What's the output?",
		text: null,
		code: "function Person(firstName, lastName) {<br>  this.firstName = firstName;<br>  this.lastName = lastName;<br>}<br><br>const lydia = new Person(&#x27;Lydia&#x27;, &#x27;Hallie&#x27;);<br>const sarah = Person(&#x27;Sarah&#x27;, &#x27;Smith&#x27;);<br><br>console.log(lydia);<br>console.log(sarah);",
		choices: [
			'A: `Person {firstName: "Lydia", lastName: "Hallie"}` and `undefined`',
			'B: `Person {firstName: "Lydia", lastName: "Hallie"}` and `Person {firstName: "Sarah", lastName: "Smith"}`',
			'C: `Person {firstName: "Lydia", lastName: "Hallie"}` and `{}`',
			'D: `Person {firstName: "Lydia", lastName: "Hallie"}` and `ReferenceError`',
		],
		answer: "a-6)Answer: A<br><br>For `sarah`, we didn't use the `new` keyword. When using `new`, `this` refers to the new empty object we create. However, if you don't add `new`, `this` refers to the **global object**!<br><br>We said that `this.firstName` equals `\"Sarah\"` and `this.lastName` equals `\"Smith\"`. What we actually did, is defining `global.firstName = 'Sarah'` and `global.lastName = 'Smith'`. `sarah` itself is left `undefined`, since we don't return a value from the `Person` function.",
	},
	{
		id: 13,
		title: "13. What are the three phases of event propagation?",
		text: null,
		choices: [
			"A: Target > Capturing > Bubbling",
			"B: Bubbling > Target > Capturing",
			"C: Target > Bubbling > Capturing",
			"D: Capturing > Target > Bubbling",
		],
		answer: "d-2)Answer: D<br><br>During the **capturing** phase, the event goes through the ancestor elements down to the target element. It then reaches the **target** element, and **bubbling** begins.<br><br>[![](https://camo.githubusercontent.com/b302f8396d6e312bb45dce44b610d3bb03210420d43b32480893c9786a4427e5/68747470733a2f2f692e696d6775722e636f6d2f4e31386f5267642e706e67)](https://camo.githubusercontent.com/b302f8396d6e312bb45dce44b610d3bb03210420d43b32480893c9786a4427e5/68747470733a2f2f692e696d6775722e636f6d2f4e31386f5267642e706e67)",
		code: "",
	},
	{
		id: 14,
		title: "14. All object have prototypes.",
		text: null,
		choices: ["A: true", "B: false"],
		answer: "b-1)Answer: B<br><br>All objects have prototypes, except for the **base object**. The base object is the object created by the user, or an object that is created using the `new` keyword. The base object has access to some methods and properties, such as `.toString`. This is the reason why you can use built-in JavaScript methods! All of such methods are available on the prototype. Although JavaScript can't find it directly on your object, it goes down the prototype chain and finds it there, which makes it accessible for you.",
		code: "",
	},
	{
		id: 15,
		title: "15. What's the output?",
		text: null,
		code: "function sum(a, b) {<br>  return a + b;<br>}<br><br>sum(1, &#x27;2&#x27;);",
		choices: ["A: `NaN`", "B: `TypeError`", 'C: `"12"`', "D: `3`"],
		answer: 'c-2)Answer: C<br><br>JavaScript is a **dynamically typed language**: we don\'t specify what types certain variables are. Values can automatically be converted into another type without you knowing, which is called _implicit type coercion_. **Coercion** is converting from one type into another.<br><br>In this example, JavaScript converts the number `1` into a string, in order for the function to make sense and return a value. During the addition of a numeric type (`1`) and a string type (`\'2\'`), the number is treated as a string. We can concatenate strings like `"Hello" + "World"`, so what\'s happening here is `"1" + "2"` which returns `"12"`.',
	},
	{
		id: 16,
		title: "16. What's the output?",
		text: null,
		code: "let number = 0;<br>console.log(number++);<br>console.log(++number);<br>console.log(number);",
		choices: [
			"A: `1` `1` `2`",
			"B: `1` `2` `2`",
			"C: `0` `2` `2`",
			"D: `0` `1` `2`",
		],
		answer: "c-3)Answer: C<br><br>The **postfix** unary operator `++`:<br><br>1.  Returns the value (this returns `0`)<br>2.  Increments the value (number is now `1`)<br><br>The **prefix** unary operator `++`:<br><br>1.  Increments the value (number is now `2`)<br>2.  Returns the value (this returns `2`)<br><br>This returns `0 2 2`.",
	},
	{
		id: 17,
		title: "17. What's the output?",
		text: null,
		code: "function getPersonInfo(one, two, three) {<br>  console.log(one);<br>  console.log(two);<br>  console.log(three);<br>}<br><br>const person = &#x27;Lydia&#x27;;<br>const age = 21;<br><br>getPersonInfo`${person} is ${age} years old`;",
		choices: [
			'A: `"Lydia"` `21` `["", " is ", " years old"]`',
			'B: `["", " is ", " years old"]` `"Lydia"` `21`',
			'C: `"Lydia"` `["", " is ", " years old"]` `21`',
		],
		answer: "b-2)Answer: B<br><br>If you use tagged template literals, the value of the first argument is always an array of the string values. The remaining arguments get the values of the passed expressions!",
	},
	{
		id: 18,
		title: "18. What's the output?",
		text: null,
		code: "function checkAge(data) {<br>  if (data === { age: 18 }) {<br>    console.log(&#x27;You are an adult!&#x27;);<br>  } else if (data == { age: 18 }) {<br>    console.log(&#x27;You are still an adult.&#x27;);<br>  } else {<br>    console.log(`Hmm.. You don&#x27;t have an age I guess`);<br>  }<br>}<br><br>checkAge({ age: 18 });",
		choices: [
			"A: `You are an adult!`",
			"B: `You are still an adult.`",
			"C: `Hmm.. You don't have an age I guess`",
		],
		answer: "c-4)Answer: C<br><br>When testing equality, primitives are compared by their _value_, while objects are compared by their _reference_. JavaScript checks if the objects have a reference to the same location in memory.<br><br>The two objects that we are comparing don't have that: the object we passed as a parameter refers to a different location in memory than the object we used in order to check equality.<br><br>This is why both `{ age: 18 } === { age: 18 }` and `{ age: 18 } == { age: 18 }` return `false`.",
	},
	{
		id: 19,
		title: "19. What's the output?",
		text: null,
		code: "function getAge(...args) {<br>  console.log(typeof args);<br>}<br><br>getAge(21);",
		choices: [
			'A: `"number"`',
			'B: `"array"`',
			'C: `"object"`',
			'D: `"NaN"`',
		],
		answer: 'c-5)Answer: C<br><br>The rest parameter (`...args`) lets us "collect" all remaining arguments into an array. An array is an object, so `typeof args` returns `"object"`',
	},
	{
		id: 20,
		title: "20. What's the output?",
		text: null,
		code: "function getAge() {<br>  &#x27;use strict&#x27;;<br>  age = 21;<br>  console.log(age);<br>}<br><br>getAge();",
		choices: [
			"A: `21`",
			"B: `undefined`",
			"C: `ReferenceError`",
			"D: `TypeError`",
		],
		answer: 'c-6)Answer: C<br><br>With `"use strict"`, you can make sure that you don\'t accidentally declare global variables. We never declared the variable `age`, and since we use `"use strict"`, it will throw a reference error. If we didn\'t use `"use strict"`, it would have worked, since the property `age` would have gotten added to the global object.',
	},
	{
		id: 21,
		title: "21. What's the value of sum?",
		text: null,
		code: "const sum = eval(&#x27;10*10+5&#x27;);",
		choices: ["A: `105`", 'B: `"105"`', "C: `TypeError`", 'D: `"10*10+5"`'],
		answer: "a-7)Answer: A<br><br>`eval` evaluates codes that's passed as a string. If it's an expression, like in this case, it evaluates the expression. The expression is `10 * 10 + 5`. This returns the number `105`.",
	},
	{
		id: 22,
		title: "22. How long is cool_secret accessible?",
		text: null,
		code: "sessionStorage.setItem(&#x27;cool_secret&#x27;, 123);",
		choices: [
			"A: Forever, the data doesn't get lost.",
			"B: When the user closes the tab.",
			"C: When the user closes the entire browser, not only the tab.",
			"D: When the user shuts off their computer.",
		],
		answer: "b-3)Answer: B<br><br>The data stored in `sessionStorage` is removed after closing the _tab_.<br><br>If you used `localStorage`, the data would've been there forever, unless for example `localStorage.clear()` is invoked.",
	},
	{
		id: 23,
		title: "23. What's the output?",
		text: null,
		code: "var num = 8;<br>var num = 10;<br><br>console.log(num);",
		choices: [
			"A: `8`",
			"B: `10`",
			"C: `SyntaxError`",
			"D: `ReferenceError`",
		],
		answer: "b-4)Answer: B<br><br>With the `var` keyword, you can declare multiple variables with the same name. The variable will then hold the latest value.<br><br>You cannot do this with `let` or `const` since they're block-scoped and therefore can't be redeclared.",
	},
	{
		id: 24,
		title: "24. What's the output?",
		text: null,
		code: "const obj = { 1: &#x27;a&#x27;, 2: &#x27;b&#x27;, 3: &#x27;c&#x27; };<br>const set = new Set([1, 2, 3, 4, 5]);<br><br>obj.hasOwnProperty(&#x27;1&#x27;);<br>obj.hasOwnProperty(1);<br>set.has(&#x27;1&#x27;);<br>set.has(1);",
		choices: [
			"A: `false` `true` `false` `true`",
			"B: `false` `true` `true` `true`",
			"C: `true` `true` `false` `true`",
			"D: `true` `true` `true` `true`",
		],
		answer: "c-7)Answer: C<br><br>All object keys (excluding Symbols) are strings under the hood, even if you don't type it yourself as a string. This is why `obj.hasOwnProperty('1')` also returns true.<br><br>It doesn't work that way for a set. There is no `'1'` in our set: `set.has('1')` returns `false`. It has the numeric type `1`, `set.has(1)` returns `true`.",
	},
	{
		id: 25,
		title: "25. What's the output?",
		text: null,
		code: "const obj = { a: &#x27;one&#x27;, b: &#x27;two&#x27;, a: &#x27;three&#x27; };<br>console.log(obj);",
		choices: [
			'A: `{ a: "one", b: "two" }`',
			'B: `{ b: "two", a: "three" }`',
			'C: `{ a: "three", b: "two" }`',
			"D: `SyntaxError`",
		],
		answer: "c-8)Answer: C<br><br>If you have two keys with the same name, the key will be replaced. It will still be in its first position, but with the last specified value.",
	},
	{
		id: 26,
		title: '26. The JavaScript global execution context creates two things for you: the global object, and the "this" keyword.',
		text: null,
		choices: ["A: true", "B: false", "C: it depends"],
		answer: "a-8)Answer: A<br><br>The base execution context is the global execution context: it's what's accessible everywhere in your code.",
		code: "",
	},
	{
		id: 27,
		title: "27. What's the output?",
		text: null,
		code: "for (let i = 1; i &lt; 5; i++) {<br>  if (i === 3) continue;<br>  console.log(i);<br>}",
		choices: [
			"A: `1` `2`",
			"B: `1` `2` `3`",
			"C: `1` `2` `4`",
			"D: `1` `3` `4`",
		],
		answer: "c-9)Answer: C<br><br>The `continue` statement skips an iteration if a certain condition returns `true`.",
	},
	{
		id: 28,
		title: "28. What's the output?",
		text: null,
		code: "String.prototype.giveLydiaPizza = () =&gt; {<br>  return &#x27;Just give Lydia pizza already!&#x27;;<br>};<br><br>const name = &#x27;Lydia&#x27;;<br><br>console.log(name.giveLydiaPizza())",
		choices: [
			'A: `"Just give Lydia pizza already!"`',
			"B: `TypeError: not a function`",
			"C: `SyntaxError`",
			"D: `undefined`",
		],
		answer: "a-9)Answer: A<br><br>`String` is a built-in constructor, which we can add properties to. I just added a method to its prototype. Primitive strings are automatically converted into a string object, generated by the string prototype function. So, all strings (string objects) have access to that method!",
	},
	{
		id: 29,
		title: "29. What's the output?",
		text: null,
		code: "const a = {};<br>const b = { key: &#x27;b&#x27; };<br>const c = { key: &#x27;c&#x27; };<br><br>a[b] = 123;<br>a[c] = 456;<br><br>console.log(a[b]);",
		choices: [
			"A: `123`",
			"B: `456`",
			"C: `undefined`",
			"D: `ReferenceError`",
		],
		answer: 'b-5)Answer: B<br><br>Object keys are automatically converted into strings. We are trying to set an object as a key to object `a`, with the value of `123`.<br><br>However, when we stringify an object, it becomes `"[object Object]"`. So what we are saying here, is that `a["[object Object]"] = 123`. Then, we can try to do the same again. `c` is another object that we are implicitly stringifying. So then, `a["[object Object]"] = 456`.<br><br>Then, we log `a[b]`, which is actually `a["[object Object]"]`. We just set that to `456`, so it returns `456`.',
	},
	{
		id: 30,
		title: "30. What's the output?",
		text: null,
		code: "const foo = () =&gt; console.log(&#x27;First&#x27;);<br>const bar = () =&gt; setTimeout(() =&gt; console.log(&#x27;Second&#x27;));<br>const baz = () =&gt; console.log(&#x27;Third&#x27;);<br><br>bar();<br>foo();<br>baz();",
		choices: [
			"A: `First` `Second` `Third`",
			"B: `First` `Third` `Second`",
			"C: `Second` `First` `Third`",
			"D: `Second` `Third` `First`",
		],
		answer: 'b-6)Answer: B<br><br>We have a `setTimeout` function and invoked it first. Yet, it was logged last.<br><br>This is because in browsers, we don\'t just have the runtime engine, we also have something called a `WebAPI`. The `WebAPI` gives us the `setTimeout` function to start with, and for example the DOM.<br><br>After the _callback_ is pushed to the WebAPI, the `setTimeout` function itself (but not the callback!) is popped off the stack.<br><br>[![](https://camo.githubusercontent.com/3fb6829734d4f143e7b0e65777fb0fa797477b1099d5bf80dfff487dbf8d58ea/68747470733a2f2f692e696d6775722e636f6d2f58357773484f672e706e67)](https://camo.githubusercontent.com/3fb6829734d4f143e7b0e65777fb0fa797477b1099d5bf80dfff487dbf8d58ea/68747470733a2f2f692e696d6775722e636f6d2f58357773484f672e706e67)<br><br>Now, `foo` gets invoked, and `"First"` is being logged.<br><br>[![](https://camo.githubusercontent.com/67039fb1a1de6555795f4a4d935902970273a9ecedbd4db0d704c890d4cc104d/68747470733a2f2f692e696d6775722e636f6d2f507663306447712e706e67)](https://camo.githubusercontent.com/67039fb1a1de6555795f4a4d935902970273a9ecedbd4db0d704c890d4cc104d/68747470733a2f2f692e696d6775722e636f6d2f507663306447712e706e67)<br><br>`foo` is popped off the stack, and `baz` gets invoked. `"Third"` gets logged.<br><br>[![](https://camo.githubusercontent.com/3cc29283d12de4212d526a805190866349c3db20bf4b51e1fae5f08e318bad16/68747470733a2f2f692e696d6775722e636f6d2f576841326243502e706e67)](https://camo.githubusercontent.com/3cc29283d12de4212d526a805190866349c3db20bf4b51e1fae5f08e318bad16/68747470733a2f2f692e696d6775722e636f6d2f576841326243502e706e67)<br><br>The WebAPI can\'t just add stuff to the stack whenever it\'s ready. Instead, it pushes the callback function to something called the _queue_.<br><br>[![](https://camo.githubusercontent.com/ac7d6708d80a2f40ef6887fd10e09b9921bb76b74024debb3b0a9fdc41f42d52/68747470733a2f2f692e696d6775722e636f6d2f4e536e445a6d552e706e67)](https://camo.githubusercontent.com/ac7d6708d80a2f40ef6887fd10e09b9921bb76b74024debb3b0a9fdc41f42d52/68747470733a2f2f692e696d6775722e636f6d2f4e536e445a6d552e706e67)<br><br>This is where an event loop starts to work. An **event loop** looks at the stack and task queue. If the stack is empty, it takes the first thing on the queue and pushes it onto the stack.<br><br>[![](https://camo.githubusercontent.com/22adea15940091bf25f18f9003d56b64b45ef2ac6038166ba1bae08c32eb4570/68747470733a2f2f692e696d6775722e636f6d2f757969536341492e706e67)](https://camo.githubusercontent.com/22adea15940091bf25f18f9003d56b64b45ef2ac6038166ba1bae08c32eb4570/68747470733a2f2f692e696d6775722e636f6d2f757969536341492e706e67)<br><br>`bar` gets invoked, `"Second"` gets logged, and it\'s popped off the stack.',
	},
	{
		id: 31,
		title: "31. What is the event.target when clicking the button?",
		text: null,
		code: "&lt;div onclick=&quot;console.log(&#x27;first div&#x27;)&quot;&gt;<br>  &lt;div onclick=&quot;console.log(&#x27;second div&#x27;)&quot;&gt;<br>    &lt;button onclick=&quot;console.log(&#x27;button&#x27;)&quot;&gt;<br>      Click!<br>    &lt;/button&gt;<br>  &lt;/div&gt;<br>&lt;/div&gt;",
		choices: [
			"A: Outer `div`",
			"B: Inner `div`",
			"C: `button`",
			"D: An array of all nested elements.",
		],
		answer: "c-10)Answer: C<br><br>The deepest nested element that caused the event is the target of the event. You can stop bubbling by `event.stopPropagation`",
	},
	{
		id: 32,
		title: "32. When you click the paragraph, what's the logged output?",
		text: null,
		code: "&lt;div onclick=&quot;console.log(&#x27;div&#x27;)&quot;&gt;<br>  &lt;p onclick=&quot;console.log(&#x27;p&#x27;)&quot;&gt;<br>    Click here!<br>  &lt;/p&gt;<br>&lt;/div&gt;",
		choices: ["A: `p` `div`", "B: `div` `p`", "C: `p`", "D: `div`"],
		answer: "a-10)Answer: A<br><br>If we click `p`, we see two logs: `p` and `div`. During event propagation, there are 3 phases: capturing, target, and bubbling. By default, event handlers are executed in the bubbling phase (unless you set `useCapture` to `true`). It goes from the deepest nested element outwards.",
	},
	{
		id: 33,
		title: "33. What's the output?",
		text: null,
		code: "const person = { name: &#x27;Lydia&#x27; };<br><br>function sayHi(age) {<br>  return `${this.name} is ${age}`;<br>}<br><br>console.log(sayHi.call(person, 21));<br>console.log(sayHi.bind(person, 21));",
		choices: [
			"A: `undefined is 21` `Lydia is 21`",
			"B: `function` `function`",
			"C: `Lydia is 21` `Lydia is 21`",
			"D: `Lydia is 21` `function`",
		],
		answer: "d-3)Answer: D<br><br>With both, we can pass the object to which we want the `this` keyword to refer to. However, `.call` is also _executed immediately_!<br><br>`.bind.` returns a _copy_ of the function, but with a bound context! It is not executed immediately.",
	},
	{
		id: 34,
		title: "34. What's the output?",
		text: null,
		code: "function sayHi() {<br>  return (() =&gt; 0)();<br>}<br><br>console.log(typeof sayHi());",
		choices: [
			'A: `"object"`',
			'B: `"number"`',
			'C: `"function"`',
			'D: `"undefined"`',
		],
		answer: 'b-7)Answer: B<br><br>The `sayHi` function returns the returned value of the immediately invoked function expression (IIFE). This function returned `0`, which is type `"number"`.<br><br>FYI: `typeof` can return the following list of values: `undefined`, `boolean`, `number`, `bigint`, `string`, `symbol`, `function` and `object`. Note that `typeof null` returns `"object"`.',
	},
	{
		id: 35,
		title: "35. Which of these values are falsy?",
		text: null,
		code: "0;<br>new Number(0);<br>(&#x27;&#x27;);<br>(&#x27; &#x27;);<br>new Boolean(false);<br>undefined;",
		choices: [
			"A: `0`, `''`, `undefined`",
			"B: `0`, `new Number(0)`, `''`, `new Boolean(false)`, `undefined`",
			"C: `0`, `''`, `new Boolean(false)`, `undefined`",
			"D: All of them are falsy",
		],
		answer: "a-11)Answer: A<br><br>There are 8 falsy values:<br><br>*   `undefined`<br>*   `null`<br>*   `NaN`<br>*   `false`<br>*   `''` (empty string)<br>*   `0`<br>*   `-0`<br>*   `0n` (BigInt(0))<br><br>Function constructors, like `new Number` and `new Boolean` are truthy.",
	},
	{
		id: 36,
		title: "36. What's the output?",
		text: null,
		code: "console.log(typeof typeof 1);",
		choices: [
			'A: `"number"`',
			'B: `"string"`',
			'C: `"object"`',
			'D: `"undefined"`',
		],
		answer: 'b-8)Answer: B<br><br>`typeof 1` returns `"number"`. `typeof "number"` returns `"string"`',
	},
	{
		id: 37,
		title: "37. What's the output?",
		text: null,
		code: "const numbers = [1, 2, 3];<br>numbers[10] = 11;<br>console.log(numbers);",
		choices: [
			"A: `[1, 2, 3, null x 7, 11]`",
			"B: `[1, 2, 3, 11]`",
			"C: `[1, 2, 3, empty x 7, 11]`",
			"D: `SyntaxError`",
		],
		answer: 'c-11)Answer: C<br><br>When you set a value to an element in an array that exceeds the length of the array, JavaScript creates something called "empty slots". These actually have the value of `undefined`, but you will see something like:<br><br>`[1, 2, 3, empty x 7, 11]`<br><br>depending on where you run it (it\'s different for every browser, node, etc.)',
	},
	{
		id: 38,
		title: "38. What's the output?",
		text: null,
		code: "(() =&gt; {<br>  let x, y;<br>  try {<br>    throw new Error();<br>  } catch (x) {<br>    (x = 1), (y = 2);<br>    console.log(x);<br>  }<br>  console.log(x);<br>  console.log(y);<br>})();",
		choices: [
			"A: `1` `undefined` `2`",
			"B: `undefined` `undefined` `undefined`",
			"C: `1` `1` `2`",
			"D: `1` `undefined` `undefined`",
		],
		answer: "a-12)Answer: A<br><br>The `catch` block receives the argument `x`. This is not the same `x` as the variable when we pass arguments. This variable `x` is block-scoped.<br><br>Later, we set this block-scoped variable equal to `1`, and set the value of the variable `y`. Now, we log the block-scoped variable `x`, which is equal to `1`.<br><br>Outside of the `catch` block, `x` is still `undefined`, and `y` is `2`. When we want to `console.log(x)` outside of the `catch` block, it returns `undefined`, and `y` returns `2`.",
	},
	{
		id: 39,
		title: "39. Everything in JavaScript is either a...",
		text: null,
		choices: [
			"A: primitive or object",
			"B: function or object",
			"C: trick question! only objects",
			"D: number or object",
		],
		answer: "a-13)Answer: A<br><br>JavaScript only has primitive types and objects.<br><br>Primitive types are `boolean`, `null`, `undefined`, `bigint`, `number`, `string`, and `symbol`.<br><br>What differentiates a primitive from an object is that primitives do not have any properties or methods; however, you'll note that `'foo'.toUpperCase()` evaluates to `'FOO'` and does not result in a `TypeError`. This is because when you try to access a property or method on a primitive like a string, JavaScript will implicitly wrap the primitive type using one of the wrapper classes, i.e. `String`, and then immediately discard the wrapper after the expression evaluates. All primitives except for `null` and `undefined` exhibit this behaviour.",
		code: "",
	},
	{
		id: 40,
		title: "40. What's the output?",
		text: null,
		code: "[[0, 1], [2, 3]].reduce(<br>  (acc, cur) =&gt; {<br>    return acc.concat(cur);<br>  },<br>  [1, 2],<br>);",
		choices: [
			"A: `[0, 1, 2, 3, 1, 2]`",
			"B: `[6, 1, 2]`",
			"C: `[1, 2, 0, 1, 2, 3]`",
			"D: `[1, 2, 6]`",
		],
		answer: "c-12)Answer: C<br><br>`[1, 2]` is our initial value. This is the value we start with, and the value of the very first `acc`. During the first round, `acc` is `[1,2]`, and `cur` is `[0, 1]`. We concatenate them, which results in `[1, 2, 0, 1]`.<br><br>Then, `[1, 2, 0, 1]` is `acc` and `[2, 3]` is `cur`. We concatenate them, and get `[1, 2, 0, 1, 2, 3]`",
	},
	{
		id: 41,
		title: "41. What's the output?",
		text: null,
		code: "!!null;<br>!!&#x27;&#x27;;<br>!!1;",
		choices: [
			"A: `false` `true` `false`",
			"B: `false` `false` `true`",
			"C: `false` `true` `true`",
			"D: `true` `true` `false`",
		],
		answer: 'b-9)Answer: B<br><br>`null` is falsy. `!null` returns `true`. `!true` returns `false`.<br><br>`""` is falsy. `!""` returns `true`. `!true` returns `false`.<br><br>`1` is truthy. `!1` returns `false`. `!false` returns `true`.',
	},
	{
		id: 42,
		title: "42. What does the setInterval method return in the browser?",
		text: null,
		code: "setInterval(() =&gt; console.log(&#x27;Hi&#x27;), 1000);",
		choices: [
			"A: a unique id",
			"B: the amount of milliseconds specified",
			"C: the passed function",
			"D: `undefined`",
		],
		answer: "a-14)Answer: A<br><br>It returns a unique id. This id can be used to clear that interval with the `clearInterval()` function.",
	},
	{
		id: 43,
		title: "43. What does this return?",
		text: null,
		code: "[...&#x27;Lydia&#x27;];",
		choices: [
			'A: `["L", "y", "d", "i", "a"]`',
			'B: `["Lydia"]`',
			'C: `[[], "Lydia"]`',
			'D: `[["L", "y", "d", "i", "a"]]`',
		],
		answer: "a-15)Answer: A<br><br>A string is an iterable. The spread operator maps every character of an iterable to one element.",
	},
	{
		id: 44,
		title: "44. What's the output?",
		text: null,
		code: "function* generator(i) {<br>  yield i;<br>  yield i * 2;<br>}<br><br>const gen = generator(10);<br><br>console.log(gen.next().value);<br>console.log(gen.next().value);",
		choices: [
			"A: `[0, 10], [10, 20]`",
			"B: `20, 20`",
			"C: `10, 20`",
			"D: `0, 10 and 10, 20`",
		],
		answer: 'c-13)Answer: C<br><br>Regular functions cannot be stopped mid-way after invocation. However, a generator function can be "stopped" midway, and later continue from where it stopped. Every time a generator function encounters a `yield` keyword, the function yields the value specified after it. Note that the generator function in that case doesn’t _return_ the value, it _yields_ the value.<br><br>First, we initialize the generator function with `i` equal to `10`. We invoke the generator function using the `next()` method. The first time we invoke the generator function, `i` is equal to `10`. It encounters the first `yield` keyword: it yields the value of `i`. The generator is now "paused", and `10` gets logged.<br><br>Then, we invoke the function again with the `next()` method. It starts to continue where it stopped previously, still with `i` equal to `10`. Now, it encounters the next `yield` keyword, and yields `i * 2`. `i` is equal to `10`, so it returns `10 * 2`, which is `20`. This results in `10, 20`.',
	},
	{
		id: 45,
		title: "45. What does this return?",
		text: null,
		code: "const firstPromise = new Promise((res, rej) =&gt; {<br>  setTimeout(res, 500, &#x27;one&#x27;);<br>});<br><br>const secondPromise = new Promise((res, rej) =&gt; {<br>  setTimeout(res, 100, &#x27;two&#x27;);<br>});<br><br>Promise.race([firstPromise, secondPromise]).then(res =&gt; console.log(res));",
		choices: [
			'A: `"one"`',
			'B: `"two"`',
			'C: `"two" "one"`',
			'D: `"one" "two"`',
		],
		answer: "b-10)Answer: B<br><br>When we pass multiple promises to the `Promise.race` method, it resolves/rejects the _first_ promise that resolves/rejects. To the `setTimeout` method, we pass a timer: 500ms for the first promise (`firstPromise`), and 100ms for the second promise (`secondPromise`). This means that the `secondPromise` resolves first with the value of `'two'`. `res` now holds the value of `'two'`, which gets logged.",
	},
	{
		id: 46,
		title: "46. What's the output?",
		text: null,
		code: "let person = { name: &#x27;Lydia&#x27; };<br>const members = [person];<br>person = null;<br><br>console.log(members);",
		choices: [
			"A: `null`",
			"B: `[null]`",
			"C: `[{}]`",
			'D: `[{ name: "Lydia" }]`',
		],
		answer: "d-4)Answer: D<br><br>First, we declare a variable `person` with the value of an object that has a `name` property.<br><br>[![](https://camo.githubusercontent.com/0354f2de42a6883901ffee576d298d6695b3e892bdb1aa34222d28d22a2ae4ac/68747470733a2f2f692e696d6775722e636f6d2f544d4c314d62532e706e67)](https://camo.githubusercontent.com/0354f2de42a6883901ffee576d298d6695b3e892bdb1aa34222d28d22a2ae4ac/68747470733a2f2f692e696d6775722e636f6d2f544d4c314d62532e706e67)<br><br>Then, we declare a variable called `members`. We set the first element of that array equal to the value of the `person` variable. Objects interact by _reference_ when setting them equal to each other. When you assign a reference from one variable to another, you make a _copy_ of that reference. (note that they don't have the _same_ reference!)<br><br>[![](https://camo.githubusercontent.com/db6a6b5701fabef09480083f86184664eaa5ee76be47421c312ff6e619dbe0a8/68747470733a2f2f692e696d6775722e636f6d2f465347354b33462e706e67)](https://camo.githubusercontent.com/db6a6b5701fabef09480083f86184664eaa5ee76be47421c312ff6e619dbe0a8/68747470733a2f2f692e696d6775722e636f6d2f465347354b33462e706e67)<br><br>Then, we set the variable `person` equal to `null`.<br><br>[![](https://camo.githubusercontent.com/a531ccbf6cd1aab6e8523e6bf0e9b38a72c8924025e0c261b8ca533a689f13b0/68747470733a2f2f692e696d6775722e636f6d2f73596a63734d542e706e67)](https://camo.githubusercontent.com/a531ccbf6cd1aab6e8523e6bf0e9b38a72c8924025e0c261b8ca533a689f13b0/68747470733a2f2f692e696d6775722e636f6d2f73596a63734d542e706e67)<br><br>We are only modifying the value of the `person` variable, and not the first element in the array, since that element has a different (copied) reference to the object. The first element in `members` still holds its reference to the original object. When we log the `members` array, the first element still holds the value of the object, which gets logged.",
	},
	{
		id: 47,
		title: "47. What's the output?",
		text: null,
		code: "const person = {<br>  name: &#x27;Lydia&#x27;,<br>  age: 21,<br>};<br><br>for (const item in person) {<br>  console.log(item);<br>}",
		choices: [
			'A: `{ name: "Lydia" }, { age: 21 }`',
			'B: `"name", "age"`',
			'C: `"Lydia", 21`',
			'D: `["name", "Lydia"], ["age", 21]`',
		],
		answer: "b-11)Answer: B<br><br>With a `for-in` loop, we can iterate through object keys, in this case `name` and `age`. Under the hood, object keys are strings (if they're not a Symbol). On every loop, we set the value of `item` equal to the current key it’s iterating over. First, `item` is equal to `name`, and gets logged. Then, `item` is equal to `age`, which gets logged.",
	},
	{
		id: 48,
		title: "48. What's the output?",
		text: null,
		code: "console.log(3 + 4 + &#x27;5&#x27;);",
		choices: ['A: `"345"`', 'B: `"75"`', "C: `12`", 'D: `"12"`'],
		answer: 'b-12)Answer: B<br><br>Operator associativity is the order in which the compiler evaluates the expressions, either left-to-right or right-to-left. This only happens if all operators have the _same_ precedence. We only have one type of operator: `+`. For addition, the associativity is left-to-right.<br><br>`3 + 4` gets evaluated first. This results in the number `7`.<br><br>`7 + \'5\'` results in `"75"` because of coercion. JavaScript converts the number `7` into a string, see question 15. We can concatenate two strings using the `+`operator. `"7" + "5"` results in `"75"`.',
	},
	{
		id: 49,
		title: "49. What's the value of num?",
		text: null,
		code: "const num = parseInt(&#x27;7*6&#x27;, 10);",
		choices: ["A: `42`", 'B: `"42"`', "C: `7`", "D: `NaN`"],
		answer: 'c-14)Answer: C<br><br>Only the first numbers in the string is returned. Based on the _radix_ (the second argument in order to specify what type of number we want to parse it to: base 10, hexadecimal, octal, binary, etc.), the `parseInt` checks whether the characters in the string are valid. Once it encounters a character that isn\'t a valid number in the radix, it stops parsing and ignores the following characters.<br><br>`*` is not a valid number. It only parses `"7"` into the decimal `7`. `num` now holds the value of `7`.',
	},
	{
		id: 50,
		title: "50. What's the output?",
		text: null,
		code: "[1, 2, 3].map(num =&gt; {<br>  if (typeof num === &#x27;number&#x27;) return;<br>  return num * 2;<br>});",
		choices: [
			"A: `[]`",
			"B: `[null, null, null]`",
			"C: `[undefined, undefined, undefined]`",
			"D: `[ 3 x empty ]`",
		],
		answer: 'c-15)Answer: C<br><br>When mapping over the array, the value of `num` is equal to the element it’s currently looping over. In this case, the elements are numbers, so the condition of the if statement `typeof num === "number"` returns `true`. The map function creates a new array and inserts the values returned from the function.<br><br>However, we don’t return a value. When we don’t return a value from the function, the function returns `undefined`. For every element in the array, the function block gets called, so for each element we return `undefined`.',
	},
	{
		id: 51,
		title: "51. What's the output?",
		text: null,
		code: "function getInfo(member, year) {<br>  member.name = &#x27;Lydia&#x27;;<br>  year = &#x27;1998&#x27;;<br>}<br><br>const person = { name: &#x27;Sarah&#x27; };<br>const birthYear = &#x27;1997&#x27;;<br><br>getInfo(person, birthYear);<br><br>console.log(person, birthYear);",
		choices: [
			'A: `{ name: "Lydia" }, "1997"`',
			'B: `{ name: "Sarah" }, "1998"`',
			'C: `{ name: "Lydia" }, "1998"`',
			'D: `{ name: "Sarah" }, "1997"`',
		],
		answer: 'a-16)Answer: A<br><br>Arguments are passed by _value_, unless their value is an object, then they\'re passed by _reference_. `birthYear` is passed by value, since it\'s a string, not an object. When we pass arguments by value, a _copy_ of that value is created (see question 46).<br><br>The variable `birthYear` has a reference to the value `"1997"`. The argument `year` also has a reference to the value `"1997"`, but it\'s not the same value as `birthYear` has a reference to. When we update the value of `year` by setting `year` equal to `"1998"`, we are only updating the value of `year`. `birthYear` is still equal to `"1997"`.<br><br>The value of `person` is an object. The argument `member` has a (copied) reference to the _same_ object. When we modify a property of the object `member` has a reference to, the value of `person` will also be modified, since they both have a reference to the same object. `person`\'s `name` property is now equal to the value `"Lydia"`',
	},
	{
		id: 52,
		title: "52. What's the output?",
		text: null,
		code: "function greeting() {<br>  throw &#x27;Hello world!&#x27;;<br>}<br><br>function sayHi() {<br>  try {<br>    const data = greeting();<br>    console.log(&#x27;It worked!&#x27;, data);<br>  } catch (e) {<br>    console.log(&#x27;Oh no an error:&#x27;, e);<br>  }<br>}<br><br>sayHi();",
		choices: [
			"A: `It worked! Hello world!`",
			"B: `Oh no an error: undefined`",
			"C: `SyntaxError: can only throw Error objects`",
			"D: `Oh no an error: Hello world!`",
		],
		answer: "d-5)Answer: D<br><br>With the `throw` statement, we can create custom errors. With this statement, you can throw exceptions. An exception can be a **string**, a **number**, a **boolean** or an **object**. In this case, our exception is the string `'Hello world!'`.<br><br>With the `catch` statement, we can specify what to do if an exception is thrown in the `try` block. An exception is thrown: the string `'Hello world!'`. `e` is now equal to that string, which we log. This results in `'Oh an error: Hello world!'`.",
	},
	{
		id: 53,
		title: "53. What's the output?",
		text: null,
		code: "function Car() {<br>  this.make = &#x27;Lamborghini&#x27;;<br>  return { make: &#x27;Maserati&#x27; };<br>}<br><br>const myCar = new Car();<br>console.log(myCar.make);",
		choices: [
			'A: `"Lamborghini"`',
			'B: `"Maserati"`',
			"C: `ReferenceError`",
			"D: `TypeError`",
		],
		answer: 'b-13)Answer: B<br><br>When a constructor function is called with the `new` keyword, it creates an object and sets the `this` keyword to refer to that object. By default, if the constructor function doesn\'t explicitly return anything, it will return the newly created object.<br><br>In this case, the constructor function `Car` explicitly returns a new object with `make` set to `"Maserati"`, which overrides the default behavior. Therefore, when `new Car()` is called, the _returned_ object is assigned to `myCar`, resulting in the output being `"Maserati"` when `myCar.make` is accessed.',
	},
	{
		id: 54,
		title: "54. What's the output?",
		text: null,
		code: "(() =&gt; {<br>  let x = (y = 10);<br>})();<br><br>console.log(typeof x);<br>console.log(typeof y);",
		choices: [
			'A: `"undefined", "number"`',
			'B: `"number", "number"`',
			'C: `"object", "number"`',
			'D: `"number", "undefined"`',
		],
		answer: 'a-17)Answer: A<br><br>`let x = (y = 10);` is actually shorthand for:<br><br>y \\= 10;<br>let x \\= y;<br><br>When we set `y` equal to `10`, we actually add a property `y` to the global object (`window` in browser, `global` in Node). In a browser, `window.y` is now equal to `10`.<br><br>Then, we declare a variable `x` with the value of `y`, which is `10`. Variables declared with the `let` keyword are _block scoped_, they are only defined within the block they\'re declared in; the immediately invoked function expression (IIFE) in this case. When we use the `typeof` operator, the operand `x` is not defined: we are trying to access `x` outside of the block it\'s declared in. This means that `x` is not defined. Values who haven\'t been assigned a value or declared are of type `"undefined"`. `console.log(typeof x)` returns `"undefined"`.<br><br>However, we created a global variable `y` when setting `y` equal to `10`. This value is accessible anywhere in our code. `y` is defined, and holds a value of type `"number"`. `console.log(typeof y)` returns `"number"`.',
	},
	{
		id: 55,
		title: "55. What's the output?",
		text: null,
		code: "class Dog {<br>  constructor(name) {<br>    this.name = name;<br>  }<br>}<br><br>Dog.prototype.bark = function() {<br>  console.log(`Woof I am ${this.name}`);<br>};<br><br>const pet = new Dog(&#x27;Mara&#x27;);<br><br>pet.bark();<br><br>delete Dog.prototype.bark;<br><br>pet.bark();",
		choices: [
			'A: `"Woof I am Mara"`, `TypeError`',
			'B: `"Woof I am Mara"`, `"Woof I am Mara"`',
			'C: `"Woof I am Mara"`, `undefined`',
			"D: `TypeError`, `TypeError`",
		],
		answer: "a-18)Answer: A<br><br>We can delete properties from objects using the `delete` keyword, also on the prototype. By deleting a property on the prototype, it is not available anymore in the prototype chain. In this case, the `bark` function is not available anymore on the prototype after `delete Dog.prototype.bark`, yet we still try to access it.<br><br>When we try to invoke something that is not a function, a `TypeError` is thrown. In this case `TypeError: pet.bark is not a function`, since `pet.bark` is `undefined`.",
	},
	{
		id: 56,
		title: "56. What's the output?",
		text: null,
		code: "const set = new Set([1, 1, 2, 3, 4]);<br><br>console.log(set);",
		choices: [
			"A: `[1, 1, 2, 3, 4]`",
			"B: `[1, 2, 3, 4]`",
			"C: `{1, 1, 2, 3, 4}`",
			"D: `{1, 2, 3, 4}`",
		],
		answer: "d-6)Answer: D<br><br>The `Set` object is a collection of _unique_ values: a value can only occur once in a set.<br><br>We passed the iterable `[1, 1, 2, 3, 4]` with a duplicate value `1`. Since we cannot have two of the same values in a set, one of them is removed. This results in `{1, 2, 3, 4}`.",
	},
	{
		id: 57,
		title: "57. What's the output?",
		text: null,
		code: "// counter.js<br>let counter = 10;<br>export default counter;<br><br><br>// index.js<br>import myCounter from &#x27;./counter&#x27;;<br><br>myCounter += 1;<br><br>console.log(myCounter);",
		choices: ["A: `10`", "B: `11`", "C: `Error`", "D: `NaN`"],
		answer: "c-16)Answer: C<br><br>An imported module is _read-only_: you cannot modify the imported module. Only the module that exports them can change its value.<br><br>When we try to increment the value of `myCounter`, it throws an error: `myCounter` is read-only and cannot be modified.",
	},
	{
		id: 58,
		title: "58. What's the output?",
		text: null,
		code: "const name = &#x27;Lydia&#x27;;<br>age = 21;<br><br>console.log(delete name);<br>console.log(delete age);",
		choices: [
			"A: `false`, `true`",
			'B: `"Lydia"`, `21`',
			"C: `true`, `true`",
			"D: `undefined`, `undefined`",
		],
		answer: "a-19)Answer: A<br><br>The `delete` operator returns a boolean value: `true` on a successful deletion, else it'll return `false`. However, variables declared with the `var`, `const` or `let` keyword cannot be deleted using the `delete` operator.<br><br>The `name` variable was declared with a `const` keyword, so its deletion is not successful: `false` is returned. When we set `age` equal to `21`, we actually added a property called `age` to the global object. You can successfully delete properties from objects this way, also the global object, so `delete age` returns `true`.",
	},
	{
		id: 59,
		title: "59. What's the output?",
		text: null,
		code: "const numbers = [1, 2, 3, 4, 5];<br>const [y] = numbers;<br><br>console.log(y);",
		choices: [
			"A: `[[1, 2, 3, 4, 5]]`",
			"B: `[1, 2, 3, 4, 5]`",
			"C: `1`",
			"D: `[1]`",
		],
		answer: "c-17)Answer: C<br><br>We can unpack values from arrays or properties from objects through destructuring. For example:<br><br>\\[a, b\\] \\= \\[1, 2\\];<br><br>[![](https://camo.githubusercontent.com/1d080a7e86e34703ef69dfdeae38d6c7a888923a62ee7a4f34c748b8baf6e850/68747470733a2f2f692e696d6775722e636f6d2f41444670566f702e706e67)](https://camo.githubusercontent.com/1d080a7e86e34703ef69dfdeae38d6c7a888923a62ee7a4f34c748b8baf6e850/68747470733a2f2f692e696d6775722e636f6d2f41444670566f702e706e67)<br><br>The value of `a` is now `1`, and the value of `b` is now `2`. What we actually did in the question, is:<br><br>\\[y\\] \\= \\[1, 2, 3, 4, 5\\];<br><br>[![](https://camo.githubusercontent.com/c9ef7f0415dde444c3a74d5e26db819c19935b87dc9c1a05a02f5ba1587b2788/68747470733a2f2f692e696d6775722e636f6d2f4e7a476b4d4e6b2e706e67)](https://camo.githubusercontent.com/c9ef7f0415dde444c3a74d5e26db819c19935b87dc9c1a05a02f5ba1587b2788/68747470733a2f2f692e696d6775722e636f6d2f4e7a476b4d4e6b2e706e67)<br><br>This means that the value of `y` is equal to the first value in the array, which is the number `1`. When we log `y`, `1` is returned.",
	},
	{
		id: 60,
		title: "60. What's the output?",
		text: null,
		code: "const user = { name: &#x27;Lydia&#x27;, age: 21 };<br>const admin = { admin: true, ...user };<br><br>console.log(admin);",
		choices: [
			'A: `{ admin: true, user: { name: "Lydia", age: 21 } }`',
			'B: `{ admin: true, name: "Lydia", age: 21 }`',
			'C: `{ admin: true, user: ["Lydia", 21] }`',
			"D: `{ admin: true }`",
		],
		answer: 'b-14)Answer: B<br><br>It\'s possible to combine objects using the spread operator `...`. It lets you create copies of the key/value pairs of one object, and add them to another object. In this case, we create copies of the `user` object, and add them to the `admin` object. The `admin` object now contains the copied key/value pairs, which results in `{ admin: true, name: "Lydia", age: 21 }`.',
	},
	{
		id: 61,
		title: "61. What's the output?",
		text: null,
		code: "const person = { name: &#x27;Lydia&#x27; };<br><br>Object.defineProperty(person, &#x27;age&#x27;, { value: 21 });<br><br>console.log(person);<br>console.log(Object.keys(person));",
		choices: [
			'A: `{ name: "Lydia", age: 21 }`, `["name", "age"]`',
			'B: `{ name: "Lydia", age: 21 }`, `["name"]`',
			'C: `{ name: "Lydia"}`, `["name", "age"]`',
			'D: `{ name: "Lydia"}`, `["age"]`',
		],
		answer: 'b-15)Answer: B<br><br>With the `defineProperty` method, we can add new properties to an object, or modify existing ones. When we add a property to an object using the `defineProperty` method, they are by default _not enumerable_. The `Object.keys` method returns all _enumerable_ property names from an object, in this case only `"name"`.<br><br>Properties added using the `defineProperty` method are immutable by default. You can override this behavior using the `writable`, `configurable` and `enumerable` properties. This way, the `defineProperty` method gives you a lot more control over the properties you\'re adding to an object.',
	},
	{
		id: 62,
		title: "62. What's the output?",
		text: null,
		code: "const settings = {<br>  username: &#x27;lydiahallie&#x27;,<br>  level: 19,<br>  health: 90,<br>};<br><br>const data = JSON.stringify(settings, [&#x27;level&#x27;, &#x27;health&#x27;]);<br>console.log(data);",
		choices: [
			'A: `"{"level":19, "health":90}"`',
			'B: `"{"username": "lydiahallie"}"`',
			'C: `"["level", "health"]"`',
			'D: `"{"username": "lydiahallie", "level":19, "health":90}"`',
		],
		answer: 'a-20)Answer: A<br><br>The second argument of `JSON.stringify` is the _replacer_. The replacer can either be a function or an array, and lets you control what and how the values should be stringified.<br><br>If the replacer is an _array_, only the property names included in the array will be added to the JSON string. In this case, only the properties with the names `"level"` and `"health"` are included, `"username"` is excluded. `data` is now equal to `"{"level":19, "health":90}"`.<br><br>If the replacer is a _function_, this function gets called on every property in the object you\'re stringifying. The value returned from this function will be the value of the property when it\'s added to the JSON string. If the value is `undefined`, this property is excluded from the JSON string.',
	},
	{
		id: 63,
		title: "63. What's the output?",
		text: null,
		code: "let num = 10;<br><br>const increaseNumber = () =&gt; num++;<br>const increasePassedNumber = number =&gt; number++;<br><br>const num1 = increaseNumber();<br>const num2 = increasePassedNumber(num1);<br><br>console.log(num1);<br>console.log(num2);",
		choices: [
			"A: `10`, `10`",
			"B: `10`, `11`",
			"C: `11`, `11`",
			"D: `11`, `12`",
		],
		answer: "a-21)Answer: A<br><br>The unary operator `++` _first returns_ the value of the operand, _then increments_ the value of the operand. The value of `num1` is `10`, since the `increaseNumber` function first returns the value of `num`, which is `10`, and only increments the value of `num` afterwards.<br><br>`num2` is `10`, since we passed `num1` to the `increasePassedNumber`. `number` is equal to `10`(the value of `num1`). Again, the unary operator `++` _first returns_ the value of the operand, _then increments_ the value of the operand. The value of `number` is `10`, so `num2` is equal to `10`.",
	},
	{
		id: 64,
		title: "64. What's the output?",
		text: null,
		code: "const value = { number: 10 };<br><br>const multiply = (x = { ...value }) =&gt; {<br>  console.log((x.number *= 2));<br>};<br><br>multiply();<br>multiply();<br>multiply(value);<br>multiply(value);",
		choices: [
			"A: `20`, `40`, `80`, `160`",
			"B: `20`, `40`, `20`, `40`",
			"C: `20`, `20`, `20`, `40`",
			"D: `NaN`, `NaN`, `20`, `40`",
		],
		answer: 'c-18)Answer: C<br><br>In ES6, we can initialize parameters with a default value. The value of the parameter will be the default value, if no other value has been passed to the function, or if the value of the parameter is `"undefined"`. In this case, we spread the properties of the `value` object into a new object, so `x` has the default value of `{ number: 10 }`.<br><br>The default argument is evaluated at _call time_! Every time we call the function, a _new_ object is created. We invoke the `multiply` function the first two times without passing a value: `x` has the default value of `{ number: 10 }`. We then log the multiplied value of that number, which is `20`.<br><br>The third time we invoke multiply, we do pass an argument: the object called `value`. The `*=` operator is actually shorthand for `x.number = x.number * 2`: we modify the value of `x.number`, and log the multiplied value `20`.<br><br>The fourth time, we pass the `value` object again. `x.number` was previously modified to `20`, so `x.number *= 2` logs `40`.',
	},
	{
		id: 65,
		title: "65. What's the output?",
		text: null,
		code: "[1, 2, 3, 4].reduce((x, y) =&gt; console.log(x, y));",
		choices: [
			"A: `1` `2` and `3` `3` and `6` `4`",
			"B: `1` `2` and `2` `3` and `3` `4`",
			"C: `1` `undefined` and `2` `undefined` and `3` `undefined` and `4` `undefined`",
			"D: `1` `2` and `undefined` `3` and `undefined` `4`",
		],
		answer: "d-7)Answer: D<br><br>The first argument that the `reduce` method receives is the _accumulator_, `x` in this case. The second argument is the _current value_, `y`. With the reduce method, we execute a callback function on every element in the array, which could ultimately result in one single value.<br><br>In this example, we are not returning any values, we are simply logging the values of the accumulator and the current value.<br><br>The value of the accumulator is equal to the previously returned value of the callback function. If you don't pass the optional `initialValue` argument to the `reduce` method, the accumulator is equal to the first element on the first call.<br><br>On the first call, the accumulator (`x`) is `1`, and the current value (`y`) is `2`. We don't return from the callback function, we log the accumulator and current value: `1` and `2` get logged.<br><br>If you don't return a value from a function, it returns `undefined`. On the next call, the accumulator is `undefined`, and the current value is `3`. `undefined` and `3` get logged.<br><br>On the fourth call, we again don't return from the callback function. The accumulator is again `undefined`, and the current value is `4`. `undefined` and `4` get logged.",
	},
	{
		id: 66,
		title: "66. With which constructor can we successfully extend the Dog class?",
		text: null,
		code: "class Dog {<br>  constructor(name) {<br>    this.name = name;<br>  }<br>};<br><br>class Labrador extends Dog {<br>  // 1<br>  constructor(name, size) {<br>    this.size = size;<br>  }<br>  // 2<br>  constructor(name, size) {<br>    super(name);<br>    this.size = size;<br>  }<br>  // 3<br>  constructor(size) {<br>    super(name);<br>    this.size = size;<br>  }<br>  // 4<br>  constructor(name, size) {<br>    this.name = name;<br>    this.size = size;<br>  }<br><br>};",
		choices: ["A: 1", "B: 2", "C: 3", "D: 4"],
		answer: "b-16)Answer: B<br><br>In a derived class, you cannot access the `this` keyword before calling `super`. If you try to do that, it will throw a ReferenceError: 1 and 4 would throw a reference error.<br><br>With the `super` keyword, we call that parent class's constructor with the given arguments. The parent's constructor receives the `name` argument, so we need to pass `name` to `super`.<br><br>The `Labrador` class receives two arguments, `name` since it extends `Dog`, and `size` as an extra property on the `Labrador` class. They both need to be passed to the constructor function on `Labrador`, which is done correctly using constructor 2.",
	},
	{
		id: 67,
		title: "67. What's the output?",
		text: null,
		code: "// index.js<br>console.log(&#x27;running index.js&#x27;);<br>import { sum } from &#x27;./sum.js&#x27;;<br>console.log(sum(1, 2));<br><br>// sum.js<br>console.log(&#x27;running sum.js&#x27;);<br>export const sum = (a, b) =&gt; a + b;",
		choices: [
			"A: `running index.js`, `running sum.js`, `3`",
			"B: `running sum.js`, `running index.js`, `3`",
			"C: `running sum.js`, `3`, `running index.js`",
			"D: `running index.js`, `undefined`, `running sum.js`",
		],
		answer: "b-17)Answer: B<br><br>With the `import` keyword, all imported modules are _pre-parsed_. This means that the imported modules get run _first_, the code in the file which imports the module gets executed _after_.<br><br>This is a difference between `require()` in CommonJS and `import`! With `require()`, you can load dependencies on demand while the code is being run. If we would have used `require` instead of `import`, `running index.js`, `running sum.js`, `3` would have been logged to the console.",
	},
	{
		id: 68,
		title: "68. What's the output?",
		text: null,
		code: "console.log(Number(2) === Number(2));<br>console.log(Boolean(false) === Boolean(false));<br>console.log(Symbol(&#x27;foo&#x27;) === Symbol(&#x27;foo&#x27;));",
		choices: [
			"A: `true`, `true`, `false`",
			"B: `false`, `true`, `false`",
			"C: `true`, `false`, `true`",
			"D: `true`, `true`, `true`",
		],
		answer: "a-22)Answer: A<br><br>Every Symbol is entirely unique. The purpose of the argument passed to the Symbol is to give the Symbol a description. The value of the Symbol is not dependent on the passed argument. As we test equality, we are creating two entirely new symbols: the first `Symbol('foo')`, and the second `Symbol('foo')`. These two values are unique and not equal to each other, `Symbol('foo') === Symbol('foo')` returns `false`.",
	},
	{
		id: 69,
		title: "69. What's the output?",
		text: null,
		code: "const name = &#x27;Lydia Hallie&#x27;;<br>console.log(name.padStart(13));<br>console.log(name.padStart(2));",
		choices: [
			'A: `"Lydia Hallie"`, `"Lydia Hallie"`',
			'B: `" Lydia Hallie"`, `" Lydia Hallie"` (`"[13x whitespace]Lydia Hallie"`, `"[2x whitespace]Lydia Hallie"`)',
			'C: `" Lydia Hallie"`, `"Lydia Hallie"` (`"[1x whitespace]Lydia Hallie"`, `"Lydia Hallie"`)',
			'D: `"Lydia Hallie"`, `"Lyd"`,',
		],
		answer: 'c-19)Answer: C<br><br>With the `padStart` method, we can add padding to the beginning of a string. The value passed to this method is the _total_ length of the string together with the padding. The string `"Lydia Hallie"` has a length of `12`. `name.padStart(13)` inserts 1 space at the start of the string, because 12 + 1 is 13.<br><br>If the argument passed to the `padStart` method is smaller than the length of the array, no padding will be added.',
	},
	{
		id: 70,
		title: "70. What's the output?",
		text: null,
		code: "console.log(&#x27;🥑&#x27; + &#x27;💻&#x27;);",
		choices: [
			'A: `"🥑💻"`',
			"B: `257548`",
			"C: A string containing their code points",
			"D: Error",
		],
		answer: 'a-23)Answer: A<br><br>With the `+` operator, you can concatenate strings. In this case, we are concatenating the string `"🥑"` with the string `"💻"`, resulting in `"🥑💻"`.',
	},
	{
		id: 71,
		title: "71. How can we log the values that are commented out after the console.log statement?",
		text: null,
		code: "function* startGame() {<br>  const answer = yield &#x27;Do you love JavaScript?&#x27;;<br>  if (answer !== &#x27;Yes&#x27;) {<br>    return &quot;Oh wow... Guess we&#x27;re done here&quot;;<br>  }<br>  return &#x27;JavaScript loves you back ❤️&#x27;;<br>}<br><br>const game = startGame();<br>console.log(/* 1 */); // Do you love JavaScript?<br>console.log(/* 2 */); // JavaScript loves you back ❤️",
		choices: [
			'A: `game.next("Yes").value` and `game.next().value`',
			'B: `game.next.value("Yes")` and `game.next.value()`',
			'C: `game.next().value` and `game.next("Yes").value`',
			'D: `game.next.value()` and `game.next.value("Yes")`',
		],
		answer: 'c-20)Answer: C<br><br>A generator function "pauses" its execution when it sees the `yield` keyword. First, we have to let the function yield the string "Do you love JavaScript?", which can be done by calling `game.next().value`.<br><br>Every line is executed, until it finds the first `yield` keyword. There is a `yield` keyword on the first line within the function: the execution stops with the first yield! _This means that the variable `answer` is not defined yet!_<br><br>When we call `game.next("Yes").value`, the previous `yield` is replaced with the value of the parameters passed to the `next()` function, `"Yes"` in this case. The value of the variable `answer` is now equal to `"Yes"`. The condition of the if-statement returns `false`, and `JavaScript loves you back ❤️` gets logged.',
	},
	{
		id: 72,
		title: "72. What's the output?",
		text: null,
		code: "console.log(String.raw`Hello<br>world`);",
		choices: [
			"A: `Hello world!`",
			"B: `Hello`  \n     `world`",
			"C: `Hello<br>world`",
			"D: `Hello<br>`  \n     `world`",
		],
		answer: 'c-21)Answer: C<br><br>`String.raw` returns a string where the escapes (`<br>`, `\\v`, `\\t` etc.) are ignored! Backslashes can be an issue since you could end up with something like:<br><br>``const path = `C:\\Documents\\Projects\\table.html` ``<br><br>Which would result in:<br><br>`"C:DocumentsProjects able.html"`<br><br>With `String.raw`, it would simply ignore the escape and print:<br><br>`C:\\Documents\\Projects\\table.html`<br><br>In this case, the string is `Hello<br>world`, which gets logged.',
	},
	{
		id: 73,
		title: "73. What's the output?",
		text: null,
		code: "async function getData() {<br>  return await Promise.resolve(&#x27;I made it!&#x27;);<br>}<br><br>const data = getData();<br>console.log(data);",
		choices: [
			'A: `"I made it!"`',
			'B: `Promise {<resolved>: "I made it!"}`',
			"C: `Promise {<pending>}`",
			"D: `undefined`",
		],
		answer: 'c-22)Answer: C<br><br>An async function always returns a promise. The `await` still has to wait for the promise to resolve: a pending promise gets returned when we call `getData()` in order to set `data` equal to it.<br><br>If we wanted to get access to the resolved value `"I made it"`, we could have used the `.then()` method on `data`:<br><br>`data.then(res => console.log(res))`<br><br>This would\'ve logged `"I made it!"`',
	},
	{
		id: 74,
		title: "74. What's the output?",
		text: null,
		code: "function addToList(item, list) {<br>  return list.push(item);<br>}<br><br>const result = addToList(&#x27;apple&#x27;, [&#x27;banana&#x27;]);<br>console.log(result);",
		choices: [
			"A: `['apple', 'banana']`",
			"B: `2`",
			"C: `true`",
			"D: `undefined`",
		],
		answer: 'b-18)Answer: B<br><br>The `.push()` method returns the _length_ of the new array! Previously, the array contained one element (the string `"banana"`) and had a length of `1`. After adding the string `"apple"` to the array, the array contains two elements, and has a length of `2`. This gets returned from the `addToList` function.<br><br>The `push` method modifies the original array. If you wanted to return the _array_ from the function rather than the _length of the array_, you should have returned `list` after pushing `item` to it.',
	},
	{
		id: 75,
		title: "75. What's the output?",
		text: null,
		code: "const box = { x: 10, y: 20 };<br><br>Object.freeze(box);<br><br>const shape = box;<br>shape.x = 100;<br><br>console.log(shape);",
		choices: [
			"A: `{ x: 100, y: 20 }`",
			"B: `{ x: 10, y: 20 }`",
			"C: `{ x: 100 }`",
			"D: `ReferenceError`",
		],
		answer: "b-19)Answer: B<br><br>`Object.freeze` makes it impossible to add, remove, or modify properties of an object (unless the property's value is another object).<br><br>When we create the variable `shape` and set it equal to the frozen object `box`, `shape` also refers to a frozen object. You can check whether an object is frozen by using `Object.isFrozen`. In this case, `Object.isFrozen(shape)` would return true, since the variable `shape` has a reference to a frozen object.<br><br>Since `shape` is frozen, and since the value of `x` is not an object, we cannot modify the property `x`. `x` is still equal to `10`, and `{ x: 10, y: 20 }` gets logged.",
	},
	{
		id: 76,
		title: "76. What's the output?",
		text: null,
		code: "const { firstName: myName } = { firstName: &#x27;Lydia&#x27; };<br><br>console.log(firstName);",
		choices: [
			'A: `"Lydia"`',
			'B: `"myName"`',
			"C: `undefined`",
			"D: `ReferenceError`",
		],
		answer: "d-8)Answer: D<br><br>By using [destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) syntax we can unpack values from arrays, or properties from objects, into distinct variables:<br><br>const { firstName } \\= { firstName: 'Lydia' };<br>// ES5 version:<br>// var firstName = { firstName: 'Lydia' }.firstName;<br><br>console.log(firstName); // \"Lydia\"<br><br>Also, a property can be unpacked from an object and assigned to a variable with a different name than the object property:<br><br>const { firstName: myName } \\= { firstName: 'Lydia' };<br>// ES5 version:<br>// var myName = { firstName: 'Lydia' }.firstName;<br><br>console.log(myName); // \"Lydia\"<br>console.log(firstName); // Uncaught ReferenceError: firstName is not defined<br><br>Therefore, `firstName` does not exist as a variable, thus attempting to access its value will raise a `ReferenceError`.<br><br>**Note:** Be aware of the `global scope` properties:<br><br>const { name: myName } \\= { name: 'Lydia' };<br><br>console.log(myName); // \"lydia\"<br>console.log(name); // \"\" ----- Browser e.g. Chrome<br>console.log(name); // ReferenceError: name is not defined  ----- NodeJS<br><br>Whenever Javascript is unable to find a variable within the _current scope_, it climbs up the [Scope chain](https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/scope-closures/ch3.md) and searches for it and if it reaches the top-level scope, aka **Global scope**, and still doesn't find it, it will throw a `ReferenceError`.<br><br>*   In **Browsers** such as _Chrome_, `name` is a _deprecated global scope property_. In this example, the code is running inside _global scope_ and there is no user defined local variable for `name`, therefore it searches the predefined _variables/properties_ in the global scope which is in case of browsers, it searches through `window` object and it will extract the [window.name](https://developer.mozilla.org/en-US/docs/Web/API/Window/name) value which is equal to an **empty string**.<br>    <br>*   In **NodeJS**, there is no such property on the `global` object, thus attempting to access a non-existent variable will raise a [ReferenceError](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Not_defined).",
	},
	{
		id: 77,
		title: "77. Is this a pure function?",
		text: null,
		code: "function sum(a, b) {<br>  return a + b;<br>}",
		choices: ["A: Yes", "B: No"],
		answer: "a-24)Answer: A<br><br>A pure function is a function that _always_ returns the same result, if the same arguments are passed.<br><br>The `sum` function always returns the same result. If we pass `1` and `2`, it will _always_ return `3` without side effects. If we pass `5` and `10`, it will _always_ return `15`, and so on. This is the definition of a pure function.",
	},
	{
		id: 78,
		title: "78. What is the output?",
		text: null,
		code: "const add = () =&gt; {<br>  const cache = {};<br>  return num =&gt; {<br>    if (num in cache) {<br>      return `From cache! ${cache[num]}`;<br>    } else {<br>      const result = num + 10;<br>      cache[num] = result;<br>      return `Calculated! ${result}`;<br>    }<br>  };<br>};<br><br>const addFunction = add();<br>console.log(addFunction(10));<br>console.log(addFunction(10));<br>console.log(addFunction(5 * 2));",
		choices: [
			"A: `Calculated! 20` `Calculated! 20` `Calculated! 20`",
			"B: `Calculated! 20` `From cache! 20` `Calculated! 20`",
			"C: `Calculated! 20` `From cache! 20` `From cache! 20`",
			"D: `Calculated! 20` `From cache! 20` `Error`",
		],
		answer: "c-23)Answer: C<br><br>The `add` function is a _memoized_ function. With memoization, we can cache the results of a function in order to speed up its execution. In this case, we create a `cache` object that stores the previously returned values.<br><br>If we call the `addFunction` function again with the same argument, it first checks whether it has already gotten that value in its cache. If that's the case, the caches value will be returned, which saves on execution time. Else, if it's not cached, it will calculate the value and store it afterwards.<br><br>We call the `addFunction` function three times with the same value: on the first invocation, the value of the function when `num` is equal to `10` isn't cached yet. The condition of the if-statement `num in cache` returns `false`, and the else block gets executed: `Calculated! 20` gets logged, and the value of the result gets added to the cache object. `cache` now looks like `{ 10: 20 }`.<br><br>The second time, the `cache` object contains the value that gets returned for `10`. The condition of the if-statement `num in cache` returns `true`, and `'From cache! 20'` gets logged.<br><br>The third time, we pass `5 * 2` to the function which gets evaluated to `10`. The `cache` object contains the value that gets returned for `10`. The condition of the if-statement `num in cache` returns `true`, and `'From cache! 20'` gets logged.",
	},
	{
		id: 79,
		title: "79. What is the output?",
		text: null,
		code: "const myLifeSummedUp = [&#x27;☕&#x27;, &#x27;💻&#x27;, &#x27;🍷&#x27;, &#x27;🍫&#x27;];<br><br>for (let item in myLifeSummedUp) {<br>  console.log(item);<br>}<br><br>for (let item of myLifeSummedUp) {<br>  console.log(item);<br>}",
		choices: [
			'A: `0` `1` `2` `3` and `"☕"` `"💻"` `"🍷"` `"🍫"`',
			'B: `"☕"` `"💻"` `"🍷"` `"🍫"` and `"☕"` `"💻"` `"🍷"` `"🍫"`',
			'C: `"☕"` `"💻"` `"🍷"` `"🍫"` and `0` `1` `2` `3`',
			'D: `0` `1` `2` `3` and `{0: "☕", 1: "💻", 2: "🍷", 3: "🍫"}`',
		],
		answer: 'a-25)Answer: A<br><br>With a _for-in_ loop, we can iterate over **enumerable** properties. In an array, the enumerable properties are the "keys" of array elements, which are actually their indexes. You could see an array as:<br><br>`{0: "☕", 1: "💻", 2: "🍷", 3: "🍫"}`<br><br>Where the keys are the enumerable properties. `0` `1` `2` `3` get logged.<br><br>With a _for-of_ loop, we can iterate over **iterables**. An array is an iterable. When we iterate over the array, the variable "item" is equal to the element it\'s currently iterating over, `"☕"` `"💻"` `"🍷"` `"🍫"` get logged.',
	},
	{
		id: 80,
		title: "80. What is the output?",
		text: null,
		code: "const list = [1 + 2, 1 * 2, 1 / 2];<br>console.log(list);",
		choices: [
			'A: `["1 + 2", "1 * 2", "1 / 2"]`',
			'B: `["12", 2, 0.5]`',
			"C: `[3, 2, 0.5]`",
			"D: `[1, 1, 1]`",
		],
		answer: "c-24)Answer: C<br><br>Array elements can hold any value. Numbers, strings, objects, other arrays, null, boolean values, undefined, and other expressions such as dates, functions, and calculations.<br><br>The element will be equal to the returned value. `1 + 2` returns `3`, `1 * 2` returns `2`, and `1 / 2` returns `0.5`.",
	},
	{
		id: 81,
		title: "81. What is the output?",
		text: null,
		code: "function sayHi(name) {<br>  return `Hi there, ${name}`;<br>}<br><br>console.log(sayHi());",
		choices: [
			"A: `Hi there,`",
			"B: `Hi there, undefined`",
			"C: `Hi there, null`",
			"D: `ReferenceError`",
		],
		answer: "b-20)Answer: B<br><br>By default, arguments have the value of `undefined`, unless a value has been passed to the function. In this case, we didn't pass a value for the `name` argument. `name` is equal to `undefined` which gets logged.<br><br>In ES6, we can overwrite this default `undefined` value with default parameters. For example:<br><br>`function sayHi(name = \"Lydia\") { ... }`<br><br>In this case, if we didn't pass a value or if we passed `undefined`, `name` would always be equal to the string `Lydia`",
	},
	{
		id: 82,
		title: "82. What is the output?",
		text: null,
		code: "var status = &#x27;😎&#x27;;<br><br>setTimeout(() =&gt; {<br>  const status = &#x27;😍&#x27;;<br><br>  const data = {<br>    status: &#x27;🥑&#x27;,<br>    getStatus() {<br>      return this.status;<br>    },<br>  };<br><br>  console.log(data.getStatus());<br>  console.log(data.getStatus.call(this));<br>}, 0);",
		choices: [
			'A: `"🥑"` and `"😍"`',
			'B: `"🥑"` and `"😎"`',
			'C: `"😍"` and `"😎"`',
			'D: `"😎"` and `"😎"`',
		],
		answer: 'b-21)Answer: B<br><br>The value of the `this` keyword is dependent on where you use it. In a **method**, like the `getStatus` method, the `this` keyword refers to _the object that the method belongs to_. The method belongs to the `data` object, so `this` refers to the `data` object. When we log `this.status`, the `status` property on the `data` object gets logged, which is `"🥑"`.<br><br>With the `call` method, we can change the object to which the `this` keyword refers. In **functions**, the `this` keyword refers to the _the object that the function belongs to_. We declared the `setTimeout` function on the _global object_, so within the `setTimeout` function, the `this` keyword refers to the _global object_. On the global object, there is a variable called _status_ with the value of `"😎"`. When logging `this.status`, `"😎"` gets logged.',
	},
	{
		id: 83,
		title: "83. What is the output?",
		text: null,
		code: "const person = {<br>  name: &#x27;Lydia&#x27;,<br>  age: 21,<br>};<br><br>let city = person.city;<br>city = &#x27;Amsterdam&#x27;;<br><br>console.log(person);",
		choices: [
			'A: `{ name: "Lydia", age: 21 }`',
			'B: `{ name: "Lydia", age: 21, city: "Amsterdam" }`',
			'C: `{ name: "Lydia", age: 21, city: undefined }`',
			'D: `"Amsterdam"`',
		],
		answer: 'a-26)Answer: A<br><br>We set the variable `city` equal to the value of the property called `city` on the `person` object. There is no property on this object called `city`, so the variable `city` has the value of `undefined`.<br><br>Note that we are _not_ referencing the `person` object itself! We simply set the variable `city` equal to the current value of the `city` property on the `person` object.<br><br>Then, we set `city` equal to the string `"Amsterdam"`. This doesn\'t change the person object: there is no reference to that object.<br><br>When logging the `person` object, the unmodified object gets returned.',
	},
	{
		id: 84,
		title: "84. What is the output?",
		text: null,
		code: "function checkAge(age) {<br>  if (age &lt; 18) {<br>    const message = &quot;Sorry, you&#x27;re too young.&quot;;<br>  } else {<br>    const message = &quot;Yay! You&#x27;re old enough!&quot;;<br>  }<br><br>  return message;<br>}<br><br>console.log(checkAge(21));",
		choices: [
			'A: `"Sorry, you\'re too young."`',
			'B: `"Yay! You\'re old enough!"`',
			"C: `ReferenceError`",
			"D: `undefined`",
		],
		answer: "c-25)Answer: C<br><br>Variables with the `const` and `let` keyword are _block-scoped_. A block is anything between curly brackets (`{ }`). In this case, the curly brackets of the if/else statements. You cannot reference a variable outside of the block it's declared in, a ReferenceError gets thrown.",
	},
	{
		id: 85,
		title: "85. What kind of information would get logged?",
		text: null,
		code: "fetch(&#x27;https://www.website.com/api/user/1&#x27;)<br>  .then(res =&gt; res.json())<br>  .then(res =&gt; console.log(res));",
		choices: [
			"A: The result of the `fetch` method.",
			"B: The result of the second invocation of the `fetch` method.",
			"C: The result of the callback in the previous `.then()`.",
			"D: It would always be undefined.",
		],
		answer: "c-26)Answer: C<br><br>The value of `res` in the second `.then` is equal to the returned value of the previous `.then`. You can keep chaining `.then`s like this, where the value is passed to the next handler.",
	},
	{
		id: 86,
		title: "86. Which option is a way to set hasName equal to true, provided you cannot pass true as an argument?",
		text: null,
		code: "function getName(name) {<br>  const hasName = //<br>}",
		choices: [
			"A: `!!name`",
			"B: `name`",
			"C: `new Boolean(name)`",
			"D: `name.length`",
		],
		answer: "a-27)Answer: A<br><br>With `!!name`, we determine whether the value of `name` is truthy or falsy. If name is truthy, which we want to test for, `!name` returns `false`. `!false` (which is what `!!name` practically is) returns `true`.<br><br>By setting `hasName` equal to `name`, you set `hasName` equal to whatever value you passed to the `getName` function, not the boolean value `true`.<br><br>`new Boolean(true)` returns an object wrapper, not the boolean value itself.<br><br>`name.length` returns the length of the passed argument, not whether it's `true`.",
	},
	{
		id: 87,
		title: "87. What's the output?",
		text: null,
		code: "console.log(&#x27;I want pizza&#x27;[0]);",
		choices: ['A: `"""`', 'B: `"I"`', "C: `SyntaxError`", "D: `undefined`"],
		answer: "b-22)Answer: B<br><br>In order to get a character at a specific index of a string, you can use bracket notation. The first character in the string has index 0, and so on. In this case, we want to get the element with index 0, the character `\"I'`, which gets logged.<br><br>Note that this method is not supported in IE7 and below. In that case, use `.charAt()`.",
	},
	{
		id: 88,
		title: "88. What's the output?",
		text: null,
		code: "function sum(num1, num2 = num1) {<br>  console.log(num1 + num2);<br>}<br><br>sum(10);",
		choices: [
			"A: `NaN`",
			"B: `20`",
			"C: `ReferenceError`",
			"D: `undefined`",
		],
		answer: "b-23)Answer: B<br><br>You can set a default parameter's value equal to another parameter of the function, as long as they've been defined _before_ the default parameter. We pass the value `10` to the `sum` function. If the `sum` function only receives 1 argument, it means that the value for `num2` is not passed, and the value of `num1` is equal to the passed value `10` in this case. The default value of `num2` is the value of `num1`, which is `10`. `num1 + num2` returns `20`.<br><br>If you're trying to set a default parameter's value equal to a parameter which is defined _after_ (to the right), the parameter's value hasn't been initialized yet, which will throw an error.",
	},
	{
		id: 89,
		title: "89. What's the output?",
		text: null,
		code: "// module.js<br>export default () =&gt; &#x27;Hello world&#x27;;<br>export const name = &#x27;Lydia&#x27;;<br><br>// index.js<br>import * as data from &#x27;./module&#x27;;<br><br>console.log(data);",
		choices: [
			'A: `{ default: function default(), name: "Lydia" }`',
			"B: `{ default: function default() }`",
			'C: `{ default: "Hello world", name: "Lydia" }`',
			"D: Global object of `module.js`",
		],
		answer: 'a-28)Answer: A<br><br>With the `import * as name` syntax, we import _all exports_ from the `module.js` file into the `index.js` file as a new object called `data` is created. In the `module.js` file, there are two exports: the default export, and a named export. The default export is a function which returns the string `"Hello World"`, and the named export is a variable called `name` which has the value of the string `"Lydia"`.<br><br>The `data` object has a `default` property for the default export, other properties have the names of the named exports and their corresponding values.',
	},
	{
		id: 90,
		title: "90. What's the output?",
		text: null,
		code: "class Person {<br>  constructor(name) {<br>    this.name = name;<br>  }<br>}<br><br>const member = new Person(&#x27;John&#x27;);<br>console.log(typeof member);",
		choices: [
			'A: `"class"`',
			'B: `"function"`',
			'C: `"object"`',
			'D: `"string"`',
		],
		answer: 'c-27)Answer: C<br><br>Classes are syntactical sugar for function constructors. The equivalent of the `Person` class as a function constructor would be:<br><br>function Person(name) {<br>  this.name \\= name;<br>}<br><br>Calling a function constructor with `new` results in the creation of an instance of `Person`, `typeof` keyword returns `"object"` for an instance. `typeof member` returns `"object"`.',
	},
	{
		id: 91,
		title: "91. What's the output?",
		text: null,
		code: "let newList = [1, 2, 3].push(4);<br><br>console.log(newList.push(5));",
		choices: [
			"A: `[1, 2, 3, 4, 5]`",
			"B: `[1, 2, 3, 5]`",
			"C: `[1, 2, 3, 4]`",
			"D: `Error`",
		],
		answer: "d-9)Answer: D<br><br>The `.push` method returns the _new length_ of the array, not the array itself! By setting `newList` equal to `[1, 2, 3].push(4)`, we set `newList` equal to the new length of the array: `4`.<br><br>Then, we try to use the `.push` method on `newList`. Since `newList` is the numerical value `4`, we cannot use the `.push` method: a TypeError is thrown.",
	},
	{
		id: 92,
		title: "92. What's the output?",
		text: null,
		code: "function giveLydiaPizza() {<br>  return &#x27;Here is pizza!&#x27;;<br>}<br><br>const giveLydiaChocolate = () =&gt;<br>  &quot;Here&#x27;s chocolate... now go hit the gym already.&quot;;<br><br>console.log(giveLydiaPizza.prototype);<br>console.log(giveLydiaChocolate.prototype);",
		choices: [
			"A: `{ constructor: ...}` `{ constructor: ...}`",
			"B: `{}` `{ constructor: ...}`",
			"C: `{ constructor: ...}` `{}`",
			"D: `{ constructor: ...}` `undefined`",
		],
		answer: "d-10)Answer: D<br><br>Regular functions, such as the `giveLydiaPizza` function, have a `prototype` property, which is an object (prototype object) with a `constructor` property. Arrow functions however, such as the `giveLydiaChocolate` function, do not have this `prototype` property. `undefined` gets returned when trying to access the `prototype` property using `giveLydiaChocolate.prototype`.",
	},
	{
		id: 93,
		title: "93. What's the output?",
		text: null,
		code: "const person = {<br>  name: &#x27;Lydia&#x27;,<br>  age: 21,<br>};<br><br>for (const [x, y] of Object.entries(person)) {<br>  console.log(x, y);<br>}",
		choices: [
			"A: `name` `Lydia` and `age` `21`",
			'B: `["name", "Lydia"]` and `["age", 21]`',
			'C: `["name", "age"]` and `undefined`',
			"D: `Error`",
		],
		answer: 'a-29)Answer: A<br><br>`Object.entries(person)` returns an array of nested arrays, containing the keys and objects:<br><br>`[ [ \'name\', \'Lydia\' ], [ \'age\', 21 ] ]`<br><br>Using the `for-of` loop, we can iterate over each element in the array, the subarrays in this case. We can destructure the subarrays instantly in the for-of loop, using `const [x, y]`. `x` is equal to the first element in the subarray, `y` is equal to the second element in the subarray.<br><br>The first subarray is `[ "name", "Lydia" ]`, with `x` equal to `"name"`, and `y` equal to `"Lydia"`, which get logged. The second subarray is `[ "age", 21 ]`, with `x` equal to `"age"`, and `y` equal to `21`, which get logged.',
	},
	{
		id: 94,
		title: "94. What's the output?",
		text: null,
		code: "function getItems(fruitList, ...args, favoriteFruit) {<br>  return [...fruitList, ...args, favoriteFruit]<br>}<br><br>getItems([&quot;banana&quot;, &quot;apple&quot;], &quot;pear&quot;, &quot;orange&quot;)",
		choices: [
			'A: `["banana", "apple", "pear", "orange"]`',
			'B: `[["banana", "apple"], "pear", "orange"]`',
			'C: `["banana", "apple", ["pear"], "orange"]`',
			"D: `SyntaxError`",
		],
		answer: "d-11)Answer: D<br><br>`...args` is a rest parameter. The rest parameter's value is an array containing all remaining arguments, **and can only be the last parameter**! In this example, the rest parameter was the second parameter. This is not possible, and will throw a syntax error.<br><br>function getItems(fruitList, favoriteFruit, ...args) {<br>  return \\[...fruitList, ...args, favoriteFruit\\];<br>}<br><br>getItems(\\['banana', 'apple'\\], 'pear', 'orange');<br><br>The above example works. This returns the array `[ 'banana', 'apple', 'orange', 'pear' ]`",
	},
	{
		id: 95,
		title: "95. What's the output?",
		text: null,
		code: "function nums(a, b) {<br>  if (a &gt; b) console.log(&#x27;a is bigger&#x27;);<br>  else console.log(&#x27;b is bigger&#x27;);<br>  return<br>  a + b;<br>}<br><br>console.log(nums(4, 2));<br>console.log(nums(1, 2));",
		choices: [
			"A: `a is bigger`, `6` and `b is bigger`, `3`",
			"B: `a is bigger`, `undefined` and `b is bigger`, `undefined`",
			"C: `undefined` and `undefined`",
			"D: `SyntaxError`",
		],
		answer: "b-24)Answer: B<br><br>In JavaScript, we don't _have_ to write the semicolon (`;`) explicitly, however the JavaScript engine still adds them after statements. This is called **Automatic Semicolon Insertion**. A statement can for example be variables, or keywords like `throw`, `return`, `break`, etc.<br><br>Here, we wrote a `return` statement, and another value `a + b` on a _new line_. However, since it's a new line, the engine doesn't know that it's actually the value that we wanted to return. Instead, it automatically added a semicolon after `return`. You could see this as:<br><br>return;<br>a + b;<br><br>This means that `a + b` is never reached, since a function stops running after the `return` keyword. If no value gets returned, like here, the function returns `undefined`. Note that there is no automatic insertion after `if/else` statements!",
	},
	{
		id: 96,
		title: "96. What's the output?",
		text: null,
		code: "class Person {<br>  constructor() {<br>    this.name = &#x27;Lydia&#x27;;<br>  }<br>}<br><br>Person = class AnotherPerson {<br>  constructor() {<br>    this.name = &#x27;Sarah&#x27;;<br>  }<br>};<br><br>const member = new Person();<br>console.log(member.name);",
		choices: [
			'A: `"Lydia"`',
			'B: `"Sarah"`',
			"C: `Error: cannot redeclare Person`",
			"D: `SyntaxError`",
		],
		answer: 'b-25)Answer: B<br><br>We can set classes equal to other classes/function constructors. In this case, we set `Person` equal to `AnotherPerson`. The name on this constructor is `Sarah`, so the name property on the new `Person` instance `member` is `"Sarah"`.',
	},
	{
		id: 97,
		title: "97. What's the output?",
		text: null,
		code: "const info = {<br>  [Symbol(&#x27;a&#x27;)]: &#x27;b&#x27;,<br>};<br><br>console.log(info);<br>console.log(Object.keys(info));",
		choices: [
			"A: `{Symbol('a'): 'b'}` and `[\"{Symbol('a')\"]`",
			"B: `{}` and `[]`",
			'C: `{ a: "b" }` and `["a"]`',
			"D: `{Symbol('a'): 'b'}` and `[]`",
		],
		answer: 'd-12)Answer: D<br><br>A Symbol is not _enumerable_. The Object.keys method returns all _enumerable_ key properties on an object. The Symbol won\'t be visible, and an empty array is returned. When logging the entire object, all properties will be visible, even non-enumerable ones.<br><br>This is one of the many qualities of a symbol: besides representing an entirely unique value (which prevents accidental name collision on objects, for example when working with 2 libraries that want to add properties to the same object), you can also "hide" properties on objects this way (although not entirely. You can still access symbols using the `Object.getOwnPropertySymbols()` method).',
	},
	{
		id: 98,
		title: "98. What's the output?",
		text: null,
		code: "const getList = ([x, ...y]) =&gt; [x, y]<br>const getUser = user =&gt; { name: user.name, age: user.age }<br><br>const list = [1, 2, 3, 4]<br>const user = { name: &quot;Lydia&quot;, age: 21 }<br><br>console.log(getList(list))<br>console.log(getUser(user))",
		choices: [
			"A: `[1, [2, 3, 4]]` and `SyntaxError`",
			'B: `[1, [2, 3, 4]]` and `{ name: "Lydia", age: 21 }`',
			'C: `[1, 2, 3, 4]` and `{ name: "Lydia", age: 21 }`',
			'D: `Error` and `{ name: "Lydia", age: 21 }`',
		],
		answer: 'a-30)Answer: A<br><br>The `getList` function receives an array as its argument. Between the parentheses of the `getList` function, we destructure this array right away. You could see this as:<br><br>`[x, ...y] = [1, 2, 3, 4]`<br><br>With the rest parameter `...y`, we put all "remaining" arguments in an array. The remaining arguments are `2`, `3` and `4` in this case. The value of `y` is an array, containing all the rest parameters. The value of `x` is equal to `1` in this case, so when we log `[x, y]`, `[1, [2, 3, 4]]` gets logged.<br><br>The `getUser` function receives an object. With arrow functions, we don\'t _have_ to write curly brackets if we just return one value. However, if you want to instantly return an _object_ from an arrow function, you have to write it between parentheses, otherwise everything between the two braces will be interpreted as a block statement. In this case the code between the braces is not a valid JavaScript code, so a `SyntaxError` gets thrown.<br><br>The following function would have returned an object:<br><br>`const getUser = user => ({ name: user.name, age: user.age })`',
	},
	{
		id: 99,
		title: "99. What's the output?",
		text: null,
		code: "const name = &#x27;Lydia&#x27;;<br><br>console.log(name());",
		choices: [
			"A: `SyntaxError`",
			"B: `ReferenceError`",
			"C: `TypeError`",
			"D: `undefined`",
		],
		answer: "c-28)Answer: C<br><br>The variable `name` holds the value of a string, which is not a function, thus cannot invoke.<br><br>TypeErrors get thrown when a value is not of the expected type. JavaScript expected `name` to be a function since we're trying to invoke it. It was a string however, so a TypeError gets thrown: name is not a function!<br><br>SyntaxErrors get thrown when you've written something that isn't valid JavaScript, for example when you've written the word `return` as `retrun`. ReferenceErrors get thrown when JavaScript isn't able to find a reference to a value that you're trying to access.",
	},
	{
		id: 100,
		title: "100. What's the value of output?",
		text: null,
		code: "// 🎉✨ This is my 100th question! ✨🎉<br><br>const output = `${[] &amp;&amp; &#x27;Im&#x27;}possible!<br>You should${&#x27;&#x27; &amp;&amp; `n&#x27;t`} see a therapist after so much JavaScript lol`;",
		choices: [
			"A: `possible! You should see a therapist after so much JavaScript lol`",
			"B: `Impossible! You should see a therapist after so much JavaScript lol`",
			"C: `possible! You shouldn't see a therapist after so much JavaScript lol`",
			"D: `Impossible! You shouldn't see a therapist after so much JavaScript lol`",
		],
		answer: "b-26)Answer: B<br><br>`[]` is a truthy value. With the `&&` operator, the right-hand value will be returned if the left-hand value is a truthy value. In this case, the left-hand value `[]` is a truthy value, so `\"Im'` gets returned.<br><br>`\"\"` is a falsy value. If the left-hand value is falsy, nothing gets returned. `n't` doesn't get returned.",
	},
	{
		id: 101,
		title: "101. What's the value of output?",
		text: null,
		code: "const one = false || {} || null;<br>const two = null || false || &#x27;&#x27;;<br>const three = [] || 0 || true;<br><br>console.log(one, two, three);",
		choices: [
			"A: `false` `null` `[]`",
			'B: `null` `""` `true`',
			'C: `{}` `""` `[]`',
			"D: `null` `null` `true`",
		],
		answer: 'c-29)Answer: C<br><br>With the `||` operator, we can return the first truthy operand. If all values are falsy, the last operand gets returned.<br><br>`(false || {} || null)`: the empty object `{}` is a truthy value. This is the first (and only) truthy value, which gets returned. `one` is equal to `{}`.<br><br>`(null || false || "")`: all operands are falsy values. This means that the last operand, `""` gets returned. `two` is equal to `""`.<br><br>`([] || 0 || "")`: the empty array`[]` is a truthy value. This is the first truthy value, which gets returned. `three` is equal to `[]`.',
	},
	{
		id: 102,
		title: "102. What's the value of output?",
		text: null,
		code: "const myPromise = () =&gt; Promise.resolve(&#x27;I have resolved!&#x27;);<br><br>function firstFunction() {<br>  myPromise().then(res =&gt; console.log(res));<br>  console.log(&#x27;second&#x27;);<br>}<br><br>async function secondFunction() {<br>  console.log(await myPromise());<br>  console.log(&#x27;second&#x27;);<br>}<br><br>firstFunction();<br>secondFunction();",
		choices: [
			"A: `I have resolved!`, `second` and `I have resolved!`, `second`",
			"B: `second`, `I have resolved!` and `second`, `I have resolved!`",
			"C: `I have resolved!`, `second` and `second`, `I have resolved!`",
			"D: `second`, `I have resolved!` and `I have resolved!`, `second`",
		],
		answer: "d-13)Answer: D<br><br>With a promise, we basically say _I want to execute this function, but I'll put it aside for now while it's running since this might take a while. Only when a certain value is resolved (or rejected), and when the call stack is empty, I want to use this value._<br><br>We can get this value with both `.then` and the `await` keyword in an `async` function. Although we can get a promise's value with both `.then` and `await`, they work a bit differently.<br><br>In the `firstFunction`, we (sort of) put the myPromise function aside while it was running, but continued running the other code, which is `console.log('second')` in this case. Then, the function resolved with the string `I have resolved`, which then got logged after it saw that the callstack was empty.<br><br>With the await keyword in `secondFunction`, we literally pause the execution of an async function until the value has been resolved before moving to the next line.<br><br>This means that it waited for the `myPromise` to resolve with the value `I have resolved`, and only once that happened, we moved to the next line: `second` got logged.",
	},
	{
		id: 103,
		title: "103. What's the value of output?",
		text: null,
		code: "const set = new Set();<br><br>set.add(1);<br>set.add(&#x27;Lydia&#x27;);<br>set.add({ name: &#x27;Lydia&#x27; });<br><br>for (let item of set) {<br>  console.log(item + 2);<br>}",
		choices: [
			"A: `3`, `NaN`, `NaN`",
			"B: `3`, `7`, `NaN`",
			"C: `3`, `Lydia2`, `[object Object]2`",
			'D: `"12"`, `Lydia2`, `[object Object]2`',
		],
		answer: 'c-30)Answer: C<br><br>The `+` operator is not only used for adding numerical values, but we can also use it to concatenate strings. Whenever the JavaScript engine sees that one or more values are not a number, it coerces the number into a string.<br><br>The first one is `1`, which is a numerical value. `1 + 2` returns the number 3.<br><br>However, the second one is a string `"Lydia"`. `"Lydia"` is a string and `2` is a number: `2` gets coerced into a string. `"Lydia"` and `"2"` get concatenated, which results in the string `"Lydia2"`.<br><br>`{ name: "Lydia" }` is an object. Neither a number nor an object is a string, so it stringifies both. Whenever we stringify a regular object, it becomes `"[object Object]"`. `"[object Object]"` concatenated with `"2"` becomes `"[object Object]2"`.',
	},
	{
		id: 104,
		title: "104. What's its value?",
		text: null,
		code: "Promise.resolve(5);",
		choices: [
			"A: `5`",
			"B: `Promise {<pending>: 5}`",
			"C: `Promise {<fulfilled>: 5}`",
			"D: `Error`",
		],
		answer: "c-31)Answer: C<br><br>We can pass any type of value we want to `Promise.resolve`, either a promise or a non-promise. The method itself returns a promise with the resolved value (``). If you pass a regular function, it'll be a resolved promise with a regular value. If you pass a promise, it'll be a resolved promise with the resolved value of that passed promise.<br><br>In this case, we just passed the numerical value `5`. It returns a resolved promise with the value `5`.",
	},
	{
		id: 105,
		title: "105. What's its value?",
		text: null,
		code: "function compareMembers(person1, person2 = person) {<br>  if (person1 !== person2) {<br>    console.log(&#x27;Not the same!&#x27;);<br>  } else {<br>    console.log(&#x27;They are the same!&#x27;);<br>  }<br>}<br><br>const person = { name: &#x27;Lydia&#x27; };<br><br>compareMembers(person);",
		choices: [
			"A: `Not the same!`",
			"B: `They are the same!`",
			"C: `ReferenceError`",
			"D: `SyntaxError`",
		],
		answer: "b-27)Answer: B<br><br>Objects are passed by reference. When we check objects for strict equality (`===`), we're comparing their references.<br><br>We set the default value for `person2` equal to the `person` object, and passed the `person` object as the value for `person1`.<br><br>This means that both values have a reference to the same spot in memory, thus they are equal.<br><br>The code block in the `else` statement gets run, and `They are the same!` gets logged.",
	},
	{
		id: 106,
		title: "106. What's its value?",
		text: null,
		code: "const colorConfig = {<br>  red: true,<br>  blue: false,<br>  green: true,<br>  black: true,<br>  yellow: false,<br>};<br><br>const colors = [&#x27;pink&#x27;, &#x27;red&#x27;, &#x27;blue&#x27;];<br><br>console.log(colorConfig.colors[1]);",
		choices: [
			"A: `true`",
			"B: `false`",
			"C: `undefined`",
			"D: `TypeError`",
		],
		answer: "d-14)Answer: D<br><br>In JavaScript, we have two ways to access properties on an object: bracket notation, or dot notation. In this example, we use dot notation (`colorConfig.colors`) instead of bracket notation (`colorConfig[\"colors\"]`).<br><br>With dot notation, JavaScript tries to find the property on the object with that exact name. In this example, JavaScript tries to find a property called `colors` on the `colorConfig` object. There is no property called `colors`, so this returns `undefined`. Then, we try to access the value of the first element by using `[1]`. We cannot do this on a value that's `undefined`, so it throws a `TypeError`: `Cannot read property '1' of undefined`.<br><br>JavaScript interprets (or unboxes) statements. When we use bracket notation, it sees the first opening bracket `[` and keeps going until it finds the closing bracket `]`. Only then, it will evaluate the statement. If we would've used `colorConfig[colors[1]]`, it would have returned the value of the `red` property on the `colorConfig` object.",
	},
	{
		id: 107,
		title: "107. What's its value?",
		text: null,
		code: "console.log(&#x27;❤️&#x27; === &#x27;❤️&#x27;);",
		choices: ["A: `true`", "B: `false`"],
		answer: 'a-31)Answer: A<br><br>Under the hood, emojis are unicodes. The unicodes for the heart emoji is `"U+2764 U+FE0F"`. These are always the same for the same emojis, so we\'re comparing two equal strings to each other, which returns true.',
	},
	{
		id: 108,
		title: "108. Which of these methods modifies the original array?",
		text: null,
		code: "const emojis = [&#x27;✨&#x27;, &#x27;🥑&#x27;, &#x27;😍&#x27;];<br><br>emojis.map(x =&gt; x + &#x27;✨&#x27;);<br>emojis.filter(x =&gt; x !== &#x27;🥑&#x27;);<br>emojis.find(x =&gt; x !== &#x27;🥑&#x27;);<br>emojis.reduce((acc, cur) =&gt; acc + &#x27;✨&#x27;);<br>emojis.slice(1, 2, &#x27;✨&#x27;);<br>emojis.splice(1, 2, &#x27;✨&#x27;);",
		choices: [
			"A: `All of them`",
			"B: `map` `reduce` `slice` `splice`",
			"C: `map` `slice` `splice`",
			"D: `splice`",
		],
		answer: "d-15)Answer: D<br><br>With `splice` method, we modify the original array by deleting, replacing or adding elements. In this case, we removed 2 items from index 1 (we removed `'🥑'` and `'😍'`) and added the ✨ emoji instead.<br><br>`map`, `filter` and `slice` return a new array, `find` returns an element, and `reduce` returns a reduced value.",
	},
	{
		id: 109,
		title: "109. What's the output?",
		text: null,
		code: "const food = [&#x27;🍕&#x27;, &#x27;🍫&#x27;, &#x27;🥑&#x27;, &#x27;🍔&#x27;];<br>const info = { favoriteFood: food[0] };<br><br>info.favoriteFood = &#x27;🍝&#x27;;<br><br>console.log(food);",
		choices: [
			"A: `['🍕', '🍫', '🥑', '🍔']`",
			"B: `['🍝', '🍫', '🥑', '🍔']`",
			"C: `['🍝', '🍕', '🍫', '🥑', '🍔']`",
			"D: `ReferenceError`",
		],
		answer: "a-32)Answer: A<br><br>We set the value of the `favoriteFood` property on the `info` object equal to the string with the pizza emoji, `'🍕'`. A string is a primitive data type. In JavaScript, primitive data types don't interact by reference.<br><br>In JavaScript, primitive data types (everything that's not an object) interact by _value_. In this case, we set the value of the `favoriteFood` property on the `info` object equal to the value of the first element in the `food` array, the string with the pizza emoji in this case (`'🍕'`). A string is a primitive data type, and interact by value (see my [blogpost](https://www.theavocoder.com/complete-javascript/2018/12/21/by-value-vs-by-reference) if you're interested in learning more)<br><br>Then, we change the value of the `favoriteFood` property on the `info` object. The `food` array hasn't changed, since the value of `favoriteFood` was merely a _copy_ of the value of the first element in the array, and doesn't have a reference to the same spot in memory as the element on `food[0]`. When we log food, it's still the original array, `['🍕', '🍫', '🥑', '🍔']`.",
	},
	{
		id: 110,
		title: "110. What does this method do?",
		text: null,
		code: "JSON.parse();",
		choices: [
			"A: Parses JSON to a JavaScript value",
			"B: Parses a JavaScript object to JSON",
			"C: Parses any JavaScript value to JSON",
			"D: Parses JSON to a JavaScript object only",
		],
		answer: "a-33)Answer: A<br><br>With the `JSON.parse()` method, we can parse JSON string to a JavaScript value.<br><br>// Stringifying a number into valid JSON, then parsing the JSON string to a JavaScript value:<br>const jsonNumber \\= JSON.stringify(4); // '4'<br>JSON.parse(jsonNumber); // 4<br><br>// Stringifying an array value into valid JSON, then parsing the JSON string to a JavaScript value:<br>const jsonArray \\= JSON.stringify(\\[1, 2, 3\\]); // '\\[1, 2, 3\\]'<br>JSON.parse(jsonArray); // \\[1, 2, 3\\]<br><br>// Stringifying an object  into valid JSON, then parsing the JSON string to a JavaScript value:<br>const jsonArray \\= JSON.stringify({ name: 'Lydia' }); // '{\"name\":\"Lydia\"}'<br>JSON.parse(jsonArray); // { name: 'Lydia' }",
	},
	{
		id: 111,
		title: "111. What's the output?",
		text: null,
		code: "let name = &#x27;Lydia&#x27;;<br><br>function getName() {<br>  console.log(name);<br>  let name = &#x27;Sarah&#x27;;<br>}<br><br>getName();",
		choices: [
			"A: Lydia",
			"B: Sarah",
			"C: `undefined`",
			"D: `ReferenceError`",
		],
		answer: "d-16)Answer: D<br><br>Each function has its own _execution context_ (or _scope_). The `getName` function first looks within its own context (scope) to see if it contains the variable `name` we're trying to access. In this case, the `getName` function contains its own `name` variable: we declare the variable `name` with the `let` keyword, and with the value of `'Sarah'`.<br><br>Variables with the `let` keyword (and `const`) are hoisted, but unlike `var`, don't get _initialized_. They are not accessible before the line we declare (initialize) them. This is called the \"temporal dead zone\". When we try to access the variables before they are declared, JavaScript throws a `ReferenceError`.<br><br>If we wouldn't have declared the `name` variable within the `getName` function, the javascript engine would've looked down the _scope chain_. The outer scope has a variable called `name` with the value of `Lydia`. In that case, it would've logged `Lydia`.<br><br>let name \\= 'Lydia';<br><br>function getName() {<br>  console.log(name);<br>}<br><br>getName(); // Lydia",
	},
	{
		id: 112,
		title: "112. What's the output?",
		text: null,
		code: "function* generatorOne() {<br>  yield [&#x27;a&#x27;, &#x27;b&#x27;, &#x27;c&#x27;];<br>}<br><br>function* generatorTwo() {<br>  yield* [&#x27;a&#x27;, &#x27;b&#x27;, &#x27;c&#x27;];<br>}<br><br>const one = generatorOne();<br>const two = generatorTwo();<br><br>console.log(one.next().value);<br>console.log(two.next().value);",
		choices: [
			"A: `a` and `a`",
			"B: `a` and `undefined`",
			"C: `['a', 'b', 'c']` and `a`",
			"D: `a` and `['a', 'b', 'c']`",
		],
		answer: "c-32)Answer: C<br><br>With the `yield` keyword, we `yield` values in a generator function. With the `yield*` keyword, we can yield values from another generator function, or iterable object (for example an array).<br><br>In `generatorOne`, we yield the entire array `['a', 'b', 'c']` using the `yield` keyword. The value of `value` property on the object returned by the `next` method on `one` (`one.next().value`) is equal to the entire array `['a', 'b', 'c']`.<br><br>console.log(one.next().value); // \\['a', 'b', 'c'\\]<br>console.log(one.next().value); // undefined<br><br>In `generatorTwo`, we use the `yield*` keyword. This means that the first yielded value of `two`, is equal to the first yielded value in the iterator. The iterator is the array `['a', 'b', 'c']`. The first yielded value is `a`, so the first time we call `two.next().value`, `a` is returned.<br><br>console.log(two.next().value); // 'a'<br>console.log(two.next().value); // 'b'<br>console.log(two.next().value); // 'c'<br>console.log(two.next().value); // undefined",
	},
	{
		id: 113,
		title: "113. What's the output?",
		text: null,
		code: "console.log(`${(x =&gt; x)(&#x27;I love&#x27;)} to program`);",
		choices: [
			"A: `I love to program`",
			"B: `undefined to program`",
			"C: `${(x => x)('I love') to program`",
			"D: `TypeError`",
		],
		answer: "a-34)Answer: A<br><br>Expressions within template literals are evaluated first. This means that the string will contain the returned value of the expression, the immediately invoked function `(x => x)('I love')` in this case. We pass the value `'I love'` as an argument to the `x => x` arrow function. `x` is equal to `'I love'`, which gets returned. This results in `I love to program`.",
	},
	{
		id: 114,
		title: "114. What will happen?",
		text: null,
		code: "let config = {<br>  alert: setInterval(() =&gt; {<br>    console.log(&#x27;Alert!&#x27;);<br>  }, 1000),<br>};<br><br>config = null;",
		choices: [
			"A: The `setInterval` callback won't be invoked",
			"B: The `setInterval` callback gets invoked once",
			"C: The `setInterval` callback will still be called every second",
			"D: We never invoked `config.alert()`, config is `null`",
		],
		answer: "c-33)Answer: C<br><br>Normally when we set objects equal to `null`, those objects get _garbage collected_ as there is no reference anymore to that object. However, since the callback function within `setInterval` is an arrow function (thus bound to the `config` object), the callback function still holds a reference to the `config` object. As long as there is a reference, the object won't get garbage collected. Since this is an interval, setting `config` to `null` or `delete`\\-ing `config.alert` won't garbage-collect the interval, so the interval will still be called. It should be cleared with `clearInterval(config.alert)` to remove it from memory. Since it was not cleared, the `setInterval` callback function will still get invoked every 1000ms (1s).",
	},
	{
		id: 115,
		title: "115. Which method(s) will return the value 'Hello world!'?",
		text: null,
		code: "const myMap = new Map();<br>const myFunc = () =&gt; &#x27;greeting&#x27;;<br><br>myMap.set(myFunc, &#x27;Hello world!&#x27;);<br><br>//1<br>myMap.get(&#x27;greeting&#x27;);<br>//2<br>myMap.get(myFunc);<br>//3<br>myMap.get(() =&gt; &#x27;greeting&#x27;);",
		choices: ["A: 1", "B: 2", "C: 2 and 3", "D: All of them"],
		answer: "b-28)Answer: B<br><br>When adding a key/value pair using the `set` method, the key will be the value of the first argument passed to the `set` function, and the value will be the second argument passed to the `set` function. The key is the _function_ `() => 'greeting'` in this case, and the value `'Hello world'`. `myMap` is now `{ () => 'greeting' => 'Hello world!' }`.<br><br>1 is wrong, since the key is not `'greeting'` but `() => 'greeting'`. 3 is wrong, since we're creating a new function by passing it as a parameter to the `get` method. Object interact by _reference_. Functions are objects, which is why two functions are never strictly equal, even if they are identical: they have a reference to a different spot in memory.",
	},
	{
		id: 116,
		title: "116. What's the output?",
		text: null,
		code: "const person = {<br>  name: &#x27;Lydia&#x27;,<br>  age: 21,<br>};<br><br>const changeAge = (x = { ...person }) =&gt; (x.age += 1);<br>const changeAgeAndName = (x = { ...person }) =&gt; {<br>  x.age += 1;<br>  x.name = &#x27;Sarah&#x27;;<br>};<br><br>changeAge(person);<br>changeAgeAndName();<br><br>console.log(person);",
		choices: [
			'A: `{name: "Sarah", age: 22}`',
			'B: `{name: "Sarah", age: 23}`',
			'C: `{name: "Lydia", age: 22}`',
			'D: `{name: "Lydia", age: 23}`',
		],
		answer: 'c-34)Answer: C<br><br>Both the `changeAge` and `changeAgeAndName` functions have a default parameter, namely a _newly_ created object `{ ...person }`. This object has copies of all the key/values in the `person` object.<br><br>First, we invoke the `changeAge` function and pass the `person` object as its argument. This function increases the value of the `age` property by 1. `person` is now `{ name: "Lydia", age: 22 }`.<br><br>Then, we invoke the `changeAgeAndName` function, however we don\'t pass a parameter. Instead, the value of `x` is equal to a _new_ object: `{ ...person }`. Since it\'s a new object, it doesn\'t affect the values of the properties on the `person` object. `person` is still equal to `{ name: "Lydia", age: 22 }`.',
	},
	{
		id: 117,
		title: "117. Which of the following options will return 6?",
		text: null,
		code: "function sumValues(x, y, z) {<br>  return x + y + z;<br>}",
		choices: [
			"A: `sumValues([...1, 2, 3])`",
			"B: `sumValues([...[1, 2, 3]])`",
			"C: `sumValues(...[1, 2, 3])`",
			"D: `sumValues([1, 2, 3])`",
		],
		answer: "c-35)Answer: C<br><br>With the spread operator `...`, we can _spread_ iterables to individual elements. The `sumValues` function receives three arguments: `x`, `y` and `z`. `...[1, 2, 3]` will result in `1, 2, 3`, which we pass to the `sumValues` function.",
	},
	{
		id: 118,
		title: "118. What's the output?",
		text: null,
		code: "let num = 1;<br>const list = [&#x27;🥳&#x27;, &#x27;🤠&#x27;, &#x27;🥰&#x27;, &#x27;🤪&#x27;];<br><br>console.log(list[(num += 1)]);",
		choices: [
			"A: `🤠`",
			"B: `🥰`",
			"C: `SyntaxError`",
			"D: `ReferenceError`",
		],
		answer: "b-29)Answer: B<br><br>With the `+=` operator, we're incrementing the value of `num` by `1`. `num` had the initial value `1`, so `1 + 1` is `2`. The item on the second index in the `list` array is 🥰, `console.log(list[2])` prints 🥰.",
	},
	{
		id: 119,
		title: "119. What's the output?",
		text: null,
		code: "const person = {<br>  firstName: &#x27;Lydia&#x27;,<br>  lastName: &#x27;Hallie&#x27;,<br>  pet: {<br>    name: &#x27;Mara&#x27;,<br>    breed: &#x27;Dutch Tulip Hound&#x27;,<br>  },<br>  getFullName() {<br>    return `${this.firstName} ${this.lastName}`;<br>  },<br>};<br><br>console.log(person.pet?.name);<br>console.log(person.pet?.family?.name);<br>console.log(person.getFullName?.());<br>console.log(member.getLastName?.());",
		choices: [
			"A: `undefined` `undefined` `undefined` `undefined`",
			"B: `Mara` `undefined` `Lydia Hallie` `ReferenceError`",
			"C: `Mara` `null` `Lydia Hallie` `null`",
			"D: `null` `ReferenceError` `null` `ReferenceError`",
		],
		answer: "b-30)Answer: B<br><br>With the optional chaining operator `?.`, we no longer have to explicitly check whether the deeper nested values are valid or not. If we're trying to access a property on an `undefined` or `null` value (_nullish_), the expression short-circuits and returns `undefined`.<br><br>`person.pet?.name`: `person` has a property named `pet`: `person.pet` is not nullish. It has a property called `name`, and returns `Mara`. `person.pet?.family?.name`: `person` has a property named `pet`: `person.pet` is not nullish. `pet` does _not_ have a property called `family`, `person.pet.family` is nullish. The expression returns `undefined`. `person.getFullName?.()`: `person` has a property named `getFullName`: `person.getFullName()` is not nullish and can get invoked, which returns `Lydia Hallie`. `member.getLastName?.()`: variable `member` is non existent therefore a `ReferenceError` gets thrown!",
	},
	{
		id: 120,
		title: "120. What's the output?",
		text: null,
		code: "const groceries = [&#x27;banana&#x27;, &#x27;apple&#x27;, &#x27;peanuts&#x27;];<br><br>if (groceries.indexOf(&#x27;banana&#x27;)) {<br>  console.log(&#x27;We have to buy bananas!&#x27;);<br>} else {<br>  console.log(`We don&#x27;t have to buy bananas!`);<br>}",
		choices: [
			"A: We have to buy bananas!",
			"B: We don't have to buy bananas",
			"C: `undefined`",
			"D: `1`",
		],
		answer: 'b-31)Answer: B<br><br>We passed the condition `groceries.indexOf("banana")` to the if-statement. `groceries.indexOf("banana")` returns `0`, which is a falsy value. Since the condition in the if-statement is falsy, the code in the `else` block runs, and `We don\'t have to buy bananas!` gets logged.',
	},
	{
		id: 121,
		title: "121. What's the output?",
		text: null,
		code: "const config = {<br>  languages: [],<br>  set language(lang) {<br>    return this.languages.push(lang);<br>  },<br>};<br><br>console.log(config.language);",
		choices: [
			"A: `function language(lang) { this.languages.push(lang }`",
			"B: `0`",
			"C: `[]`",
			"D: `undefined`",
		],
		answer: "d-17)Answer: D<br><br>The `language` method is a `setter`. Setters don't hold an actual value, their purpose is to _modify_ properties. When calling a `setter` method, `undefined` gets returned.",
	},
	{
		id: 122,
		title: "122. What's the output?",
		text: null,
		code: "const name = &#x27;Lydia Hallie&#x27;;<br><br>console.log(!typeof name === &#x27;object&#x27;);<br>console.log(!typeof name === &#x27;string&#x27;);",
		choices: [
			"A: `false` `true`",
			"B: `true` `false`",
			"C: `false` `false`",
			"D: `true` `true`",
		],
		answer: 'c-36)Answer: C<br><br>`typeof name` returns `"string"`. The string `"string"` is a truthy value, so `!typeof name` returns the boolean value `false`. `false === "object"` and `false === "string"` both return`false`.<br><br>(If we wanted to check whether the type was (un)equal to a certain type, we should\'ve written `!==` instead of `!typeof`)',
	},
	{
		id: 123,
		title: "123. What's the output?",
		text: null,
		code: "const add = x =&gt; y =&gt; z =&gt; {<br>  console.log(x, y, z);<br>  return x + y + z;<br>};<br><br>add(4)(5)(6);",
		choices: [
			"A: `4` `5` `6`",
			"B: `6` `5` `4`",
			"C: `4` `function` `function`",
			"D: `undefined` `undefined` `6`",
		],
		answer: "a-35)Answer: A<br><br>The `add` function returns an arrow function, which returns an arrow function, which returns an arrow function (still with me?). The first function receives an argument `x` with the value of `4`. We invoke the second function, which receives an argument `y` with the value `5`. Then we invoke the third function, which receives an argument `z` with the value `6`. When we're trying to access the value `x`, `y` and `z` within the last arrow function, the JS engine goes up the scope chain in order to find the values for `x` and `y` accordingly. This returns `4` `5` `6`.",
	},
	{
		id: 124,
		title: "124. What's the output?",
		text: null,
		code: "async function* range(start, end) {<br>  for (let i = start; i &lt;= end; i++) {<br>    yield Promise.resolve(i);<br>  }<br>}<br><br>(async () =&gt; {<br>  const gen = range(1, 3);<br>  for await (const item of gen) {<br>    console.log(item);<br>  }<br>})();",
		choices: [
			"A: `Promise {1}` `Promise {2}` `Promise {3}`",
			"B: `Promise {<pending>}` `Promise {<pending>}` `Promise {<pending>}`",
			"C: `1` `2` `3`",
			"D: `undefined` `undefined` `undefined`",
		],
		answer: "c-37)Answer: C<br><br>The generator function `range` returns an async object with promises for each item in the range we pass: `Promise{1}`, `Promise{2}`, `Promise{3}`. We set the variable `gen` equal to the async object, after which we loop over it using a `for await ... of` loop. We set the variable `item` equal to the returned Promise values: first `Promise{1}`, then `Promise{2}`, then `Promise{3}`. Since we're _awaiting_ the value of `item`, the resolved promise, the resolved _values_ of the promises get returned: `1`, `2`, then `3`.",
	},
	{
		id: 125,
		title: "125. What's the output?",
		text: null,
		code: "const myFunc = ({ x, y, z }) =&gt; {<br>  console.log(x, y, z);<br>};<br><br>myFunc(1, 2, 3);",
		choices: [
			"A: `1` `2` `3`",
			"B: `{1: 1}` `{2: 2}` `{3: 3}`",
			"C: `{ 1: undefined }` `undefined` `undefined`",
			"D: `undefined` `undefined` `undefined`",
		],
		answer: "d-18)Answer: D<br><br>`myFunc` expects an object with properties `x`, `y` and `z` as its argument. Since we're only passing three separate numeric values (1, 2, 3) instead of one object with properties `x`, `y` and `z` ({x: 1, y: 2, z: 3}), `x`, `y` and `z` have their default value of `undefined`.",
	},
	{
		id: 126,
		title: "126. What's the output?",
		text: null,
		code: "function getFine(speed, amount) {<br>  const formattedSpeed = new Intl.NumberFormat(&#x27;en-US&#x27;, {<br>    style: &#x27;unit&#x27;,<br>    unit: &#x27;mile-per-hour&#x27;<br>  }).format(speed);<br><br>  const formattedAmount = new Intl.NumberFormat(&#x27;en-US&#x27;, {<br>    style: &#x27;currency&#x27;,<br>    currency: &#x27;USD&#x27;<br>  }).format(amount);<br><br>  return `The driver drove ${formattedSpeed} and has to pay ${formattedAmount}`;<br>}<br><br>console.log(getFine(130, 300))",
		choices: [
			"A: The driver drove 130 and has to pay 300",
			"B: The driver drove 130 mph and has to pay $300.00",
			"C: The driver drove undefined and has to pay undefined",
			"D: The driver drove 130.00 and has to pay 300.00",
		],
		answer: "b-32)Answer: B<br><br>With the `Intl.NumberFormat` method, we can format numeric values to any locale. We format the numeric value `130` to the `en-US` locale as a `unit` in `mile-per-hour`, which results in `130 mph`. The numeric value `300` to the `en-US` locale as a `currency` in `USD` results in `$300.00`.",
	},
	{
		id: 127,
		title: "127. What's the output?",
		text: null,
		code: "const spookyItems = [&#x27;👻&#x27;, &#x27;🎃&#x27;, &#x27;🕸&#x27;];<br>({ item: spookyItems[3] } = { item: &#x27;💀&#x27; });<br><br>console.log(spookyItems);",
		choices: [
			'A: `["👻", "🎃", "🕸"]`',
			'B: `["👻", "🎃", "🕸", "💀"]`',
			'C: `["👻", "🎃", "🕸", { item: "💀" }]`',
			'D: `["👻", "🎃", "🕸", "[object Object]"]`',
		],
		answer: 'b-33)Answer: B<br><br>By destructuring objects, we can unpack values from the right-hand object, and assign the unpacked value to the value of the same property name on the left-hand object. In this case, we\'re assigning the value "💀" to `spookyItems[3]`. This means that we\'re modifying the `spookyItems` array, we\'re adding the "💀" to it. When logging `spookyItems`, `["👻", "🎃", "🕸", "💀"]` gets logged.',
	},
	{
		id: 128,
		title: "128. What's the output?",
		text: null,
		code: "const name = &#x27;Lydia Hallie&#x27;;<br>const age = 21;<br><br>console.log(Number.isNaN(name));<br>console.log(Number.isNaN(age));<br><br>console.log(isNaN(name));<br>console.log(isNaN(age));",
		choices: [
			"A: `true` `false` `true` `false`",
			"B: `true` `false` `false` `false`",
			"C: `false` `false` `true` `false`",
			"D: `false` `true` `false` `true`",
		],
		answer: "c-38)Answer: C<br><br>With the `Number.isNaN` method, you can check if the value you pass is a _numeric value_ and equal to `NaN`. `name` is not a numeric value, so `Number.isNaN(name)` returns `false`. `age` is a numeric value, but is not equal to `NaN`, so `Number.isNaN(age)` returns `false`.<br><br>With the `isNaN` method, you can check if the value you pass is not a number. `name` is not a number, so `isNaN(name)` returns true. `age` is a number, so `isNaN(age)` returns `false`.",
	},
	{
		id: 129,
		title: "129. What's the output?",
		text: null,
		code: "const randomValue = 21;<br><br>function getInfo() {<br>  console.log(typeof randomValue);<br>  const randomValue = &#x27;Lydia Hallie&#x27;;<br>}<br><br>getInfo();",
		choices: [
			'A: `"number"`',
			'B: `"string"`',
			"C: `undefined`",
			"D: `ReferenceError`",
		],
		answer: "d-19)Answer: D<br><br>Variables declared with the `const` keyword are not referenceable before their initialization: this is called the _temporal dead zone_. In the `getInfo` function, the variable `randomValue` is scoped in the functional scope of `getInfo`. On the line where we want to log the value of `typeof randomValue`, the variable `randomValue` isn't initialized yet: a `ReferenceError` gets thrown! The engine didn't go down the scope chain since we declared the variable `randomValue` in the `getInfo` function.",
	},
	{
		id: 130,
		title: "130. What's the output?",
		text: null,
		code: "const myPromise = Promise.resolve(&#x27;Woah some cool data&#x27;);<br><br>(async () =&gt; {<br>  try {<br>    console.log(await myPromise);<br>  } catch {<br>    throw new Error(`Oops didn&#x27;t work`);<br>  } finally {<br>    console.log(&#x27;Oh finally!&#x27;);<br>  }<br>})();",
		choices: [
			"A: `Woah some cool data`",
			"B: `Oh finally!`",
			"C: `Woah some cool data` `Oh finally!`",
			"D: `Oops didn't work` `Oh finally!`",
		],
		answer: 'c-39)Answer: C<br><br>In the `try` block, we\'re logging the awaited value of the `myPromise` variable: `"Woah some cool data"`. Since no errors were thrown in the `try` block, the code in the `catch` block doesn\'t run. The code in the `finally` block _always_ runs, `"Oh finally!"` gets logged.',
	},
	{
		id: 131,
		title: "131. What's the output?",
		text: null,
		code: "const emojis = [&#x27;🥑&#x27;, [&#x27;✨&#x27;, &#x27;✨&#x27;, [&#x27;🍕&#x27;, &#x27;🍕&#x27;]]];<br><br>console.log(emojis.flat(1));",
		choices: [
			"A: `['🥑', ['✨', '✨', ['🍕', '🍕']]]`",
			"B: `['🥑', '✨', '✨', ['🍕', '🍕']]`",
			"C: `['🥑', ['✨', '✨', '🍕', '🍕']]`",
			"D: `['🥑', '✨', '✨', '🍕', '🍕']`",
		],
		answer: "b-34)Answer: B<br><br>With the `flat` method, we can create a new, flattened array. The depth of the flattened array depends on the value that we pass. In this case, we passed the value `1` (which we didn't have to, that's the default value), meaning that only the arrays on the first depth will be concatenated. `['🥑']` and `['✨', '✨', ['🍕', '🍕']]` in this case. Concatenating these two arrays results in `['🥑', '✨', '✨', ['🍕', '🍕']]`.",
	},
	{
		id: 132,
		title: "132. What's the output?",
		text: null,
		code: "class Counter {<br>  constructor() {<br>    this.count = 0;<br>  }<br><br>  increment() {<br>    this.count++;<br>  }<br>}<br><br>const counterOne = new Counter();<br>counterOne.increment();<br>counterOne.increment();<br><br>const counterTwo = counterOne;<br>counterTwo.increment();<br><br>console.log(counterOne.count);",
		choices: ["A: `0`", "B: `1`", "C: `2`", "D: `3`"],
		answer: "d-20)Answer: D<br><br>`counterOne` is an instance of the `Counter` class. The counter class contains a `count` property on its constructor, and an `increment` method. First, we invoked the `increment` method twice by calling `counterOne.increment()`. Currently, `counterOne.count` is `2`.<br><br>[![](https://camo.githubusercontent.com/5dd8fe8e901cbe6e6451e265db21e3a37df51ed06735121edd177deeedef2d65/68747470733a2f2f692e696d6775722e636f6d2f4b784c6c546d392e706e67)](https://camo.githubusercontent.com/5dd8fe8e901cbe6e6451e265db21e3a37df51ed06735121edd177deeedef2d65/68747470733a2f2f692e696d6775722e636f6d2f4b784c6c546d392e706e67)<br><br>Then, we create a new variable `counterTwo`, and set it equal to `counterOne`. Since objects interact by reference, we're just creating a new reference to the same spot in memory that `counterOne` points to. Since it has the same spot in memory, any changes made to the object that `counterTwo` has a reference to, also apply to `counterOne`. Currently, `counterTwo.count` is `2`.<br><br>We invoke `counterTwo.increment()`, which sets `count` to `3`. Then, we log the count on `counterOne`, which logs `3`.<br><br>[![](https://camo.githubusercontent.com/fe95c1437959e5239b4c22d4f32a7dd5dbf9bae5ac5a0e81c37bdb84cdd00af5/68747470733a2f2f692e696d6775722e636f6d2f424e4248586d632e706e67)](https://camo.githubusercontent.com/fe95c1437959e5239b4c22d4f32a7dd5dbf9bae5ac5a0e81c37bdb84cdd00af5/68747470733a2f2f692e696d6775722e636f6d2f424e4248586d632e706e67)",
	},
	{
		id: 133,
		title: "133. What's the output?",
		text: null,
		code: "const myPromise = Promise.resolve(Promise.resolve(&#x27;Promise&#x27;));<br><br>function funcOne() {<br>  setTimeout(() =&gt; console.log(&#x27;Timeout 1!&#x27;), 0);<br>  myPromise.then(res =&gt; res).then(res =&gt; console.log(`${res} 1!`));<br>  console.log(&#x27;Last line 1!&#x27;);<br>}<br><br>async function funcTwo() {<br>  const res = await myPromise;<br>  console.log(`${res} 2!`)<br>  setTimeout(() =&gt; console.log(&#x27;Timeout 2!&#x27;), 0);<br>  console.log(&#x27;Last line 2!&#x27;);<br>}<br><br>funcOne();<br>funcTwo();",
		choices: [
			"A: `Promise 1! Last line 1! Promise 2! Last line 2! Timeout 1! Timeout 2!`",
			"B: `Last line 1! Timeout 1! Promise 1! Last line 2! Promise2! Timeout 2!`",
			"C: `Last line 1! Promise 2! Last line 2! Promise 1! Timeout 1! Timeout 2!`",
			"D: `Timeout 1! Promise 1! Last line 1! Promise 2! Timeout 2! Last line 2!`",
		],
		answer: "c-40)Answer: C<br><br>First, we invoke `funcOne`. On the first line of `funcOne`, we call the _asynchronous_ `setTimeout` function, from which the callback is sent to the Web API. (see my article on the event loop [here](https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif).)<br><br>Then we call the `myPromise` promise, which is an _asynchronous_ operation.<br><br>Both the promise and the timeout are asynchronous operations, the function keeps on running while it's busy completing the promise and handling the `setTimeout` callback. This means that `Last line 1!` gets logged first, since this is not an asynchonous operation.<br><br>Since the callstack is not empty yet, the `setTimeout` function and promise in `funcOne` cannot get added to the callstack yet.<br><br>In `funcTwo`, the variable `res` gets `Promise` because `Promise.resolve(Promise.resolve('Promise'))` is equivalent to `Promise.resolve('Promise')` since resolving a promise just resolves it's value. The `await` in this line stops the execution of the function until it receives the resolution of the promise and then keeps on running synchronously until completion, so `Promise 2!` and then `Last line 2!` are logged and the `setTimeout` is sent to the Web API.<br><br>Then the call stack is empty. Promises are _microtasks_ so they are resolved first when the call stack is empty so `Promise 1!` gets to be logged.<br><br>Now, since `funcTwo` popped off the call stack, the call stack is empty. The callbacks waiting in the queue (`() => console.log(\"Timeout 1!\")` from `funcOne`, and `() => console.log(\"Timeout 2!\")` from `funcTwo`) get added to the call stack one by one. The first callback logs `Timeout 1!`, and gets popped off the stack. Then, the second callback logs `Timeout 2!`, and gets popped off the stack.",
	},
	{
		id: 134,
		title: "134. How can we invoke sum in sum.js from index.js?",
		text: null,
		code: "// sum.js<br>export default function sum(x) {<br>  return x + x;<br>}<br><br>// index.js<br>import * as sum from &#x27;./sum&#x27;;",
		choices: [
			"A: `sum(4)`",
			"B: `sum.sum(4)`",
			"C: `sum.default(4)`",
			"D: Default aren't imported with `*`, only named exports",
		],
		answer: "c-41)Answer: C<br><br>With the asterisk `*`, we import all exported values from that file, both default and named. If we had the following file:<br><br>// info.js<br>export const name \\= 'Lydia';<br>export const age \\= 21;<br>export default 'I love JavaScript';<br><br>// index.js<br>import \\* as info from './info';<br>console.log(info);<br><br>The following would get logged:<br><br>{<br>  default: \"I love JavaScript\",<br>  name: \"Lydia\",<br>  age: 21<br>}<br><br>For the `sum` example, it means that the imported value `sum` looks like this:<br><br>{ default: function sum(x) { return x + x } }<br><br>We can invoke this function, by calling `sum.default`",
	},
	{
		id: 135,
		title: "135. What's the output?",
		text: null,
		code: "const handler = {<br>  set: () =&gt; console.log(&#x27;Added a new property!&#x27;),<br>  get: () =&gt; console.log(&#x27;Accessed a property!&#x27;),<br>};<br><br>const person = new Proxy({}, handler);<br><br>person.name = &#x27;Lydia&#x27;;<br>person.name;",
		choices: [
			"A: `Added a new property!`",
			"B: `Accessed a property!`",
			"C: `Added a new property!` `Accessed a property!`",
			"D: Nothing gets logged",
		],
		answer: 'c-42)Answer: C<br><br>With a Proxy object, we can add custom behavior to an object that we pass to it as the second argument. In this case, we pass the `handler` object which contained two properties: `set` and `get`. `set` gets invoked whenever we _set_ property values, `get` gets invoked whenever we _get_ (access) property values.<br><br>The first argument is an empty object `{}`, which is the value of `person`. To this object, the custom behavior specified in the `handler` object gets added. If we add a property to the `person` object, `set` will get invoked. If we access a property on the `person` object, `get` gets invoked.<br><br>First, we added a new property `name` to the proxy object (`person.name = "Lydia"`). `set` gets invoked, and logs `"Added a new property!"`.<br><br>Then, we access a property value on the proxy object, the `get` property on the handler object got invoked. `"Accessed a property!"` gets logged.',
	},
	{
		id: 136,
		title: "136. Which of the following will modify the person object?",
		text: null,
		code: "const person = { name: &#x27;Lydia Hallie&#x27; };<br><br>Object.seal(person);",
		choices: [
			'A: `person.name = "Evan Bacon"`',
			"B: `person.age = 21`",
			"C: `delete person.name`",
			"D: `Object.assign(person, { age: 21 })`",
		],
		answer: "a-36)Answer: A<br><br>With `Object.seal` we can prevent new properties from being _added_, or existing properties to be _removed_.<br><br>However, you can still modify the value of existing properties.",
	},
	{
		id: 137,
		title: "137. Which of the following will modify the person object?",
		text: null,
		code: "const person = {<br>  name: &#x27;Lydia Hallie&#x27;,<br>  address: {<br>    street: &#x27;100 Main St&#x27;,<br>  },<br>};<br><br>Object.freeze(person);",
		choices: [
			'A: `person.name = "Evan Bacon"`',
			"B: `delete person.address`",
			'C: `person.address.street = "101 Main St"`',
			'D: `person.pet = { name: "Mara" }`',
		],
		answer: "c-43)Answer: C<br><br>The `Object.freeze` method _freezes_ an object. No properties can be added, modified, or removed.<br><br>However, it only _shallowly_ freezes the object, meaning that only _direct_ properties on the object are frozen. If the property is another object, like `address` in this case, the properties on that object aren't frozen, and can be modified.",
	},
	{
		id: 138,
		title: "138. What's the output?",
		text: null,
		code: "const add = x =&gt; x + x;<br><br>function myFunc(num = 2, value = add(num)) {<br>  console.log(num, value);<br>}<br><br>myFunc();<br>myFunc(3);",
		choices: [
			"A: `2` `4` and `3` `6`",
			"B: `2` `NaN` and `3` `NaN`",
			"C: `2` `Error` and `3` `6`",
			"D: `2` `4` and `3` `Error`",
		],
		answer: "a-37)Answer: A<br><br>First, we invoked `myFunc()` without passing any arguments. Since we didn't pass arguments, `num` and `value` got their default values: num is `2`, and `value` the returned value of the function `add`. To the `add` function, we pass `num` as an argument, which had the value of `2`. `add` returns `4`, which is the value of `value`.<br><br>Then, we invoked `myFunc(3)` and passed the value `3` as the value for the argument `num`. We didn't pass an argument for `value`. Since we didn't pass a value for the `value` argument, it got the default value: the returned value of the `add` function. To `add`, we pass `num`, which has the value of `3`. `add` returns `6`, which is the value of `value`.",
	},
	{
		id: 139,
		title: "139. What's the output?",
		text: null,
		code: "class Counter {<br>  #number = 10<br><br>  increment() {<br>    this.#number++<br>  }<br><br>  getNum() {<br>    return this.#number<br>  }<br>}<br><br>const counter = new Counter()<br>counter.increment()<br><br>console.log(counter.#number)",
		choices: ["A: `10`", "B: `11`", "C: `undefined`", "D: `SyntaxError`"],
		answer: "d-21)Answer: D<br><br>In ES2020, we can add private variables in classes by using the `#`. We cannot access these variables outside of the class. When we try to log `counter.#number`, a SyntaxError gets thrown: we cannot acccess it outside the `Counter` class!",
	},
	{
		id: 140,
		title: "140. What's missing?",
		text: null,
		code: "const teams = [<br>  { name: &#x27;Team 1&#x27;, members: [&#x27;Paul&#x27;, &#x27;Lisa&#x27;] },<br>  { name: &#x27;Team 2&#x27;, members: [&#x27;Laura&#x27;, &#x27;Tim&#x27;] },<br>];<br><br>function* getMembers(members) {<br>  for (let i = 0; i &lt; members.length; i++) {<br>    yield members[i];<br>  }<br>}<br><br>function* getTeams(teams) {<br>  for (let i = 0; i &lt; teams.length; i++) {<br>    // ✨ SOMETHING IS MISSING HERE ✨<br>  }<br>}<br><br>const obj = getTeams(teams);<br>obj.next(); // { value: &quot;Paul&quot;, done: false }<br>obj.next(); // { value: &quot;Lisa&quot;, done: false }",
		choices: [
			"A: `yield getMembers(teams[i].members)`",
			"B: `yield* getMembers(teams[i].members)`",
			"C: `return getMembers(teams[i].members)`",
			"D: `return yield getMembers(teams[i].members)`",
		],
		answer: "b-35)Answer: B<br><br>In order to iterate over the `members` in each element in the `teams` array, we need to pass `teams[i].members` to the `getMembers` generator function. The generator function returns a generator object. In order to iterate over each element in this generator object, we need to use `yield*`.<br><br>If we would've written `yield`, `return yield`, or `return`, the entire generator function would've gotten returned the first time we called the `next` method.",
	},
	{
		id: 141,
		title: "141. What's the output?",
		text: null,
		code: "const person = {<br>  name: &#x27;Lydia Hallie&#x27;,<br>  hobbies: [&#x27;coding&#x27;],<br>};<br><br>function addHobby(hobby, hobbies = person.hobbies) {<br>  hobbies.push(hobby);<br>  return hobbies;<br>}<br><br>addHobby(&#x27;running&#x27;, []);<br>addHobby(&#x27;dancing&#x27;);<br>addHobby(&#x27;baking&#x27;, person.hobbies);<br><br>console.log(person.hobbies);",
		choices: [
			'A: `["coding"]`',
			'B: `["coding", "dancing"]`',
			'C: `["coding", "dancing", "baking"]`',
			'D: `["coding", "running", "dancing", "baking"]`',
		],
		answer: 'c-44)Answer: C<br><br>The `addHobby` function receives two arguments, `hobby` and `hobbies` with the default value of the `hobbies` array on the `person` object.<br><br>First, we invoke the `addHobby` function, and pass `"running"` as the value for `hobby` and an empty array as the value for `hobbies`. Since we pass an empty array as the value for `hobbies`, `"running"` gets added to this empty array.<br><br>Then, we invoke the `addHobby` function, and pass `"dancing"` as the value for `hobby`. We didn\'t pass a value for `hobbies`, so it gets the default value, the `hobbies` property on the `person` object. We push the hobby `dancing` to the `person.hobbies` array.<br><br>Last, we invoke the `addHobby` function, and pass `"baking"` as the value for `hobby`, and the `person.hobbies` array as the value for `hobbies`. We push the hobby `baking` to the `person.hobbies` array.<br><br>After pushing `dancing` and `baking`, the value of `person.hobbies` is `["coding", "dancing", "baking"]`',
	},
	{
		id: 142,
		title: "142. What's the output?",
		text: null,
		code: "class Bird {<br>  constructor() {<br>    console.log(&quot;I&#x27;m a bird. 🦢&quot;);<br>  }<br>}<br><br>class Flamingo extends Bird {<br>  constructor() {<br>    console.log(&quot;I&#x27;m pink. 🌸&quot;);<br>    super();<br>  }<br>}<br><br>const pet = new Flamingo();",
		choices: [
			"A: `I'm pink. 🌸`",
			"B: `I'm pink. 🌸` `I'm a bird. 🦢`",
			"C: `I'm a bird. 🦢` `I'm pink. 🌸`",
			"D: Nothing, we didn't call any method",
		],
		answer: 'b-36)Answer: B<br><br>We create the variable `pet` which is an instance of the `Flamingo` class. When we instantiate this instance, the `constructor` on `Flamingo` gets called. First, `"I\'m pink. 🌸"` gets logged, after which we call `super()`. `super()` calls the constructor of the parent class, `Bird`. The constructor in `Bird` gets called, and logs `"I\'m a bird. 🦢"`.',
	},
	{
		id: 143,
		title: "143. Which of the options result(s) in an error?",
		text: null,
		code: "const emojis = [&#x27;🎄&#x27;, &#x27;🎅🏼&#x27;, &#x27;🎁&#x27;, &#x27;⭐&#x27;];<br><br>/* 1 */ emojis.push(&#x27;🦌&#x27;);<br>/* 2 */ emojis.splice(0, 2);<br>/* 3 */ emojis = [...emojis, &#x27;🥂&#x27;];<br>/* 4 */ emojis.length = 0;",
		choices: ["A: 1", "B: 1 and 2", "C: 3 and 4", "D: 3"],
		answer: "d-22)Answer: D<br><br>The `const` keyword simply means we cannot _redeclare_ the value of that variable, it's _read-only_. However, the value itself isn't immutable. The properties on the `emojis` array can be modified, for example by pushing new values, splicing them, or setting the length of the array to 0.",
	},
	{
		id: 144,
		title: '144. What do we need to add to the person object to get ["Lydia Hallie", 21] as the output of [...person]?',
		text: null,
		code: "const person = {<br>  name: &quot;Lydia Hallie&quot;,<br>  age: 21<br>}<br><br>[...person] // [&quot;Lydia Hallie&quot;, 21]",
		choices: [
			"A: Nothing, object are iterable by default",
			"B: `*[Symbol.iterator]() { for (let x in this) yield* this[x] }`",
			"C: `*[Symbol.iterator]() { yield* Object.values(this) }`",
			"D: `*[Symbol.iterator]() { for (let x in this) yield this }`",
		],
		answer: 'c-45)Answer: C<br><br>Objects aren\'t iterable by default. An iterable is an iterable if the iterator protocol is present. We can add this manually by adding the iterator symbol `[Symbol.iterator]`, which has to return a generator object, for example by making it a generator function `*[Symbol.iterator]() {}`. This generator function has to yield the `Object.values` of the `person` object if we want it to return the array `["Lydia Hallie", 21]`: `yield* Object.values(this)`.',
	},
	{
		id: 145,
		title: "145. What's the output?",
		text: null,
		code: "let count = 0;<br>const nums = [0, 1, 2, 3];<br><br>nums.forEach(num =&gt; {<br>\tif (num) count += 1<br>})<br><br>console.log(count)",
		choices: ["A: 1", "B: 2", "C: 3", "D: 4"],
		answer: "c-46)Answer: C<br><br>The `if` condition within the `forEach` loop checks whether the value of `num` is truthy or falsy. Since the first number in the `nums` array is `0`, a falsy value, the `if` statement's code block won't be executed. `count` only gets incremented for the other 3 numbers in the `nums` array, `1`, `2` and `3`. Since `count` gets incremented by `1` 3 times, the value of `count` is `3`.",
	},
	{
		id: 146,
		title: "146. What's the output?",
		text: null,
		code: "function getFruit(fruits) {<br>\tconsole.log(fruits?.[1]?.[1])<br>}<br><br>getFruit([[&#x27;🍊&#x27;, &#x27;🍌&#x27;], [&#x27;🍍&#x27;]])<br>getFruit()<br>getFruit([[&#x27;🍍&#x27;], [&#x27;🍊&#x27;, &#x27;🍌&#x27;]])",
		choices: [
			"A: `null`, `undefined`, 🍌",
			"B: `[]`, `null`, 🍌",
			"C: `[]`, `[]`, 🍌",
			"D: `undefined`, `undefined`, 🍌",
		],
		answer: "d-23)Answer: D<br><br>The `?` allows us to optionally access deeper nested properties within objects. We're trying to log the item on index `1` within the subarray that's on index `1` of the `fruits` array. If the subarray on index `1` in the `fruits` array doesn't exist, it'll simply return `undefined`. If the subarray on index `1` in the `fruits` array exists, but this subarray doesn't have an item on its `1` index, it'll also return `undefined`.<br><br>First, we're trying to log the second item in the `['🍍']` subarray of `[['🍊', '🍌'], ['🍍']]`. This subarray only contains one item, which means there is no item on index `1`, and returns `undefined`.<br><br>Then, we're invoking the `getFruits` function without passing a value as an argument, which means that `fruits` has a value of `undefined` by default. Since we're conditionally chaining the item on index `1` of`fruits`, it returns `undefined` since this item on index `1` does not exist.<br><br>Lastly, we're trying to log the second item in the `['🍊', '🍌']` subarray of `['🍍'], ['🍊', '🍌']`. The item on index `1` within this subarray is `🍌`, which gets logged.",
	},
	{
		id: 147,
		title: "147. What's the output?",
		text: null,
		code: "class Calc {<br>\tconstructor() {<br>\t\tthis.count = 0 <br>\t}<br><br>\tincrease() {<br>\t\tthis.count ++<br>\t}<br>}<br><br>const calc = new Calc()<br>new Calc().increase()<br><br>console.log(calc.count)",
		choices: ["A: `0`", "B: `1`", "C: `undefined`", "D: `ReferenceError`"],
		answer: "a-38)Answer: A<br><br>We set the variable `calc` equal to a new instance of the `Calc` class. Then, we instantiate a new instance of `Calc`, and invoke the `increase` method on this instance. Since the count property is within the constructor of the `Calc` class, the count property is not shared on the prototype of `Calc`. This means that the value of count has not been updated for the instance calc points to, count is still `0`.",
	},
	{
		id: 148,
		title: "148. What's the output?",
		text: null,
		code: "const user = {<br>\temail: &quot;e@mail.com&quot;,<br>\tpassword: &quot;12345&quot;<br>}<br><br>const updateUser = ({ email, password }) =&gt; {<br>\tif (email) {<br>\t\tObject.assign(user, { email })<br>\t}<br><br>\tif (password) {<br>\t\tuser.password = password<br>\t}<br><br>\treturn user<br>}<br><br>const updatedUser = updateUser({ email: &quot;new@email.com&quot; })<br><br>console.log(updatedUser === user)",
		choices: [
			"A: `false`",
			"B: `true`",
			"C: `TypeError`",
			"D: `ReferenceError`",
		],
		answer: "b-37)Answer: B<br><br>The `updateUser` function updates the values of the `email` and `password` properties on user, if their values are passed to the function, after which the function returns the `user` object. The returned value of the `updateUser` function is the `user` object, which means that the value of updatedUser is a reference to the same `user` object that `user` points to. `updatedUser === user` equals `true`.",
	},
	{
		id: 149,
		title: "149. What's the output?",
		text: null,
		code: "const fruit = [&#x27;🍌&#x27;, &#x27;🍊&#x27;, &#x27;🍎&#x27;]<br><br>fruit.slice(0, 1)<br>fruit.splice(0, 1)<br>fruit.unshift(&#x27;🍇&#x27;)<br><br>console.log(fruit)",
		choices: [
			"A: `['🍌', '🍊', '🍎']`",
			"B: `['🍊', '🍎']`",
			"C: `['🍇', '🍊', '🍎']`",
			"D: `['🍇', '🍌', '🍊', '🍎']`",
		],
		answer: "c-47)Answer: C<br><br>First, we invoke the `slice` method on the fruit array. The slice method does not modify the original array, but returns the value that it sliced off the array: the banana emoji. Then, we invoke the `splice` method on the fruit array. The splice method does modify the original array, which means that the fruit array now consists of `['🍊', '🍎']`. At last, we invoke the `unshift` method on the `fruit` array, which modifies the original array by adding the provided value, ‘🍇’ in this case, as the first element in the array. The fruit array now consists of `['🍇', '🍊', '🍎']`.",
	},
	{
		id: 150,
		title: "150. What's the output?",
		text: null,
		code: "const animals = {};<br>let dog = { emoji: &#x27;🐶&#x27; }<br>let cat = { emoji: &#x27;🐈&#x27; }<br><br>animals[dog] = { ...dog, name: &quot;Mara&quot; }<br>animals[cat] = { ...cat, name: &quot;Sara&quot; }<br><br>console.log(animals[dog])",
		choices: [
			'A: `{ emoji: "🐶", name: "Mara" }`',
			'B: `{ emoji: "🐈", name: "Sara" }`',
			"C: `undefined`",
			"D: `ReferenceError`",
		],
		answer: 'b-38)Answer: B<br><br>Object keys are converted to strings.<br><br>Since the value of `dog` is an object, `animals[dog]` actually means that we’re creating a new property called `"[object Object]"` equal to the new object. `animals["[object Object]"]` is now equal to `{ emoji: "🐶", name: "Mara"}`.<br><br>`cat` is also an object, which means that `animals[cat]` actually means that we’re overwriting the value of `animals["[object Object]"]` with the new cat properties.<br><br>Logging `animals[dog]`, or actually `animals["[object Object]"]` since converting the `dog` object to a string results `"[object Object]"`, returns the `{ emoji: "🐈", name: "Sara" }`.',
	},
	{
		id: 151,
		title: "151. What's the output?",
		text: null,
		code: "const user = {<br>\temail: &quot;my@email.com&quot;,<br>\tupdateEmail: email =&gt; {<br>\t\tthis.email = email<br>\t}<br>}<br><br>user.updateEmail(&quot;new@email.com&quot;)<br>console.log(user.email)",
		choices: [
			"A: `my@email.com`",
			"B: `new@email.com`",
			"C: `undefined`",
			"D: `ReferenceError`",
		],
		answer: "a-39)Answer: A<br><br>The `updateEmail` function is an arrow function, and is not bound to the `user` object. This means that the `this` keyword is not referring to the `user` object, but refers to the global scope in this case. The value of `email` within the `user` object does not get updated. When logging the value of `user.email`, the original value of `my@email.com` gets returned.",
	},
	{
		id: 152,
		title: "152. What's the output?",
		text: null,
		code: "const promise1 = Promise.resolve(&#x27;First&#x27;)<br>const promise2 = Promise.resolve(&#x27;Second&#x27;)<br>const promise3 = Promise.reject(&#x27;Third&#x27;)<br>const promise4 = Promise.resolve(&#x27;Fourth&#x27;)<br><br>const runPromises = async () =&gt; {<br>\tconst res1 = await Promise.all([promise1, promise2])<br>\tconst res2  = await Promise.all([promise3, promise4])<br>\treturn [res1, res2]<br>}<br><br>runPromises()<br>\t.then(res =&gt; console.log(res))<br>\t.catch(err =&gt; console.log(err))",
		choices: [
			"A: `[['First', 'Second'], ['Fourth']]`",
			"B: `[['First', 'Second'], ['Third', 'Fourth']]`",
			"C: `[['First', 'Second']]`",
			"D: `'Third'`",
		],
		answer: 'd-24)Answer: D<br><br>The `Promise.all` method runs the passed promises in parallel. If one promise fails, the `Promise.all` method _rejects_ with the value of the rejected promise. In this case, `promise3` rejected with the value `"Third"`. We’re catching the rejected value in the chained `catch` method on the `runPromises` invocation to catch any errors within the `runPromises` function. Only `"Third"` gets logged, since `promise3` rejected with this value.',
	},
	{
		id: 153,
		title: '153. What should the value of method be to log { name: "Lydia", age: 22 }?',
		text: null,
		code: "const keys = [&quot;name&quot;, &quot;age&quot;]<br>const values = [&quot;Lydia&quot;, 22]<br><br>const method = /* ?? */<br>Object[method](keys.map((_, i) =&gt; {<br>\treturn [keys[i], values[i]]<br>})) // { name: &quot;Lydia&quot;, age: 22 }",
		choices: [
			"A: `entries`",
			"B: `values`",
			"C: `fromEntries`",
			"D: `forEach`",
		],
		answer: 'c-48)Answer: C<br><br>The `fromEntries` method turns a 2d array into an object. The first element in each subarray will be the key, and the second element in each subarray will be the value. In this case, we’re mapping over the `keys` array, which returns an array which first element is the item on the key array on the current index, and the second element is the item of the values array on the current index.<br><br>This creates an array of subarrays containing the correct keys and values, which results in `{ name: "Lydia", age: 22 }`',
	},
	{
		id: 154,
		title: "154. What's the output?",
		text: null,
		code: "const createMember = ({ email, address = {}}) =&gt; {<br>\tconst validEmail = /.+\\@.+\\..+/.test(email)<br>\tif (!validEmail) throw new Error(&quot;Valid email pls&quot;)<br><br>\treturn {<br>\t\temail,<br>\t\taddress: address ? address : null<br>\t}<br>}<br><br>const member = createMember({ email: &quot;my@email.com&quot; })<br>console.log(member)",
		choices: [
			'A: `{ email: "my@email.com", address: null }`',
			'B: `{ email: "my@email.com" }`',
			'C: `{ email: "my@email.com", address: {} }`',
			'D: `{ email: "my@email.com", address: undefined }`',
		],
		answer: "c-49)Answer: C<br><br>The default value of `address` is an empty object `{}`. When we set the variable `member` equal to the object returned by the `createMember` function, we didn't pass a value for address, which means that the value of address is the default empty object `{}`. An empty object is a truthy value, which means that the condition of the `address ? address : null` conditional returns `true`. The value of address is the empty object `{}`.",
	},
	{
		id: 155,
		title: "155. What's the output?",
		text: null,
		code: "let randomValue = { name: &quot;Lydia&quot; }<br>randomValue = 23<br><br>if (!typeof randomValue === &quot;string&quot;) {<br>\tconsole.log(&quot;It&#x27;s not a string!&quot;)<br>} else {<br>\tconsole.log(&quot;Yay it&#x27;s a string!&quot;)<br>}",
		choices: [
			"A: `It's not a string!`",
			"B: `Yay it's a string!`",
			"C: `TypeError`",
			"D: `undefined`",
		],
		answer: 'b-39)Answer: B<br><br>The condition within the `if` statement checks whether the value of `!typeof randomValue` is equal to `"string"`. The `!` operator converts the value to a boolean value. If the value is truthy, the returned value will be `false`, if the value is falsy, the returned value will be `true`. In this case, the returned value of `typeof randomValue` is the truthy value `"number"`, meaning that the value of `!typeof randomValue` is the boolean value `false`.<br><br>`!typeof randomValue === "string"` always returns false, since we\'re actually checking `false === "string"`. Since the condition returned `false`, the code block of the `else` statement gets run, and `Yay it\'s a string!` gets logged.',
	},
];

let constque = questions[Math.floor(Math.random() * questions.length)];

let constque2 = Sheet1[Math.floor(Math.random() * Sheet1.length)];

let constque3 = queLydia[Math.floor(Math.random() * queLydia.length)];

setInterval(() => {
	constque = questions[Math.floor(Math.random() * questions.length)];

	constque2 = Sheet1[Math.floor(Math.random() * Sheet1.length)];

	constque3 = queLydia[Math.floor(Math.random() * queLydia.length)];
}, 24*60*60*1000); //setinterval for time

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	if (request.message === "getRandomQuestion") {
		const randomQuestion = constque;
		const randomQuestion2 = constque2;
		const randomQuestion3 = constque3;
		sendResponse([randomQuestion, randomQuestion2, randomQuestion3]);
	}
});


// upar wala sarra newtabPagekeliye hai

// let startingPoint = 2;  //--	 chala gaya content js mein

chrome.runtime.onInstalled.addListener(async () => {
	console.log("extension installed ");

	let startingPoint = await getleetcode();

	await chrome.storage.local.set(
		{ startingPoint: startingPoint },
		function () {
			console.log("starting point ki value set ho gayi");
			getFirstvalue();
			
		}
	);

	await chrome.storage.local.get(["startingPoint"]).then((result) => {
		console.log("Value is " + result.startingPoint);
	});
});

chrome.runtime.onMessage.addListener(async function (
	message,
	
) {
	console.log(message);
	console.log("message received from popup");

	if (message.startingValueadd) {
		console.log("in to if condition");

		let startingPoint = await getleetcode();
		await chrome.storage.local.set(
			{
				startingPoint: startingPoint + Number(message.startingValueadd),
			},
			async function () {
				console.log(" new starting point set");

				await chrome.storage.local
					.get(["startingPoint"])
					.then((result) => {
						getFirstvalue();
						console.log(
							" starting point ki value is " +
								result.startingPoint
						);
					});
			}
		);
	}
});

async function getFirstvalue() {
	let vvalue = 0+ getDayOfYear();

	await chrome.storage.local.get(["startingPoint"]).then((result) => {
		console.log(" starting point ki value is " + result.startingPoint);

		vvalue = result.startingPoint;
	});

	return vvalue;
}
getFirstvalue();

async function getleetcode() {
	try {
		await chrome.storage.sync.get(["leetcodeusername"]).then((result) => {
			console.log(" leetcode username is " + result.leetcodeusername);
		});
		const apiEndpoint =
			`https://leetcode-api-faisalshohag.vercel.app/professionalprovishal`;
		const apiResponse = await fetch(apiEndpoint);
		const { totalSolved } = await apiResponse.json();

		console.log(totalSolved, "got total from api");

		return totalSolved + getDayOfYear();
	} catch (error) {
		console.log(error);
		return null;
	}
}

chrome.tabs.onUpdated.addListener(function (activeInfo) {
	console.log("tab activated");

	chrome.tabs.query(
		{ active: true, lastFocusedWindow: true },
		async function (tabs) {
			let totalSolved = await getleetcode();
			let gettingStarted = await getFirstvalue();

			console.log(gettingStarted);

			let activeTab = await tabs[0];
			await chrome.tabs.sendMessage(
				activeTab.id,
				{ message: totalSolved, message2: gettingStarted },
				function (response) {
					console.log("isse fn me tab clsoe karna hai", response.message);

					if (response.message === "close tab") {
						chrome.tabs.query(
							{ active: true, currentWindow: true },
							(tabs) => {

								 setTimeout(() => {
										chrome.tabs.remove(tabs[0].id);
									}, 5000);

								chrome.tabs.remove(tabs[0].id);
							}
						);
					}
				}
			);
		}
	);
});





console.log("hello from background.js");

//partition

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
	if (message.type === "getItems") {
		console.log("Received getItems");
		chrome.storage.sync.get("items", (data) => {
			sendResponse({ items: data.items || [] });
		});
		return true; // Keeps the message channel open for sendResponse
	}

	if (message.type === "getWebsitesToRemove") {
		console.log("Received getWebsitesToRemove");
		chrome.storage.sync.get("listOfBlockedWebsites", (data) => {
			sendResponse({ websites: data.listOfBlockedWebsites || [] });
		});
		return true; // Keeps the message channel open for sendResponse
	}

	if (message.type === "getUrlsToRemove") {
		console.log("Received getUrlsToRemove");
		chrome.storage.sync.get("listOfBlockedUrls", (data) => {
			sendResponse({ urls: data.listOfBlockedUrls || [] });
		});
		return true; // Keeps the message channel open for sendResponse
	}

	if (message.type === "setItems") {
		console.log("Received setItems");
		chrome.storage.sync.set({ items: message.items }, () => {
			console.log("Items set in storage");
			sendResponse({ status: "success" });
		});
		return true; // Keeps the message channel open for sendResponse
	}

	if (message.type === "closeTab" && sender.tab) {
		chrome.tabs.remove(sender.tab.id);
	}

	if (message.type === "closeTabwebsites" && sender.tab) {
		chrome.tabs.remove(sender.tab.id);
	}

	if (message.type === "closeTabUrls" && sender.tab) {
		chrome.tabs.remove(sender.tab.id);
	}
});








let lifeline;
// Disconnect and reconnect
function keepAliveForced() {
	lifeline?.disconnect();
	lifeline = null;
	keepAlive();
}
async function keepAlive() {
	if (lifeline) {
		return;
	}
}




// function updateValue(){

// 	setInterval(async () => {
// 		await chrome.storage.local.set(
// 			{ startingPoint: startingPoint + 1 },
// 			() => {
// 				console.log("value set");
// 			}
// 		);
// 	}, 2000);
	
// }

// updateValue();