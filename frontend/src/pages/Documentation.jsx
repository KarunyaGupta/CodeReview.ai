import React from 'react';
import { motion } from 'framer-motion';
import { FaBook, FaListOl, FaCog, FaLightbulb, FaQuestionCircle } from 'react-icons/fa';

const sections = [
    {
        title: "Getting Started",
        icon: FaBook,
        content: "The Code Review AI tool helps you analyze and improve your code quality with advanced AI-powered suggestions."
    },
    {
        title: "How to Use",
        icon: FaListOl,
        steps: [
            "Paste your code in the input section",
            "Click the Send button",
            "Wait for the AI to analyze your code",
            "Review the suggestions and improvements"
        ]
    },
    {
        title: "Features",
        icon: FaCog,
        content: "Advanced code analysis, real-time suggestions, multiple language support, and detailed explanations."
    },
    {
        title: "Best Practices",
        icon: FaLightbulb,
        content: "Learn about coding standards, common pitfalls to avoid, and ways to improve your code quality."
    }
];

const Documentation = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-screen p-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
        >
            <div className="max-w-6xl mx-auto">
                <motion.h1
                    initial={{ y: -20 }}
                    animate={{ y: 0 }}
                    className="text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
                >
                    Documentation
                </motion.h1>

                <div className="grid md:grid-cols-2 gap-6">
                    {sections.map((section, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-gray-800/30 backdrop-blur-lg p-6 rounded-xl border border-gray-700/50 shadow-xl"
                        >
                            <div className="flex items-center space-x-4 mb-4">
                                <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                                    <section.icon size={24} />
                                </div>
                                <h2 className="text-2xl font-semibold text-white">
                                    {section.title}
                                </h2>
                            </div>

                            {section.steps ? (
                                <ol className="list-decimal list-inside space-y-2 text-gray-300">
                                    {section.steps.map((step, idx) => (
                                        <motion.li
                                            key={idx}
                                            whileHover={{ x: 5 }}
                                            className="p-2 hover:bg-gray-700/30 rounded-lg transition-colors"
                                        >
                                            {step}
                                        </motion.li>
                                    ))}
                                </ol>
                            ) : (
                                <p className="text-gray-300 leading-relaxed">
                                    {section.content}
                                </p>
                            )}
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="mt-12 p-6 bg-blue-500/10 rounded-xl border border-blue-500/20 text-center"
                >
                    <div className="flex items-center justify-center space-x-2 text-gray-300">
                        <FaQuestionCircle className="text-blue-400" />
                        <p>Need help? Check our FAQ section or contact support.</p>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Documentation;
