import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import OfferBanner from "./components/OfferBanner/OfferBanner";
import Home from "./pages/Home/Home";

const OfferMessage = 'Free Same Day Shipping Anywhere in Canada on Qualifying Orders Over $50';

const Layout = () => {
  return (
    <div className="app">
      <OfferBanner
        OfferMessage = {OfferMessage}
       />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      }
    ]
  }
])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>

  );
}

export default App;
