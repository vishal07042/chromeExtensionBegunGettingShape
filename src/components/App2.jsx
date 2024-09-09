import React, { useEffect, useRef, useState } from "react";

import CodeMirror from "@uiw/react-codemirror";
import { StreamLanguage } from "@codemirror/language";
import { cpp } from "@codemirror/lang-cpp";
import { basicSetup } from "codemirror";
import { EditorView } from "@codemirror/view";
import { autocompletion, completeFromList } from "@codemirror/autocomplete";

import { vim } from "@replit/codemirror-vim";

import ConfettiExplosion from 'react-confetti-explosion';

import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import cpps from "highlight.js/lib/languages/cpp";
import confetti from "canvas-confetti";
// import { autocompletion } from "@codemirror/autocomplete";

// Define some example suggestions for autocomplete
const cppSuggestions = [
	{ label: "int", type: "keyword" },
	{ label: "float", type: "keyword" },
	{ label: "std::cout", type: "function" },
	//   { label: 'iostream', type: 'keyword' },
	// { label: "#include", type: "keyword" },
	// { label: "#include <iostream>", type: "snippet" },
	// { label: "#include <vector>", type: "snippet" },
	// { label: "#include <string>", type: "snippet" },
	// { label: "#include <algorithm>", type: "snippet" },
	{ label: " #include <iostream> \n using namespace std; \nint main(){  \n \n return 0;\n}", type: "snippet" },
	// Add more suggestions as needed
];

const autocompleteExtension = autocompletion({
	override: [completeFromList(cppSuggestions)],
});

const stripHtmlTags = (html) => {
	const tempDiv = document.createElement("div");
	tempDiv.innerHTML = html;
	// Replace <br> tags with new lines
	let textWithNewLines = tempDiv.innerHTML.replace(/<br\s*\/?>/gi, "\n");
	// Remove ```cpp``` strings
	textWithNewLines = textWithNewLines.replace(/```cpp/g, "");
	tempDiv.innerHTML = textWithNewLines;
	return tempDiv.textContent || tempDiv.innerText || "";
};

function App2() {

	chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
		if (request.type === "change_quiz") {
			// Handle the request and send a response
			console.log("Received change_quiz message:", request.quiz);
			// Perform any necessary actions here
			sendResponse({ status: "Quiz changed", quiz: request.quiz });
		}
	});
	
	// const ccpp = hljs.registerLanguage("cpp", cpp);
	const [isExploding, setIsExploding] = React.useState(false);
	const [fullCode, setFullCode] = useState(``);

	const [title, setTitle] = useState("");
	const [code, setCode] = useState("");
	const [choices, setChoices] = useState([]);
	const [answer, setAnswer] = useState("");
	const [solution, setsolution] = useState();

	const [randomNumber, setRandomNumber] = useState(2);

	const [variabletoAnswer, setVariabletoAnswer] = useState(false);

	const [editCode, setEditCode] = useState(true);

	const [correctAnswerNo, setCorrectAnswerNo] = useState();
	const [greenify, setGreenify] = useState("");
	const [reddify, setReddify] = useState("");

	const [selectedOption, setSelectedOption] = useState(null);

	useEffect(() => {
		chrome.runtime.sendMessage(
			{ message: "getRandomQuestion" },
			(response) => {

				console.log("code is ", response[0].code2, "and else is ", response[0].title);
				console.log("response is:", response);
				// if(response[0].code2  == null){
				// 	setCode("a");

				// }

				if (response && response.length > 0) {
					console.log(response[0].answer);
					setAnswer(response[0].answer);
					setTitle(response[0].title);
					setChoices(response[0].choices);
					setsolution(response[0].solution);
					const plainCode = stripHtmlTags(response[0].code2);
					// console.log("response code is ", response[0].code2);
					// console.log("plain code is", plainCode);
					setCode(plainCode);
					console.log("logging no", response[0].answer[0]);
					console.log(typeof response[0].answer);
					setCorrectAnswerNo(response[0].answer[0]);

				}
			}
		);
	}, []);

	const fetchNextQuestion = () => {
		console.log("Next question button clicked");
		chrome.runtime.sendMessage(
			{ message: "getRandomQuestion" },
			(response) => {
				if (response && response.length > 0) {
					console.log(response[0].answer);
					setAnswer(response[0].answer);
					setTitle(response[0].title);
					setChoices(response[0].choices);
					const plainCode = stripHtmlTags(response[0].code2);
					console.log("response code is ", response[0].code2);
					console.log("plain code is", plainCode);
					setCode(plainCode);
				}
			}
		);
	};

	const customTheme = EditorView.theme({
		"&": {
			fontSize: "16px", // Adjust the font size as needed
		},
	});
	return (
		<>
		
		<div className='relative w-full min-h-screen overflow-y-auto flex flex-col items-center p-10 z-10'>
			
			<h2 className='text-2xl mt-10' onMouseUp={(e) => {
				const selectedText = window.getSelection().toString();
				if (selectedText) {
					window.navigator.clipboard.writeText(selectedText);
					console.log("written to clipboard");
				}
			}}>{title}</h2>

			{code && (
				<CodeMirror
					className='  CodeMirror text-3xl mt-10 line-height-10 '
					value={code}
					extensions={[cpp(), autocompleteExtension, vim()]}
					theme='dark' // Optional: Choose a theme
					basicSetup={basicSetup}
					onChange={(value) => {
						setCode(value);
					}}

				/>
			)}

			<pre
				className={`hidden  text-2xl ${editCode ? "hidden" : ""}`}
				onChange={(e) => {
					setCode(e.target.value);

				}}
			>
				<code className='language-cpp'>{code}</code>
			</pre>
			<h1>
				<codapi-snippet
					className='text-2xl'
					sandbox='cpp'
					editor='basic'
				></codapi-snippet>{" "}
				<button
					className='bg-blue-500 text-white p-2 rounded-md m-4'
					onClick={(e) => {
						window.navigator.clipboard.writeText(code);
						const button = e.target;
						button.classList.add('bg-green-500', 'text-white');
						setTimeout(() => {
							button.classList.remove('bg-green-500', 'text-white');
						}, 200);
					}}
				>
					copy to clipborad
				</button>
			</h1>

			{isExploding && <ConfettiExplosion  force={0.8} duration={2700} particleCount={250} width={1600} />}

			{choices.map((choice, index) => {
				const options = choice.split(/ - \\[ \] | - \\[x\\]/);
				const musicalNotes = ["♪", "♫", "♬", "♩"];

				return (
					<div key={index} className='space-y-2'>
						{options.map((option, idx) => (
							<button
								key={idx}
								className={`card w-full flex items-center justify-between px-12 py-2 border rounded-lg m-4 ${selectedOption === option[0]
										? greenify
										: reddify
									}`}
								onMouseEnter={() => {
									const num = Math.floor(Math.random() * 89) + 1;
									console.log(num);

									const aad = new Audio(`../assets/piano-mp3/${num}.mp3`);
									aad.play();

								}}
								onClick={() => {
									console.log("playing song");
									const audio2 = new Audio(
										`../assets/incorrect.mp3`
									);
									const audio = new Audio(
										`../assets/correct.mp3`
									);

									if (option[0] != correctAnswerNo) {
										console.log("wrong ans");

										audio2.play();

									}

									setSelectedOption(option[0]);
									if (option[0] == correctAnswerNo) {
										console.log("kar de hara");
										setIsExploding(true);

										chrome.runtime.sendMessage({ message: "correct" });

										audio.play();
										setGreenify(
											"outline outline-green-500 bg-green-100 text-green-500 border border-solid border-2 hover:bg-green-400"
										);

										setReddify("outline outline-red-500");

										setTimeout(() => {
											window.location.reload();
											// Add any additional actions you want to perform after 5 seconds
										}, 12000);
									}
								}}
							>
								<span className='text-xl font-semibold '>
									{
										musicalNotes[
										(index + idx) % musicalNotes.length
										]
									}
								</span>
								<span className=' items-center font-bold text-2xl px-4'>
									{option
										.replace(/\\/g, "")
										.replace(/\\[x\\]/g, "")
										.replace(/[\]x]/g, "")
										.trim()}
								</span>
							</button>
						))}
					</div>
				);
			})}

			<button
				className='bg-blue-500 text-white p-2 rounded-md m-4'
				onClick={() => {
					setVariabletoAnswer(true);
				}}
			>
				show answer
			</button>

			<p className='text-2xl m-4 '>{variabletoAnswer ? answer : ""}</p>

			{variabletoAnswer && <p text-2xl className="m-2">{solution}</p>}

			{variabletoAnswer && (
				<button
					className='bg-blue-500 text-black p-2 rounded-md m-4'
					onClick={(e) => {
						window.location.reload();
					}}
				>
					next question
				</button>
			)}
		</div>
	
		</>
	);
}

export default App2;