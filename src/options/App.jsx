import { useEffect, useState } from "react";

export function App() {


		const [items, setItems] = useState([]);
		const [websites, setWebsites] = useState([]);
		const [blockedUrls, setBlockedUrls] = useState([]);
		const [password, setPassword] = useState(false);
		const [letUserPassword, setLetUserPassword] = useState("");

		const [statetoShowPassword, setStatetoShowPassword] =
			useState(undefined);

		useEffect(() => {
			// Fetch items from storage when the component mounts
			chrome.storage.sync.get("items", (data) => {
				setItems(data.items || []);
			});

			// Fetch blocked websites from storage
			chrome.storage.sync.get("listOfBlockedWebsites", (data) => {
				setWebsites(data.listOfBlockedWebsites || []);
			});

			// Fetch blocked URLs from storage
			chrome.storage.sync.get("listOfBlockedUrls", (data) => {
				setBlockedUrls(data.listOfBlockedUrls || []);
			});

			chrome.storage.sync.get(["passwordsUser"], (data) => {
				setStatetoShowPassword(data.passwordsUser || undefined);
			});
		}, []);

		const onSubmitKeywords = () => {
			console.log("sending setItems");
			console.log(items);
			chrome.storage.sync.set({ items: items }, () => {
				console.log("items set");
			});
			chrome.runtime.sendMessage(
				{ type: "setItems", items: items },
				(response) => {
					console.log(response);
					console.log("runtime message sent");
				}
			);
		};

		const onRemoveItem = (itemToRemove) => {
			const newItems = items.filter((item) => item !== itemToRemove);
			setItems(newItems);
			chrome.storage.sync.set({ items: newItems }, () => {
				console.log("Item removed from keywords list");
			});
		};

		const onRemoveWebsite = (websiteToRemove) => {
			const newWebsites = websites.filter(
				(website) => website !== websiteToRemove
			);
			setWebsites(newWebsites);
			chrome.storage.sync.set(
				{ listOfBlockedWebsites: newWebsites },
				() => {
					console.log("Website removed from blocked list");
				}
			);
		};

		const onRemoveUrl = (urlToRemove) => {
			const newUrls = blockedUrls.filter((url) => url !== urlToRemove); // Corrected variable usage
			setBlockedUrls(newUrls);
			chrome.storage.sync.set({ listOfBlockedUrls: newUrls }, () => {
				console.log("Url removed from blocked list");
			});
		};

		const onSubmit = (event) => {
			event.preventDefault();
			const form = event.target;
			const input = form.item;
			const newItems = [...items, input.value];
			setItems(newItems);
			form.reset();
		};



	let arrofWebsite = [
		"takeuforward",
		"codeforces",
		"chatgpt",
		"gfg",
		"codeStudio",
		"codeHelp",
		"learnyard",
		"bard",
		"apna college",
		"codingShuttle",
		"educosys",
	];

	return (
		<div>
			<form id='form'>
				<h1 className='text-2xl  text-orange-800 p-2 rounded-md'>
					select the website which you want to use like chat gpt or
					gfg
				</h1>
			</form>

			<h3 className='text-2xl font-bold m-5'>
				specify the website if more
			</h3>

			<form action=''>
				{arrofWebsite.map((value, index, array) => {
					return (
						<div className='flex gap-4'>
							{/* <select name='' id='' className=""></select> */}
							<input
								className='m-2 text-xs'
								type='radio'
								id={value}
								value={value}
							/>{" "}
							<span className='text-2xl font-bold'>{value}</span>
						</div>
					);
				})}

				<textarea
					placeholder=' one per line https://neetcode.io/    window.hostname '
					id=''
					cols='30'
					rows='10'
					className='text-2xl font-bold m-5'
				></textarea>

				<button
					className=' bg-red-500 text-white p-2 rounded-md text-4xl mx-4 my-4'
					type='submit'
				>
					submit
				</button>
			</form>

			<div>
				<h2 className='font-bold text-2xl bg-red-500 text-center justify-center'>
					Keyword to block
				</h2>
				<form
					onSubmit={onSubmit}
					className='flex justify-center mt-4 mb-4'
				>
					<input
						type='text'
						name='item'
						placeholder='Add a new item'
						required
						className='border-2 border-black text-4xl'
					/>
					<button className='bg-red-500 text-white p-2 rounded-md text-4xl mx-4'>
						Add
					</button>
				</form>
				<ul>
					{items.map((item, index) => (
						<Item
							onRemoveItem={onRemoveItem}
							key={item + index}
							item={item}
							className='text-4xl'
						/>
					))}
				</ul>
				<button
					onClick={onSubmitKeywords}
					className='bg-red-500 text-white p-2 rounded-md text-4xl my-3 mx-5'
				>
					Submit
				</button>

				<h2 className='font-bold text-2xl bg-red-500 text-center justify-center my-[3.5rem]'>
					Blocked Websites
				</h2>
				<ul>
					{websites.map((website, index) => (
						<Item
							onRemoveItem={onRemoveWebsite}
							key={website + index}
							item={website}
							className='text-4xl'
						/>
					))}
				</ul>

				<h2 className='font-bold text-2xl bg-red-500 text-center justify-center'>
					Blocked URLs
				</h2>
				<ul>
					{blockedUrls.map((url, index) => (
						<Item
							onRemoveItem={onRemoveUrl}
							key={url + index}
							item={url}
							className='text-4xl'
						/>
					))}
				</ul>

				<form
					onSubmit={async (e) => {
						e.preventDefault();

						await chrome.storage.sync.set(
							{ passwordsUser: letUserPassword },
							() => {
								setPassword(true);
								console.log("Password set in storage");
								console.log(letUserPassword);
							}
						);
					}}
					className='  my-3 gap-4'
				>
					<label
						htmlFor='password'
						className='text-2xl inline gap-2 mx-3'
					>
						set password
					</label>
					{statetoShowPassword ? (
						<p>password set</p>
					) : (
						<input
							type='password'
							placeholder='password min 8 characters'
							min={8}
							id='password'
							name='password'
							className='border-2 border-black text-4xl'
							value={letUserPassword}
							onChange={(e) => {
								let v = e.target.value;
								if (v.length >= 8) {
								} else {
								}
								setLetUserPassword(v);
							}}
						/>
					)}
					<button
						className='bg-red-500 text-white p-2 rounded-md text-2xl m-4 block'
						type='submit'
					>
						{password ? "done" : "submit"}
					</button>
				</form>
			</div>

			<div className=' m-4'>
				<h2> special thanks to </h2>
				<h2 className='flex text-2xl gap-4'>
					Inspired by{" "}
					<a
						className='text-blue-400'
						href='https://chromewebstore.google.com/detail/dsa-data-structures-algor/jempflgldkcchddagplfblmbbkcfhobi?hl=en'
					>
						extension
					</a>{" "}
				</h2>
				<h2 className='flex text-2xl gap-4'>
					Inspired by{" "}
					<a className='text-blue-400' href=''>
						{" "}
						André Ruffert.
					</a>{" "}
					and his project{" "}
					<a
						className='text-blue-400'
						href='https://javascript-questions.netlify.app/'
					>
						{" "}
						js quiz
					</a>
				</h2>
				<h2 className='flex text-2xl gap-4'>
					Thanks{" "}
					<a
						className='text-blue-400'
						href='https://github.com/lydiahallie'
					>
						lydia hadllie
					</a>{" "}
					for js quesions{" "}
					<a
						className='text-blue-400'
						href='https://github.com/lydiahallie/javascript-questions'
					>
						javascript-challenge-questions
					</a>
				</h2>
				<h2 className='flex text-2xl gap-4'>
					Thanks faisal shohag for leetcode api{" "}
					<a
						className='text-blue-400'
						href='https://leetcode-api-faisalshohag.vercel.app/'
					>
						leetcode-api
					</a>
				</h2>
				<h2 className='flex text-2xl gap-4'>
					Thanks to love babbar for 450 ques{" "}
					<a
						className='text-blue-400'
						href='https://drive.google.com/file/d/1FMdN_OCfOI0iAeDlqswCiC2DZzD4nPsb/view'
					>
						sheet link
					</a>
					<a
						className='text-blue-400'
						href='https://www.youtube.com/@LoveBabbar'
					>
						yt channel
					</a>
				</h2>
				<h2></h2>
				<h4 className='flex text-2xl gap-4'>
					Developed by{" "}
					<a  className="text-blue-400" href='https://github.com/vishal07042/'>Vishal </a>
					give this project a
					<a
						className='text-blue-400'
						href='https://github.com/vishal07042/chromeExtensionBegunGettingShape'
					>
						star
					</a>

				</h4>
			
			</div>
		</div>
	);
}





function Item({ item, onRemoveItem }) {
	return (
		<li className='text-4xl my-3'>
			{item}
			<button
				className='delete text-6xl'
				onClick={async () => {
					const d = prompt("enter your password");
					const result = await chrome.storage.sync.get([
						"passwordsUser",
					]);
					console.log("restult", result);
					const userPasswordfromStorage = await result.passwordsUser;
					console.log(
						"userpasswordfromestorage",
						userPasswordfromStorage
					);
					if (d === userPasswordfromStorage) {
						onRemoveItem(item);
					} else {
						alert("wrong password");
					}
				}}
			>
				<span className='text-4xl mx-4'>x</span>
			</button>
		</li>
	);
}
