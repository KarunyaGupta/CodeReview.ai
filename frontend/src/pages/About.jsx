import React from 'react';
import { motion } from 'framer-motion';
import styles from './About.module.css';

const About = () => {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    return (
        <div className="container mx-auto p-8 text-white">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
            >
                <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                    About Code Review AI
                </h1>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                    Empowering developers with intelligent code analysis and real-time feedback
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <motion.div
                    {...fadeIn}
                    className={styles.featureCard}
                >
                    <img
                        src="https://www.buildpiper.io/wp-content/uploads/2023/12/Static-vs-Dynamic-730x365.png"
                        alt="Code Analysis"
                        className={styles.featureImage}
                    />
                    <div className="p-6">
                        <h3 className="text-xl font-bold mb-3">Smart Analysis</h3>
                        <p className="text-gray-300">Advanced AI-powered code review with instant feedback</p>
                    </div>
                </motion.div>

                <motion.div
                    {...fadeIn}
                    transition={{ delay: 0.2 }}
                    className={styles.featureCard}
                >
                    <img
                        src="https://montymobile.com/wp-content/uploads/2024/05/Chatbot-Design-Blog-Cover-1920x1080-1.webp"
                        alt="AI Assistant"
                        className={styles.featureImage}
                    />
                    <div className="p-6">
                        <h3 className="text-xl font-bold mb-3">AI Assistant</h3>
                        <p className="text-gray-300">24/7 intelligent coding companion</p>
                    </div>
                </motion.div>

                <motion.div
                    {...fadeIn}
                    transition={{ delay: 0.4 }}
                    className={styles.featureCard}
                >
                    <img
                        src="https://uknowva.com/images/19948927_6187695.jpg"
                        alt="Team Collaboration"
                        className={styles.featureImage}
                    />
                    <div className="p-6">
                        <h3 className="text-xl font-bold mb-3">Team Collaboration</h3>
                        <p className="text-gray-300">Enhance team productivity with shared insights</p>
                    </div>
                </motion.div>
            </div>

            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-16 text-center"
            >
                <h2 className="text-3xl font-bold mb-8">Our Technology Stack</h2>
                <div className="flex flex-wrap justify-center gap-6">
                    {['React', 'Node.js', 'Express', 'Google AI', 'TailwindCSS'].map((tech, index) => (
                        <motion.div
                            key={tech}
                            whileHover={{ scale: 1.1 }}
                            className={styles.techBadge}
                        >
                            {tech}
                        </motion.div>
                    ))}
                </div>
            </motion.section>
        </div>
    );
};

export default About;
