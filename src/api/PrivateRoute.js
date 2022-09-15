import { Navigate } from 'react-router-dom';






const getUser = () => {
  const userStr = localStorage.getItem('token');
  if (userStr) return JSON.parse(userStr);
  else return null;
}

console.log(3333, getUser());
export { PrivateRoute };

function PrivateRoute({ children }) {
  
  const userStr = localStorage.getItem('token');
    if (getUser()) {
        return <Navigate to="/" />
      }
    return children;
}