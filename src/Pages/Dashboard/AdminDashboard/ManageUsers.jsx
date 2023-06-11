import React from 'react';
import UseAllUser from '../../../CustomHook/UseAllUser';
import SectionTitle from '../../../components/SectionTitle';
import { Helmet } from 'react-helmet-async';
import DisplayManageUser from './DisplayManageUser';

const ManageUsers = () => {

    const [allUsers,allUsersLoading,refetch] = UseAllUser();
    // console.log(allUsers);

    return (
        <div>
            <Helmet>
                <title>All Classes | CosmetiCraft</title>
            </Helmet>
            <SectionTitle heading={'manage users'}></SectionTitle>



            <div className="overflow-x-auto">
                <table className="table border border-sky-100">
                    {/* head */}
                    <thead className='text-black text-lg'>
                        <tr>
                            <th># </th>
                            <th>Image</th>
                            <th>  Name</th>
                            <th>Email</th>
                            <th>Role</th>
                       
                         

                            <th  >Action</th>
                            <th  >Action</th>
                            <th  >Action</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            allUsers.map((singleUser,index)=><DisplayManageUser
                            key={singleUser._id}
                            singleUser={singleUser}
                            index={index}
                            refetch={refetch}
                            
                            ></DisplayManageUser> )
                        }

                    </tbody>


                </table>
            </div>






        </div>
    );
};

export default ManageUsers;