import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEmployees } from './employeeSlice';

const EmployeeDashboard = () => {
  const dispatch = useDispatch();
  const { employees, status, error } = useSelector((state) => state.employee);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchEmployees());
    }
  }, [dispatch, status]);

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Employee Dashboard</h2>
      <ul>
        {employees.map((emp) => (
          <li key={emp._id} className="mb-2 border p-2 rounded">
            {emp.name} - {emp.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeDashboard;
