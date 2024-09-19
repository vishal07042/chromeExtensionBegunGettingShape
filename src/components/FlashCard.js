export const flashcardData = [
	{
		id: "01",
		topic: "Merge Sort",

		color: "from-yellow-300 to-yellow-500",
		// path: 	"../",

		hero: "Thor",
		definition:
			"Merge Sort is a divide and conquer algorithm that divides the input array into two halves, calls itself for the two halves, and then merges the two sorted halves.",
		storyToRememberTheConcept:
			"Imagine you have a deck of cards. You want to sort them by rank (Ace to King). You can divide the deck into two smaller decks, sort each smaller deck, and then merge the two sorted decks. This is the essence of merge sort.",
	},
	{
		id: "02",
		topic: "Binary Search",

		color: "from-red-400 to-red-600",

		hero: "Deadpool",
		definition:
			"Binary Search is a search algorithm that finds the position of a target value within a sorted array.",
		storyToRememberTheConcept:
			"Imagine you have a sorted list of numbers. You want to find a specific number. You can start by checking the middle number. If the target number is less than the middle number, you know it must be in the first half of the list. If it's greater, you know it must be in the second half. This is the essence of binary search.",
	},
	{
		id: "03",
		topic: "Array",

		color: "from-green-300 to-green-500",

		hero: "Spider-Man",
		definition:
			"An array is a collection of elements identified by index or key. Each element is stored in a contiguous memory location.",
		storyToRememberTheConcept:
			"The librarian’s shelf, known as the Array, holds each book in its precise numbered spot, always ready for quick retrieval with no need to search.",
	},
	{
		id: "04",
		topic: "Quick Sort",
		color: "from-blue-400 to-blue-600",

		hero: "Iron Man",
		definition:
			"Quick Sort is a divide and conquer algorithm that works by selecting a pivot element, partitioning the array into elements less than and greater than the pivot, and recursively sorting the partitions.",
		storyToRememberTheConcept:
			"Imagine you’re organizing a bookshelf by height. You pick a random book (pivot) and then move all shorter books to one side and taller books to the other. Then you repeat the process for each side. This is the essence of quick sort.",
	},
	{
		id: "05",
		topic: "Heap Sort",
		color: "from-purple-400 to-purple-600",

		hero: "Hulk",
		definition:
			"Heap Sort is a comparison-based sorting algorithm that uses a binary heap data structure. It first builds a heap from the input data and then repeatedly extracts the maximum element from the heap and rebuilds the heap until sorted.",
		storyToRememberTheConcept:
			"Imagine a heap of treasure. To sort it, you always extract the largest item and then rebuild the heap of remaining items. This process continues until everything is sorted. This is the essence of heap sort.",
	},
	{
		id: "06",
		topic: "Linked List",
		color: "from-teal-300 to-teal-500",

		hero: "Captain America",
		definition:
			"A Linked List is a linear data structure where elements are stored in nodes, with each node containing a reference (or link) to the next node in the sequence.",
		storyToRememberTheConcept:
			"Think of a treasure hunt where each clue leads to the next clue. Each node in a linked list points to the next node, just like each clue points to the next location. This is the essence of a linked list.",
	},
	{
		id: "07",
		topic: "Stack",
		color: "from-indigo-400 to-indigo-600",

		hero: "Wolverine",
		definition:
			"A Stack is a linear data structure that follows the Last In First Out (LIFO) principle. Elements are added and removed from the same end, called the top.",
		storyToRememberTheConcept:
			"Imagine a stack of plates. You can only add or remove the top plate. The last plate added is the first one to be removed. This is the essence of a stack.",
	},
	{
		id: "08",
		topic: "Queue",
		color: "from-orange-300 to-orange-500",

		hero: "Black Widow",
		definition:
			"A Queue is a linear data structure that follows the First In First Out (FIFO) principle. Elements are added at the rear and removed from the front.",
		storyToRememberTheConcept:
			"Imagine waiting in line at a movie theater. The first person to get in line is the first person to be served. This is the essence of a queue.",
	},
	{
		id: "09",
		topic: "Binary Tree",
		color: "from-gray-300 to-gray-500",

		hero: "Doctor Strange",
		definition:
			"A Binary Tree is a hierarchical data structure in which each node has at most two children referred to as the left child and the right child.",
		storyToRememberTheConcept:
			"Imagine a family tree where each parent can have two children. The structure of this family tree is a binary tree, with each node having up to two children. This is the essence of a binary tree.",
	},
	{
		id: "10",
		topic: "Graph",
		color: "from-pink-400 to-pink-600",

		hero: "Scarlet Witch",
		definition:
			"A Graph is a collection of nodes connected by edges. It can represent various relationships and structures, such as networks or social connections.",
		storyToRememberTheConcept:
			"Think of a social network where each person is a node and each connection between people is an edge. This is the essence of a graph.",
	},
	{
		id: "11",
		topic: "Trie",
		color: "from-yellow-400 to-yellow-600",

		hero: "Star-Lord",
		definition:
			"A Trie is a tree-like data structure that stores a dynamic set of strings, where each node represents a common prefix of some strings.",
		storyToRememberTheConcept:
			"Imagine a directory structure on your computer. Each folder represents a common prefix of filenames. This is the essence of a Trie.",
	},
	{
		id: "12",
		topic: "Hash Table",
		color: "from-green-400 to-green-600",

		hero: "Ant-Man",
		definition:
			"A Hash Table is a data structure that maps keys to values using a hash function to compute an index into an array of buckets or slots.",
		storyToRememberTheConcept:
			"Think of a filing cabinet where each file is placed into a specific drawer based on a unique key. This is the essence of a hash table.",
	},
	{
		id: "13",
		topic: "Depth-First Search (DFS)",
		color: "from-cyan-400 to-cyan-600",

		hero: "Quicksilver",
		definition:
			"Depth-First Search (DFS) is a graph traversal algorithm that starts at the root and explores as far as possible along each branch before backtracking.",
		storyToRememberTheConcept:
			"Imagine exploring a maze. You go as deep as possible into each path before backtracking to explore other paths. This is the essence of DFS.",
	},
	{
		id: "14",
		topic: "Breadth-First Search (BFS)",
		color: "from-teal-400 to-teal-600",

		hero: "Black Panther",
		definition:
			"Breadth-First Search (BFS) is a graph traversal algorithm that starts at the root and explores all its neighbors before moving to the next level.",
		storyToRememberTheConcept:
			"Imagine sending out a team to explore all rooms on a single floor of a building before moving to the next floor. This is the essence of BFS.",
	},
	{
		id: "15",
		topic: "Dynamic Programming",
		color: "from-red-300 to-red-500",

		definition:
			"Dynamic Programming is an optimization technique that solves complex problems by breaking them down into simpler subproblems and storing the results to avoid redundant computations.",
		storyToRememberTheConcept:
			"Imagine solving a jigsaw puzzle by solving smaller sections first and reusing the solutions for the entire puzzle. This is the essence of dynamic programming.",
	},
	{
		id: "16",
		topic: "Greedy Algorithm",
		color: "from-blue-300 to-blue-500",

		hero: "Thor",
		definition:
			"A Greedy Algorithm makes the optimal choice at each step, aiming for a local optimum with the hope of finding a global optimum.",
		storyToRememberTheConcept:
			"Imagine a treasure hunter picking the largest visible gold coins first, hoping to collect the most valuable treasure. This is the essence of a greedy algorithm.",
	},
	{
		id: "17",
		topic: "Dijkstra’s Algorithm",
		color: "from-purple-300 to-purple-500",

		hero: "Thanos",
		definition:
			"Dijkstra’s Algorithm finds the shortest path from a source node to all other nodes in a weighted graph with non-negative weights.",
		storyToRememberTheConcept:
			"Imagine you’re on a quest to find the shortest path to each of several destinations from your starting point, calculating the least distance at each step. This is the essence of Dijkstra’s Algorithm.",
	},
	{
		id: "18",
		topic: "Linked List",
		color: "from-blue-400 to-blue-600",

		hero: "Captain America",
		definition:
			"A linked list is a linear data structure where elements are not stored in contiguous memory locations. Each element is a separate object that stores a data value and a reference (link) to the next object in the sequence.",
		storyToRememberTheConcept:
			"Imagine a chain of friends, each holding hands with the next person in the line. You can only go from one friend to the next by following the links (held hands). This is how data is traversed in a linked list.",
	},
	{
		id: "19",
		topic: "Stack",
		color: "from-purple-400 to-purple-600",

		hero: "Hulk",
		definition:
			"A stack is a linear data structure that follows the Last-In-First-Out (LIFO) principle. Elements can only be added or removed from the top of the stack.",
		storyToRememberTheConcept:
			"Imagine a stack of plates at a restaurant. The last plate placed on top is the first one to be taken off and used. This is how data is added and removed from a stack.",
	},
	{
		id: "20",
		topic: "Queue",
		color: "from-orange-400 to-orange-600",

		hero: "Iron Man",
		definition:
			"A queue is a linear data structure that follows the First-In-First-Out (FIFO) principle. Elements can only be added at the rear and removed from the front.",
		storyToRememberTheConcept:
			"Imagine a line at a movie theater. The person who arrived first gets to enter the theater first, while others must wait their turn in the order they arrived. This is how data is added and removed from a queue.",
	},
	{
		id: "21",
		topic: "Tree",
		color: "from-green-400 to-green-600",

		hero: "Groot",
		definition:
			"A tree is a non-linear data structure that represents hierarchical data. It consists of nodes connected by edges, with a single root node at the top and child nodes branching off from it.",
		storyToRememberTheConcept:
			"Imagine a family tree, with the oldest ancestor as the root, their children as the next level of nodes, and grandchildren as the third level, and so on. This is how data is organized in a tree structure.",
	},
	{
		id: "22",
		topic: "Binary Tree",
		color: "from-red-400 to-red-600",
		// image: "/src/assets/marvelChars/Black_Widow_01_Foreground_Common.png",
		hero: "Black Widow",
		definition:
			"A binary tree is a type of tree data structure where each node can have at most two child nodes, referred to as the left child and the right child.",
		storyToRememberTheConcept:
			"Imagine a family where each couple can have at most two children. The parents represent the node, and the children are the left and right child nodes. This is the structure of a binary tree.",
	},
	{
		id: "23",
		topic: "Binary Search Tree",
		color: "from-indigo-400 to-indigo-600",

		hero: "Thor",
		definition:
			"A binary search tree is a binary tree where the value of each node is greater than all the values in its left subtree, and less than all the values in its right subtree.",
		storyToRememberTheConcept:
			"Imagine a family where the age of each child is less than the age of their parents. The parents represent the node, and the children are the left and right child nodes, with the younger child on the left and the older child on the right. This is the structure of a binary search tree.",
	},
	{
		id: "24",
		topic: "Heap",
		color: "from-yellow-400 to-yellow-600",

		hero: "Captain Marvel",
		definition:
			"A heap is a tree-based data structure where the value of each node is either greater than or equal to (in a max heap) or less than or equal to (in a min heap) the values of its children.",
		storyToRememberTheConcept:
			"Imagine a family where the parent's wealth is always greater than or equal to the combined wealth of their children (max heap). The parent represents the root node, and the children are the child nodes. This is the structure of a max heap.",
	},
	{
		id: "25",
		topic: "Graph",
		color: "from-pink-400 to-pink-600",

		hero: "Black Panther",
		definition:
			"A graph is a non-linear data structure that consists of nodes (vertices) and edges (connections) between them. Graphs can be used to model relationships between different entities.",
		storyToRememberTheConcept:
			"Imagine a map of a city, where intersections are nodes, and roads connecting them are edges. This map represents a graph, where you can navigate from one node to another by following the edges.",
	},
	{
		id: "26",
		topic: "Depth-First Search (DFS)",
		color: "from-blue-400 to-blue-600",

		hero: "Doctor Strange",
		definition:
			"Depth-First Search (DFS) is an algorithm for traversing or searching a graph or tree data structure. It starts at the root node and explores as far as possible along each branch before backtracking.",
		storyToRememberTheConcept:
			"Imagine you are exploring a vast cave system. You choose a path and follow it as far as possible, exploring all the side tunnels before backtracking and trying a different path. This is how DFS works, exploring depth-first before backtracking.",
	},
	{
		id: "27",
		topic: "Breadth-First Search (BFS)",
		color: "from-green-400 to-green-600",

		hero: "Hulk",
		definition:
			"Breadth-First Search (BFS) is an algorithm for traversing or searching a graph or tree data structure. It explores all the nodes at the current level before moving on to the next level.",
		storyToRememberTheConcept:
			"Imagine you are exploring a hedge maze. You start at the entrance and explore all the paths at the current level before moving on to the next level of paths. This is how BFS works, exploring breadth-first, level by level.",
	},
	{
		id: "28",
		topic: "Dijkstra's Algorithm",
		color: "from-purple-400 to-purple-600",

		hero: "Ant-Man",
		definition:
			"Dijkstra's algorithm is a graph traversal algorithm that finds the shortest path between a source node and all other nodes in a weighted graph.",
		storyToRememberTheConcept:
			"Imagine you are an ant trying to find the shortest path from your colony to a food source. You always choose the path with the least resistance (weight), avoiding obstacles and taking efficient route. This is how Dijkstra's algorithm works, finding the shortest path in a weighted graph.",
	},
	{
		id: "29",
		topic: "Hash Table",
		color: "from-orange-400 to-orange-600",

		hero: "Deadpool",
		definition:
			"A hash table is a data structure that stores key-value pairs and uses a hash function to map keys to indices in an array, allowing for efficient insertion, deletion, and lookup operations.",
		storyToRememberTheConcept:
			"Imagine a hat store with a large rack of hat boxes. Each box is assigned a unique number (hash code) based on the hat's color, style, and size. To find a specific hat, you simply look up the corresponding box number instead of searching through every box. This is how a hash table works, using hash codes to quickly locate data.",
	},
];
