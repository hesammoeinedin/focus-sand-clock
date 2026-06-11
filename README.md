# Focus Sand Clock

A 20-minute focus timer desktop widget built with Electron.
<img width="1598" height="897" alt="image" src="https://github.com/user-attachments/assets/ff159170-67d1-49a9-9013-da6a99d546a6" />

## Features

- **Blue frosted-glass design** — a clean, translucent UI that sits elegantly on your desktop
- **Resizable window** — drag any edge to resize; the hourglass scales with the window
- **Animated sand flow** — sand particles flow from the top chamber to the bottom chamber over 20 minutes
- **Flip counter** — tracks how many 20-minute sessions you have completed
- **Daily focus tracker** — counts every real elapsed minute and shows total focus minutes for the day

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)
- npm

### Install & Run

```bash
npm install
npm start
```

## Usage

- Click the hourglass to **start / pause** the timer.
- When the 20-minute session ends the window flashes and the flip counter increments.
- The daily focus minutes counter keeps running across sessions and resets at midnight.

## Project Structure

```
focus-sand-clock/
├── main.js        # Electron main process — creates the BrowserWindow
├── index.html     # Renderer — all UI, canvas animation, and timer logic
└── package.json
```

## License

MIT
