import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'

const Users = () => {
    const loadUsers = useLoaderData();
    const [users, setUsers] = useState(loadUsers);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                console.log(id)
                fetch(`http://localhost:5000/user/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deleteCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                        const remaingUsers = users.filter(user => user._id !== id);
                        setUsers(remaingUsers)
                    }

                    )
            }
        });



    }

    return (
        <div>
            <div className="overflow-x-auto">
                <h1>{users.length}</h1>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Email</th>
                                <th>SignUp Time</th>
                                <th>Last Sign in</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {users.map(user => (

                                <tr key={user._id} className="bg-base-200">
                                    <th>1</th>
                                    <td>{user.email}</td>
                                    <td>{user.creationTime}</td>
                                    <td></td>
                                    <td>
                                        <button onClick={() => handleDelete(user._id)} className="btn">X</button>
                                    </td>
                                </tr>
                            ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Users;
