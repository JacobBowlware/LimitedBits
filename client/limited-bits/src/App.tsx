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
import './css/authPages/MyBits.css'
import './css/components/PopupForm.css'
import './css/components/FeedList.css'

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

/* TODO AFTER BACKEND DEVELOPMENT:
  - If a user is currently waiting their 1 week to post a bit, display a time icon instead of 'post bit' and when hovered 
    over, display a message saying how long they have left to wait. 
  - Implement Loading spinner for buttons or pages.
*/

/* ISSUES TO FIX:
  - Feed bits and users bits are being rendered backwards.
  - After Signup users are not logged in automatically.
  - When user clicks on 'post bit', the number 1 on the bottom navbar appears above the form.
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

    localStorage.setItem("username", userData.username);
    localStorage.setItem("email", userData.email);
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
          <Route path="/profile" element={<Profile />} />
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
