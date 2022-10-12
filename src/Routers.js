import { createBrowserRouter } from "react-router-dom";
import Blog from "./components/Blog";
import Error from "./components/Error";
import Home from "./components/Home";
import Main from "./components/Main";
import Statics from "./components/Statics";
import Topics from "./components/Topics";


const router = createBrowserRouter([
    {
      path: '/', 
      element: <Main></Main>,
      children: [
        {
          path: '/home', 
          element: <Home></Home>,
          loader: () => fetch ('https://openapi.programming-hero.com/api/quiz'),
        },
        {
        path: '/home:QuizeId', 
        loader: ({params}) => fetch (`https://openapi.programming-hero.com/api/quiz/${params.QuizeId}`),
        element: <Topics></Topics>,
 
        },
        // {
        //   path: '/topics', 
        //   element: <Topics></Topics>
        // },
        {
            path: '/blog', 
            element: <Blog></Blog> 
        },
        {
            path: '/statics', 
            element: <Statics></Statics>
        }
      ],
      errorElement: <Error></Error>
    },
    
  ]);

export default router;