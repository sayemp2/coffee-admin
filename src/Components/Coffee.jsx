import Swal from 'sweetalert2'

const Coffee = ({ coffee, coffees, setCoffees }) => {
    const { _id, name, Chef,   Details,  Photo } = coffee
    const handleDelete = _id => {

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

                console.log(_id)
                fetch(`http://localhost:5000/coffees/${_id}`, {
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
                        const remainingCoffees = coffees.filter(coffee => coffee._id !== _id)
                        setCoffees(remainingCoffees)
                    })
            }
        });
    }

    return (
        <div>
            <div className="flex justify-between items-center bg-slate-900 rounded-2xl p-5 shadow-xl">
                <div>
                    <img src={Photo} alt="" />
                </div>
                <div className="">
                    <h2 className=""><span className="font-semibold">Name: </span>{name}</h2>
                    <h2 className=""><span className="font-semibold">Chef: </span>{Chef}</h2>
                    <h2 className=""><span className="font-semibold">Details: </span>{Details}</h2>
                </div>
                <div className="justify-end">
                    <div className="join join-vertical space-y-1">
                        <button className="btn bg-green-400 text-white join-item">View</button>
                        <button className="btn bg-green-600 text-white join-item">Edit</button>
                        <button onClick={() => handleDelete(_id)} className="btn bg-red-600 text-white join-item">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Coffee;