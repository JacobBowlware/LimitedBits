import { Outlet } from 'react-router-dom';
import { User } from '../App';
import Home from '../pages/Home';
import AuthHome from '../pages/authPages/AuthHome';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface ProtectedRoutesProps {
    user: User | null;
    noAuthedUsers: boolean;
}

const ProtectedRoutes: React.FC<ProtectedRoutesProps> = ({ user, noAuthedUsers }) => {
    const [authenticated, setAuthenticated] = useState<boolean | null>(null);

    useEffect(() => {
        const checkAuthentication = async () => {
            const token = localStorage.getItem('token');

            try {
                const result = await axios.post('http://localhost:3000/api/auth/verify-token', {
                    token: token
                });

                setAuthenticated(result.status === 200);
            } catch (error) {
                console.log(error);
                setAuthenticated(false);
            }
        };

        checkAuthentication();
    }, []);

    if (authenticated === null) {
        return <div>Loading...</div>; // Loading state.
    }
    else if (noAuthedUsers) {
        // We don't want to allow authed users to access the login/signup pages.
        if (authenticated) {
            return <AuthHome />;
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
