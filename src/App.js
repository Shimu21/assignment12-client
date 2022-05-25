import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Route, Routes } from "react-router-dom";
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
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddReview from './Pages/Dashboard/AddReview';
import MyProfile from './Pages/Dashboard/MyProfile';
import 'aos/dist/aos.css';
import Contact from './Pages/ContactUs/Contact';
import ManageProducts from './Pages/Dashboard/ManageProducts';
import ManageOrders from './Pages/Dashboard/ManageOrders';
import AddProduct from './Pages/Dashboard/AddProduct';
import MakeAdmin from './Pages/Dashboard/MakeAdmin';
import RequireAdmin from './Pages/Auth/RequireAdmin';



function App() {
  return (
    <div className='bg-[#071532]'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/purchase/:productId" element={<RequireAuth>
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
          <Route path="manageProducts" element={
            <RequireAdmin>
              <ManageProducts></ManageProducts>
            </RequireAdmin>
          }></Route>
          <Route path="manageOrders" element={
            <RequireAdmin>
              <ManageOrders></ManageOrders>
            </RequireAdmin>
          }></Route>
          <Route path="addProduct" element={
            <RequireAdmin>
              <AddProduct></AddProduct>
            </RequireAdmin>
          }></Route>
          <Route path="makeAdmin" element={
            <RequireAdmin>
              <MakeAdmin></MakeAdmin>
            </RequireAdmin>
          }></Route>
        </Route>

        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/myProfile" element={<MyProfile />} />
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div >
  );
}

export default App;
