import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Footer from './Pages/Shared/Footer';
import Login from './Pages/Auth/Login';
import FAQ from './Pages/FAQ/FAQ';
import Register from './Pages/Auth/Register';
import Mission from './Pages/Mission/Mission';
import Vision from './Pages/Vision/Vision';
import Purchase from './Pages/Purchase/Purchase';



function App() {
  return (
    <div className='bg-[#071532]'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/purchase" element={<RequireAuth>
          <Purchase />
        </RequireAuth>
        } /> */}
        <Route path="/faq" element={<FAQ />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
