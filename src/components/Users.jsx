import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Users = () => {
    const loadedUser = useLoaderData();
    // console.log(loadedUser)
    const [users,setUsers] = useState(loadedUser);
    console.log(users);

    const handleDelete = id =>{
      
      console.log(id)

      fetch(`http://localhost:5000/users/${id}`,{
        method:'DELETE',
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        if(data.deletedCount>0){
          alert('data deleted successfully')
          const remainingUsers = users.filter(user=>user._id !== id);
          setUsers(remainingUsers)
        }
      })
    }

    return (
        <div>
            <h2>Users{users.length}</h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Email</th>
        <th>Created AT</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        users.map(user=>  <tr key={user._id}>
             <th>1</th>
        <td>{user.email}</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
        <td><button onClick={()=>handleDelete(user._id)} className='btn'>X</button></td>
        </tr>)
      }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Users;