import { createRoot } from 'react-dom/client';
import App from './App.jsx';

import { About, Cocktail, Error, Home, Landing, Newsletter } from './pages';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([{
  path: '/',
  element: <Home />,
  children: [
    {
      // Index Route! Don't write `path: '/'` because it can lead to confusion and unexpected behavior!
      index: true,
      element: <Landing />
    },
    {
      // This is relative to its parent path: '/about'
      path: 'about',
      element: <About />
    },
    {
      path: 'newsletter',
      element: <Newsletter />
    },
    {
      path: 'cocktail',
      element: <Cocktail />
    }
  ]
}]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
