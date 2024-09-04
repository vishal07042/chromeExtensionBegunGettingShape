import React, { useState, useRef, useEffect } from 'react';

import quizQuestions from './DragDropQuestiosn.json';

const DragDrop2 = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(getRandomIndex());
    const [answer, setAnswer] = useState('');
    const [feedback, setFeedback] = useState('');
    const [options, setOptions] = useState([]);
    const textAreaRef = useRef(null);

    useEffect(() => {
        setOptions(quizQuestions[currentQuestionIndex].options);
    }, [currentQuestionIndex]);

    const currentQuestion = quizQuestions[currentQuestionIndex];

    function getRandomIndex() {
        return Math.floor(Math.random() * quizQuestions.length);
    }

    const onDragStart = (e, content, id) => {
        e.dataTransfer.setData('text/plain', JSON.stringify({ content, id }));
    };

    const onDragOver = (e) => {
        e.preventDefault();
    };

    const onDrop = (e) => {
        e.preventDefault();
        const { content, id } = JSON.parse(e.dataTransfer.getData('text/plain'));

        if (!answer.includes(content)) {
            const cursorPosition = textAreaRef.current.selectionStart;
            const textBeforeCursor = answer.slice(0, cursorPosition);
            const textAfterCursor = answer.slice(cursorPosition);
            setAnswer(textBeforeCursor + content + '\n' + textAfterCursor);
            setOptions(options.filter(option => option.id !== id));
        }
    };

    const checkAnswer = () => {
        const isCorrect = answer.trim() === currentQuestion.correctAnswer.trim();
        setFeedback(isCorrect ? 'Correct! Great job!' : 'Incorrect. Try again.');
    };

    const nextQuestion = () => {
        setCurrentQuestionIndex(getRandomIndex());
        setAnswer('');
        setFeedback('');
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
                className='CodeMirror text-3xl mt-10 line-height-10'
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
