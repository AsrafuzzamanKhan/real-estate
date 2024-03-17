
import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";
import HomePage from './routes/HomePage/HomePage';
import Layout from './routes/Layout/Layout';
import ListPage from "./routes/ListPage/ListPage";
import SinglePage from "./routes/SinglePage/SinglePage";
import Login from "./routes/Login/Login";
import ProfilePage from "./routes/ProfilePage/ProfilePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <HomePage />
        },
        {
          path: '/list',
          element: <ListPage />
        },
        {
          path: '/:id',
          element: <SinglePage />
        },
        {
          path: '/profile',
          element: <ProfilePage />
        },
        {
          path: '/login',
          element: <Login />
        },
      ]
    },

  ]);
  return (

    <RouterProvider router={router} />
  )
}

export default App