import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ListView from './components/ListView';
import GalleryView from './components/GalleryView';
import DetailView from './components/DetailView';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<ListView />} />
        <Route path='/gallery' element={<GalleryView />} />
        <Route path='/movie/:movieId' element={<DetailView />} />
      </Routes>
    </Router>
  )
}

export default App;