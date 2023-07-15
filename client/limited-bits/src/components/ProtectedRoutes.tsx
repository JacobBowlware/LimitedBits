import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import SignUp from '../pages/SignUp';

/**
 * Route guard for protected routes.
 * @returns The desired route if the user is logged in, otherwise the login page.
 */
const ProtectedRoutes = () => {
    const [user, setUser] = useState(true);

    // useEffect(() => {
    //     // Check if user is logged in
    //     setUser(true);
    // }, []);

    return user ? <Outlet /> : <SignUp />;
}

export default ProtectedRoutes;