import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Footer from './Pages/Shared/Footer';
import Login from './Pages/Auth/Login';
import Blogs from './Pages/Blogs/Blogs';
import Reviews from './Pages/Reviews/Reviews';
import FAQ from './Pages/FAQ/FAQ';
import Programs from './Pages/Programs/Programs';
import Register from './Pages/Auth/Register';
import RequireAuth from './Pages/Auth/RequireAuth';



function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/programs" element=
          {

            <RequireAuth>
              <Programs />
            </RequireAuth>

          } />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
