import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import questions from './flowchartQuestions.json';

const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#FFD700', '#FF6347', '#7B68EE', '#32CD32', '#FF4500'];

const TreeNode = ({ node, x, y, color, onNodeClick, level = 0 }) => {
    const [isHighlighted, setIsHighlighted] = useState(false);
    const width = 180;
    const height = 70;

    useEffect(() => {
        if (isHighlighted) {
            const timer = setTimeout(() => setIsHighlighted(false), 1000);
            return () => clearTimeout(timer);
        }
    }, [isHighlighted]);

    const handleClick = () => {
        setIsHighlighted(true);
        onNodeClick(node);
    };

    const renderTextLines = (text, lineHeight) => {
        const words = text.split(' ');
        const lines = [];
        let currentLine = words[0];

        for (let i = 1; i < words.length; i++) {
            if (currentLine.length + words[i].length + 1 <= 25) {
                currentLine += ' ' + words[i];
            } else {
                lines.push(currentLine);
                currentLine = words[i];
            }
        }
        lines.push(currentLine);

        return lines.map((line, index) => (
            <tspan className="text-xl p-2 m-2" key={index} x={x} dy={index ? lineHeight : 0}>
                {line}
            </tspan>
        ));
    };

    return (
        <motion.g
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: level * 0.2 }}
        >
            <motion.rect
                x={x - width / 2}
                y={y - height / 2}
                width={width}
                height={height}
                rx="10"
                ry="10"
                fill={isHighlighted ? '#FFD700' : color}
                stroke="#333"
                strokeWidth="2"
                className="transition-all duration-300 cursor-pointer p-2 m-2"
                onClick={handleClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            />
            <motion.text
                x={x}
                y={y}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="16"
                fontWeight="bold"
                fill="#000"
                onClick={handleClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                {renderTextLines(node.text, 20)}
            </motion.text>
            {node.children && node.children.map((child, index) => {
                const childX = x + (index - (node.children.length - 1) / 2) * 220;
                const childY = y + 140;
                return (
                    <g key={index}>
                        <motion.line
                            x1={x}
                            y1={y + height / 2}
                            x2={childX}
                            y2={childY - height / 2}
                            stroke="#333"
                            strokeWidth="2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: level * 0.2 + 0.2 }}
                        />
                        <TreeNode
                            node={child}
                            x={childX}
                            y={childY}
                            color={colors[(level + 1) % colors.length]}
                            onNodeClick={onNodeClick}
                            level={level + 1}
                        />
                    </g>
                );
            })}
        </motion.g>
    );
};

const FlowchartApp = () => {
    const [currentIndex, setCurrentIndex] = useState(Math.floor(Math.random() * questions.length));
    const [selectedNode, setSelectedNode] = useState(null);
    const [isDarkTheme, setIsDarkTheme] = useState(true);

    const handleNext = () => {
        setCurrentIndex(Math.floor(Math.random() * questions.length));
        setSelectedNode(null);
    };

    const handleNodeClick = (node) => {
        setSelectedNode(node);
    };

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    };

    return (
        <div className={`w-full max-w-6xl mx-auto shadow-md rounded-lg ${isDarkTheme ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
            <div className={`p-4 border-b ${isDarkTheme ? 'border-gray-700' : 'border-gray-300'}`}>
                <h2 className="text-xl font-extrabold text-center">
                    {questions[currentIndex].question}
                </h2>
            </div>
            <div className="overflow-x-auto p-4">
                <div className="min-w-max p-4">
                    <svg width="1400" height="1400" className="mx-auto">
                        <TreeNode
                            node={questions[currentIndex].tree}
                            x={700}
                            y={60}
                            color={colors[0]}
                            onNodeClick={handleNodeClick}
                        />
                    </svg>
                </div>
                {selectedNode && (
                    <div className={`mt-4 p-4 rounded-lg ${isDarkTheme ? 'bg-gray-800' : 'bg-gray-200'}`}>
                        <h3 className="font-extrabold text-lg">Selected Step: {selectedNode.text}</h3>
                        <p>Click on nodes to see more details about each step in the algorithm.</p>
                    </div>
                )}
            </div>
            <div className={`flex justify-between items-center p-4 border-t ${isDarkTheme ? 'border-gray-700' : 'border-gray-300'}`}>
                <div>Question {currentIndex + 1} of {questions.length}</div>
                <div className="flex space-x-4">
                    <button onClick={toggleTheme} className="flex items-center bg-green-500 text-white px-4 py-2 rounded">
                        Toggle Theme
                    </button>
                    <button onClick={handleNext} className="flex items-center bg-blue-500 text-white px-4 py-2 rounded">
                        Next <ArrowRight className="ml-2" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FlowchartApp;