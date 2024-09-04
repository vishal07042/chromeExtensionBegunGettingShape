// const axios = require("axios");
// const fs = require("fs");

// async function fetchMarkdownFile(url) {
// 	try {
// 		const response = await axios.get(url);
// 		return response.data;
// 	} catch (error) {
// 		console.error("Error fetching markdown file:", error);
// 		throw error;
// 	}
// }

// function extractQuestionsWithCorrectAnswers(markdown) {
// 	const lines = markdown.split("\n");
// 	const questions = [];
// 	let question = null;
// 	let codeBlock = false;

// 	lines.forEach((line, index) => {
// 		if (line.startsWith("#### Q")) {
// 			if (question) {
// 				// Ensure answer is added to choices
// 				if (
// 					question.answer &&
// 					!question.choices.includes(question.answer)
// 				) {
// 					question.choices.push(question.answer);
// 				}
// 				questions.push(question);
// 			}
// 			question = {
// 				id: questions.length + 1,
// 				title: line.trim(),
// 				text: null,
// 				code: "",
// 				code2: "",
// 				choices: [],
// 				answer: "",
// 			};
// 		} else if (line.startsWith("```cpp")) {
// 			codeBlock = true;
// 			question.code2 += line + "\n";
// 			while (
// 				index + 1 < lines.length &&
// 				!lines[++index].startsWith("```")
// 			) {
// 				question.code2 += lines[index] + "\n";
// 			}
// 			question.code2 += "```";
// 		} else if (line.startsWith("```")) {
// 			codeBlock = true;
// 			question.code += line + "\n";
// 			while (
// 				index + 1 < lines.length &&
// 				!lines[++index].startsWith("```")
// 			) {
// 				question.code += lines[index] + "\n";
// 			}
// 			question.code += "```";
// 		} else if (line.startsWith("- [x]")) {
// 			question.answer = line.trim().replace("- [x] ", "");
// 		} else if (line.startsWith("- [ ]")) {
// 			question.choices.push(line.trim().replace("- [ ] ", ""));
// 		} else if (!codeBlock && question && line.trim()) {
// 			question.text =
// 				(question.text ? question.text + " " : "") + line.trim();
// 		}
// 	});

// 	// Ensure the last question is added with its answer in choices
// 	if (question) {
// 		if (question.answer && !question.choices.includes(question.answer)) {
// 			question.choices.push(question.answer);
// 		}
// 		questions.push(question);
// 	}

// 	return questions;
// }

// async function main() {
// 	const url =
// 		"https://raw.githubusercontent.com/Ebazhanov/linkedin-skill-assessments-quizzes/main/c%2B%2B/c%2B%2B-quiz.md";
// 	const markdown = await fetchMarkdownFile(url);
// 	const questions = extractQuestionsWithCorrectAnswers(markdown);

// 	fs.writeFileSync(
// 		"extracted_questions.json",
// 		JSON.stringify(questions, null, 4),
// 		"utf-8"
// 	);
// 	console.log(
// 		"Questions have been extracted and saved to extracted_questions.json"
// 	);
// }

// main();

// const axios = require("axios");
// const fs = require("fs");

// async function fetchMarkdownFile(url) {
// 	try {
// 		const response = await axios.get(url);
// 		return response.data;
// 	} catch (error) {
// 		console.error("Error fetching markdown file:", error);
// 		throw error;
// 	}
// }

// function extractQuestionsWithCorrectAnswers(markdown) {
// 	const lines = markdown.split("\n");
// 	const questions = [];
// 	let question = null;
// 	let codeBlock = false;
// 	let choiceCount = 0;

// 	lines.forEach((line, index) => {
// 		if (line.startsWith("#### Q")) {
// 			if (question) {
// 				// Ensure answer is added to choices
// 				if (
// 					question.answer &&
// 					!question.choices.includes(question.answer)
// 				) {
// 					question.choices.push(question.answer);
// 				}
// 				questions.push(question);
// 			}
// 			question = {
// 				id: questions.length + 1,
// 				title: line.trim(),
// 				text: null,
// 				code: "",
// 				code2: "",
// 				choices: [],
// 				answer: "",
// 			};
// 			choiceCount = 0; // Reset choice count for new question
// 		} else if (line.startsWith("```cpp")) {
// 			codeBlock = true;
// 			question.code2 += line + "\n";
// 			while (
// 				index + 1 < lines.length &&
// 				!lines[++index].startsWith("```")
// 			) {
// 				question.code2 += lines[index] + "\n";
// 			}
// 			question.code2 += "```";
// 		} else if (line.startsWith("```")) {
// 			codeBlock = true;
// 			question.code += line + "\n";
// 			while (
// 				index + 1 < lines.length &&
// 				!lines[++index].startsWith("```")
// 			) {
// 				question.code += lines[index] + "\n";
// 			}
// 			question.code += "```";
// 		} else if (line.startsWith("- [x]")) {
// 			question.answer = line.trim().replace("- [x] ", "");
// 		} else if (line.startsWith("- [ ]")) {
// 			choiceCount++;
// 			question.choices.push(
// 				`${choiceCount}. ${line.trim().replace("- [ ] ", "")}`
// 			);
// 		} else if (!codeBlock && question && line.trim()) {
// 			question.text =
// 				(question.text ? question.text + " " : "") + line.trim();
// 		}
// 	});

// 	// Ensure the last question is added with its answer in choices
// 	if (question) {
// 		if (question.answer && !question.choices.includes(question.answer)) {
// 			choiceCount++;
// 			question.choices.push(`${choiceCount}. ${question.answer}`);
// 		}
// 		questions.push(question);
// 	}

// 	return questions;
// }

// async function main() {
// 	const url =
// 		"https://raw.githubusercontent.com/Ebazhanov/linkedin-skill-assessments-quizzes/main/c%2B%2B/c%2B%2B-quiz.md";
// 	const markdown = await fetchMarkdownFile(url);
// 	const questions = extractQuestionsWithCorrectAnswers(markdown);

// 	fs.writeFileSync(
// 		"extracted_questions.json",
// 		JSON.stringify(questions, null, 4),
// 		"utf-8"
// 	);
// 	console.log(
// 		"Questions have been extracted and saved to extracted_questions.json"
// 	);
// }

// main();

// const axios = require("axios");
// const fs = require("fs");

// async function fetchMarkdownFile(url) {
// 	try {
// 		const response = await axios.get(url);
// 		return response.data;
// 	} catch (error) {
// 		console.error("Error fetching markdown file:", error);
// 		throw error;
// 	}
// }

// function extractQuestionsWithCorrectAnswers(markdown) {
// 	const lines = markdown.split("\n");
// 	const questions = [];
// 	let question = null;
// 	let codeBlock = false;
// 	let choiceCount = 0;

// 	lines.forEach((line, index) => {
// 		if (line.startsWith("#### Q")) {
// 			if (question) {
// 				// Ensure answer is added to choices with correct numbering
// 				if (
// 					question.answer &&
// 					!question.choices.includes(question.answer)
// 				) {
// 					choiceCount++;
// 					question.choices.push(`${choiceCount}. ${question.answer}`);
// 				}
// 				questions.push(question);
// 			}
// 			question = {
// 				id: questions.length + 1,
// 				title: line.trim(),
// 				text: null,
// 				code: "",
// 				code2: "",
// 				choices: [],
// 				answer: "",
// 			};
// 			choiceCount = 0; // Reset choice count for new question
// 		} else if (line.startsWith("```cpp")) {
// 			codeBlock = true;
// 			question.code2 += line + "\n";
// 			while (
// 				index + 1 < lines.length &&
// 				!lines[++index].startsWith("```")
// 			) {
// 				question.code2 += lines[index] + "\n";
// 			}
// 			question.code2 += "```";
// 		} else if (line.startsWith("```")) {
// 			codeBlock = true;
// 			question.code += line + "\n";
// 			while (
// 				index + 1 < lines.length &&
// 				!lines[++index].startsWith("```")
// 			) {
// 				question.code += lines[index] + "\n";
// 			}
// 			question.code += "```";
// 		} else if (line.startsWith("- [x]")) {
// 			choiceCount++;
// 			question.answer = `${choiceCount}. ${line
// 				.trim()
// 				.replace("- [x] ", "")}`;
// 		} else if (line.startsWith("- [ ]")) {
// 			choiceCount++;
// 			question.choices.push(
// 				`${choiceCount}. ${line.trim().replace("- [ ] ", "")}`
// 			);
// 		} else if (!codeBlock && question && line.trim()) {
// 			question.text =
// 				(question.text ? question.text + " " : "") + line.trim();
// 		}
// 	});

// 	// Ensure the last question is added with its answer in choices
// 	if (question) {
// 		if (question.answer && !question.choices.includes(question.answer)) {
// 			choiceCount++;
// 			question.choices.push(`${choiceCount}. ${question.answer}`);
// 		}
// 		questions.push(question);
// 	}

// 	return questions;
// }

// async function main() {
// 	const url =
// 		"https://raw.githubusercontent.com/Ebazhanov/linkedin-skill-assessments-quizzes/main/c%2B%2B/c%2B%2B-quiz.md";
// 	const markdown = await fetchMarkdownFile(url);
// 	const questions = extractQuestionsWithCorrectAnswers(markdown);

// 	fs.writeFileSync(
// 		"extracted_questions.json",
// 		JSON.stringify(questions, null, 4),
// 		"utf-8"
// 	);
// 	console.log(
// 		"Questions have been extracted and saved to extracted_questions.json"
// 	);
// }

// main();

const axios = require("axios");
const fs = require("fs");

async function fetchMarkdownFile(url) {
	try {
		const response = await axios.get(url);
		return response.data;
	} catch (error) {
		console.error("Error fetching markdown file:", error);
		throw error;
	}
}

function extractQuestionsWithCorrectAnswers(markdown) {
	const lines = markdown.split("\n");
	const questions = [];
	let question = null;
	let codeBlock = false;
	let choiceCount = 0;

	lines.forEach((line, index) => {
		if (line.startsWith("#### Q")) {
			if (question) {
				questions.push(question);
			}
			question = {
				id: questions.length + 1,
				title: line.trim(),
				text: null,
				code: "",
				code2: "",
				choices: [],
				answer: "",
			};
			choiceCount = 0; // Reset choice count for new question
		} else if (line.startsWith("```cpp")) {
			codeBlock = true;
			question.code2 += line + "\n";
			while (
				index + 1 < lines.length &&
				!lines[++index].startsWith("```")
			) {
				question.code2 += lines[index] + "\n";
			}
			question.code2 += "```";
		} else if (line.startsWith("```")) {
			codeBlock = true;
			question.code += line + "\n";
			while (
				index + 1 < lines.length &&
				!lines[++index].startsWith("```")
			) {
				question.code += lines[index] + "\n";
			}
			question.code += "```";
		} else if (line.startsWith("- [x]") || line.startsWith("- [ ]")) {
			choiceCount++;
			const choiceText = `${choiceCount}. ${line
				.trim()
				.replace(/- \[[x ]\] /, "")}`;
			question.choices.push(choiceText);
			if (line.startsWith("- [x]")) {
				question.answer = choiceText;
			}
		} else if (!codeBlock && question && line.trim()) {
			question.text =
				(question.text ? question.text + " " : "") + line.trim();
		}
	});

	// Ensure the last question is added
	if (question) {
		questions.push(question);
	}

	return questions;
}

async function main() {
	const url =
		"https://raw.githubusercontent.com/Ebazhanov/linkedin-skill-assessments-quizzes/main/c%2B%2B/c%2B%2B-quiz.md";
	const markdown = await fetchMarkdownFile(url);
	const questions = extractQuestionsWithCorrectAnswers(markdown);

	fs.writeFileSync(
		"extracted_questions.json",
		JSON.stringify(questions, null, 4),
		"utf-8"
	);
	console.log(
		"Questions have been extracted and saved to extracted_questions.json"
	);
}

main();
