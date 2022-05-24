import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, Link, Router } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Footer from './Pages/Shared/Footer';
import Login from './Pages/Auth/Login';
import FAQ from './Pages/FAQ/FAQ';
import Register from './Pages/Auth/Register';
import Mission from './Pages/Mission/Mission';
import Vision from './Pages/Vision/Vision';
import Purchase from './Pages/Purchase/Purchase';
import RequireAuth from './Pages/Auth/RequireAuth';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import AddReview from './Pages/Dashboard/AddReview';
import MyProfile from './Pages/Dashboard/MyProfile';
import Profile from './Pages/Profile/Profile';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Contact from './Pages/ContactUs/Contact';



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
        <Route path="/purchase" element={<RequireAuth>
          <Purchase />
        </RequireAuth>
        } />

        <Route path="/dashboard" element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }>
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path="review" element={<AddReview></AddReview>}></Route>
          <Route path="myProfile" element={<MyProfile></MyProfile>}></Route>
        </Route>

        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer></Footer>
    </div >
  );
}

export default App;
