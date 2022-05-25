import React, { useEffect, useState } from 'react';
import AdminRow from './AdminRow';

const MakeAdmin = () => {
    const [users, setUser] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/user`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])

    return (
        <div>
            <h2 className='text-xl  text-[#FFC801]'>This is My Order: {users?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, index) => <AdminRow
                                key={user._id} user={user}
                                index={index}
                            ></AdminRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;