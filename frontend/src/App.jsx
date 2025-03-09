import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Documentation from './pages/Documentation'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import CodeReview from './pages/CodeReview'

const App = () => {
  const Logo = () => (
    <div className="flex items-center space-x-2">
      <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-white"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <span className="text-xl font-bold text-white">Code Review AI</span>
    </div>
  );

  const Navbar = () => (
    <nav className="glass-effect sticky top-0 z-50 px-4 py-3">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="transform hover:scale-105 transition-transform duration-200">
          <Logo />
        </Link>
        <div className="flex space-x-2">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/code-review" className="nav-link">Code Review</Link>
          <Link to="/docs" className="nav-link">Documentation</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </div>
      </div>
    </nav>
  );

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 animate-gradient">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/code-review" element={<CodeReview />} />
            <Route path="/docs" element={<Documentation />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
