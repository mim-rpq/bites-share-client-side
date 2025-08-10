import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from './AuthContext';
import Spinner from '../Components/Spinner';

const PrivateRoute = ({ children }) => {

    const { user, userLoading } = useContext(AuthContext);
    const location = useLocation();

    if (userLoading) {
        return <Spinner></Spinner>
    }
    if (user && user?.email) {
        return children
    }
    return <Navigate to="/auth/login" state={{ from: location }} replace />;

};

export default PrivateRoute;