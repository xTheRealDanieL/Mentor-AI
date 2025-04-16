# 🌐 Mentor AI Prototype

Welcome to the **Mentor AI Prototype**, a sleek, lightweight interface for interacting with an AI-powered backend (built on `flan-t5-large` + math fallback).

This site is built for clarity, usability, and easy integration — all hosted on GitHub Pages for public viewing and demo access.

> ✨ Ask questions. Solve math. Explore open-source AI. ✨

---

## 🚀 Live Demo

👉 [Click here to try the live version](https://xTheRealDanieL.github.io/Mentor-AI/)

---

## 🖥️ Features

- 💬 Prompt input with natural language or math
- 🤖 Dynamic AI response display
- 🔄 Loading state indicator
- 🎨 Clean dark-mode design with responsive layout

---

## 🛠 Tech Stack

- **HTML5** – semantic structure
- **CSS3** – custom styling
- **JavaScript** – fetch API, input handling
- **GitHub Pages** – hosting & deployment
- **Flan-T5 (via FastAPI backend)** – smart responses

---

## ⚙️ How It Works

1. User enters a prompt (math or natural language)
2. Frontend sends a `POST` request to your backend (`/generate`)
3. Backend returns:
   - A math result (e.g., `The answer is 144`)
   - Or a language-model response (e.g., `Gravity is a force...`)
4. Response is displayed in the styled output area

---

## 📁 File Structure

```
Mentor-AI/
├── index.html
│   └─ Core HTML structure
├── style.css
│   └─ Dark-themed styles and layout
├── script.js
│   └─ JS logic: fetch call, response display, loading UI
└── README.md
    └─ Project info, setup, and credits
```

---

## 🤝 Works With

> 🔗 [`Mentor-AI-backend`](https://mentor-ai-backend-skn0.onrender.com/generate)

Together, they form a full AI web application — local, accurate, and ready for upgrades.

---

## ⚠️ Cold Start Notice

This app is hosted on Render's free tier, so the backend may "spin up" after ~15 minutes of inactivity. The first request may take up to 30–50 seconds to respond.

✅ Once it's awake, all following requests will be fast.

---

## 👥 Creators

- **Long Pham** - CEO, Project Manager
- **Long "DanieL" Nguyen** – CIO, Fullstack Developer, UI Integration, Project Lead
- **Ayushi Sharma** - CAO, Administrative Executive
- **Rohit Ramesh** - CTO, Technology Executive
- **Tom Bao** - CFO, Financial Executive
- 🌟 Special thanks to FastAPI, HuggingFace, and GitHub Pages for making this possible.

---

## ✨ Final Words

This isn't just a prototype — it's proof that open-source tools, clever design, and a bit of hustle can build something powerful.

No APIs. No GPUs. Just:
- One streamlined AI
- A calculator that never lies
- And a frontend that gets out of your way

If this was built in a week... imagine what comes next. 🚀

