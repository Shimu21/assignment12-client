import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../assets/Icons/webLogo.png';


const Navbar = () => {
    const [user] = useAuthState(auth);

    return (
        <div className="navbar bg-primary text-white py-8 font-bold hover:text-[#FFC801]">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black hover:text-[#FFC801]">
                        <li><Link to="/home">HOME</Link></li>
                        <li><Link to="/mission">MISSION</Link></li>
                        <li><Link to="/vision">VISION</Link></li>
                        <li><Link to="/faq">FAQ</Link></li>
                        <li><Link to="/contact">CONTACT US</Link></li>
                        {
                            user ? <li><Link to="" onClick={() => signOut(auth)}>Logout</Link></li> : <li><Link to="/login">Login</Link></li>
                        }
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">
                    <img className='h-[55px]' src={logo} alt="logo" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to="/home">HOME</Link></li>
                    <li><Link to="/mission">MISSION</Link></li>
                    <li><Link to="/vision">VISION</Link></li>
                    <li><Link to="/faq">FAQ</Link></li>
                    <li><Link to="/contact">CONTACT US</Link></li>
                    {
                        user ? <li><Link to="" onClick={() => signOut(auth)}>Logout</Link></li> : <li><Link to="/login">Login</Link></li>
                    }

                </ul>
            </div>

        </div>
    );
};

export default Navbar;