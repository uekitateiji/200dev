import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode;
  token: string | null;
  userRole: string | null;
  requiredRole: string;
}

const ProtectedRoute = ({ children, token, userRole, requiredRole } : ProtectedRouteProps) => {
  if (!token) {
    return <Navigate to="/login" />;
  }

  if (userRole !== requiredRole) {
    return <Navigate to={`/${userRole}`} />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
