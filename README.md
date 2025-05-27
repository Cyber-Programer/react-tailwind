# SETUP REACT APP WITH TAILWIND CSS

### 1. First create a `react` app:
  ```bash
    npm create vite@latest
  ```

### 2. Install `tailwind css` in the project :
  ```bash
    npm install -D tailwindcss@3 postcss autoprefixer
    npx tailwindcss init -p
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
```

## Folder Structure : 
```bash
my-app/
├── public/
│   └── index.html
├── src/
│   ├── assets/            # Static assets like images, fonts
│   ├── components/        # Reusable components (Button, Card, Navbar, etc.)
│   ├── features/          # Feature-based folders (Auth, Dashboard, Tasks, etc.)
│   │   ├── auth/
│   │   │   ├── Login.jsx
│   │   │   ├── Signup.jsx
│   │   │   └── authSlice.js (if using Redux)
│   │   └── tasks/
│   │       ├── TaskList.jsx
│   │       ├── TaskDetails.jsx
│   │       └── taskSlice.js
│   ├── hooks/             # Custom hooks
│   ├── layouts/           # Layout components (DashboardLayout, AuthLayout)
│   ├── pages/             # Route-based page components
│   ├── routes/            # React Router setup
│   ├── services/          # API calls (e.g., axios configs)
│   ├── store/             # Redux store or Zustand/Context setup
│   ├── styles/            # Tailwind config and global CSS
│   │   └── index.css
│   ├── utils/             # Helper functions
│   ├── App.jsx
│   ├── main.jsx           # Entry point (Vite) or index.js (CRA)
│   └── tailwind.config.js
├── .env
├── package.json
├── postcss.config.js
└── tailwind.config.js

```
