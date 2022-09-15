import { Navigate } from 'react-router-dom';






const getUser = () => {
  const userStr = localStorage.getItem('token');
  if (userStr) return JSON.parse(userStr);
  else return null;
}
export { PublicRoute };

function PublicRoute({ children }) {
  

    if (getUser()) {
        return <Navigate to="/login" />
      }
    return children;
}