import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import AdminRow from './AdminRow';

const MakeAdmin = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch(`https://fierce-everglades-09233.herokuapp.com/user`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res =>
        res.json()
    )
    )
    if (isLoading) {
        <Loading />
    }


    return (
        <div>
            <h2>This is My Order: {users?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>manage</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, index) => <AdminRow
                                key={user._id} user={user}
                                index={index}
                                refetch={refetch}
                            ></AdminRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;