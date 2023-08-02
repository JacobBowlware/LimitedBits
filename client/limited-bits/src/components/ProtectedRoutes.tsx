import { Outlet } from 'react-router-dom';
import { User } from '../App';
import Home from '../pages/Home';
import AuthHome from '../pages/authPages/AuthHome';
import { useEffect, useState } from 'react';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';
interface ProtectedRoutesProps {
    user: User | null;
    noAuthedUsers: boolean;
}

const ProtectedRoutes: React.FC<ProtectedRoutesProps> = ({ user, noAuthedUsers }) => {
    const [authenticated, setAuthenticated] = useState<boolean | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const checkAuthentication = async () => {
            const token = localStorage.getItem('token');

            try {
                const result = await axios.post('http://localhost:3000/api/auth/verify-token', {
                    token: token
                });

                setAuthenticated(result.status === 200);
            } catch (error) {
                setAuthenticated(false);
                navigate('/login');
            }
        };

        checkAuthentication();
    }, [navigate]);

    if (authenticated === null) {
        return <div>Loading...</div>; // Loading state.
    }
    else if (noAuthedUsers) {
        // We don't want to allow authed users to access the login/signup pages.
        if (authenticated) {
            return <Home />;
        } else {
            return <Outlet />;
        }
    } else {
        // For other protected routes, check if the user is authenticated
        if (authenticated) {
            return <Outlet />;
        } else {
            return <Home />;
        }
    }
};

export default ProtectedRoutes;
