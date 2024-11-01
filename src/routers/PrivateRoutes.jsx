import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
const PrivateRoutes = ({ children }) => {
  const { currentUser, loading } = useAuth();
  if (loading) {
    return <div>Loading...</div>;
  }
  if (!currentUser) {
    return <Navigate to="/login" />;
  } else {
    return children;
  }
};

export default PrivateRoutes;
