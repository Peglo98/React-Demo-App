# React Demo App

A simple demonstration React application built with Vite and deployed on Vercel.

## Live Demo

Try it out here: [https://react-demo-app-xi.vercel.app](https://react-demo-app-xi.vercel.app)

## Table of Contents

- [Installation](#installation)  
- [Development](#development)  
- [Building for Production](#building-for-production)  
- [Project Structure](#project-structure)  
- [Technologies Used](#technologies-used)  
- [Features](#features)  
- [What I Learned](#what-i-learned)  
- [License](#license)  

## Installation

Make sure you have [Node.js](https://nodejs.org/) (v16 or later) installed.

1. Clone the repo  
   ```bash
   git clone https://github.com/Peglo98/React-Demo-App.git
   cd React-Demo-App
   ```
2. Install dependencies  
   ```bash
   npm install
   ```

## Development

Run the development server with hot-reload:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the app.

## Building for Production

Build the optimized production bundle:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
├── index.html          # Main HTML template
├── package.json        # Project metadata & scripts
├── vite.config.js      # Vite configuration
├── src
│   ├── main.jsx        # Entry point, creates React root
│   ├── App.jsx         # Root React component
│   ├── index.css       # Global styles
│   └── App.css         # Component-specific styles
└── .gitignore
```

## Technologies Used

- [React 18](https://reactjs.org)  
- [Vite](https://vitejs.dev)  
- [JavaScript (ES6+)]  
- [CSS Modules / Plain CSS]  
- [Vercel](https://vercel.com) for deployment  

## Features

- **Fast dev server** powered by Vite  
- **React functional components** with hooks  
- **State management** using `useState`  
- **Side effects** handled with `useEffect`  
- **StrictMode** enabled for highlighting potential problems  
- **CSS styling** scoped to components  
- **Production build & preview** out of the box  
- **Zero-config deployment** on Vercel  

## What I Learned

- **Vite Setup & Configuration**  
  – How to bootstrap a React project with Vite  
  – Configuring the React plugin for fast refresh  

- **React Fundamentals**  
  – Creating and composing functional components  
  – Managing component state with `useState`  
  – Running side effects (e.g. updating `document.title`) with `useEffect`  
  – Using `React.StrictMode` to catch potential issues  

- **Styling**  
  – Organizing global vs. component-scoped CSS  
  – Simple class-based styling without extra libraries  

- **Build & Deployment**  
  – Building a production-ready bundle (`npm run build`)  
  – Previewing the production build locally (`npm run preview`)  
  – Deploying to Vercel with zero configuration  

## License

This project is licensed under the [MIT License](LICENSE).
