import { createRoot } from 'react-dom/client';
import './index.css';

// React Router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home, Landing, Cocktail, About, Newsletter, SinglePageError, Error } from './pages';
import { landingLoader } from './pages/Landing';
import { cocktailLoader } from './pages/Cocktail';
import { newsletterAction } from './pages/Newsletter';

// React Query
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();

const router = createBrowserRouter([{
  path: '/',
  element: <Home />,
  errorElement: <Error />,
  children: [
    {
      // Index Route! Don't write `path: '/'` because it can lead to confusion and unexpected behavior!
      index: true,
      element: <Landing />,
      errorElement: <SinglePageError />,
      loader: landingLoader(queryClient)
    },
    {
      // This path has dynamic segment, it will match urls like '/cocktail/123', '/cocktail/aaa'
      path: 'cocktail/:id',
      element: <Cocktail />,
      errorElement: <SinglePageError />,
      loader: cocktailLoader(queryClient)
    },
    {
      // This is relative to its parent route path: '/about'
      path: 'about',
      element: <About />
    },
    {
      // This is relative to its parent route path: '/newsletter'
      path: 'newsletter',
      element: <Newsletter />,
      errorElement: <SinglePageError />,
      action: newsletterAction
    }
  ]
}]);

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
)
