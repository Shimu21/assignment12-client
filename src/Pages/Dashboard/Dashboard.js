import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';

const Dashboard = () => {
    const [user] = useState(auth);
    const [admin] = useAdmin(user);
    console.log(admin);

    return (
        <div className="drawer drawer-mobile">
            <input id="Dashboard-Sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h1 className='text-3xl font-bold text-[#FFC801] text-center my-4'>Welcome To Your DASHBOARD</h1>
                <Outlet></Outlet>
            </div>

            <div className="drawer-side">
                <label htmlFor="Dashboard-Sidebar" className="drawer-overlay"></label>
                <ul className="menu p-2 overflow-y-auto w-50 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to="/dashboard">My Orders</Link></li>
                    <li><Link to="/dashboard/review">Add Review</Link></li>

                    <li><Link to="/dashboard/myProfile">My Profile</Link></li>

                    {!admin && <>
                        <li><Link to="/dashboard/manageProducts">Manage Products</Link></li>
                        <li><Link to="/dashboard/manageOrders">Manage Orders</Link></li>
                        <li><Link to="/dashboard/addProduct">Add Product</Link></li>
                        <li> <Link to="/dashboard/makeAdmin">Make Admin</Link></li>
                    </>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;