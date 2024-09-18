import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const questions = [
    {
        question: "How does binary search work?",
        tree: {
            text: "Start",
            children: [
                {
                    text: "Is array sorted?",
                    children: [
                        {
                            text: "Sort array",
                            children: [{ text: "Set left = 0, right = length - 1" }]
                        },
                        {
                            text: "Set left = 0, right = length - 1",
                            children: [
                                {
                                    text: "Calculate mid = (left + right) / 2",
                                    children: [
                                        {
                                            text: "Is target == arr[mid]?",
                                            children: [
                                                { text: "Return mid" },
                                                {
                                                    text: "Is target < arr[mid]?",
                                                    children: [
                                                        {
                                                            text: "right = mid - 1",
                                                            children: [{ text: "Continue search" }]
                                                        },
                                                        {
                                                            text: "left = mid + 1",
                                                            children: [{ text: "Continue search" }]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    {
        question: "How does bubble sort work?",
        tree: {
            text: "Start",
            children: [
                {
                    text: "For i = 0 to n-1",
                    children: [
                        {
                            text: "For j = 0 to n-i-1",
                            children: [
                                {
                                    text: "If arr[j] > arr[j+1]",
                                    children: [
                                        { text: "Swap arr[j] and arr[j+1]" },
                                        { text: "Continue inner loop" }
                                    ]
                                },
                                { text: "Continue outer loop" }
                            ]
                        },
                        { text: "Array is sorted" }
                    ]
                }
            ]
        }
    },
    {
        question: "How does quicksort work?",
        tree: {
            text: "Start",
            children: [
                {
                    text: "Choose pivot",
                    children: [
                        {
                            text: "Partition array",
                            children: [
                                { text: "Recursively sort left partition" },
                                { text: "Recursively sort right partition" }
                            ]
                        },
                        { text: "Combine partitions" }
                    ]
                }
            ]
        }
    },
    {
        question: "How does merge sort work?",
        tree: {
            text: "Start",
            children: [
                {
                    text: "Divide array into two halves",
                    children: [
                        { text: "Recursively sort left half" },
                        { text: "Recursively sort right half" },
                        {
                            text: "Merge sorted halves",
                            children: [{ text: "Return sorted array" }]
                        }
                    ]
                }
            ]
        }
    },
    {
        question: "How does breadth-first search (BFS) work?",
        tree: {
            text: "Start",
            children: [
                {
                    text: "Enqueue start node",
                    children: [
                        {
                            text: "While queue not empty",
                            children: [
                                { text: "Dequeue node" },
                                { text: "Process node" },
                                { text: "Enqueue unvisited neighbors" }
                            ]
                        },
                        { text: "Search complete" }
                    ]
                }
            ]
        }
    },
    {
        question: "How does depth-first search (DFS) work?",
        tree: {
            text: "Start",
            children: [
                {
                    text: "Push start node to stack",
                    children: [
                        {
                            text: "While stack not empty",
                            children: [
                                { text: "Pop node from stack" },
                                { text: "Process node" },
                                { text: "Push unvisited neighbors" }
                            ]
                        },
                        { text: "Search complete" }
                    ]
                }
            ]
        }
    },
    {
        question: "How does Dijkstra's algorithm work?",
        tree: {
            text: "Start",
            children: [
                {
                    text: "Initialize distances",
                    children: [
                        {
                            text: "While unvisited nodes exist",
                            children: [
                                { text: "Select node with min distance" },
                                { text: "Update neighbors' distances" },
                                { text: "Mark node as visited" }
                            ]
                        },
                        { text: "Return shortest paths" }
                    ]
                }
            ]
        }
    },
    {
        question: "How does the knapsack problem (dynamic programming) work?",
        tree: {
            text: "Start",
            children: [
                {
                    text: "Create DP table",
                    children: [
                        {
                            text: "For each item i",
                            children: [
                                {
                                    text: "For each weight w",
                                    children: [
                                        { text: "Calculate max value" },
                                        { text: "Update DP[i][w]" }
                                    ]
                                }
                            ]
                        },
                        { text: "Return max value" }
                    ]
                }
            ]
        }
    },
    {
        question: "How does the Floyd-Warshall algorithm work?",
        tree: {
            text: "Start",
            children: [
                {
                    text: "Initialize distance matrix",
                    children: [
                        {
                            text: "For each intermediate vertex k",
                            children: [
                                {
                                    text: "For each pair (i,j)",
                                    children: [
                                        { text: "Update dist[i][j]" },
                                        { text: "Continue iterations" }
                                    ]
                                }
                            ]
                        },
                        { text: "Return all-pairs shortest paths" }
                    ]
                }
            ]
        }
    },
    {
        question: "How does the A* search algorithm work?",
        tree: {
            text: "Start",
            children: [
                {
                    text: "Initialize open and closed sets",
                    children: [
                        {
                            text: "While open set not empty",
                            children: [
                                { text: "Choose node with lowest f-score" },
                                { text: "If goal reached, return path" },
                                { text: "Generate neighbors" },
                                { text: "Update g and f scores" }
                            ]
                        },
                        { text: "No path found" }
                    ]
                }
            ]
        }
    }
];

const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8'];

const TreeNode = ({ node, x, y, color, onNodeClick, level = 0 }) => {
    const [isHighlighted, setIsHighlighted] = useState(false);
    const width = 160;
    const height = 60;

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
            if (currentLine.length + words[i].length + 1 <= 20) {
                currentLine += ' ' + words[i];
            } else {
                lines.push(currentLine);
                currentLine = words[i];
            }
        }
        lines.push(currentLine);

        return lines.map((line, index) => (
            <tspan key={index} x={x} dy={index ? lineHeight : 0}>
                {line}
            </tspan>
        ));
    };

    return (
        <g>
            <rect
                x={x - width / 2}
                y={y - height / 2}
                width={width}
                height={height}
                rx="10"
                ry="10"
                fill={isHighlighted ? '#FFD700' : color}
                stroke="#333"
                strokeWidth="2"
                className="transition-all duration-300 cursor-pointer"
                onClick={handleClick}
            />
            <text
                x={x}
                y={y}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="12"
                fill="#fff"
                onClick={handleClick}
            >
                {renderTextLines(node.text, 16)}
            </text>
            {node.children && node.children.map((child, index) => {
                const childX = x + (index - (node.children.length - 1) / 2) * 200;
                const childY = y + 120;
                return (
                    <g key={index}>
                        <line
                            x1={x}
                            y1={y + height / 2}
                            x2={childX}
                            y2={childY - height / 2}
                            stroke="#333"
                            strokeWidth="2"
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
        </g>
    );
};

const FlowchartApp = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedNode, setSelectedNode] = useState(null);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % questions.length);
        setSelectedNode(null);
    };

    const handleNodeClick = (node) => {
        setSelectedNode(node);
    };

    return (
        <Card className="w-full max-w-6xl mx-auto">
            <CardHeader>
                <CardTitle className="text-2xl font-bold text-center">
                    {questions[currentIndex].question}
                </CardTitle>
            </CardHeader>
            <CardContent className="overflow-x-auto">
                <div className="min-w-max p-4">
                    <svg width="1000" height="600" className="mx-auto">
                        <TreeNode
                            node={questions[currentIndex].tree}
                            x={500}
                            y={60}
                            color={colors[0]}
                            onNodeClick={handleNodeClick}
                        />
                    </svg>
                </div>
                {selectedNode && (
                    <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                        <h3 className="font-bold">Selected Step: {selectedNode.text}</h3>
                        <p>Click on nodes to see more details about each step in the algorithm.</p>
                    </div>
                )}
            </CardContent>
            <CardFooter className="flex justify-between items-center">
                <div>Question {currentIndex + 1} of {questions.length}</div>
                <Button onClick={handleNext} className="flex items-center">
                    Next <ArrowRight className="ml-2" />
                </Button>
            </CardFooter>
        </Card>
    );
};

export default FlowchartApp;