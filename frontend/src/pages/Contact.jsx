import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Contact = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto p-8 text-white min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
        >
            <motion.h1
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                className="text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
            >
                Contact Us
            </motion.h1>

            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                {/* Contact Info */}
                <motion.div
                    initial={{ x: -50 }}
                    animate={{ x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-gray-800/30 backdrop-blur-lg p-8 rounded-xl shadow-2xl border border-gray-700/50"
                >
                    <h2 className="text-3xl font-semibold mb-8 text-blue-400">Get in Touch</h2>
                    <div className="space-y-8 text-gray-200">
                        <motion.div
                            whileHover={{ x: 5 }}
                            className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-700/30 transition-all duration-300"
                        >
                            <span className="font-semibold text-blue-400">Email:</span>
                            <a href="mailto:rishugoyal290404@gmail.com"
                                className="hover:text-blue-400 transition-colors">
                                mails.karunyagupta@gmail.com
                            </a>
                        </motion.div>
                        <motion.div
                            whileHover={{ x: 5 }}
                            className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-700/30 transition-all duration-300"
                        >
                            <span className="font-semibold text-blue-400">Address:</span>
                            <address className="inline">
                                Chitkara University
                            </address>
                        </motion.div>

                        <div className="pt-8">
                            <h3 className="text-2xl mb-6 text-blue-400">Follow Us</h3>
                            <div className="flex space-x-6">
                                {[
                                    { icon: FaGithub, link: "https://github.com/KarunyaGupta", label: "GitHub" },
                                    { icon: FaLinkedin, link: "https://www.linkedin.com/in/karunya-gupta-812913279/", label: "LinkedIn" },
                                ].map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.2, y: -5 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="text-3xl hover:text-blue-400 transition-all duration-300"
                                        title={social.label}
                                    >
                                        <social.icon />
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.form
                    initial={{ x: 50 }}
                    animate={{ x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-gray-800/30 backdrop-blur-lg p-8 rounded-xl shadow-2xl border border-gray-700/50"
                >
                    <h2 className="text-3xl font-semibold mb-8 text-blue-400">Send us a Message</h2>
                    <div className="space-y-6">
                        <div>
                            <label className="block mb-2 text-gray-300">Name</label>
                            <input
                                type="text"
                                className="w-full px-4 py-3 rounded-lg bg-gray-700/50 focus:outline-none focus:ring-2 focus:ring-blue-400 border border-gray-600 hover:border-blue-400 transition-colors"
                                placeholder="Your name"
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-gray-300">Email</label>
                            <input
                                type="email"
                                className="w-full px-4 py-3 rounded-lg bg-gray-700/50 focus:outline-none focus:ring-2 focus:ring-blue-400 border border-gray-600 hover:border-blue-400 transition-colors"
                                placeholder="your@email.com"
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-gray-300">Message</label>
                            <textarea
                                rows="4"
                                className="w-full px-4 py-3 rounded-lg bg-gray-700/50 focus:outline-none focus:ring-2 focus:ring-blue-400 border border-gray-600 hover:border-blue-400 transition-colors"
                                placeholder="Your message here..."
                            ></textarea>
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-3 px-6 rounded-lg transition-all duration-300 font-semibold shadow-lg"
                        >
                            Send Message
                        </motion.button>
                    </div>
                </motion.form>
            </div>
        </motion.div>
    )
}

export default Contact
