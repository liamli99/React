// Now we only need to write `import Page2 from './04-project-structure/Pages2';` in App.jsx to use the combination of Home and About components!

import Home from './Home';
import About from './About';

const Page2 = () => {
    return (
        <div>
            <Home />
            <About />
        </div>
    );
};

export default Page2;