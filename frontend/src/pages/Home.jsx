import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaSpinner } from 'react-icons/fa';

const LoadingSpinner = () => (
    <div className="flex flex-col items-center justify-center h-full space-y-4">
        <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        >
            <FaSpinner className="h-12 w-12 text-blue-500" />
        </motion.div>
        <p className="text-blue-400">Analyzing your code...</p>
    </div>
);

const Home = () => {
    const [ss, setss] = useState(`int main()
{
printf("hello");
}`);
    const [msg, setmsg] = useState("Please enter some code and click send.");
    const [isLoading, setIsLoading] = useState(false);

    const handleTextareaChange = (e) => {
        setss(e.target.value);
    };

    const send_data = () => {
        setIsLoading(true);
        fetch('http://localhost:3000/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ss }),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                setmsg(data.msg);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error('Error:', error);
                setIsLoading(false);
            });
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-1 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6 gap-6"
        >
            <motion.div
                initial={{ x: -50 }}
                animate={{ x: 0 }}
                className="w-1/2 bg-gray-800/30 backdrop-blur-lg rounded-xl shadow-xl border border-gray-700/50 p-6"
            >
                <div className="mb-6">
                    <div className="flex items-center space-x-3 mb-2">
                        <FaCode className="text-blue-400 text-xl" />
                        <h2 className="text-2xl font-semibold text-white">Input Code</h2>
                    </div>
                    <p className="text-gray-400 text-sm">Paste your code below for AI-powered review</p>
                </div>
                <textarea
                    value={ss}
                    onChange={handleTextareaChange}
                    className="w-full h-[calc(100%-160px)] p-4 bg-gray-900/50 text-gray-100 border border-gray-600 rounded-lg 
                    focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 
                    font-mono text-sm resize-none transition-colors"
                    placeholder="Enter your code here..."
                    spellCheck="false"
                ></textarea>
                <motion.button
                    onClick={send_data}
                    disabled={isLoading}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`mt-4 px-8 py-3 text-white rounded-lg transition-all duration-200 
                    flex items-center justify-center space-x-2 w-full
                    ${isLoading
                            ? 'bg-blue-500/50 cursor-not-allowed'
                            : 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-lg'}`}
                >
                    {isLoading ? (
                        <span className="flex items-center space-x-2">
                            <FaSpinner className="animate-spin" />
                            <span>Processing...</span>
                        </span>
                    ) : 'Analyze Code'}
                </motion.button>
            </motion.div>

            <motion.div
                initial={{ x: 50 }}
                animate={{ x: 0 }}
                className="w-1/2 bg-gray-800/30 backdrop-blur-lg rounded-xl shadow-xl border border-gray-700/50 p-6 flex flex-col"
            >
                <div className="mb-6">
                    <h2 className="text-2xl font-semibold text-white mb-2">Review Results</h2>
                    <p className="text-gray-400 text-sm">AI-powered code analysis and suggestions</p>
                </div>
                {isLoading ? (
                    <LoadingSpinner />
                ) : (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex-1 overflow-auto rounded-lg bg-gray-900/50 p-4"
                    >
                        <pre className="text-wrap text-gray-100 whitespace-pre-wrap font-mono text-sm">
                            {msg}
                        </pre>
                    </motion.div>
                )}
            </motion.div>
        </motion.div>
    );
};

export default Home;
