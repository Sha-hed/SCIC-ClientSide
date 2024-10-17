import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext)
    const location = useLocation();
    if (loading) {
        return <div className="w-full h-screen border-2 border-red-600 flex justify-center items-center">
            <div className="w-32 h-32 rounded-full bg-gray-300 animate-pulse">

            </div>
        </div>
    }
    if (user) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location.pathname }}></Navigate>
};

export default PrivateRoute;