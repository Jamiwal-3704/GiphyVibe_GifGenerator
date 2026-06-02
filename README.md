# GiphyVibe — Random GIF Generator

> A tiny, fun React app that fetches truly random GIFs from GIPHY. Built for learning, experimenting with modern frontend tooling, and sharing a smile.

## Demo

- Click "Generate random GIF" to fetch a fresh GIF from GIPHY.

## Built with

- React 18.2
- Tailwind CSS
- axios
- Create React App (react-scripts)
- GIPHY API

## Features

- Pulls a random GIF from GIPHY
- Simple, responsive UI with Tailwind CSS
- Small, focused codebase — great for learning

## Prerequisites

- Node.js 16–20
- npm

## Setup (local)

1. Clone the repository and change into the project folder:

```bash
git clone <your-repo-url>
cd Random-gif
```

2. Install dependencies:

```bash
npm install
```

3. Add your GIPHY API key in a `.env` file at the project root:

```
REACT_APP_GIPHY_API_KEY=your_giphy_api_key_here
```

4. Run the development server:

```bash
npm start
```

5. Build for production:

```bash
npm run build
```

## Deploying to Vercel

1. Push this repository to GitHub (or any Git provider) and connect it in the Vercel dashboard.
2. In Vercel project settings, set the environment variable `REACT_APP_GIPHY_API_KEY` to your GIPHY key.
3. Vercel build command: `npm run build` and output directory: `build` (these are the defaults for CRA).

Important note: environment variables prefixed with `REACT_APP_` are embedded into the built client bundle. If you want to keep the GIPHY API key secret, proxy requests through a backend or serverless function (I can scaffold one for you).

## Files you may want to edit

- `src/hooks/useGif.js` — contains the GIF fetching logic.

## Contributing

PRs and suggestions welcome. If you add backend features or favorites storage, add appropriate `.env` keys and update `.gitignore`.

## License

This project is provided for learning and fun. Use or modify as you like.

---

## About the Creator

Sahil Ittan (Jamiwal)

I built this application for fun and to learn more about modern frontend development. This project demonstrates a small stack and quick iteration loop using React and Tailwind.

- GitHub: https://github.com/Jamiwal-3704
- LinkedIn: https://linkedin.com/in/sahilittan

Technologies used in this project:

- React.js (functional components, hooks)
- Tailwind CSS for styling
- axios for HTTP requests
- GIPHY API for GIF data

If you'd like, I can extend this project with a backend (Express) to store favorites and proxy the GIPHY key so it isn't exposed in the browser.

# 🎬 Random GIF Generator

A modern, interactive React application that generates random GIFs using the Giphy API. Easily browse through random GIFs or search for specific ones by entering custom tags.

![Version](https://img.shields.io/badge/version-0.1.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.2.7-38B2AC?logo=tailwindcss)

---

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [Building for Production](#building-for-production)
- [How to Use](#how-to-use)
- [Contributing](#contributing)
- [License](#license)

---

## ✨ Features

- **Random GIF Generation**: Click a button to get a completely random GIF
- **Tag-Based Search**: Enter custom tags to search for specific types of GIFs
- **Loading Indicator**: Smooth loading spinner while fetching GIFs from the API
- **Responsive Design**: Beautiful, mobile-friendly UI built with Tailwind CSS
- **Fast Performance**: Optimized React components using hooks and custom logic
- **Easy API Integration**: Uses the Giphy API for accessing millions of GIFs

---

## 🛠️ Tech Stack

| Technology        | Version | Purpose                                       |
| ----------------- | ------- | --------------------------------------------- |
| **React**         | 18.2.0  | Frontend framework for building UI components |
| **Tailwind CSS**  | 3.2.7   | Utility-first CSS framework for styling       |
| **Axios**         | 1.7.2   | HTTP client for making API requests           |
| **React Scripts** | 5.0.1   | Build and development tools for React apps    |
| **Giphy API**     | v1      | External API for accessing GIF database       |

---

## 📁 Project Structure

```
Random-gif/
├── public/
│   ├── index.html           # Main HTML entry point
│   ├── robots.txt           # SEO robots configuration
│   └── site.webmanifest     # PWA manifest file
├── src/
│   ├── App.jsx              # Main application component
│   ├── index.css            # Global styles
│   ├── index.js             # React DOM rendering
│   ├── components/
│   │   ├── Random.jsx       # Component for random GIF display
│   │   ├── Tag.jsx          # Component for tag-based GIF search
│   │   └── Spinner.js       # Loading spinner component
│   └── hooks/
│       └── useGif.js        # Custom hook for Giphy API calls
├── .env                     # Environment variables (API key)
├── package.json             # Project dependencies
├── tailwind.config.js       # Tailwind CSS configuration
└── README.md               # This file
```

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version 14.0 or higher) - [Download](https://nodejs.org/)
- **npm** (v6.0 or higher) - Comes with Node.js
- **Git** - [Download](https://git-scm.com/)
- **Giphy API Key** - Get it free at [Giphy Developers](https://developers.giphy.com/) (Sign up and create an app to get your API key)

---

## 💻 Installation

Follow these simple steps to get the project running on your local machine:

### Step 1: Clone the Repository

```bash
git clone https://github.com/Jamiwal-3704/Random-gif.git
cd Random-gif
```

### Step 2: Install Dependencies

```bash
npm install
```

This will install all required packages listed in `package.json`:

- React and React DOM
- Axios for HTTP requests
- Tailwind CSS for styling
- React Scripts for build tools

---

## 🔑 Configuration

### Setting Up the Giphy API Key

1. **Get Your API Key**:
   - Visit [Giphy Developers](https://developers.giphy.com/)
   - Sign up or log in to your account
   - Create a new application to generate an API key

2. **Add API Key to Environment File**:
   - Open the `.env` file in the project root
   - Update the `REACT_APP_GIPHY_API_KEY` variable:

   ```env
   REACT_APP_GIPHY_API_KEY=your_api_key_here
   ```

   - Replace `your_api_key_here` with your actual Giphy API key

⚠️ **Important**: Never commit your `.env` file to version control. It's already included in `.gitignore`.

---

## 🚀 Running the Application

### Development Mode

Start the development server with hot-reloading:

```bash
npm start
```

The application will automatically open in your browser at `http://localhost:3000`

**Features in Development Mode**:

- Hot module reloading (changes reflect immediately)
- Development tools for debugging
- Detailed error messages in the console

### Test Mode (Optional)

If you want to run tests:

```bash
npm test
```

---

## 📦 Building for Production

### Create an Optimized Production Build

```bash
npm run build
```

This command:

- Minifies your code for smaller file size
- Optimizes performance
- Creates a `build/` folder with production-ready files
- Ready to deploy to any static hosting service

**Deployment Options**:

- Netlify
- Vercel
- GitHub Pages
- AWS S3 + CloudFront
- Heroku

---

## 🎯 How to Use

### 1. **Get a Random GIF**

- The app loads with a random car GIF by default
- Click the **"Generate"** button to fetch a new random GIF
- A loading spinner appears while fetching

### 2. **Search GIFs by Tag**

- Enter any tag in the input field (e.g., "dog", "cat", "sports")
- Click the **"Generate"** button to fetch GIFs matching your tag
- The section title updates to show "RANDOM [TAG] GIF"

### 3. **Browse Multiple GIFs**

- Generate multiple GIFs by clicking the button repeatedly
- Explore different tags and create custom searches

---

## 🔧 Key Components Explained

### `App.jsx` - Main Component

The root component that renders the title and hosts both Random and Tag components.

### `Random.jsx` - Random GIF Component

Displays a random GIF with a Generate button. Uses the `useGif` hook to fetch data.

### `Tag.jsx` - Tag-Based Search Component

Allows users to input a tag and search for GIFs matching that tag.

### `useGif.js` - Custom Hook

Contains all the logic for:

- Fetching GIFs from Giphy API using Axios
- Managing loading state
- Handling errors gracefully
- Supporting both random and tagged searches

### `Spinner.js` - Loading Component

Displays a beautiful loading animation while GIFs are being fetched.

---

## ⚙️ Available Scripts

```bash
# Start development server on http://localhost:3000
npm start

# Build optimized production version
npm run build

# Run tests (if configured)
npm test

# Eject CRA configuration (irreversible - use with caution)
npm run eject
```

---

## 🌐 API Integration

This project integrates with the **Giphy API**:

- **Endpoint**: `https://api.giphy.com/v1/gifs/random`
- **Method**: GET
- **Authentication**: API Key (provided in `.env`)
- **Features**: Random GIF retrieval and tag-based searches

---

## 💡 Tips & Tricks

- Try popular tags like: `funny`, `dance`, `animals`, `nature`, `sports`, `food`
- The app caches the current GIF, so you can reload without losing it
- Customize the styling in `tailwind.config.js` to match your brand
- Modify default tags in `useGif.js` to change the initial GIF category

---

## 🐛 Troubleshooting

| Issue                   | Solution                                                               |
| ----------------------- | ---------------------------------------------------------------------- |
| **API key not working** | Verify the key in `.env` file and ensure it's from Giphy Developers    |
| **Blank GIFs appear**   | Check browser console for API errors; restart the dev server           |
| **Slow loading**        | This might be a network issue; try a different tag                     |
| **Port 3000 in use**    | Either close the process using port 3000 or run: `PORT=3001 npm start` |

---

## 📚 Learning Resources

- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Axios Documentation](https://axios-http.com/)
- [Giphy API Documentation](https://developers.giphy.com/docs/api)

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📝 License

This project is open source and available under the MIT License. Feel free to use it for personal and commercial projects.

---

## 👨‍💻 Author

**Jamiwal-3704**

Connect with me on GitHub: [@Jamiwal-3704](https://github.com/Jamiwal-3704)

---

## 🙏 Acknowledgments

- Giphy for providing an excellent API for accessing GIFs
- React community for amazing tools and documentation
- Tailwind CSS for making styling effortless

---

## 📞 Support

If you encounter any issues or have questions:

- Open an issue on [GitHub Issues](https://github.com/Jamiwal-3704/Random-gif/issues)
- Check existing documentation
- Review the [Giphy API docs](https://developers.giphy.com/docs/api)

---

**Happy GIF hunting! 🎉**
