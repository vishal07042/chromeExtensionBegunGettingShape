
// newtab.js
chrome.runtime.sendMessage({ message: "getRandomQuestion" }, (response) => {
	console.log(response[2].answer[0]);
	//console.log(response.question2);
	if (response && response[0].question) {
		document.getElementById("question").innerText = response[0].question;
		document.getElementById("input").innerText =
			"Input: " + response[0].input;
		document.getElementById("output").innerText =
			"Output: " + response[0].output;
		document.getElementById("explanation").innerText =
			"Explanation: " + response[0].explanation;
		document.getElementById("source").innerText =
			"Source: " + response[0].source;
		document.getElementById("topic").innerText =
			"Topic: " + response[0].topic;
		document.getElementById("solve").href = response[0].link_to_solve;

		document.querySelector(".leetcode").addEventListener("click", () => {
			let vall = response[0].question;
			window.open(
				`https://www.google.com/search?q=${vall}:leetcode`,
				"_blank"
			);
		});
	}

	if (response && response[1] && new Date().getHours() < 14) {
		// ask user for what he want

		document.querySelector(".appender").innerHTML = `
			<div id="question-box">
      <div class="content">
        <p class="insert-question" id="question2"></p>
      </div>
      <p class="insert-question" id="input"></p>
      <p class="insert-question" id="output"></p>
      <p class="insert-question" id="explanation"></p>

      <div class="controls">
        <p class="insert-author" id="source2"></p>
        <p class="insert-author" id="topic2"></p>
      </div>
    </div>

    <div id="button-box">
      <button id="btn">
        <a id="solve2" target="_blank" class="next"
          >Solve Now
          <img height="12" width="12" style="margin-left: 5px" src="link.png" />
        </a>
      </button> &nbsp; &nbsp;
      <button id="btn" class="leetcode">
        leetcode
      </button>
    </div>
		`;

		document.getElementById("question2").innerText =
			response[1]["Problem: "];
		if (response[1].URL) {
			let so = response[1].URL.split("/")[2].split(".");

			document.getElementById("source2").innerText = "Source: " + so[1];
		}

		document.getElementById("topic2").innerText =
			"Topic: " + response[1]["Topic:"];

		document.getElementById("solve2").href = response[1].URL;

		document.querySelector(".leetcode").addEventListener("click", () => {
			let vall = response[1]["Problem: "];
			window.open(
				`https://www.google.com/search?q=${vall}:leetcode`,
				"_blank"
			);
		});
	} else if (response && response[2]) {
		document.querySelector(".appender").innerHTML = `
		<div class="flip-box"   id="question-box" class="question-3 " style="margin-top: 15px; background-color: rgb(24, 37, 33);  ">
      <div class="content">
       
        <p class="insert-question  question3" id="question3" style="font-size: 1em;"> </p>
     
        <p class="insert-question" id="input3" style="font-size: 25px;">
      </div>
    </div>
		`;
		document.getElementById(
			"question3"
		).innerHTML = `<p>${response[2].title} <span><button class="answer" style="float:right" > Answer</button> &nbsp;  &nbsp; <button  class="show" style="float:right; margin-right:6px"> show options</button>  </span></p>`;
		document.getElementById(
			"input3"
		).innerHTML = `<pre><code class="language-javascript">${response[2].code}</code></pre>`;

		function addShowEventListeners() {
			const show = document.querySelector(".show");
			show.addEventListener("mouseover", () => {
				const options = document.createElement("div");
				const choices = response[2].choices;
				choices.forEach((choice) => {
					//options.innerHTML += `<p>${choice}</p>`;

					// const p = document.createElement("p");
					// p.textContent = choice;
					// options.appendChild(p);
					const escapedChoice = choice.replace(/`/g, "");
					options.innerHTML += `<p>${escapedChoice}</p>`;
				});
				document.getElementById("question3").append(options);
				// options.classList.toggle("show");
			});

			show.addEventListener("mouseout", () => {
				document.getElementById(
					"question3"
				).innerHTML = `<p>${response[2].title} <span><button class="answer" style="float:right" > Answer</button> &nbsp;  &nbsp; <button  class="show" style="float:right; margin-right:6px"> show options</button>  </span></p>`;

				document.getElementById(
					"input3"
				).innerHTML = `<pre><code class="language-javascript  ">${response[2].code}</code></pre>`;
				// Re-attach event listeners to the new .show button
				addShowEventListeners();
			});

			const answer = document.querySelector(".answer");
			answer.addEventListener("mouseover", () => {
				console.log(response[2].answer);
				const correcOptDiv = document.createElement("div");
				const correctoptReason = document.createElement("h4");
				correctoptReason.style.fontStyle = "italic";
				let answerwithoutbaacktick = response[2].answer.replace(
					/`/g,
					""
				);
				correctoptReason.innerHTML = `<p>${answerwithoutbaacktick}</p>`;
				correcOptDiv.innerHTML = ` Correct Answer is  <p><button style="background: pink; color: black; font-weight: bold; font-size: 20px; border-radius: 50px; padding: 10px 20px; border: none;">${response[2].answer[0].toUpperCase()}</button></p>`;
				document.getElementById("question3").append(correcOptDiv);
				document.getElementById("question3").append(correctoptReason);
			});

			answer.addEventListener("mouseout", () => {
				document.getElementById(
					"question3"
				).innerHTML = `<p>${response[2].title} <span><button class="answer" style="float:right" > Answer</button> &nbsp;  &nbsp; <button  class="show" style="float:right; margin-right:6px"> show options</button>  </span></p>`;
				document.getElementById(
					"input3"
				).innerHTML = `<pre><code class="language-javascript  ">${response[2].code}</code></pre>`;
				// Re-attach event listeners to the new .show button
				addShowEventListeners();
			});
		}

		// Initial call to attach event listeners to the initial .show button
		addShowEventListeners();
	}
});
