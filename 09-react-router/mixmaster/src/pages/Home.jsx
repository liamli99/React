import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  const navigation = useNavigation();

  return (
    <>
      <Navbar />
      
      <section className='page'>
        {/* The navigation.state is 'loading' when a route loader is being called to render the next route element! Since Home route has 4 child routes and Landing route and Cocktail route has loaders, thus these two routes will have loading! So that loading can happen when we navigate back to Home or click single cocktail details! */}
        {navigation.state === 'loading' ? <div className='loading' /> : <Outlet />}
      </section>
    </>
  );
}

export default Home;