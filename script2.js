import collection from 'easter-egg-collection'

import confetti from 'canvas-confetti';
var myCanvas = document.createElement('canvas');
document.body.appendChild(myCanvas);

const keys = ["hi", "wink", "unicorn", "kumamon", "haha", "travel", "bat", "robot", "hiphop", "hippo", "pokeball", "pie", "ufo", "walk", "cool", "balloon", "hangover", "kirby", "no", "onmyway", "haters", "board", "snorlax", "fly", "earth", "thankyou", "swim", "penguin", "handsome", "winner", "tank", "jump", "fox", "mario", "joker", "rabbit", "sensei", "piggy", "psyduck", "dragon", "salamander", "airguitar", "pikachu", "bravo", "ghost", "britney", "pikarun", "catrun", "koggy", "sonic", "doggy", "spongebob", "spon", "gun", "money", "homer", "dog", "bird", "piqiu", "lol", "ohhh", "nyancat"];

chrome.runtime.onMessage.addListener((message) => {
	if (message.message === "correct") {
		console.log("confetti msg mil gya");
		var myConfetti = confetti.create(myCanvas, {
			resize: true,
			useWorker: true
		});
		myConfetti({
			particleCount: 100,
			spread: 160
		});
	}
});

// Function to simulate key press
function simulateKeyPress(key) {
	const keydownEvent = new KeyboardEvent('keydown', { key: key, bubbles: true });
	const keypressEvent = new KeyboardEvent('keypress', { key: key, bubbles: true });
	const keyupEvent = new KeyboardEvent('keyup', { key: key, bubbles: true });
	document.activeElement.dispatchEvent(keydownEvent);
	document.activeElement.dispatchEvent(keypressEvent);
	document.activeElement.dispatchEvent(keyupEvent);
}

// Function to simulate pressing each character of a key in sequence
function simulateKeySequence(key) {
	key.split('').forEach((char, index) => {
		setTimeout(() => {
			simulateKeyPress(char);
		}, index * 300); // 100ms delay between each key press
	});
}

// Simulate key press sequence every 3 minutes (180000 milliseconds)
setInterval(() => {
	document.documentElement.focus(); // Focus the HTML tag
	const randomKey = keys[Math.floor(Math.random() * keys.length)];
	simulateKeySequence(randomKey);
}, 18000);
