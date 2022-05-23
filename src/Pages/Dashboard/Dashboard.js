import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="Dashboard-Sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <h1 className='text-3xl font-bold text-[#FFC801] text-center my-4'>Welcome To Your DASHBOARD</h1>
                <Outlet></Outlet>
            </div>

            <div class="drawer-side">
                <label for="Dashboard-Sidebar" class="drawer-overlay"></label>
                <ul class="menu p-2 overflow-y-auto w-50 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to="/dashboard">Sidebar Item 1</Link></li>
                    <li><Link to="/dashboard/review">Sidebar Item 2</Link></li>
                    <li><Link to="/dashboard/myProfile">Sidebar Item 4</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;