import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import User from './pages/User';
import UserProfile from './pages/UserProfile';

function App() {

  return (
    <div className="App">
      
      <Router>
        {/* It exists in all the routes! */}
        <Link to="/">Home</Link>
        <Link to="/user">User</Link>

        {/* Create concrete page with specific userId based on template page */}
        <Link to="/user/1">User 1</Link>
        <Link to="/user/2">User 1</Link>

        <Routes>
          {/* Homepage: localhost:3000 */}
          <Route path="/" element={<Home />} />
          {/* localhost:3000/user */}
          <Route path="/user" element={<User />} />
          {/* Template page: localhost:3000/user/anyNumber */}
          <Route path="/user/:userId" element={<UserProfile />} />
          {/* Other pages excluding the above three */}
          <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
        </Routes>
        <div>Footer</div>
      </Router>

    </div>
  )
}

export default App;