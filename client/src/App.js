import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import OfferBanner from "./components/OfferBanner/OfferBanner";
import Home from "./pages/Home/Home";

const Layout = () => {
  return (
    <div className="app">
      <OfferBanner />
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
