import axios from 'axios';

// Set your backend base URL
const BASE_URL = 'http://localhost:5000/api/employees';

// GET all employees
export const getEmployees = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

// GET a single employee
export const getEmployeeById = async (id) => {
  const response = await axios.get(`${BASE_URL}/${id}`);
  return response.data;
};

// POST a new employee
export const createEmployee = async (employeeData) => {
  const response = await axios.post(BASE_URL, employeeData);
  return response.data;
};

// PUT (update) an employee
export const updateEmployee = async (id, updatedData) => {
  const response = await axios.put(`${BASE_URL}/${id}`, updatedData);
  return response.data;
};

// DELETE an employee
export const deleteEmployee = async (id) => {
  const response = await axios.delete(`${BASE_URL}/${id}`);
  return response.data;
};
