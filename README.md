# Valentine's Request Website 💌

A beautiful, interactive Valentine's Day request website built with React + Vite.

## Features

- 🎁 **Envelope Animation** - Click to open the envelope with smooth 3D flip animation
- 💝 **Interactive Request** - Sweet Valentine's request with animated bear character
- 😤 **No Button** - Shows angry bear with funny "dem no born you well" message and disables button
- 🎉 **Yes Button** - Shows excited bear, purple gradient transition, and confetti celebration
- 📱 **Responsive Design** - Works beautifully on mobile and desktop

## Project Structure

```
src/
├── components/
│   ├── EnvelopeView.jsx    # Initial envelope screen
│   ├── EnvelopeView.css
│   ├── RequestView.jsx     # Valentine request with buttons
│   ├── RequestView.css
│   ├── Confetti.jsx        # Confetti animation
│   └── Confetti.css
├── App.jsx                  # Main app component
├── App.css
├── main.jsx                 # Entry point
└── index.css                # Global styles
```

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production files will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## Technologies Used

- **React** - UI component library
- **Vite** - Fast build tool and dev server
- **CSS3** - Animations and styling
- **Canvas API** - Confetti effects

## How It Works

1. **EnvelopeView Component** - Displays the initial envelope with click prompt
2. **RequestView Component** - Manages the Valentine request state and bear animations
3. **Confetti Component** - Renders canvas-based confetti particles
4. **App Component** - Orchestrates view transitions and state management

Enjoy spreading the Valentine's love! 💕
