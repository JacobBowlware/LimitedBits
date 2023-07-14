import {
  createBrowserRouter, createRoutesFromElements,
  RouterProvider, Route, Outlet
} from 'react-router-dom';

// CSS
import './css/App.css';
import './css/Home.css';
import './css/components/Header.css';
import './css/components/Footer.css';
import './css/components/ValueCard.css';
import './css/components/FeedCard.css';
import './css/components/ReviewCard.css';
import './css/SignUp.css';
import './css/Login.css';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

// Components
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import ScrollToTop from './components/ScrollToTop';

function App() {
  const Root = () => {
    return <>
      <Header />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </>
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
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
