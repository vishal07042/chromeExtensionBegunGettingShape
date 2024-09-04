import React, { useState, useEffect } from 'react';

import '../index.css'

import { AlertCircle, CheckCircle2 } from 'lucide-react';

const quizQuestions = [
    {
        question: "What is the time complexity of accessing an element in an array?",
        options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
        correctAnswer: 0
    },
    {
        question: "Which data structure follows the Last In First Out (LIFO) principle?",
        options: ["Queue", "Stack", "Linked List", "Tree"],
        correctAnswer: 1
    },
    {
        question: "What is the space complexity of a linked list compared to an array?",
        options: ["Always less", "Always more", "Same", "Depends on the implementation"],
        correctAnswer: 3
    }
];

const dragDropQuestions = [
    {
        question: "Order these data structures from fastest to slowest average access time:",
        items: ["Array", "Binary Search Tree", "Linked List", "Hash Table"],
        correctOrder: ["Hash Table", "Array", "Binary Search Tree", "Linked List"]
    },
    {
        question: "Order these sorting algorithms from lowest to highest time complexity (average case):",
        items: ["Bubble Sort", "Merge Sort", "Quick Sort", "Insertion Sort"],
        correctOrder: ["Merge Sort", "Quick Sort", "Insertion Sort", "Bubble Sort"]
    },
    {
        question: "Order these search algorithms from fastest to slowest (average case):",
        items: ["Linear Search", "Binary Search", "Jump Search", "Exponential Search"],
        correctOrder: ["Binary Search", "Exponential Search", "Jump Search", "Linear Search"]
    },
    {
        question: "Order these data structures from least to most memory usage:",
        items: ["Array", "Linked List", "Hash Table", "Binary Search Tree"],
        correctOrder: ["Array", "Linked List", "Binary Search Tree", "Hash Table"]
    },
    {
        question: "Order these operations on a Binary Search Tree from fastest to slowest (average case):",
        items: ["Search", "Insertion", "Deletion", "Traversal"],
        correctOrder: ["Search", "Insertion", "Deletion", "Traversal"]
    },
    {
        question: "Order these graph traversal algorithms from least to most memory usage:",
        items: ["Depth-First Search", "Breadth-First Search", "Dijkstra's Algorithm", "A* Search"],
        correctOrder: ["Depth-First Search", "Breadth-First Search", "Dijkstra's Algorithm", "A* Search"]
    },
    {
        question: "Order these data structures from least to most suitable for frequent insertions and deletions:",
        items: ["Array", "Linked List", "Stack", "Queue"],
        correctOrder: ["Linked List", "Stack", "Queue", "Array"]
    }
];

const DragDropQuestion = ({ question, items, onComplete, onNext }) => {
    const [currentItems, setCurrentItems] = useState(items);
    const [isCorrect, setIsCorrect] = useState(null);
    const [draggingIndex, setDraggingIndex] = useState(null);
    const [dragOverIndex, setDragOverIndex] = useState(null);

    useEffect(() => {
        setCurrentItems(items);
        setIsCorrect(null);
    }, [question, items]);

    const onDragStart = (e, index) => {
        e.dataTransfer.setData('text/plain', index);
        setDraggingIndex(index);
    };

    const onDragOver = (e, index) => {
        e.preventDefault();
        setDragOverIndex(index);
    };

    const onDrop = (e, dropIndex) => {
        const dragIndex = Number(e.dataTransfer.getData('text/plain'));
        const newItems = [...currentItems];
        const [reorderedItem] = newItems.splice(dragIndex, 1);
        newItems.splice(dropIndex, 0, reorderedItem);
        setCurrentItems(newItems);
        setDraggingIndex(null);
        setDragOverIndex(null);
    };

    const onDragEnd = () => {
        setDraggingIndex(null);
        setDragOverIndex(null);
    };

    const checkAnswer = () => {
        const correct = JSON.stringify(currentItems) === JSON.stringify(question.correctOrder);
        setIsCorrect(correct);
        onComplete(correct);
    };

    return (
        <div className="mb-4 border p-4 rounded-md shadow-sm">
            <div className="mb-2 font-semibold text-lg">{question.question}</div>
            <div>
                <ul className="space-y-2">
                    {currentItems.map((item, index) => (
                        <li
                            key={item}
                            draggable
                            onDragStart={(e) => onDragStart(e, index)}
                            onDragOver={(e) => onDragOver(e, index)}
                            onDrop={(e) => onDrop(e, index)}
                            onDragEnd={onDragEnd}
                            className={`flex items-center p-2 bg-gray-100 rounded cursor-move ${draggingIndex === index ? 'dragging' : ''} ${dragOverIndex === index ? 'drag-over' : ''}`}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="mt-4 flex items-center">
                <button onClick={checkAnswer} disabled={isCorrect !== null} className="mr-2 bg-blue-500 text-white py-2 px-4 rounded">
                    Check Answer
                </button>
                <button onClick={onNext} disabled={isCorrect === null} className="bg-gray-300 py-2 px-4 rounded">
                    Next Question
                </button>
                {isCorrect !== null && (
                    <span className={`ml-4 ${isCorrect ? 'text-green-500' : 'text-red-500'}`}>
                        {isCorrect ? <CheckCircle2 className="ml-2 inline-block" /> : <AlertCircle className="ml-2 inline-block" />}
                        {isCorrect ? ' Correct!' : ' Incorrect. Try again.'}
                    </span>
                )}
            </div>
        </div>
    );
};

const QuizSection = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [quizType, setQuizType] = useState('multipleChoice');

    const handleAnswerClick = (selectedOption) => {
        setSelectedAnswer(selectedOption);
        if (selectedOption === quizQuestions[currentQuestion].correctAnswer) {
            setScore(score + 1);
        }
    };

    const handleNextQuestion = () => {
        setSelectedAnswer(null);
        if (currentQuestion < (quizType === 'multipleChoice' ? quizQuestions.length : dragDropQuestions.length) - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setShowScore(true);
        }
    };

    const handleDragDropComplete = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }
    };

    const resetQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setShowScore(false);
        setSelectedAnswer(null);
    };

    const handleQuizTypeChange = (type) => {
        setQuizType(type);
        resetQuiz();
    };

    const totalQuestions = quizType === 'multipleChoice' ? quizQuestions.length : dragDropQuestions.length;

    return (
        <div className="container mx-auto p-4 z-78">
            <h1 className="text-3xl font-bold mb-6">DSA in C++ Quiz</h1>
            <div className="mb-4">
                <button onClick={() => handleQuizTypeChange('multipleChoice')} className={`mr-2 py-2 px-4 rounded ${quizType === 'multipleChoice' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>
                    Multiple Choice
                </button>
                <button onClick={() => handleQuizTypeChange('dragDrop')} className={`py-2 px-4 rounded ${quizType === 'dragDrop' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>
                    Drag and Drop
                </button>
            </div>

            {showScore ? (
                <div className="text-center p-6 border rounded-md shadow-sm">
                    <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
                    <p className="text-xl">Your score: {score} out of {totalQuestions}</p>
                    <button onClick={resetQuiz} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Restart Quiz</button>
                </div>
            ) : (
                quizType === 'multipleChoice' ? (
                    <div className="border p-4 rounded-md shadow-sm">
                        <div className="mb-2">
                            <div className="font-semibold text-lg">Question {currentQuestion + 1}/{quizQuestions.length}</div>
                            <div>{quizQuestions[currentQuestion].question}</div>
                        </div>
                        <div>
                            {quizQuestions[currentQuestion].options.map((option, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleAnswerClick(index)}
                                    className={`w-full mb-2 py-2 px-4 rounded ${selectedAnswer === index
                                        ? index === quizQuestions[currentQuestion].correctAnswer
                                            ? 'bg-green-500 hover:bg-green-600 text-white'
                                            : 'bg-red-500 hover:bg-red-600 text-white'
                                        : 'bg-gray-100'
                                        }`}
                                    disabled={selectedAnswer !== null}
                                >
                                    {option}
                                    {selectedAnswer === index && (
                                        index === quizQuestions[currentQuestion].correctAnswer
                                            ? <CheckCircle2 className="ml-2 inline-block" />
                                            : <AlertCircle className="ml-2 inline-block" />
                                    )}
                                </button>
                            ))}
                        </div>
                        <div className="mt-4">
                            <button onClick={handleNextQuestion} disabled={selectedAnswer === null} className="bg-blue-500 text-white py-2 px-4 rounded">
                                Next Question
                            </button>
                        </div>
                    </div>
                ) : (
                    <DragDropQuestion
                        question={dragDropQuestions[currentQuestion]}
                        items={dragDropQuestions[currentQuestion].items}
                        onComplete={handleDragDropComplete}
                        onNext={handleNextQuestion}
                    />
                )
            )}
        </div>
    );
};

export default QuizSection;
