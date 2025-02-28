import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaComments, FaBug, FaLightbulb, FaShieldAlt, FaRocket } from 'react-icons/fa';

const guidelines = [
    { icon: FaCode, title: "Code Formatting", text: "Ensure consistent indentation, spacing, and proper code organization" },
    { icon: FaComments, title: "Documentation", text: "Include necessary headers, imports, and comments for complex logic" },
    { icon: FaBug, title: "Error Handling", text: "Handle errors and edge cases appropriately with proper error messages" },
    { icon: FaLightbulb, title: "Best Practices", text: "Follow standard naming conventions and coding best practices" },
    { icon: FaShieldAlt, title: "Security", text: "Check for security vulnerabilities and implement proper safeguards" },
    { icon: FaRocket, title: "Performance", text: "Optimize performance and check for potential memory leaks" }
];

const CodeReview = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-screen p-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
        >
            <motion.div
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                className="max-w-7xl mx-auto"
            >
                <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                    Code Review Guidelines
                </h1>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {guidelines.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            className="bg-gray-800/30 backdrop-blur-lg p-6 rounded-xl border border-gray-700/50 shadow-xl"
                        >
                            <div className="flex items-center space-x-4 mb-4">
                                <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                                    <item.icon size={24} />
                                </div>
                                <h2 className="text-xl font-semibold text-white">
                                    {item.title}
                                </h2>
                            </div>
                            <p className="text-gray-300 leading-relaxed">
                                {item.text}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mt-12 p-6 bg-blue-500/10 rounded-xl border border-blue-500/20 text-center"
                >
                    <p className="text-gray-300">
                        Following these guidelines ensures code quality and maintainability.
                        Make sure to review each point carefully before submitting your code.
                    </p>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default CodeReview;
