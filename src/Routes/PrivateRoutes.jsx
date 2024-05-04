import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";


const PrivateRoutes = ({ children }) => {
    const { user, loader } = useContext(AuthContext);
    const location = useLocation();
    // console.log(location.pathname);

    if (loader) {
        return <progress className="progress w-56"></progress>
    }
    if (user?.email) {
        return children;
    }
    return <Navigate state={location.pathname} to={'/login'} replace></Navigate>

};

export default PrivateRoutes;