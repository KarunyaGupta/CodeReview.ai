import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaSpinner, FaCog, FaCheckCircle, FaRocket, FaShieldAlt, FaBolt } from 'react-icons/fa';

const languages = [
    { value: 'javascript', label: 'JavaScript' },
    { value: 'python', label: 'Python' },
    { value: 'java', label: 'Java' },
    { value: 'cpp', label: 'C++' }
];

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
    const [language, setLanguage] = useState('cpp');

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
        <div className="flex flex-col space-y-16 p-8">
            {/* Hero Section */}
            <motion.section 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
                className="text-center space-y-6 py-16"
            >
                <motion.h1 
                    initial={{ y: -20 }}
                    animate={{ y: 0 }}
                    className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
                >
                    Elevate Your Code Quality
                </motion.h1>
                <motion.p 
                    initial={{ y: 20 }}
                    animate={{ y: 0 }}
                    className="text-xl text-gray-400 max-w-2xl mx-auto"
                >
                    Get instant, AI-powered code reviews that help you write better, cleaner, and more efficient code
                </motion.p>
                <motion.div 
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    className="flex justify-center gap-4 pt-8"
                >
                    <button className="btn-primary px-8">Try Now</button>
                    <button className="btn-secondary px-8">Learn More</button>
                </motion.div>
            </motion.section>

            {/* Features Section */}
            <section className="grid md:grid-cols-3 gap-8 py-16">
                {[
                    {
                        icon: FaRocket,
                        title: "Instant Analysis",
                        description: "Get immediate feedback on your code quality and potential improvements"
                    },
                    {
                        icon: FaShieldAlt,
                        title: "Security First",
                        description: "Identify and fix security vulnerabilities before they become issues"
                    },
                    {
                        icon: FaBolt,
                        title: "Performance Tips",
                        description: "Optimize your code for better performance and efficiency"
                    }
                ].map((feature, index) => (
                    <motion.div
                        key={index}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: index * 0.2 }}
                        className="glass-effect p-6 rounded-xl text-center"
                    >
                        <feature.icon className="text-4xl text-blue-400 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                        <p className="text-gray-400">{feature.description}</p>
                    </motion.div>
                ))}
            </section>

            {/* Code Review Section */}
            <section className="py-16">
                <motion.h2 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-3xl font-bold text-center mb-12 text-white"
                >
                    Try it Yourself
                </motion.h2>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-1 gap-8"
                >
                    <motion.div
                        initial={{ x: -50 }}
                        animate={{ x: 0 }}
                        className="w-1/2 glass-effect rounded-xl p-6"
                    >
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center space-x-3">
                                <FaCode className="text-blue-400 text-xl" />
                                <h2 className="text-2xl font-semibold text-white">Input Code</h2>
                            </div>
                            <select
                                value={language}
                                onChange={(e) => setLanguage(e.target.value)}
                                className="bg-gray-700/50 text-gray-300 px-3 py-1 rounded-lg border border-gray-600 focus:outline-none focus:border-blue-500"
                            >
                                {languages.map(lang => (
                                    <option key={lang.value} value={lang.value}>{lang.label}</option>
                                ))}
                            </select>
                        </div>
                        <div className="relative flex-1">
                            <textarea
                                value={ss}
                                onChange={handleTextareaChange}
                                className="w-full h-[calc(100vh-400px)] p-4 bg-gray-900/50 text-gray-100 border border-gray-600 rounded-lg 
                                    font-mono text-sm resize-none transition-colors leading-6
                                    focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                placeholder="Enter your code here..."
                                spellCheck="false"
                            />
                            <div className="absolute top-4 left-0 w-8 text-right pr-2 text-gray-500 select-none">
                                {ss.split('\n').map((_, i) => (
                                    <div key={i + 1} className="leading-6">{i + 1}</div>
                                ))}
                            </div>
                        </div>
                        <motion.button
                            onClick={send_data}
                            disabled={isLoading}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="btn-primary mt-4 w-full"
                        >
                            {isLoading ? (
                                <span className="flex items-center justify-center space-x-2">
                                    <FaSpinner className="animate-spin" />
                                    <span>Processing...</span>
                                </span>
                            ) : (
                                <span className="flex items-center justify-center space-x-2">
                                    <FaCog />
                                    <span>Analyze Code</span>
                                </span>
                            )}
                        </motion.button>
                    </motion.div>

                    <motion.div
                        initial={{ x: 50 }}
                        animate={{ x: 0 }}
                        className="w-1/2 glass-effect rounded-xl p-6 flex flex-col"
                    >
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center space-x-3">
                                <FaCheckCircle className="text-green-400 text-xl" />
                                <h2 className="text-2xl font-semibold text-white">Review Results</h2>
                            </div>
                            {!isLoading && msg !== "Please enter some code and click send." && (
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="text-sm text-gray-400"
                                >
                                    Analysis complete
                                </motion.span>
                            )}
                        </div>
                        {isLoading ? (
                            <LoadingSpinner />
                        ) : (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="flex-1 overflow-auto rounded-lg bg-gray-900/50 p-4 prose prose-invert max-w-none"
                            >
                                <pre className="text-wrap text-gray-100 whitespace-pre-wrap font-mono text-sm leading-relaxed">
                                    {msg}
                                </pre>
                            </motion.div>
                        )}
                    </motion.div>
                </motion.div>
            </section>

            {/* Statistics Section */}
            <section className="py-16 text-center">
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { number: "100K+", label: "Lines Analyzed" },
                        { number: "50K+", label: "Bugs Found" },
                        { number: "10K+", label: "Happy Developers" }
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ scale: 0.9 }}
                            whileInView={{ scale: 1 }}
                            className="space-y-2"
                        >
                            <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                                {stat.number}
                            </h3>
                            <p className="text-gray-400">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <motion.section 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-center py-16 glass-effect rounded-xl p-12 space-y-6"
            >
                <h2 className="text-3xl font-bold text-white">Ready to Write Better Code?</h2>
                <p className="text-gray-400 max-w-xl mx-auto">
                    Join thousands of developers who are already using Code Review AI to improve their code quality.
                </p>
                <button className="btn-primary px-12 py-4">Get Started Free</button>
            </motion.section>
        </div>
    );
};

export default Home;