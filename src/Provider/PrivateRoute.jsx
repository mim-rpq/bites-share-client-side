import React, { use } from 'react';
import { useLocation } from 'react-router';
import { AuthContext } from './AuthContext';
import Spinner from '../Components/Spinner';

const PrivateRoute = ({children}) => {

    const {user,  userLoading} = use(AuthContext);
    const location = useLocation();

    if(userLoading){
        return<Spinner></Spinner>
    }
    if(user && user?.email){
        return children
    }
     return <Navigate  state={location.pathname} to='/auth/login'></Navigate>
     
};

export default PrivateRoute;