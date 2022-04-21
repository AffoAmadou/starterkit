import './App.css';
import { AnimatePresence } from 'framer-motion';
import { useLocation, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import About from './pages/about/about';
function App() {
  const location = useLocation();
  const imageDetails = {
    width: 262,
    height: 325,
  };
  return (
    <div className="App" >
      <>
        <AnimatePresence exitBeforeEnter >
          <Routes key={location.pathname} location={location}>
            <Route path="/" element={<Home imageDetails={imageDetails} />} ></Route>
            <Route path="/about" element={<About imageDetails={imageDetails} />} ></Route>
          </Routes>
        </AnimatePresence>
      </>
    </div>
  );
}

export default App;


