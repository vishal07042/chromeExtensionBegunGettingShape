let ss =
	"While pointers are variable that hold memory address, iterators are generic functions used to traverse containers. These function allows the programmer to implement read and write code as the container is traversed. - \\[x\\] Incrementing an iterator always means access the next element in the container(if any), no matter the container. Incrementing the pointer means pointing to the next element in memory, not always the next element. - \\[ \\] Pointers are variables that hold memory address where as iterator are unsigned integers that refers to offsets in arrays. - \\[ \\] All iterator are implemented with pointers so all iterators are pointers but not all pointers are iterators.";

let startIndex = ss.indexOf("\\[x\\]");
let endIndex = ss.indexOf("\\[ \\]", startIndex);
let subString = ss.substring(startIndex, endIndex + 4);

console.log(subString.substring(6, subString.length - 6));
