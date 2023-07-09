import {
  createBrowserRouter, createRoutesFromElements,
  RouterProvider, Route, Outlet
} from 'react-router-dom';

// CSS
import './css/App.css';
import './css/Home.css';
import './css/Header.css';
import './css/ValueCard.css';
import './css/FeedCard.css';

// Pages
import Home from './pages/Home';

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
