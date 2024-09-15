import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import collection from 'easter-egg-collection'; 
import App2 from './components/App2';
import WhatTorender from './components/WhatTorender';

const App = () => {

	chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
		if (request.type === "change_quiz") {
			// Handle the request and send a response
			console.log("Received change_quiz message:", request.quiz);
			// Perform any necessary actions here
			sendResponse({ status: "Quiz changed", quiz: request.quiz });
		}
	});

  const [init, setInit] = useState(false);

	// useEffect(() => {
	// 	// Initialize the easter egg collection
	// 	collection();
	// }, []); 
	
	useEffect(() => {
	
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
		() => ({
			background: {
				linearGradient: {
					colorStops: [
						{
							color: "#a4a5a8",
							position: 0,
						},
					],
				},
				color: {
					value: "#eff1f5",
				},
			},
			fpsLimit: 120,
			interactivity: {
				events: {
					onClick: {
						enable: true,
						mode: "push",
					},
					onHover: {
						enable: true,
						mode: "repulse",
					},
				},
				modes: {
					push: {
						quantity: 4,
					},
					repulse: {
						distance: 200,
						duration: 0.4,
					},
				},
			},
			particles: {
				color: {
					value: "#000000",
				},
				links: {
					color: "#ffffff",
					distance: 150,
					enable: true,
					opacity: 0.5,
					width: 1,
				},
				move: {
					direction: "none",
					enable: true,
					outModes: {
						default: "bounce",
					},
					random: false,
					speed: 6,
					straight: false,
				},
				number: {
					density: {
						enable: true,
					},
					value: 280,
				},
				opacity: {
					value: 0.5,
				},
				shape: {
					type: "circle",
				},
				size: {
					value: { min: 1, max: 5 },
				},
			},
			detectRetina: true,
		}),
		[]
  );

  return (
		<>
			{init && (
				<Particles
					id='tsparticles'
					particlesLoaded={particlesLoaded}
					options={options}
					style={{ position: 'absolute', zIndex: 1 }}
				/>
			)}
			<WhatTorender />
		</>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// function App2() {
//   chrome.runtime.sendMessage({ message: "getRandomQuestion" }, (response) => {
//     console.log("Response received:", response);
//   });
//   return (
//     <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-10">
//       <h1 className='text-4xl font-bold bg-red-500 p-4'>hello world 3</h1>
//     </div>
//   );
// }