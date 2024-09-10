
// import React, { useState, useEffect } from 'react';
// import '../index.css';
// import dragDropQuestions from './DropQuestions1.json';
// import { AlertCircle, CheckCircle2 } from 'lucide-react';

// const DragDropQuestion = ({ question, items, onComplete, onNext }) => {
//     const [currentItems, setCurrentItems] = useState(items);
//     const [isCorrect, setIsCorrect] = useState(null);
//     const [draggingIndex, setDraggingIndex] = useState(null);
//     const [dragOverIndex, setDragOverIndex] = useState(null);
//     const [hintCount, setHintCount] = useState(0);

//     useEffect(() => {
//         setCurrentItems(items);
//         setIsCorrect(null);
//         setHintCount(0); // Reset hints on question change
//     }, [question, items]);

//     const onDragStart = (e, index) => {
//         e.dataTransfer.setData('text/plain', index);
//         setDraggingIndex(index);
//     };

//     const onDragOver = (e, index) => {
//         e.preventDefault();
//         setDragOverIndex(index);
//     };

//     const onDrop = (e, dropIndex) => {
//         const dragIndex = Number(e.dataTransfer.getData('text/plain'));
//         const newItems = [...currentItems];
//         const [reorderedItem] = newItems.splice(dragIndex, 1);
//         newItems.splice(dropIndex, 0, reorderedItem);
//         setCurrentItems(newItems);
//         setDraggingIndex(null);
//         setDragOverIndex(null);
//     };

//     const onDragEnd = () => {
//         setDraggingIndex(null);
//         setDragOverIndex(null);
//     };

//     const checkAnswer = () => {
//         const correct = JSON.stringify(currentItems) === JSON.stringify(question.correctOrder);
     
//         setIsCorrect(correct);
//         onComplete(correct);
        
//     };

//     return (
//         <div className="mb-4 border p-4 rounded-md shadow-sm">
//             <div className="mb-2 font-semibold text-lg">{question.question}</div>
//             <div>
//                 <ul className="space-y-2">
//                     {currentItems.map((item, index) => (
//                         <li
//                             key={item}
//                             draggable
//                             onDragStart={(e) => onDragStart(e, index)}
//                             onDragOver={(e) => onDragOver(e, index)}
//                             onDrop={(e) => onDrop(e, index)}
//                             onDragEnd={onDragEnd}
//                             className={`flex items-center p-2 m-2 bg-gray-100 text-black text-2xl rounded cursor-move ${draggingIndex === index ? 'dragging' : ''} ${dragOverIndex === index ? 'drag-over' : ''}`}
//                         >
//                             {item}
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//             <div className="mt-4 flex items-center">
//                 <button onClick={checkAnswer} disabled={isCorrect !== null} className="mr-2 bg-blue-500 text-white py-2 px-4 rounded">
//                     Check Answer
//                 </button>
//                 <button onClick={onNext} className="bg-gray-300 py-2 px-4 rounded">
//                     Next Question
//                 </button>
//                 <button
//                     onClick={() => setHintCount((prevCount) => prevCount + 1)}
//                     className="ml-2 bg-yellow-500 text-white py-2 px-4 rounded"
//                     disabled={hintCount >= question.hints.length}
//                 >
//                     Show Hint
//                 </button>
//                 {hintCount > 0 && (
//                     <div className="mt-2 p-2 bg-yellow-100 rounded">
//                         {question.hints.slice(0, hintCount).map((hint, index) => (
//                             <p key={index} className="text-sm">{Object.values(hint)[0]}</p>
//                         ))}
//                     </div>
//                 )}
//                 {isCorrect !== null && (
//                     <span className={`ml-4 p-2 bg-black ${isCorrect ? 'text-green-500' : 'text-red-500'}`}>
//                         {isCorrect ? <CheckCircle2 className="ml-2 inline-block" /> : <AlertCircle className="ml-2 inline-block" />}
//                         {isCorrect ? ' Correct!' : ' Incorrect. Try again.'}
//                     </span>
//                 )}
//             </div>
//         </div>
//     );
// };

// const QuizSection = () => {
//     const [currentQuestion, setCurrentQuestion] = useState(getRandomQuestion());
//     const [score, setScore] = useState(0);
//     const [showScore, setShowScore] = useState(false);
//     const [quizType, setQuizType] = useState('dragDrop');

//     function getRandomQuestion() {
//         const randomIndex = Math.floor(Math.random() * dragDropQuestions.length);
//         return dragDropQuestions[randomIndex];
//     }

//     const handleNextQuestion = () => {
//         setCurrentQuestion(getRandomQuestion());
//     };

//     const handleDragDropComplete = (isCorrect) => {
//         if (isCorrect) {
//             setScore(score + 1);
//         }
//     };

//     const resetQuiz = () => {
//         setCurrentQuestion(getRandomQuestion());
//         setScore(0);
//         setShowScore(false);
//     };

//     const handleQuizTypeChange = (type) => {
//         setQuizType(type);
//         resetQuiz();
//     };

//     const totalQuestions = dragDropQuestions.length;

//     return (
//         <div className="container mx-auto p-4">
//             <h1 className="text-3xl font-bold mb-6">DSA in C++ Quiz</h1>
//             <div className="mb-4">
//                 <button onClick={() => handleQuizTypeChange('dragDrop')} className={`py-2 px-4 rounded ${quizType === 'dragDrop' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>
//                     Drag and Drop
//                 </button>
//             </div>

//             {showScore ? (
//                 <div className="text-center p-6 border rounded-md shadow-sm">
//                     <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
//                     <p className="text-xl">Your score: {score} out of {totalQuestions}</p>
//                     <button onClick={resetQuiz} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Restart Quiz</button>
//                 </div>
//             ) : (
//                 quizType === 'dragDrop' ? (
//                     <DragDropQuestion
//                         question={currentQuestion}
//                         items={currentQuestion.items}
//                         onComplete={handleDragDropComplete}
//                         onNext={handleNextQuestion}
//                     />
//                 ) : null
//             )}
//         </div>
//     );
// };

// export default QuizSection;
import React, { useState, useEffect } from 'react';
import '../index.css';
import dragDropQuestions from './DropQuestions1.json';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

const DragDropQuestion = ({ question, items, onComplete, onNext }) => {
    const [currentItems, setCurrentItems] = useState(items);
    const [isCorrect, setIsCorrect] = useState(null);
    const [draggingIndex, setDraggingIndex] = useState(null);
    const [dragOverIndex, setDragOverIndex] = useState(null);
    const [hintCount, setHintCount] = useState(0);

    useEffect(() => {
        // Properly reset currentItems on question change
        setCurrentItems([...items]);
        setIsCorrect(null);
        setHintCount(0); // Reset hints on question change
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
                            key={`${item}-${index}`} // Ensure the key is unique
                            draggable
                            onDragStart={(e) => onDragStart(e, index)}
                            onDragOver={(e) => onDragOver(e, index)}
                            onDrop={(e) => onDrop(e, index)}
                            onDragEnd={onDragEnd}
                            className={`flex items-center p-2 m-2 bg-gray-100 text-black text-2xl rounded cursor-move ${draggingIndex === index ? 'dragging' : ''} ${dragOverIndex === index ? 'drag-over' : ''}`}
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
                <button onClick={onNext} className="bg-gray-300 py-2 px-4 rounded">
                    Next Question
                </button>
                <button
                    onClick={() => setHintCount((prevCount) => prevCount + 1)}
                    className="ml-2 bg-yellow-500 text-white py-2 px-4 rounded"
                    disabled={hintCount >= question.hints.length}
                >
                    Show Hint
                </button>
                {hintCount > 0 && (
                    <div className="mt-2 p-2 bg-yellow-100 rounded">
                        {question.hints.slice(0, hintCount).map((hint, index) => (
                            <p key={index} className="text-sm">{Object.values(hint)[0]}</p>
                        ))}
                    </div>
                )}
                {isCorrect !== null && (
                    <span className={`ml-4 p-2 bg-black ${isCorrect ? 'text-green-500' : 'text-red-500'}`}>
                        {isCorrect ? <CheckCircle2 className="ml-2 inline-block" /> : <AlertCircle className="ml-2 inline-block" />}
                        {isCorrect ? ' Correct!' : ' Incorrect. Try again.'}
                    </span>
                )}
            </div>
        </div>
    );
};

const QuizSection = () => {
    const [currentQuestion, setCurrentQuestion] = useState(getRandomQuestion());
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [quizType, setQuizType] = useState('dragDrop');

    function getRandomQuestion() {
        const randomIndex = Math.floor(Math.random() * dragDropQuestions.length);
        return dragDropQuestions[randomIndex];
    }

    const handleNextQuestion = () => {
        setCurrentQuestion(getRandomQuestion());
    };

    const handleDragDropComplete = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }
    };

    const resetQuiz = () => {
        setCurrentQuestion(getRandomQuestion());
        setScore(0);
        setShowScore(false);
    };

    const handleQuizTypeChange = (type) => {
        setQuizType(type);
        resetQuiz();
    };

    const totalQuestions = dragDropQuestions.length;

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">DSA in C++ Quiz</h1>
            <div className="mb-4">
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
                quizType === 'dragDrop' ? (
                    <DragDropQuestion
                        question={currentQuestion}
                        items={currentQuestion.items}
                        onComplete={handleDragDropComplete}
                        onNext={handleNextQuestion}
                    />
                ) : null
            )}
        </div>
    );
};

export default QuizSection;
