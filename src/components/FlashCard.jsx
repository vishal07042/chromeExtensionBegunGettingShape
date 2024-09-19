
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, FlipHorizontal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { flashcardData } from './FlashCard.js';

const pathOfImages = [
    "/src/assets/marvelChars/Deadpool_01_Foreground_Common.png",
    "/src/assets/marvelChars/Deadpool_02_Foreground_Common.png",
    "/src/assets/marvelChars/Deadpool_03_Foreground_Common.png",
    "/src/assets/marvelChars/Deadpool_04_Foreground_Common.png",
    "/src/assets/marvelChars/Deadpool_05_Foreground_Common.png",
    "/src/assets/marvelChars/Deadpool_06_Foreground_Common.png",
    "/src/assets/marvelChars/Deadpool_07_Foreground_Common.png",
    "/src/assets/marvelChars/Deadpool_08_Foreground_Common.png",
    "/src/assets/marvelChars/Deadpool_09_Foreground_Common.png",
    "/src/assets/marvelChars/Deadpool_10_Foreground_Common.png",
    "/src/assets/marvelChars/Deadpool_11_Foreground_Common.png",
    "/src/assets/marvelChars/Gamora_01_Foreground_Common.png",
    "/src/assets/marvelChars/Gamora_02_Foreground_Common.png",
    "/src/assets/marvelChars/Gamora_03_Foreground_Common.png",
    "/src/assets/marvelChars/Gamora_04_Foreground_Common.png",
    "/src/assets/marvelChars/Gamora_05_Foreground_Common.png",
    "/src/assets/marvelChars/Gamora_06_Foreground_Common.png",
    "/src/assets/marvelChars/Gamora_07_Foreground_Common.png",

    "/src/assets/marvelChars/Gamora_09_Foreground_Common.png",
    "/src/assets/marvelChars/Groot_01_Foreground_Common.png",
    "/src/assets/marvelChars/Groot_02_Foreground_Common.png",
    "/src/assets/marvelChars/Groot_03_Foreground_Common.png",
    "/src/assets/marvelChars/Groot_04_Foreground_Common.png",
    "/src/assets/marvelChars/Groot_05_Foreground_Common.png",
    "/src/assets/marvelChars/Groot_06_Foreground_Common.png",
    "/src/assets/marvelChars/Groot_07_Foreground_Common.png",

    "/src/assets/marvelChars/Hawkeye_01_Foreground_Common.png",
    "/src/assets/marvelChars/Hawkeye_02_Foreground_Common.png",
    "/src/assets/marvelChars/Hawkeye_03_Foreground_Common.png",
    "/src/assets/marvelChars/Hawkeye_04_Foreground_Common.png",
    "/src/assets/marvelChars/Hawkeye_05_Foreground_Common.png",
    "/src/assets/marvelChars/Hawkeye_06_Foreground_Common.png",
    "/src/assets/marvelChars/Hawkeye_07_Foreground_Common.png",
    "/src/assets/marvelChars/Hawkeye_08_Foreground_Common.png",
    "/src/assets/marvelChars/Hawkeye_09_Foreground_Common.png",
    "/src/assets/marvelChars/Hulk_01_Foreground_Common.png",
    "/src/assets/marvelChars/Hulk_02_Foreground_Common.png",
    "/src/assets/marvelChars/Hulk_03_Foreground_Common.png",
    "/src/assets/marvelChars/Hulk_04_Foreground_Common.png",
    "/src/assets/marvelChars/Hulk_05_Foreground_Common.png",
    "/src/assets/marvelChars/Hulk_06_Foreground_Common.png",
    "/src/assets/marvelChars/Hulk_07_Foreground_Common.png",
    "/src/assets/marvelChars/Hulk_08_Foreground_Common.png",
    "/src/assets/marvelChars/Hulk_09_Foreground_Common.png",
    "/src/assets/marvelChars/Hulkbuster_01_Foreground_Common.png",
    "/src/assets/marvelChars/Hulkbuster_02_Foreground_Common.png",
    "/src/assets/marvelChars/Hulkbuster_03_Foreground_Common.png",
    "/src/assets/marvelChars/Hulkbuster_04_Foreground_Common.png",
    "/src/assets/marvelChars/Hulkbuster_05_Foreground_Common.png",
    "/src/assets/marvelChars/Hulkbuster_06_Foreground_Common.png",
    "/src/assets/marvelChars/Hulkbuster_07_Foreground_Common.png",
    "/src/assets/marvelChars/Hulkbuster_08_Foreground_Common.png",
    "/src/assets/marvelChars/Hulkbuster_09_Foreground_Common.png",
];

const Flashcard = ({ id, topic, points, color, hero, isActive, index, definition, storyToRememberTheConcept }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    return (
        <div
            className={`card2 w-96 h-128 rounded-xl shadow-lg p-8 bg-gradient-to-br ${color} text-white absolute 
    ${isActive ? 'z-10 scale-110' : 'scale-95 opacity-70'}`}
            style={{
                transform: isActive ? 'rotate(-5deg)' : 'rotate(0deg)',
                transition: 'all 0.3s ease',

            }}

        >
            <div className="relative flex justify-center items-center h-64 mb-4">
                <img src={pathOfImages[index]} alt={hero} className="h-60 w-auto" />
            </div>
            <div className="flex justify-between items-start">
                <span className="text-3xl font-bold">{id}</span>
                <div className="bg-white text-black rounded-full p-2 text-sm">
                    {pathOfImages[index].split("/")[4].split("_")[0]}
                </div>
            </div>
            <div className="mt-8">
                <h2 className="text-2xl  font-bold uppercase">{topic}</h2>
                <p className="text-[22px] mt-2 text-black p-2 font-semibold" >{definition}</p>
                <p className="text-[22px] mt-2 text-black p-2 font-semibold">{storyToRememberTheConcept}</p>
            </div>
        </div>
    );
};

const DSAFlashcards = () => {
    const [currentIndex, setCurrentIndex] = useState(Math.floor(Math.random() * flashcardData.length));
    const [bgColor, setBgColor] = useState('bg-purple-500');

    useEffect(() => {
        const colors = ['bg-purple-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-red-500'];
        const intervalId = setInterval(() => {
            setBgColor(colors[Math.floor(Math.random() * colors.length)]);
        }, 3000);
        return () => clearInterval(intervalId);
    }, []);

    const nextCard = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcardData.length);
    };

    const prevCard = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + flashcardData.length) % flashcardData.length);
    };

    const getCardIndex = (offset) => {
        return (currentIndex + offset + flashcardData.length) % flashcardData.length;
    };

    return (
        <div className={`flex items-center justify-center min-h-screen ${bgColor} transition-colors duration-1000`}>
            <button onClick={prevCard} className="mr-4 text-white z-20">
                <ChevronLeft size={32} />
            </button>
            <div className="relative flex justify-center items-center w-full h-screen">
                <AnimatePresence>
                    {[-1, 0, 1].map((offset) => {
                        const cardIndex = getCardIndex(offset);
                        const card = flashcardData[cardIndex];
                        const imageIndex = cardIndex % pathOfImages.length;
                        return (
                            <motion.div
                                key={cardIndex}
                                initial={{ opacity: 0, x: 200 * offset }}
                                animate={{ opacity: 1, x: 20 * offset }}
                                exit={{ opacity: 0, x: -200 * offset }}
                                transition={{ duration: 0.3 }}
                                style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
                            >
                                <Flashcard {...card} isActive={offset === 0} index={imageIndex} />
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </div>
            <button onClick={nextCard} className="ml-4 text-white z-20">
                <ChevronRight size={32} />
            </button>
        </div>
    );
};

export default DSAFlashcards;
