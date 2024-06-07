let s =
	"https://www.youtube.com/watch?v=bWrsk0QizEk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=6";

let l = s.split("=")[2].split("&")[0];

if (l == "PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA") {
	console.log(l);
	console.log("gaya andhar");
}
