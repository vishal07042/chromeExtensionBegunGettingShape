import React, { useState } from "react";

const Popup = () => {
    const [choosenOptions, setChoosenOptions] = useState("quiz1");

    const optArr = ["choose quiz", "DragDrop1", "DragDrop2", "MatchtheColum", "FlashCard", "FlowChart"];

    return <div>

        <select className="bg-blue-500 text-white px-4 py-2 rounded-md m-4" onChange={(e) => {

                        setChoosenOptions(e.target.value);
                      
                    }}>
                        {optArr.map((item, index) => {
                            return <option className='' key={index} value={item}>{item}</option>;
                })}
            </select>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => {
                chrome.runtime.sendMessage({
                    type: "change_quiz",
                    quiz: choosenOptions,
                    
                },(response) => {
                    console.log(response,"quiz changed signal sent");
                });
            }}>Change Quiz</button>
    </div>;
};

export default Popup;
