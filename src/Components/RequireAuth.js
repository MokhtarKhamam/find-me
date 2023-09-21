import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

const RequireAuth = ({children}) => {
  const location = useLocation();

    const isAuth = useSelector((state) => state.auth.isAuth)

    if(!isAuth){
        return <Navigate to="/login" state={{path: location.pathname}} />
    }

  return children
}

export default RequireAuth
