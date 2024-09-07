import React, { useState, useRef, useEffect } from 'react';
import quizQuestions from './DragDropQuestiosn.json';

import CodeMirror from "@uiw/react-codemirror";
import { StreamLanguage } from "@codemirror/language";
import { cpp } from "@codemirror/lang-cpp";
import { basicSetup } from "codemirror";
import { EditorView } from "@codemirror/view";
import { autocompletion, completeFromList } from "@codemirror/autocomplete";

const DragDrop2 = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(getRandomIndex());
    const [answer, setAnswer] = useState('');
    const [feedback, setFeedback] = useState('');
    const [options, setOptions] = useState([]);
    const textAreaRef = useRef(null);

    useEffect(() => {
        setOptions(quizQuestions[currentQuestionIndex].options.concat({ id: 'closingBracket', content: '}' }));
    }, [currentQuestionIndex]);

    const currentQuestion = quizQuestions[currentQuestionIndex];

    function getRandomIndex() {
        return Math.floor(Math.random() * quizQuestions.length);
    }

    const onDragStart = (e, content, id) => {
        console.log(`Drag started with content: ${content} and id: ${id}`);
        e.dataTransfer.setData('text/plain', JSON.stringify({ content, id }));
    };

    const onDragOver = (e) => {
        console.log("Drag over event triggered");
        e.preventDefault();
    };

    const escapeSpecialChars = (str) => {
        console.log(`Escaping special characters in string: ${str}`);
        return str.replace(/[/]/g, '');  // Remove slashes if needed
    };

    const onDrop = (e) => {
        e.preventDefault();
        let { content, id } = JSON.parse(e.dataTransfer.getData('text/plain'));
        console.log(`Dropped content: ${content}, id: ${id}`);

        // Process content to remove unwanted characters
        content = escapeSpecialChars(content);

        if (!answer.includes(content)) {
            const cursorPosition = textAreaRef.current.selectionStart;
            const textBeforeCursor = answer.slice(0, cursorPosition);
            const textAfterCursor = answer.slice(cursorPosition);

            console.log(`Cursor position: ${cursorPosition}`);
            console.log(`Text before cursor: "${textBeforeCursor}", Text after cursor: "${textAfterCursor}"`);

            // Ensure the new content is inserted correctly
            const updatedAnswer = `${textBeforeCursor}${content}\n${textAfterCursor}`;
            setAnswer(updatedAnswer);

            console.log(`Updated answer: ${updatedAnswer}`);

            // Handle removing dropped option from options list
            setOptions(options.filter(option => option.id !== id));

            setTimeout(() => {
                textAreaRef.current.focus();
                textAreaRef.current.selectionStart = cursorPosition + content.length + 1;
                textAreaRef.current.selectionEnd = cursorPosition + content.length + 1;
                console.log("Cursor repositioned after drop");
            }, 0);
        } else {
            console.log("Dropped content already exists in the answer.");
            // Remove the option even if the content already exists in the answer
            setOptions(options.filter(option => option.id !== id));
        }
    };

    const checkAnswer = () => {
        console.log("Checking answer...");
        const isCorrect = answer.trim() === currentQuestion.correctAnswer.trim();
        setFeedback(isCorrect ? 'Correct! Great job!' : 'Incorrect. Try again.');
        console.log(`Answer is ${isCorrect ? "correct" : "incorrect"}`);
    };

    const nextQuestion = () => {
        console.log("Loading next question...");
        setCurrentQuestionIndex(getRandomIndex());
        setAnswer('');
        setFeedback('');
        console.log(`New question index: ${currentQuestionIndex}`);
    };

    return (
        <div className="p-4 max-w-md mx-auto bg-white rounded-xl shadow-md my-5">
            <h2 className="text-xl font-bold mb-4">DSA Quiz: Question {currentQuestion.id}</h2>
            <p className="mb-4">{currentQuestion.question}</p>
           
            <textarea
                ref={textAreaRef}
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                onDragOver={onDragOver}
                onDrop={onDrop}
                className='CodeMirror text-3xl mt-10 line-height-10 h-[400px] w-[600px] language-cpp'
                placeholder="Drop code snippets here..."
                height="400px"
                width="600px"

                extensions={[cpp()]}
                theme='dark' // Optional: Choose a theme
                basicSetup={basicSetup}
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
