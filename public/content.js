console.log(" hello from content.js");



console.log(" hello from content.js");

function getDayOfYear() {
    const now = new Date(); // Get the current date
    const start = new Date(now.getFullYear(), 0, 0); // Get the first day of the year
    const diff = now - start; // Calculate the difference in milliseconds
    const oneDay = 1000 * 60 * 60 * 24; // One day in milliseconds
    const dayOfYear = Math.floor(diff / oneDay); // Calculate the day of the year
    return dayOfYear;
}

console.log(getDayOfYear()); // Outputs the current day of the year


// Listen for messages from the background script
chrome.runtime.onMessage.addListener(async function (
	request,
	sender,
	sendResponse
) {
	if (request.message) {
		console.log("Total problems solved: " + request.message);
		console.log("Starting point is set to: " + request.message2);
		console.log("hui execute");

		let totalSolved = request.message;

		let startingPoint = await request.message2;
		console.log("hui execute");

		if (
			totalSolved < startingPoint &&
			location.hostname != "leetcode.com" &&
			location.hostname != "chatgpt.com" &&
			location.hostname != "www.codehelp.in" &&
			location.hostname != "learn.codehelp.in" &&
			location.hostname != "www.google.com" &&
			location.hostname != "takeuforward.org" &&
			location.hostname != "www.geeksforgeeks.org"
		) {

			//  window.document.body.innerHTML = <h1>you havent solved leetcode problems ${totalSolved} </h1>;
			    




				 window.document.body.innerHTML = `<h1>You haven't solved enough LeetCode problems to access this site:  you have solved ${
						totalSolved - getDayOfYear()
					}  que and  the target is  to complete ${
						startingPoint - getDayOfYear()
					}  que the target as things will pile up you can whitelist this site if urgent</h1>`;

			 setTimeout(() => {
				sendResponse({ message: "close tab" });
				console.log("closing tab msg send");
			 }, 5000)

			//  sendResponse({ message: "close tab" });
		}

		console.log("hui exexute");
	}
});





console.log("hello from content js");

let finItems;
let websitesToRemove;
let urlToRemove;
// Send a message to the background script to get the items
chrome.runtime.sendMessage({ type: "getItems" }, (response) => {
	const items = response.items || [];
	finItems = items;
	console.log("Items retrieved from storage:", items);
	checkAndDelete();
	// Do something with the items, e.g., block keywords on the page
});

chrome.runtime.sendMessage({ type: "getUrlsToRemove" }, (response) => {
	const urls = response.urls || [];
	urlToRemove = urls;
	console.log("Urls retrieved from storage:", urls);
	urlToRemove = urls;
	console.log(urlToRemove);
	closingUrls();
});

chrome.runtime.sendMessage({ type: "getWebsitesToRemove" }, (response) => {
	const websites = response.websites || [];
	console.log("Websites retrieved from storage:", websites);
	websitesToRemove = websites;
	console.log(websitesToRemove);
	closingWebsites();
});

// function checkAndDelete(){
//     finItems.map((item) => {
//         if(window.document.body.innerText.includes(item)){
//             console.log("going in if")
//             console.log("deleting", item);
//             window.location.href = "https://www.google.com/";
//         }else{
//             console.log("going in else")
//         }
//     })
// }

function checkAndDelete() {
	finItems.map((item) => {
		if (window.document.body.innerText.includes(item)) {
			document.body.innerHTML = "";
			console.log("going in if");
			console.log("deleting", item);

			// Create a new element to display the message
			const messageNode = document.createElement("div");
			messageNode.innerText = `Keyword detected. Closing page in 5 seconds...`;
			messageNode.style.position = "fixed";
			messageNode.style.top = "50%";
			messageNode.style.left = "50%";
			messageNode.style.transform = "translate(-50%, -50%)";
			messageNode.style.backgroundColor = "red";
			messageNode.style.color = "white";
			messageNode.style.padding = "20px";
			messageNode.style.zIndex = "10000";
			document.body.appendChild(messageNode);

			// Set up the countdow
			let countdown = 5;
			const intervalId = setInterval(() => {
				countdown--;
				if (countdown > 0) {
					messageNode.innerText = `Keyword detected. Closing page in ${countdown} seconds...`;
				} else {
					clearInterval(intervalId);
					// Close the tab after 5 seconds
					chrome.runtime.sendMessage({ type: "closeTab" });
				}
			}, 1000);
		} else {
			console.log("going in else");
		}
	});
}

function closingWebsites() {
	if (websitesToRemove) {
		websitesToRemove.map((website) => {
			if (window.location.hostname == website) {
				console.log("going in if");
				chrome.runtime.sendMessage({ type: "closeTabwebsites" });
			}
		});
	}
}

function closingUrls() {
	if (urlToRemove) {
		urlToRemove.map((url) => {
			if (window.location.href == url) {
				console.log("going in if");
				chrome.runtime.sendMessage({ type: "closeTabUrls" });
			}
		});
	}
}













