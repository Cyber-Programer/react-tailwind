# SETUP REACT APP WITH TAILWIND CSS

### 1. First create a `react` app:
  ```bash
    npm create vite@latest
  ```

### 2. Install `tailwind css` in the project :
  ```bash
    npm install -D tailwindcss@3 postcss autoprefixer
  ```

### 3. Configure `tailwind.config.js` file
  ```bash
  // tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
  ```

### 4. Add Tailwind to Your CSS
```bash
@tailwind base;
@tailwind components;
@tailwind utilities;
```
Make sure this file is imported in main.jsx or index.js:

### 5. Start Your App
```bash
  npm run dev
  npm start
```
