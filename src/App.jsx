import React, { useEffect, useState } from "react";

export function App() {
	const [hostname, setHostname] = useState("");
	const [href, setHref] = useState("");
	const [listOfBlockedWebsites, setListOfBlockedWebsites] = useState([]);
	const [listOfBlockedUrls, setListOfBlockedUrls] = useState([]);
	const [btn1, setBtn1] = useState(false);
	const [btn2, setBtn2] = useState(false);
	const [bsites, setbsites] = useState([]);

	useEffect(() => {
		chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
			if (tabs.length > 0) {
				const url = new URL(tabs[0].url);
				setHostname(url.hostname);
				setHref(url.href);
			}
		});
	}, []);

	useEffect(() => {
		chrome.storage.sync.get(
			["listOfBlockedWebsites", "listOfBlockedUrls"],
			(result) => {
				if (chrome.runtime.lastError) {
					console.error(
						"Error retrieving lists: ",
						chrome.runtime.lastError
					);
					return;
				}
				setListOfBlockedWebsites(result.listOfBlockedWebsites || []);
				setListOfBlockedUrls(result.listOfBlockedUrls || []);
			}
		);
	}, []);

	useEffect(() => {
		if (btn1) {
			chrome.storage.sync.set({ listOfBlockedWebsites }, () => {
				console.log("added to list");
				console.log(listOfBlockedWebsites, "list of websites");
				setBtn1(false);
			});
		}
	}, [listOfBlockedWebsites]);

	useEffect(() => {
		if (btn2) {
			chrome.storage.sync.set({ listOfBlockedUrls }, () => {
				console.log("added to list");
				console.log(listOfBlockedUrls, "list of urls");
				setBtn2(false);
			});
		}
	}, [listOfBlockedUrls]);

	const addToBlockedWebsites = () => {
		setBtn1(true);
		if (!listOfBlockedWebsites.includes(hostname)) {
			setListOfBlockedWebsites((prevList) => [...prevList, hostname]);
		}
		chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
			chrome.tabs.remove(tabs[0].id);
		});
	};

	const addToBlockedUrls = () => {
		setBtn2(true);
		if (!listOfBlockedUrls.includes(href)) {
			setListOfBlockedUrls((prevList) => [...prevList, href]);
		}
		chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
			chrome.tabs.remove(tabs[0].id);
		});
	};

	function getBlockedWebsites(callback) {
		chrome.storage.sync.get(["listOfBlockedWebsites"], (result) => {
			if (chrome.runtime.lastError) {
				console.error(
					"Error retrieving list: ",
					chrome.runtime.lastError
				);
				return;
			}
			const listOfBlockedWebsites = result.listOfBlockedWebsites || [];
			console.log("Retrieved list: ", listOfBlockedWebsites);
			callback(listOfBlockedWebsites);
		});
	}

	// Example usage:
	getBlockedWebsites((listOfBlockedWebsites) => {
		console.log("List of blocked websites: ", listOfBlockedWebsites);
		// You can perform further actions with the retrieved list here
	});

	function getBlockedUrls(callback) {
		chrome.storage.sync.get(["listOfBlockedUrls"], (result) => {
			const listOfBlockedUrls = result.listOfBlockedUrls || [];
			callback(listOfBlockedUrls);
		});
	}

	getBlockedUrls((listOfBlockedUrls) => {
		console.log("List of blocked urls: ", listOfBlockedUrls);
		// You can perform further actions with the retrieved list here
	});

	let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	return (
		<>
			<h1>pop up</h1>
			<form
				id='form'
				onSubmit={(e) => {
					e.preventDefault();
					let startingValueadd = e.target.selectQuestion.value;
					let username = e.target.username.value;
					chrome.runtime.sendMessage(
						{
							startingValueadd: startingValueadd,
							username: username,
						},
						function () {
							console.log("message sent");
						}
					);
				}}
			>
				<h1>
					{" "}
					<label for='questions'>your leetcode username</label>
				</h1>
				<input
					type='text'
					name='username'
					id='username'
					placeholder='provish'
				/>
				<h1>
					{" "}
					<label for='questions'>
						select no. of que you wanna to everday
					</label>
				</h1>
				<select
					name='questions'
					id='selectQuestion'
					type='number'
					required
				>
					{arr.map((i) => (
						<option
							className='font-bold bg-black text-green-500 '
							key={i}
							value={i}
						>
							<p>{i}</p>
						</option>
					))}
				</select>
				<br />
				<br />
				<button type='submit'>submit</button>
			</form>

			<div>
				<h1>Popup Page</h1>
				<div className='bg-red-200 m-4 p-2 flex text-2xl font-sans hover:font-serif'>
					{hostname}{" "}
					<button
						className='bg-red-600 text-white p-2 rounded-md text-4xl mx-4 hover:bg-purple-400 fixed right-[5px]'
						onClick={addToBlockedWebsites}
					>
						{btn1 ? "blocking" : "block"}
					</button>
				</div>

				<div className='bg-red-200 m-4 p-2 flex text-xl font-sans hover:font-serif'>
					{href}{" "}
					<button
						className='bg-red-600 text-white p-2 rounded-md text-xl mx-4 fixed right-[5px]'
						onClick={addToBlockedUrls}
					>
						{btn2 ? "blocking" : "block"}
					</button>
				</div>
			</div>
		</>
	);
}
