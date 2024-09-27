import React, { useState, useRef, useEffect } from 'react';

const quizData = [
    [
        {
            id: 1,
            "QuestionNo.": "1",
            question: "Given a string representing a number, return the closest number that is a palindrome.",
            correctAnswer: "Some other pattern"
        },
        {
            id: 2,
            "QuestionNo.": "1",
            question: "Given an array of numbers in the range 1 to n, find all the numbers that are missing in the array.",
            correctAnswer: "Cyclic Sort"
        },
        {
            id: 3,
            "QuestionNo.": "1",
            question: "Given a set of numbers, find the first 5 missing positive numbers.",
            correctAnswer: "Some other pattern"
        },
        {
            id: 4,
            "QuestionNo.": "1",
            question: "Given a set, return the number of subsets with the sum equal to 10.",
            correctAnswer: "Some other pattern"
        },
        {
            id: 5,
            "QuestionNo.": "1",
            question: "Given an array of integers, find two numbers such that they add up to a specific target number.",
            correctAnswer: "Two Pointers"
        },
    ],
    [
        {
            id: 6,
            "QuestionNo.": "2",
            question: "Given a binary tree, find the maximum depth of the tree.",
            correctAnswer: "Depth-First Search"
        },
        {
            id: 7,
            "QuestionNo.": "2",
            question: "Given a string, find the length of the longest substring without repeating characters.",
            correctAnswer: "Sliding Window"
        },
        {
            id: 8,
            "QuestionNo.": "2",
            question: "Given an array of integers, find the contiguous subarray with the largest sum.",
            correctAnswer: "Kadane's Algorithm"
        }
    ],
    [
        {
            id: 9,
            "QuestionNo.": "3",
            question: "Given a binary tree, find the maximum depth of the tree.",
            correctAnswer: "Depth-First Search"
        },
        {
            id: 10,
            "QuestionNo.": "3",
            question: "Given a string, find the length of the longest substring without repeating characters.",
            correctAnswer: "Sliding Window"
        },
        {
            id: 11,
            "QuestionNo.": "3",
            question: "Given an array of integers, find the contiguous subarray with the largest sum.",
            correctAnswer: "Kadane's Algorithm"
        }
    ],
    // Additional Medium Difficulty Questions
    [
        {
            id: 12,
            "QuestionNo.": "4",
            question: "Given an array of integers, find the number of ways to partition it into two subsets with equal sum.",
            correctAnswer: "Dynamic Programming"
        },
        {
            id: 13,
            "QuestionNo.": "4",
            question: "Given a string, return all the possible palindrome partitions of the string.",
            correctAnswer: "Backtracking"
        },
        {
            id: 14,
            "QuestionNo.": "4",
            question: "Given an array of intervals, merge all overlapping intervals.",
            correctAnswer: "Sorting + Merging"
        },
        {
            id: 15,
            "QuestionNo.": "4",
            question: "Given a directed graph, detect if a cycle exists in the graph.",
            correctAnswer: "Graph - DFS"
        },
        {
            id: 16,
            "QuestionNo.": "4",
            question: "Given a grid of 0s and 1s, count the number of islands (connected regions of 1s).",
            correctAnswer: "Depth-First Search"
        }
    ],
    [
        {
            id: 17,
            "QuestionNo.": "5",
            question: "Given two strings, find the length of the longest common subsequence.",
            correctAnswer: "Dynamic Programming"
        },
        {
            id: 18,
            "QuestionNo.": "5",
            question: "Given a string, find the minimum number of insertions to make it a palindrome.",
            correctAnswer: "Dynamic Programming"
        },
        {
            id: 19,
            "QuestionNo.": "5",
            question: "Given an array of integers, return the product of the maximum subarray.",
            correctAnswer: "Kadane's Algorithm (Modified)"
        },
        {
            id: 20,
            "QuestionNo.": "5",
            question: "Given a binary tree, return the lowest common ancestor of two given nodes.",
            correctAnswer: "Binary Tree - DFS"
        },
        {
            id: 21,
            "QuestionNo.": "5",
            question: "Given an array of meeting time intervals, determine if a person could attend all meetings.",
            correctAnswer: "Interval Scheduling"
        }
    ],
    [
        {
            id: 22,
            "QuestionNo.": "6",
            question: "Given an unsorted array, return the k-th largest element.",
            correctAnswer: "Quickselect"
        },
        {
            id: 23,
            "QuestionNo.": "6",
            question: "Given a binary tree, return all root-to-leaf paths.",
            correctAnswer: "Depth-First Search"
        },
        {
            id: 24,
            "QuestionNo.": "6",
            question: "Given an array of positive integers, find the minimum number of jumps required to reach the last index.",
            correctAnswer: "Greedy Algorithm"
        },
        {
            id: 25,
            "QuestionNo.": "6",
            question: "Given a set of integers, find the size of the largest subset such that every pair of elements in the subset satisfies the condition: a % b == 0 or b % a == 0.",
            correctAnswer: "Dynamic Programming"
        },
        {
            id: 26,
            "QuestionNo.": "6",
            question: "Given an m x n grid of characters board and a string word, find if the word exists in the grid. The word can be constructed from letters of sequentially adjacent cells.",
            correctAnswer: "Backtracking"
        }
    ],
    // Additional Questions based on the patterns shown in the image
    [
        {
            id: 27,
            "QuestionNo.": "7",
            question: "Given an array of integers, find the maximum sum of a subarray with at most k elements.",
            correctAnswer: "Sliding Window"
        },
        {
            id: 28,
            "QuestionNo.": "7",
            question: "Given a sorted array, find the pair of elements that sum up to a given target.",
            correctAnswer: "Two Pointers"
        },
        {
            id: 29,
            "QuestionNo.": "7",
            question: "Given a linked list, detect if it has a cycle.",
            correctAnswer: "Fast and Slow Pointers"
        },
        {
            id: 30,
            "QuestionNo.": "7",
            question: "Given an array of intervals, find the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.",
            correctAnswer: "Merge Intervals"
        },
        {
            id: 31,
            "QuestionNo.": "7",
            question: "Given an array of integers, sort it using cyclic sort.",
            correctAnswer: "Cyclic Sort"
        }
    ],
    [
        {
            id: 32,
            "QuestionNo.": "8",
            question: "Given a linked list, reverse it in place.",
            correctAnswer: "In-place Reversal of Linked List"
        },
        {
            id: 33,
            "QuestionNo.": "8",
            question: "Given a binary tree, return its level order traversal.",
            correctAnswer: "Tree BFS"
        },
        {
            id: 34,
            "QuestionNo.": "8",
            question: "Given a binary tree, return its pre-order traversal.",
            correctAnswer: "Tree DFS"
        },
        {
            id: 35,
            "QuestionNo.": "8",
            question: "Given an array of integers, find the median of the array.",
            correctAnswer: "Two Heaps"
        },
        {
            id: 36,
            "QuestionNo.": "8",
            question: "Given an array of integers, find all subsets of the array.",
            correctAnswer: "Subsets"
        }
    ],
    [
        {
            id: 37,
            "QuestionNo.": "9",
            question: "Given a sorted array, find the first and last position of a target element.",
            correctAnswer: "Modified Binary Search"
        },
        {
            id: 38,
            "QuestionNo.": "9",
            question: "Given an array of integers, find the top k frequent elements.",
            correctAnswer: "Top K Elements"
        }
    ],
    [
        {
            id: 39,
            "QuestionNo.": "10",
            question: "Given an array of integers, find the maximum sum of a subarray with a fixed window size.",
            correctAnswer: "Sliding Window"
        },
        {
            id: 40,
            "QuestionNo.": "10",
            question: "Given a sorted array, find two numbers that sum up to a specific target.",
            correctAnswer: "Two Pointers"
        },
        {
            id: 41,
            "QuestionNo.": "10",
            question: "Given a linked list, find the middle element.",
            correctAnswer: "Fast and Slow Pointers"
        },
        {
            id: 42,
            "QuestionNo.": "10",
            question: "Given an array of intervals, find the maximum number of non-overlapping intervals.",
            correctAnswer: "Merge Intervals"
        },
        {
            id: 43,
            "QuestionNo.": "10",
            question: "Given an array of integers, sort it using cyclic sort.",
            correctAnswer: "Cyclic Sort"
        },
        {
            id: 44,
            "QuestionNo.": "10",
            question: "Given a linked list, reverse it in place.",
            correctAnswer: "In-place Reversal of Linked List"
        },
        {
            id: 45,
            "QuestionNo.": "10",
            question: "Given a binary tree, return its level order traversal.",
            correctAnswer: "Tree BFS"
        },
        {
            id: 46,
            "QuestionNo.": "10",
            question: "Given a binary tree, return its pre-order traversal.",
            correctAnswer: "Tree DFS"
        },
        {
            id: 47,
            "QuestionNo.": "10",
            question: "Given an array of integers, find the median of the array.",
            correctAnswer: "Two Heaps"
        },
        {
            id: 48,
            "QuestionNo.": "10",
            question: "Given an array of integers, find all subsets of the array.",
            correctAnswer: "Subsets"
        },
        {
            id: 49,
            "QuestionNo.": "10",
            question: "Given a sorted array, find the first and last position of a target element.",
            correctAnswer: "Modified Binary Search"
        },
        {
            id: 50,
            "QuestionNo.": "10",
            question: "Given an array of integers, find the top k frequent elements.",
            correctAnswer: "Top K Elements"
        }
    ],
    [
        {
            id: 51,
            "QuestionNo.": "11",
            question: "Given a string, find the length of the longest substring without repeating characters.",
            correctAnswer: "Sliding Window"
        },
        {
            id: 52,
            "QuestionNo.": "11",
            question: "Given an array of integers, find two numbers such that they add up to a specific target.",
            correctAnswer: "Two Pointers"
        },
        {
            id: 53,
            "QuestionNo.": "11",
            question: "Given a linked list, detect if it has a cycle.",
            correctAnswer: "Fast and Slow Pointers"
        },
        {
            id: 54,
            "QuestionNo.": "11",
            question: "Given an array of intervals, merge all overlapping intervals.",
            correctAnswer: "Merge Intervals"
        },
        {
            id: 55,
            "QuestionNo.": "11",
            question: "Given an array of numbers in the range 1 to n, find all the numbers that are missing in the array.",
            correctAnswer: "Cyclic Sort"
        },
        {
            id: 56,
            "QuestionNo.": "11",
            question: "Given a linked list, reverse nodes in k-group.",
            correctAnswer: "In-place Reversal of Linked List"
        },
        {
            id: 57,
            "QuestionNo.": "11",
            question: "Given a binary tree, return its zigzag level order traversal.",
            correctAnswer: "Tree BFS"
        },
        {
            id: 58,
            "QuestionNo.": "11",
            question: "Given a binary tree, return its post-order traversal.",
            correctAnswer: "Tree DFS"
        },
        {
            id: 59,
            "QuestionNo.": "11",
            question: "Given an array of integers, find the k-th largest element.",
            correctAnswer: "Two Heaps"
        },
        {
            id: 60,
            "QuestionNo.": "11",
            question: "Given an array of integers, find all unique subsets.",
            correctAnswer: "Subsets"
        },
        {
            id: 61,
            "QuestionNo.": "12",
            question: "Given a sorted array, find the peak element.",
            correctAnswer: "Modified Binary Search"
        },
        {
            id: 62,
            "QuestionNo.": "12",
            question: "Given an array of integers, find the k most frequent elements.",
            correctAnswer: "Top K Elements"
        },
        {
            id: 63,
            "QuestionNo.": "12",
            question: "Given a string, find the longest palindromic substring.",
            correctAnswer: "Sliding Window"
        },
        {
            id: 64,
            "QuestionNo.": "12",
            question: "Given a sorted array, find the pair of elements that sum up to a given target.",
            correctAnswer: "Two Pointers"
        },
        {
            id: 65,
            "QuestionNo.": "12",
            question: "Given a linked list, find the starting point of the cycle.",
            correctAnswer: "Fast and Slow Pointers"
        },
        {
            id: 66,
            "QuestionNo.": "12",
            question: "Given an array of intervals, find the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.",
            correctAnswer: "Merge Intervals"
        },
        {
            id: 67,
            "QuestionNo.": "12",
            question: "Given an array of integers, sort it using cyclic sort.",
            correctAnswer: "Cyclic Sort"
        },
        {
            id: 68,
            "QuestionNo.": "12",
            question: "Given a linked list, reverse it in place.",
            correctAnswer: "In-place Reversal of Linked List"
        },
        {
            id: 69,
            "QuestionNo.": "12",
            question: "Given a binary tree, return its level order traversal.",
            correctAnswer: "Tree BFS"
        },
        {
            id: 70,
            "QuestionNo.": "12",
            question: "Given a binary tree, return its pre-order traversal.",
            correctAnswer: "Tree DFS"
        }
    ]
];

const ColumnMatchingQuiz = () => {
    const [currentSetIndex, setCurrentSetIndex] = useState(0);
    const [selectedQuestion, setSelectedQuestion] = useState(null);
    const [matches, setMatches] = useState({});
    const [showResults, setShowResults] = useState(false);
    const [score, setScore] = useState(0);
    const [shuffledAnswerOptions, setShuffledAnswerOptions] = useState([]);
    const questionRefs = useRef([]);
    const answerRefs = useRef([]);
    const quizContainerRef = useRef(null);

    // Shuffle the answer options array
    const shuffleArray = (array) => {
        return array.sort(() => Math.random() - 0.5);
    };

    useEffect(() => {
        // Initialize question and answer refs
        questionRefs.current = questionRefs.current.slice(0, quizData[currentSetIndex].length);
        answerRefs.current = answerRefs.current.slice(0, shuffledAnswerOptions.length);

        // Randomize the answer options and store them
        const answerOptions = Array.from(new Set(quizData[currentSetIndex].map(item => item.correctAnswer)));
        setShuffledAnswerOptions(shuffleArray([...answerOptions]));
    }, [currentSetIndex]);

    const handleQuestionClick = (questionId) => {
        setSelectedQuestion(questionId);
    };

    const handleAnswerClick = (answer) => {
        if (selectedQuestion !== null) {
            setMatches(prev => ({ ...prev, [selectedQuestion]: answer }));
            setSelectedQuestion(null);
        }
    };

    const handleSubmit = () => {
        let correctAnswers = 0;
        quizData[currentSetIndex].forEach(item => {
            if (matches[item.id] === item.correctAnswer) {
                correctAnswers++;
            }
        });
        setScore(correctAnswers);
        setShowResults(true);
        quizData[currentSetIndex].forEach((item, index) => {
            if (matches[item.id] === item.correctAnswer) {
                if (questionRefs.current[index]) {
                    questionRefs.current[index].style.outline = '2px solid pink';
                }
                const answerIndex = shuffledAnswerOptions.indexOf(item.correctAnswer);
                if (answerRefs.current[answerIndex]) {
                    answerRefs.current[answerIndex].style.outline = '2px solid pink';
                }
            }
        });
    };

    const resetQuiz = () => {
        setMatches({});
        setShowResults(false);
        setScore(0);
        setSelectedQuestion(null);
    };

    const createCurvedPath = (x1, y1, x2, y2) => {
        const midX = (x1 + x2) / 2;
        return `M ${x1} ${y1} Q ${midX} ${y1}, ${midX} ${(y1 + y2) / 2} T ${x2} ${y2}`;
    };

    const calculateOffset = (el) => {
        const rect = el.getBoundingClientRect();
        const parentRect = quizContainerRef.current.getBoundingClientRect();
        return {
            top: rect.top - parentRect.top,
            left: rect.left - parentRect.left,
            width: rect.width,
            height: rect.height
        };
    };

    const handleNextQuestions = () => {
        if (currentSetIndex < quizData.length - 1) {
            setCurrentSetIndex(prevIndex => prevIndex + 1);
            resetQuiz();
        }
    };

    return (
        <div ref={quizContainerRef} className="max-w-[1400px] mx-auto mt-10 p-4 bg-gray-900 text-white relative">
            <div className="bg-gray-800 p-2 mb-4 rounded">
                <p>Select an option from the left-hand side</p>
            </div>
            <div className="flex justify-between">
                <div className="w-5/12">
                    {quizData[currentSetIndex].map((item, index) => (
                        <div
                            key={item.id}
                            ref={el => questionRefs.current[index] = el}
                            className={`p-4 mb-4 rounded cursor-pointer ${selectedQuestion === item.id ? 'bg-blue-600' : 'bg-gray-700'} ${matches[item.id] ? 'border-2  border-blue-200' : ''}`}

                            onClick={() => handleQuestionClick(item.id)}
                        >
                            <p className='text-[20px]'>{item.question}</p>

                        </div>
                    ))}
                </div>
                <div className="w-5/12">
                    {shuffledAnswerOptions.map((answer, index) => (
                        <div
                            key={answer}
                            ref={el => answerRefs.current[index] = el}
                            className="p-4 mb-4 bg-gray-700 rounded cursor-pointer hover:bg-gray-600 text-[20px]"
                            onClick={() => handleAnswerClick(answer)}
                        >
                            <p>{answer}</p>
                        </div>
                    ))}
                </div>
                <svg className="absolute top-0 left-0 w-full h-full pointer-events-none">
                    <defs>
                        <marker id="arrowhead" markerWidth="10" markerHeight="7"
                            refX="0" refY="3.5" orient="auto">
                            <polygon points="0 0, 10 3.5, 0 7" fill="#4299e1" />
                        </marker>
                    </defs>
                    {Object.entries(matches).map(([questionId, answer]) => {
                        const questionIndex = quizData[currentSetIndex].findIndex(q => q.id === parseInt(questionId));
                        const answerIndex = shuffledAnswerOptions.indexOf(answer);
                        const questionEl = questionRefs.current[questionIndex];
                        const answerEl = answerRefs.current[answerIndex];
                        if (questionEl && answerEl) {
                            const questionOffset = calculateOffset(questionEl);
                            const answerOffset = calculateOffset(answerEl);
                            const path = createCurvedPath(
                                questionOffset.left + questionOffset.width,
                                questionOffset.top + questionOffset.height / 2,
                                answerOffset.left,
                                answerOffset.top + answerOffset.height / 2
                            );
                            return (
                                <path
                                    key={questionId}
                                    d={path}
                                    fill="none"
                                    stroke="#4299e1"
                                    strokeWidth="2"
                                    markerEnd="url(#arrowhead)"
                                />
                            );
                        }
                        return null;
                    })}
                </svg>
            </div>
            {!showResults ? (
                <button
                    onClick={handleSubmit}
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                    Submit
                </button>
            ) : (
                <div className="mt-4">
                    <div>Quiz Results</div>
                    <div>
                        Your score: {score} out of {quizData[currentSetIndex].length}
                    </div>
                    <button
                        onClick={handleNextQuestions}
                        className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                    >
                        Next Set
                    </button>
                </div>
            )}
        </div>
    );
};

export default ColumnMatchingQuiz;