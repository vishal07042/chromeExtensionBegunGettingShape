// const fs = require("fs");
// const puppeteer = require("puppeteer");

// const QUESTIONS_URL =
// 	"https://github.com/mauriziomarini/linkedin-skill-assessments-quizzes-1/blob/master/c%2B%2B/c%2B%2Bquiz.md?plain=1";
// const QUESTIONS_PATH = "src/assets/questions.json";

// (async () => {
// 	const browser = await puppeteer.launch();
// 	const page = await browser.newPage();
// 	await page.goto(QUESTIONS_URL, { waitUntil: 'networkidle2' });

// 	const questions = await page.evaluate(() => {
// 		const questionElements = Array.from(document.querySelectorAll('h4'));
// 		const questions = questionElements.map((questionNode) => {
// 			const questionText = questionNode.innerText;
// 			const codeNode = questionNode.nextElementSibling;
// 			const choicesNode = codeNode.nextElementSibling;

// 			const code = codeNode && codeNode.querySelector('code') ? codeNode.querySelector('code').innerText : null;
// 			const choices = choicesNode ? Array.from(choicesNode.querySelectorAll('li')).map(choiceNode => ({
// 				text: choiceNode.innerText,
// 				isCorrect: choiceNode.querySelector('input[type="checkbox"]') ? choiceNode.querySelector('input[type="checkbox"]').checked : false
// 			})) : [];

// 			return {
// 				title: questionText,
// 				code: code,
// 				choices: choices
// 			};
// 		});
// 		return questions;
// 	});

// 	if (questions.length === 0) {
// 		console.error("No questions extracted.");
// 	} else {
// 		console.log("Questions extracted:", questions);
// 	}

// 	saveQuestions(questions);

// 	await browser.close();
// })();

// function saveQuestions(data) {
// 	const questions = {
// 		updatedAt: new Date(),
// 		data: data,
// 	};

// 	fs.writeFile(
// 		QUESTIONS_PATH,
// 		JSON.stringify(questions, null, 2),
// 		(err) => {
// 			if (err) throw err;
// 			console.log("Questions saved successfully.");
// 		}
// 	);
// }

const fs = require("fs");
const axios = require("axios");
const TurndownService = require("turndown");
const hljs = require("highlight.js/lib/core");
const cpp = require("highlight.js/lib/languages/cpp");
hljs.registerLanguage("cpp", cpp);

const QUESTIONS_URL =
	"https://raw.githubusercontent.com/mauriziomarini/linkedin-skill-assessments-quizzes-1/master/c%2B%2B/c%2B%2Bquiz.md";
const QUESTIONS_PATH = "src/assets/questions.json";

// Ensure that the questions.json file exists
if (!fs.existsSync(QUESTIONS_PATH)) {
	fs.writeFileSync(QUESTIONS_PATH, JSON.stringify({ data: [] }, null, 2));
}

const CACHED_QUESTIONS_RAW = fs.readFileSync(QUESTIONS_PATH);
const CACHED_QUESTIONS = JSON.parse(CACHED_QUESTIONS_RAW);

(async () => {
	try {
		const response = await axios.get(QUESTIONS_URL);
		const markdownContent = response.data;

		const questions = parseQuestions(markdownContent);

		saveQuestions(questions);
	} catch (err) {
		console.error("An error occurred:", err);
	}
})();

function parseQuestions(markdown) {
	const questionBlocks = markdown.split("\n\n#### Q");
	const questions = questionBlocks.slice(1).map((block, index) => {
		const [questionText, ...rest] = block.split("\n\n");
		const codeBlock = rest.find((line) => line.startsWith("```cpp"));
		const answerChoices = rest.filter((line) => line.startsWith("- ["));
		const correctAnswer = answerChoices.find((choice) =>
			choice.includes("[x]")
		);

		return {
			id: index + 1,
			title: `Q${index + 1}. ${questionText.trim()}`,
			code: codeBlock
				? codeBlock.replace(/```cpp|```/g, "").trim()
				: null,
			choices: answerChoices.map((choice) =>
				choice.replace(/- \[[x ]\] /, "").trim()
			),
			answer: correctAnswer
				? correctAnswer.replace(/- \[x\] /, "").trim()
				: "",
		};
	});

	return questions;
}

function saveQuestions(data) {
	const turndownService = new TurndownService();
	const questions = {
		updatedAt: new Date(),
		data: data.map((data) => {
			data.code = data.code && hljs.highlight("cpp", data.code).value;
			data.answer = turndownService.turndown(data.answer);
			data.choices = data.choices.map((choice) =>
				turndownService.turndown(choice)
			);
			return data;
		}),
	};

	if (
		JSON.stringify(CACHED_QUESTIONS.data) !== JSON.stringify(questions.data)
	) {
		fs.writeFile(
			QUESTIONS_PATH,
			JSON.stringify(questions, null, 2),
			(err) => {
				if (err) throw err;
				console.log("The updated questions.json file has been saved.");
			}
		);
	} else {
		console.log("Nothing to update.");
	}
}
