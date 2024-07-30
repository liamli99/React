// This is to avoid `import Navbar from './04-project-structure/Navbar/Navbar'` in App.jsx!
// Now we only need to write `import Navbar from './04-project-structure/Navbar';` in App.jsx! Note that this is the same as `import Navbar from './04-project-structure/Navbar/index.jsx';`!

// The following code can also be written in one line:
// export { default } from './Navbar';

import Navbar from './Navbar';
export default Navbar;