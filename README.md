# Code Review AI

An intelligent code analysis tool that provides instant feedback on your code using AI-powered suggestions.

## 🚀 Features

- Real-time code analysis
- AI-powered suggestions
- Best practices recommendations
- Performance optimization tips
- Security vulnerability detection
- Dark mode interface
- Responsive design

## 🛠️ Tech Stack

### Frontend

- React.js
- React Router DOM
- Tailwind CSS
- Vite

### Backend

- Node.js
- Express.js
- Google Generative AI (Gemini)
- CORS
- Body Parser

## 📁 Project Structure

```
CodeReview/
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── About.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Documentation.jsx
│   │   └── App.jsx
│   ├── package.json
│   └── vite.config.js
│
└── backend/
    ├── app.js
    └── package.json
```

## 🚦 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/KarunyaGupta/code-reviewer.git
cd code-reviewer
```

2. Install Frontend Dependencies

```bash
cd frontend
npm install
```

3. Install Backend Dependencies

```bash
cd backend
npm install
```

4. Set up Environment Variables

- Create a `.env` file in the backend directory
- Add your Google Generative AI API key

```
GOOGLE_API_KEY=your_api_key_here
```

### Running the Application

1. Start the Backend Server

```bash
cd backend
node app.js
```

2. Start the Frontend Development Server

```bash
cd frontend
npm run dev
```

The application will be available at `http://localhost:5173`

## 🤝 Contributing

We welcome contributions to Code Review AI! Here's how you can help:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Contribution Guidelines

- Write clear, descriptive commit messages
- Comment your code where necessary
- Follow the existing code style
- Update documentation as needed
- Add tests for new features


## 📞 Contact

- Email: mail.karunyagupta@gmail.com
- Address: Chitkara University

## 🙏 Acknowledgments

- Google Generative AI for providing the code analysis capabilities
- React and Tailwind CSS communities for the excellent frontend tools
- All contributors who help improve this project

## 🔮 Future Enhancements

- [ ] Multiple programming language support
- [ ] Code formatting suggestions
- [ ] Integration with GitHub repositories
- [ ] Team collaboration features
- [ ] Custom rule configurations
- [ ] Export reports in multiple formats
