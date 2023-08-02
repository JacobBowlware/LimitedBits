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
import axios from 'axios';

/* TODO AFTER BACKEND DEVELOPMENT:
  - When user creates account or logs in, make sure to send their email as all lowercase - DONE
  - Fetch the users actual data from the database using their JWT token - (store the users data in the 'user' state) - DONE
  - When the user logs out, remove their JWT token from local storage. - DONE
  - Inside ProtectedRoutes, check if the user is authed by checking if their JWT token is valid - DONE
  - Change 'Create Bit' functionality to actually create a bit in the database - DONE
  - Render real time feed of bits inside the database for users - DONE
  - Populate Profile page with accurate data - DONE
  - Change 'Delete Bit' functionality to actually delete a bit in the database - (Inside MyBits page).
  - Implement Loading spinner for buttons or pages.
*/

/* ISSUES TO FIX:
  - After Signup users are not logged in automatically.
  - When user makes a bit post, the page is not refreshed to show the new bit.
  - 
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
  const [user, setUser] = useState<User | null>(null);
  console.log(user);

  useEffect(() => {
    // Check if the JWT token exists in local storage
    const token = localStorage.getItem("token");

    if (token) {
      const decodedUser = decodeJwtToken(token);
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
          <Route path="/auth-home" element={<AuthHome id={user?.id} />} />
          <Route path="/my-bits" element={<MyBits id={user?.id} />} />
          <Route path="/profile" element={<Profile user={user} />} />
        </Route>
        <Route element={<ProtectedRoutes user={user} noAuthedUsers={true} />}>
          <Route path="/sign-up" element={<SignUp onLoginSuccess={onLoginSuccess} />} />
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
