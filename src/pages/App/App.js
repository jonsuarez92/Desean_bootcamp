import './App.css';
import { Routes, Route } from 'react-router-dom'
//pages
import Home from '../Home/Home'
import HomeShowPage from '../Home/HomeShowPage';
// components
import MediaIcons from '../../components/MediaIcons/MediaIcons';
import Footer from '../../components/Footer/Footer';

function App() {
  return (
    <main className="App">
      <>
        <div className="backGroundI">
          <div >
            <MediaIcons />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/bootCamp-class" element={<HomeShowPage />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </>

    </main>

  );
}

export default App;
