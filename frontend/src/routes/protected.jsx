import React, { useContext } from 'react'

import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from '../context/authContext';
const ProtectedRoute = () => {

    const { token } = useContext(AuthContext);
    console.log(token);
    return token != null ? <Outlet /> : <Navigate to="/login" />
    }

export default ProtectedRoute