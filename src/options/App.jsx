// import React, { useState } from 'react';

// function Options() {
//     const [choosenOptions, setChoosenOptions] = useState("quiz1");
    
//     const optArr = ["DragDrop1", "DragDrop2", "MatchtheColum"];
//     return (
//         <div>
//             <select className='' onChange={(e) => {
                
//                 setChoosenOptions(newQuiz);
//                 chrome.runtime.sendMessage({
//                     type: "change_quiz",
//                     quiz: choosenOptions,
//                 });
//             }}>
//                 {optArr.map((item, index) => {
//                     return <option className='' key={index} value={item}>{item}</option>;
//                 })}
//             </select>

//         </div>
//     );
// }

// export default Options;