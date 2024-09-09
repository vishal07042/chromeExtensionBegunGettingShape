import confetti from 'canvas-confetti';
var myCanvas = document.createElement('canvas');
document.body.appendChild(myCanvas);

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
