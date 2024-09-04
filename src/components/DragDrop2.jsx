import React, { useState, useRef } from 'react';
import CodeMirror from "@uiw/react-codemirror";
import { StreamLanguage } from "@codemirror/language";
import { cpp } from "@codemirror/lang-cpp";
import { basicSetup } from "codemirror";
import { EditorView } from "@codemirror/view";
import { autocompletion, completeFromList } from "@codemirror/autocomplete";
const quizQuestions = [
    {
        id: 1,
        question: "Write the main function in C++",
        options: [
            { id: 'item1', content: 'return 0;' },
            { id: 'item2', content: 'int main() {' },
            { id: 'item3', content: '    // Your code here' },
            { id: 'item4', content: '}' }
        ],
        correctAnswer: `int main() {
    // Your code here
return 0;
}`
    },
    {
        id: 2,
        question: "Write a for loop in C++",
        options: [
            { id: 'item1', content: 'for (int i = 0; i < n; i++) {' },
            { id: 'item2', content: '    // Loop body' },
            { id: 'item3', content: '}' },
            { id: 'item4', content: 'int n = 10;' }
        ],
        correctAnswer: `int n = 10;
for (int i = 0; i < n; i++) {
    // Loop body
}`
    }
];

const DragDrop2 = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answer, setAnswer] = useState('');
    const [feedback, setFeedback] = useState('');
    const [options, setOptions] = useState(quizQuestions[currentQuestionIndex].options);
    const textAreaRef = useRef(null);

    const currentQuestion = quizQuestions[currentQuestionIndex];

    const onDragStart = (e, content, id) => {
        e.dataTransfer.setData('text/plain', JSON.stringify({ content, id }));
    };

    const onDragOver = (e) => {
        e.preventDefault();
    };

    const onDrop = (e) => {
        e.preventDefault();
        const { content, id } = JSON.parse(e.dataTransfer.getData('text/plain'));
        const cursorPosition = textAreaRef.current.selectionStart;
        const textBeforeCursor = answer.slice(0, cursorPosition);
        const textAfterCursor = answer.slice(cursorPosition);
        setAnswer(textBeforeCursor + content + '\n' + textAfterCursor);
        setOptions(options.filter(option => option.id !== id));
    };

    const checkAnswer = () => {
        const isCorrect = answer.trim() === currentQuestion.correctAnswer.trim();
        setFeedback(isCorrect ? 'Correct! Great job!' : 'Incorrect. Try again.');
    };

    const nextQuestion = () => {
        if (currentQuestionIndex < quizQuestions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setAnswer('');
            setFeedback('');
            setOptions(quizQuestions[currentQuestionIndex + 1].options);
        } else {
            setFeedback('You have completed all questions!');
        }
    };

    return (
        <div className="p-4 max-w-md mx-auto bg-white rounded-xl shadow-md">
            <h2 className="text-xl font-bold mb-4">DSA Quiz: Question {currentQuestion.id}</h2>
            <p className="mb-4">{currentQuestion.question}</p>

            <CodeMirror // text area
                ref={textAreaRef}
                value={answer}
                extensions={[cpp()]}
                theme='dark' // Optional: Choose a theme
                basicSetup={basicSetup}
                onChange={(e) => setAnswer(e.target.value)}
                onDragOver={onDragOver}
                onDrop={onDrop}
                className="w-full h-32 p-2 border rounded mb-4"
                placeholder="Drop code snippets here..."
            />

            <div className="mb-4">
                {options.map((option) => (
                    <div
                        key={option.id}
                        draggable
                        onDragStart={(e) => onDragStart(e, option.content, option.id)}
                        className="bg-gray-100 p-2 mb-2 rounded cursor-move inline-block mr-2"
                    >
                        {option.content}
                    </div>
                ))}
            </div>

            <div className="flex justify-between">
                <button
                    onClick={checkAnswer}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Check Answer
                </button>
                <button
                    onClick={nextQuestion}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                    Next Question
                </button>
            </div>

            {feedback && (
                <p className={`mt-4 p-2 rounded ${feedback.includes('Correct') ? 'bg-green-100' : 'bg-red-100'}`}>
                    {feedback}
                </p>
            )}
        </div>
    );
};

export default DragDrop2;