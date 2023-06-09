import Footer from './components/Footer';
import Header from './components/Header';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration
} from "react-router-dom";

import Home from './pages/Home';
import Cart from './pages/Cart';
import { productsData } from './api/Api';
import Product from './components/Product';
import Login from './pages/Login';
import Pages from './pages/pages';

const Layout = ()=>{
  return (
    <div>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  )
}
const router = createBrowserRouter([{
  path:"/",
  element:<Layout />,
  children:[
    {
      path:"/",
      element:<Home />,
      loader:productsData,
    },
    {
    path:"/product/:id",
    element:<Product />
    },
    {
      path: "/cart",
      element: <Cart />
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/pages",
      element: <Pages/>,
    },
    // {
    //   path: "/shop",
    //   element: <pages />,
    // },
  ]
}])
function App() {
  return (
    <div className='font-bodyFont'>
    <RouterProvider  router={router}/>
    </div>
  );
}

export default App;
