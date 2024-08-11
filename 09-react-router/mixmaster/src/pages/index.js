// This is to avoid importing the following components one by one in main.jsx, now we only need to write `import { About, Cocktail, Error, HomeLayout, Landing, Newsletter } from './pages'`!

import About from './About';
import Cocktail from './Cocktail';
import Error from './Error';
import Home from './Home';
import Landing from './Landing';
import Newsletter from './Newsletter';

export { About, Cocktail, Error, Home, Landing, Newsletter };