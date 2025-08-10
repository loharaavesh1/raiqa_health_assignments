# Raiqa Health Assignment - Counter & List Management App

A modern React application that allows users to increment/decrement a counter, add values to a list, and sort the list in ascending or descending order.

## 🚀 Features

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

### Bonus Features
- ✅ Highlight the highest and lowest number in the list
- ✅ Reset button to clear the list
- ✅ Beautiful, modern UI with gradients and animations
- ✅ Responsive design for mobile devices
- ✅ Statistics display (count, highest, lowest)

## 🛠️ Technologies Used

- **React 18** - Modern React with hooks
- **TypeScript** - Type safety and better development experience
- **CSS3** - Modern styling with gradients and animations
- **Create React App** - Development and build tooling

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/raiqa_health_assignment.git
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

## 🎯 How to Use

1. **Increment/Decrement**: Use the "+" and "-" buttons to change the counter value
2. **Add to List**: Click "Add to List" to add the current counter value to the list
3. **Sort**: Click the "Sort" button to toggle between ascending and descending order
4. **Clear**: Use "Clear List" to remove all numbers from the list

## 🎨 UI Features

- **Modern Design**: Clean, card-based layout with shadows and gradients
- **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Animations**: Smooth hover effects and transitions
- **Color Coding**: Highest numbers highlighted in green, lowest in red
- **Visual Feedback**: Clear button states and loading indicators

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your GitHub repository
4. Deploy automatically

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [Netlify](https://netlify.com)
3. Connect your GitHub repository
4. Build command: `npm run build`
5. Publish directory: `build`

## 📝 Assignment Requirements Met

- ✅ React/Next.js application
- ✅ Counter functionality with increment/decrement
- ✅ Add values to list (only if > 0)
- ✅ Reset counter after adding
- ✅ List display with all added numbers
- ✅ Prevent duplicates
- ✅ Sort functionality (ascending/descending toggle)
- ✅ Clean layout with counter section at top
- ✅ List section below
- ✅ Sort button clearly visible
- ✅ Responsive design
- ✅ Basic styling
- ✅ useState for state management
- ✅ No backend required
- ✅ Ready for Vercel deployment
- ✅ Code pushed to GitHub

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is created for the Raiqa Health assignment. Feel free to use and modify as needed.

## 👨‍💻 Author

Created for Raiqa Health Assignment - A modern React counter and list management application.

---

**Note**: This application demonstrates modern React development practices, TypeScript usage, and professional UI/UX design principles.
