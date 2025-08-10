# Raiqa Health Assignment - Counter & List Management App

A modern React application that allows users to increment/decrement a counter, add values to a list, and sort the list in ascending or descending order.

## Features

### Counter Functionality
- Display a number initialized to 0
- "+" button to increment the number
- "-" button to decrement the number (prevents going below 0)
- "Add to List" button that adds the current number to a list (only if > 0)
- Counter resets to 0 after adding to list

### List Display
- Shows all added numbers in a beautiful grid layout
- Prevents duplicates automatically
- Visual highlighting of highest and lowest numbers

### Sorting Feature
- Sort button with toggle functionality (ascending/descending)
- Visual indicators showing current sort order
- List updates immediately when sorting


## 🛠️ Technologies Used

- **React 18** - Modern React with hooks
- **TypeScript** - Type safety and better development experience
- **CSS3** - Modern styling with gradients and animations
- **Create React App** - Development and build tooling

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/loharaavesh1/raiqa_health_assignment.git
   cd raiqa_health_assignment
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the application

## 🏗️ Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 📁 Project Structure

```
raiqa_health_assignment/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Counter.tsx          # Counter component with increment/decrement
│   │   ├── Counter.css          # Counter styling
│   │   ├── ListView.tsx         # List display and sorting component
│   │   └── ListView.css         # List styling
│   ├── App.tsx                  # Main application component
│   ├── App.css                  # App-level styling
│   ├── index.tsx                # Application entry point
│   └── index.css                # Global styles
├── package.json                 # Dependencies and scripts
├── tsconfig.json               # TypeScript configuration
└── README.md                   # Project documentation
```

## 👨‍💻 Author

Created for Raiqa Health Assignment - A modern React counter and list management application.

