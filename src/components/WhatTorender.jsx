import React, { useState } from 'react'
import App2 from './App2';
import QuizSection from './DragDrop1';
import DragDrop2 from './DragDrop2';
import ColumnMatchingQuiz from './Matchthecolumn';

function WhatTorender() {
    const [quizAppps, setQuizApps] = useState("App2");

    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
        if (request.type === "change_quiz") {
            console.log("Received change_quiz message:", request.quiz);
            setQuizApps(request.quiz);
            sendResponse({ status: "Quiz changed", quiz: request.quiz });
        }
    });

    return (
        <div style={{ position: 'relative', zIndex: 10 }}>
            {quizAppps === "App2" ? <App2 /> : null}
            {quizAppps === "DragDrop1" ? <QuizSection /> : null}
            {quizAppps === "DragDrop2" ? <DragDrop2 /> : null}
           {quizAppps === "ColumnMatchingQuiz" ? <ColumnMatchingQuiz /> : null}
        </div>
    );
}

export default WhatTorender;
