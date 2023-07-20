import {
  createBrowserRouter, createRoutesFromElements,
  RouterProvider, Route, Outlet
} from 'react-router-dom';
import { useState } from 'react';

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
 - Add 'Username' field to Sign Up page.
 - Implement Profile page.
 - Implement 'My Bits' page.
 - Start Backend development.
*/
export interface User {
  id: number,
  name: string,
  icon: string,
  email: string,
}

function App() {
  const [user, setUser] = useState<User | null>({
    id: 1,
    name: "John Doe",
    icon: "faUserTie",
    email: "johndoe@gmail.com"
  });

  const Root = () => {
    return <>
      <Header user={user} />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </>
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route element={<ProtectedRoutes />}>
          <Route path="/auth-home" element={<AuthHome />} />
          <Route path="/my-bits" element={<MyBits />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route index element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
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
