## If NEED REACT `REDUX` IN REACT PROJECT THEN FOLLOW THIS STEPS:

### 1. First setup a `react` project:
- For Setup react follow this : https://github.com/Cyber-Programer/react-tailwind/blob/main/README.md

### 2. After setup react install `Redux`:
- use those cmd to install redux
- ```bash
  npm install redux react-redux @reduxjs/toolkit
  ```
### 3. After install `redux` follow the folder structure:
```bash
src/
|__ app/store.js
├── features/
│   └── employee/
│       ├── EmployeeDashboard.jsx      # Main UI component
│       ├── EmployeeList.jsx           # Sub-component if needed
│       ├── employeeSlice.js           # Redux logic (actions, reducers, async thunks)
│       └── employeeAPI.js             # Axios/fetch functions for MongoDB backend
├── app/
│   └── store.js                       # Redux store setup

```
