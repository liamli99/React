// This is to avoid `import About from './04-project-structure/Pages1/About';` and `import Home from './04-project-structure/Pages1/Home';` in App.jsx!
// Now we only need to write `import { About, Home } from './04-project-structure/Pages1';` in App.jsx to use these two components!

import Home from './Home';
import About from './About';

export { Home, About };