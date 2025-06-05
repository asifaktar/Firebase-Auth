import React, { useContext } from 'react';
import { AuthContext } from '../Components/AuthProvider/AuthProvider';
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);

    if(loading){
        return <span className="loading loading-spinner loading-xl"></span>
    }

    if(user){
       return children ; 
    }


    return (
        <Navigate to="/Login"></Navigate>
    );
};

export default PrivateRoute;