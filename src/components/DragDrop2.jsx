// import React, { useState, useRef, useEffect } from 'react';
// import quizQuestions from './DragDropQuestiosn.json';
// import hljs from 'highlight.js/lib/core';
// import cppLang from 'highlight.js/lib/languages/cpp'; // Import the C++ language
// import 'highlight.js/styles/default.css'; // Default Highlight.js theme

// // Register C++ language with Highlight.js
// hljs.registerLanguage('cpp', cppLang);

// const DragDrop2 = () => {
//     const [currentQuestionIndex, setCurrentQuestionIndex] = useState(getRandomIndex());
//     const [answer, setAnswer] = useState('');
//     const [feedback, setFeedback] = useState('');
//     const [options, setOptions] = useState([]);
//     const textAreaRef = useRef(null);

//     useEffect(() => {
//         setOptions(quizQuestions[currentQuestionIndex].options.concat({ id: 'closingBracket', content: '}' }));
//     }, [currentQuestionIndex]);

//     // Re-run syntax highlighting whenever the answer is updated
//     useEffect(() => {
//         document.querySelectorAll('pre code').forEach((el) => {
//             hljs.highlightElement(el); // Apply syntax highlighting
//         });
//     }, [answer]);

//     const currentQuestion = quizQuestions[currentQuestionIndex];

//     function getRandomIndex() {
//         return Math.floor(Math.random() * quizQuestions.length);
//     }

//     const onDragStart = (e, content, id) => {
//         console.log(`Drag started with content: ${content} and id: ${id}`);
//         e.dataTransfer.setData('text/plain', JSON.stringify({ content, id }));
//     };

//     const onDragOver = (e) => {
//         console.log("Drag over event triggered");
//         e.preventDefault();
//     };

//     const escapeSpecialChars = (str) => {
//         console.log(`Escaping special characters in string: ${str}`);
//         return str.replace(/[/]/g, '');  // Remove slashes if needed
//     };

//     const onDrop = (e) => {
//         e.preventDefault();
//         let { content, id } = JSON.parse(e.dataTransfer.getData('text/plain'));
//         console.log(`Dropped content: ${content}, id: ${id}`);

//         // Process content to remove unwanted characters
//         content = escapeSpecialChars(content);

//         if (!answer.includes(content)) {
//             // Append the new content at the end of the answer
//             const updatedAnswer = `${answer}${content}\n`;
//             setAnswer(updatedAnswer);

//             console.log(`Updated answer: ${updatedAnswer}`);

//             // Handle removing dropped option from options list
//             setOptions(options.filter(option => option.id !== id));

//             setTimeout(() => {
//                 textAreaRef.current.focus();
//                 // Move cursor to the end of the updated answer
//                 textAreaRef.current.selectionStart = updatedAnswer.length;
//                 textAreaRef.current.selectionEnd = updatedAnswer.length;
//                 console.log("Cursor repositioned to the end after drop");
//             }, 0);
//         } else {
//             console.log("Dropped content already exists in the answer.");
//             // Remove the option even if the content already exists in the answer
//             setOptions(options.filter(option => option.id !== id));
//         }
//     };

//     const handleInput = (e) => {
//         setAnswer(e.target.innerText);
//     };

//     const checkAnswer = () => {
//         console.log("Checking answer...");
//         const isCorrect = answer.trim() === currentQuestion.correctAnswer.trim();
//         setFeedback(isCorrect ? 'Correct! Great job!' : 'Incorrect. Try again.');
//         console.log(`Answer is ${isCorrect ? "correct" : "incorrect"}`);
//     };

//     const nextQuestion = () => {
//         console.log("Loading next question...");
//         setCurrentQuestionIndex(getRandomIndex());
//         setAnswer('');
//         setFeedback('');
//         console.log(`New question index: ${currentQuestionIndex}`);
//     };

//     return (
//         <div className="p-4 max-w-md mx-auto bg-white rounded-xl shadow-md my-5">
//             <h2 className="text-xl font-bold mb-4">DSA Quiz: Question {currentQuestion.id}</h2>
//             <p className="mb-4">{currentQuestion.question}</p>

//             <div
//                 ref={textAreaRef}
//                 contentEditable
//                 onInput={handleInput}
//                 onDragOver={onDragOver}
//                 onDrop={onDrop}
//                 className='CodeMirror text-3xl mt-10 line-height-10 h-[400px] w-[600px] language-cpp'
//                 placeholder="Drop code snippets here..."
//                 style={{ backgroundColor: '#282c34', color: '#ffffff', padding: '10px', borderRadius: '5px', overflow: 'auto' }}
//             >
//                 <pre><code className="cpp">{answer}</code></pre> {/* Add className for Highlight.js */}
//             </div>

//             <div className="mb-4">
//                 {options.map((option) => (
//                     <div
//                         key={option.id}
//                         draggable
//                         onDragStart={(e) => onDragStart(e, option.content, option.id)}
//                         className="bg-gray-100 p-2 mb-2 rounded cursor-move inline-block mr-2"
//                     >
//                         {option.content}
//                     </div>
//                 ))}
//             </div>

//             <div className="flex justify-between">
//                 <button
//                     onClick={checkAnswer}
//                     className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//                 >
//                     Check Answer
//                 </button>
//                 <button
//                     onClick={nextQuestion}
//                     className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
//                 >
//                     Next Question
//                 </button>
//             </div>

//             {feedback && (
//                 <p className={`mt-4 p-2 rounded ${feedback.includes('Correct') ? 'bg-green-100' : 'bg-red-100'}`}>
//                     {feedback}
//                 </p>
//             )}
//         </div>
//     );
// };

// export default DragDrop2;

import React, { useState, useRef, useEffect } from 'react';
import quizQuestions from './DragDropQuestiosn.json';
import hljs from 'highlight.js/lib/core';
import cppLang from 'highlight.js/lib/languages/cpp'; // Import the C++ language
import 'highlight.js/styles/monokai-sublime.css'; // Dark theme for Highlight.js
import { CodeMirror } from '@replit/codemirror-vim';

// Register C++ language with Highlight.js
hljs.registerLanguage('cpp', cppLang);

const DragDrop2 = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(getRandomIndex());
    const [answer, setAnswer] = useState('');
    const [feedback, setFeedback] = useState('');
    const [options, setOptions] = useState([]);
    const textAreaRef = useRef(null);

    useEffect(() => {
        setOptions(quizQuestions[currentQuestionIndex].options.concat({ id: 'closingBracket', content: '}' }));
    }, [currentQuestionIndex]);

    // Re-run syntax highlighting whenever the answer is updated
    useEffect(() => {
        document.querySelectorAll('pre code').forEach((el) => {
            hljs.highlightElement(el); // Apply syntax highlighting
        });
    }, [answer]);

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
        // content = escapeSpecialChars(content);

        if (!answer.includes(content)) {
            // Append the new content at the end of the answer
            const updatedAnswer = `${answer}${content}\n`;
            setAnswer(updatedAnswer);

            console.log(`Updated answer: ${updatedAnswer}`);

            // Handle removing dropped option from options list
            setOptions(options.filter(option => option.id !== id));

            setTimeout(() => {
                textAreaRef.current.focus();
                // Move cursor to the end of the updated answer
                textAreaRef.current.selectionStart = updatedAnswer.length;
                textAreaRef.current.selectionEnd = updatedAnswer.length;
                console.log("Cursor repositioned to the end after drop");
            }, 0);
        } else {
            console.log("Dropped content already exists in the answer.");
            // Remove the option even if the content already exists in the answer
            setOptions(options.filter(option => option.id !== id));
        }
    };

    const handleInput = (e) => {
        setAnswer(e.target.innerText);
    };

    const checkAnswer = () => {
        console.log("Checking answer...");
        const isCorrect = answer.trim() === currentQuestion.correctAnswer.trim();
        setFeedback(isCorrect ? 'Correct! Great job!' : 'Incorrect. Try again.');
        console.log(`Answer is ${isCorrect ? "correct" : "incorrect"}`);
        console.log(`Correct answer: ${currentQuestion.correctAnswer}`);
    };

    const nextQuestion = () => {
        console.log("Loading next question...");
        setCurrentQuestionIndex(getRandomIndex());
        setAnswer('');
        setFeedback('');
        console.log(`New question index: ${currentQuestionIndex}`);
    };
    const resetQuiz = () => {
        setOptions(quizQuestions[currentQuestionIndex].options);
        setAnswer('');
        setFeedback('');
        console.log(`Current question reset to its default state.`);
    };
    return (
        <div className="p-4 max-w-md mx-auto bg-gray-800 text-white rounded-xl shadow-md my-5"> {/* Updated background to dark */}
            <h2 className="text-xl font-bold mb-4">DSA Quiz: Question {currentQuestion.id}</h2>
            <p className="mb-4">{currentQuestion.question}</p>

            <div
                ref={textAreaRef}
                contentEditable
                onInput={handleInput}
                onDragOver={onDragOver}
                onDrop={onDrop}
                className='text-xl mt-10 line-height-10 h-[400px] w-[600px] '
                placeholder="Drop code snippets here..."
                style={{ backgroundColor: '#1e1e1e', color: '#ffffff', padding: '10px', borderRadius: '5px', overflow: 'auto' }} // Dark background for editor
            >
                <pre><code className="language-cpp">{answer}</code></pre> 
                {/* Add className for Highlight.js */}
            </div>
           
            <div className="mb-4">
                {options.map((option) => (
                    <div
                        key={option.id}
                        draggable
                        onDragStart={(e) => onDragStart(e, option.content, option.id)}
                        className="bg-gray-600 text-white p-2 mb-2 rounded cursor-move inline-block mr-2"
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
                <button onClick={resetQuiz}>reset quiz</button>
                <button
                    onClick={nextQuestion}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                    Next Question
                </button>
            </div>

            {feedback && (
                <p className={`mt-4 p-2 rounded ${feedback.includes('Correct') ? 'bg-green-600' : 'bg-red-600'}`}>
                    {feedback}
                </p>
            )}
        </div>
    );
};

export default DragDrop2;
