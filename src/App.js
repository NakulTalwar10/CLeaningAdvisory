import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Navbars from './components/Navbar/Navbars';
import Admin from './Pages/Admin/Admin';
import Home from './Pages/Home/Home';
import AdminControl from './Pages/AdminControl/AdminControl';
import BlogDetails from './Pages/BlogDetails/BlogDetails';
import Login from './Pages/Login/Login';
import Signup from './Pages/SignUp/Signup';


function App() {
  const router = createBrowserRouter([
    {
      element:<Navbars/>,
      children:[
        {
          path: '/',
          element: <Home/>
        },
      
        {
          path: "/admin",
          element: <Admin/>
        },
        {
          path: "/admincontrol",
          element: <AdminControl/>
        },
        {
          path: "/blog-details",
          element: <BlogDetails/>
        },
      ],  
    },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/signup",
      element: <Signup/>
    },

    
    ])
  return (
    <div>
     <RouterProvider router={router}/>
    </div>
  );
}

export default App;
