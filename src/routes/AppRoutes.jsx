import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from '../pages/Home/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '*',
    element: <h1>404 - Not Found</h1>
  }
])

const AppRoutes = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default AppRoutes