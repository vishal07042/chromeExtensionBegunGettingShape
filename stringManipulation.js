// // let arr = [
// //         "The compiled code is always bigger because of all of the imported symbols. - \\[x\\] If the code uses a function defined in two different libraries with the same prototype but possibly with different implementations, there will be a compilation error due to ambiguity. - \\[ \\] It automatically includes all header files in the standard library (cstdint, cstdlib, cstdio, iostream, etc). - \\[ \\] It causes the compiler to enforce the exclusive inclusion of header files belonging to the standard library, generating compilation error when a different header file is included."
// //       ];

//       let arr = [
//  "While pointers are variable that hold memory address, iterators are generic functions used to traverse containers. These function allows the programmer to implement read and write code as the container is traversed. - \\[x\\] Incrementing an iterator always means access the next element in the container(if any), no matter the container. Incrementing the pointer means pointing to the next element in memory, not always the next element. - \\[ \\] Pointers are variables that hold memory address where as iterator are unsigned integers that refers to offsets in arrays. - \\[ \\] All iterator are implemented with pointers so all iterators are pointers but not all pointers are iterators." ];

//       let str = arr[0];

//       // Split by - \\[x\\]
// let splitByChecked = str.split("- \\[x\\]");

// // The first element is before the checked option
// let beforeChecked = splitByChecked[0].trim();

// // The second element contains the checked option and the rest
// let afterChecked = splitByChecked[1];

// // Split the remaining string by - \\[\\] to separate unselected options
// let splitByUnchecked = afterChecked.split("- \\[ \\]");

// // The first element of this split is the checked option
// let checkedOption = splitByUnchecked[0].trim();

// // The remaining elements are the unchecked options
// let uncheckedOptions = splitByUnchecked.slice(1).map(option => option.trim());

// // Combine all options and add numbers
// let allOptions = [
//     `1. ${beforeChecked}`,
//     `2. ${checkedOption}`,
//     ...uncheckedOptions.map((option, index) => `${index + 3}. ${option}`)
// ];

// // Log the results
// console.log("All options:", allOptions);
// console.log("Correct option:", checkedOption);

let arr = [
	"While pointers are variable that hold memory address, iterators are generic functions used to traverse containers. These function allows the programmer to implement read and write code as the container is traversed. - \\[x\\] Incrementing an iterator always means access the next element in the container(if any), no matter the container. Incrementing the pointer means pointing to the next element in memory, not always the next element. - \\[ \\] Pointers are variables that hold memory address where as iterator are unsigned integers that refers to offsets in arrays. - \\[ \\] All iterator are implemented with pointers so all iterators are pointers but not all pointers are iterators.",
];

let str = arr[0];

// Split by - \\[ \\] first to separate unchecked options
let splitByUnchecked = str.split("- \\[ \\]");

// Combine all parts back with a separator for easier processing
let combinedString = splitByUnchecked.join(" - \\[ \\]");

// Split by - \\[x\\] to find the checked option
let splitByChecked = combinedString.split("- \\[x\\]");

// The first part contains all the text before the checked option
let beforeChecked = splitByChecked[0].trim();

// The second part contains the checked option and remaining unchecked options
let afterChecked = splitByChecked[1];

// Further split by - \\[ \\] to identify unchecked options after the checked one
let remainingUncheckedOptions = afterChecked
	.split("- \\[ \\]")
	.map((option) => option.trim());

// The first element in this split is the checked option
let checkedOption = remainingUncheckedOptions[0];

// The remaining elements are the unchecked options after the checked option
let uncheckedOptionsAfterChecked = remainingUncheckedOptions.slice(1);

// All unchecked options, including those before the checked one
let allUncheckedOptions = splitByUnchecked
	.slice(1)
	.map((option) => option.trim());

// Combine all options and add numbers
let allOptions = [
	`1. ${beforeChecked}`,
	`2. ${checkedOption}`,
	...allUncheckedOptions.map((option, index) => `${index + 3}. ${option}`),
];

// Log the results
console.log("All options:", allOptions);
console.log("Correct option:", checkedOption);

// Count the correct answer number
let correctAnswerNumber =
	allOptions.findIndex((option) => option.includes(checkedOption)) + 1;

console.log("Correct option number:", correctAnswerNumber);
