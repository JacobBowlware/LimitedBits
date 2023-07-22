import { Outlet } from 'react-router-dom';

// Components
import SignUp from '../pages/SignUp';
import AuthHome from '../pages/authPages/AuthHome';
import { User } from '../App';

/**
 * Route guard for protected routes.
 * @returns The desired route if the user is logged in, otherwise the login page.
 */
const ProtectedRoutes = ({ user, noAuthedUsers }: { user: User | null, noAuthedUsers: boolean }) => {
    /* TODO:
    - Implement better security checking for ProtectedRoutes. We should be checking the user's session token (JWT) 
    to see if it's valid, and if it is, we should be allowing them to access the protected routes.
    */

    // We don't want to allow authed users to access the login/signup pages.
    if (noAuthedUsers) {
        return user ? <AuthHome /> : <Outlet />;
    }

    return user ? <Outlet /> : <SignUp />;
}

export default ProtectedRoutes;