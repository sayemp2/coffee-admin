import Swal from 'sweetalert2'

const AddCoffee = () => {
    const handleAdditem = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const Chef = form.Chef.value;
        const Supplier = form.Supplier.value;
        const Taste = form.Taste.value;
        const Details = form.Details.value;
        const Category = form.Category.value;
        const Photo = form.Photo.value;
        const info = { name, Chef, Supplier, Taste, Details, Category, Photo }
        fetch('http://localhost:5000/coffees', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(info),
        })
            .then(res => res.json()
                .then(data => {
                    console.log(data);
                    if(data.insertedId){
                        Swal.fire({
                            title: 'success!',
                            text: 'Add item Successfully',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                          })
                    }
                })
            )
    }
    return (
        <div>
            <h1 className='text-3xl font-semibold text-center'>Add Coffee</h1>
            <form className="flex justify-center mt-3" onSubmit={handleAdditem} action="">
                <div className="flex-col flex border rounded-2xl p-5 w-2/3 space-y-2 ">
                    <div className=" flex w-full space-x-6">
                        <div className="w-1/2">
                            <label className="font-semibold " htmlFor="">Name</label><br />
                            <input className="p-3 rounded-xl w-full " placeholder="Enter coffee name" type="text" name="name" id="" />
                        </div>
                        <div className="w-1/2">
                            <label className="font-semibold " htmlFor="">Chef</label><br />
                            <input className="p-3 rounded-xl w-full " placeholder="Enter Chef name" type="text" name="Chef" id="" />
                        </div>
                    </div>
                    <div className=" flex w-full space-x-6">
                        <div className="w-1/2">
                            <label className="font-semibold " htmlFor="">Supplier</label><br />
                            <input className="p-3 rounded-xl w-full " placeholder="Enter coffee supplier" type="text" name="Supplier" id="" />
                        </div>
                        <div className="w-1/2">
                            <label className="font-semibold " htmlFor="">Taste</label><br />
                            <input className="p-3 rounded-xl w-full " placeholder="Enter coffee taste" type="text" name="Taste" id="" />
                        </div>
                    </div>
                    <div className=" flex w-full space-x-6">
                        <div className="w-1/2">
                            <label className="font-semibold " htmlFor="">Category</label><br />
                            <input className="p-3 rounded-xl w-full " placeholder="Enter coffee category" type="text" name="Category" id="" />
                        </div>
                        <div className="w-1/2">
                            <label className="font-semibold " htmlFor="">Details</label><br />
                            <input className="p-3 rounded-xl w-full " placeholder="Enter coffee details" type="text" name="Details" id="" />
                        </div>
                    </div>
                    <div className=" flex w-full space-x-6">
                        <div className="w-full">
                            <label className="font-semibold " htmlFor="">Photo URL</label><br />
                            <input className="p-3 rounded-xl w-full " placeholder="Enter coffee category" type="text" name="Photo" id="" />
                        </div>
                    </div>
                    <input className="btn bg-blue-700 text-white" type="submit" value="ADD ITEM" />


                </div>
            </form>
        </div>
    );
};

export default AddCoffee;