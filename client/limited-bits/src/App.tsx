import {
  createBrowserRouter, createRoutesFromElements,
  RouterProvider, Route, Outlet
} from 'react-router-dom';
import { useEffect, useState } from 'react';

// CSS
import './css/App.css';
import './css/Home.css';
import './css/components/Header.css';
import './css/components/Footer.css';
import './css/components/ValueCard.css';
import './css/components/FeedCard.css';
import './css/components/ReviewCard.css';
import './css/authPages/AuthHome.css';
import './css/components/PopupForm.css'

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

// Auth Pages
import AuthHome from './pages/authPages/AuthHome';
import Profile from './pages/authPages/Profile';
import MyBits from './pages/authPages/MyBits';

// Components
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import ScrollToTop from './components/ScrollToTop';
import ProtectedRoutes from './components/ProtectedRoutes';

/*
 TODO:
 - Conditionally change header for authed users - DONE
 - Implement the 'Create Bit' popup form on button click - DONE
 - Conditionally move authed users from login/create-account pages to AuthHome page - DONE
 - Add 'Username' field to Sign Up page - DONE
 - Users 'My Bits' should show their bits without their username on each one, and should be able to delete them - DONE
 - Implement Profile page - DONE
 - Start Backend development.
*/

/* TODO AFTER BACKEND DEVELOPMENT:
  - Fetch the users actual data from the database using their JWT token - (store the users data in the 'user' state).
  - Inside ProtectedRoutes, check if the user is authed by checking if their JWT token is valid.
  - When the user logs out, remove their JWT token from local storage.
  - Change 'Create Bit' functionality to actually create a bit in the database.
  - Change 'Delete Bit' functionality to actually delete a bit in the database - (Inside MyBits page).
  - Populate Profile page with accurate data.
  - Render real time feed of bits inside the database for users.
*/
export interface User {
  id: number,
  username: string,
  icon: string,
  email: string,
}

const decodeJwtToken = (token: string): User | null => {
  try {
    const tokenParts = token.split(".");
    const decodedToken: any = JSON.parse(atob(tokenParts[1])); // Decode the base64-encoded payload

    const user: User = {
      id: decodedToken._id,
      username: decodedToken.username,
      icon: decodedToken.icon,
      email: decodedToken.email,
    };

    return user;
  } catch (error) {
    return null;
  }
}

function App() {
  const goodUser: User = {
    id: 1,
    username: "JohnDoe",
    icon: "faUserTie",
    email: "johndoe@gmail.com"
  }

  const [user, setUser] = useState<User | null>(goodUser);

  useEffect(() => {
    // Check if the JWT token exists in local storage
    const jwtToken = localStorage.getItem("jwtToken");

    if (jwtToken) {
      // If the JWT token exists, decode it to get the user data
      const decodedUser = decodeJwtToken(jwtToken);
      setUser(decodedUser);
    }
  }, [])

  const onLoginSuccess = (userData: User) => {
    setUser(userData);
  };

  const Root = () => {
    return <>
      <Header user={user} />
      <ScrollToTop />
      <Outlet />
      <Footer user={user} />
    </>
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route element={<ProtectedRoutes user={user} noAuthedUsers={false} />}>
          <Route path="/auth-home" element={<AuthHome />} />
          <Route path="/my-bits" element={<MyBits />} />
          <Route path="/profile" element={<Profile user={user} />} />
        </Route>
        <Route element={<ProtectedRoutes user={user} noAuthedUsers={true} />}>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<Login onLoginSuccess={onLoginSuccess} />} />
        </Route>
        <Route index element={<Home />} />
        <Route path="*" element={<Home />} />
      </Route>
    )
  )

  return (
    <div className="web-container">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
