// This is to avoid importing the following components one by one in main.jsx, now we only need to write `import { Home, Landing, About, Newsletter, Cocktail, SinglePageError, Error } from './pages'`!

import Home from './Home';
import Landing from './Landing';
import Cocktail from './Cocktail';
import About from './About';
import Newsletter from './Newsletter';
import SinglePageError from './SinglePageError';
import Error from './Error';

export { Home, Landing, Cocktail, About, Newsletter, SinglePageError, Error };