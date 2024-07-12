import { useLoaderData } from "react-router-dom";

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const { _id ,name, Chef, Supplier, Taste, Details, Category, Photo } = coffee;
    const handleUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const Chef = form.Chef.value;
        const Supplier = form.Supplier.value;
        const Taste = form.Taste.value;
        const Details = form.Details.value;
        const Category = form.Category.value;
        const Photo = form.Photo.value;
        const updateInfo = { name, Chef, Supplier, Taste, Details, Category, Photo }
        fetch(`http://localhost:5000/coffees/${_id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json',
            },
            body:JSON.stringify(updateInfo)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })


    }

    return (
        <div>
            <h1 className='text-3xl font-semibold text-center'>Update Coffee </h1>
            <form className="flex justify-center mt-3" onSubmit={handleUpdate} action="">
                <div className="flex-col flex border rounded-2xl p-5 w-2/3 space-y-2 ">
                    <div className=" flex w-full space-x-6">
                        <div className="w-1/2">
                            <label className="font-semibold " htmlFor="">Name</label><br />
                            <input className="p-3 rounded-xl w-full " placeholder="Enter coffee name" defaultValue={name} type="text" name="name" id="" />
                        </div>
                        <div className="w-1/2">
                            <label className="font-semibold " htmlFor="">Chef</label><br />
                            <input className="p-3 rounded-xl w-full " placeholder="Enter Chef name" defaultValue={Chef} type="text" name="Chef" id="" />
                        </div>
                    </div>
                    <div className=" flex w-full space-x-6">
                        <div className="w-1/2">
                            <label className="font-semibold " htmlFor="">Supplier</label><br />
                            <input className="p-3 rounded-xl w-full " placeholder="Enter coffee supplier" defaultValue={Supplier} type="text" name="Supplier" id="" />
                        </div>
                        <div className="w-1/2">
                            <label className="font-semibold " htmlFor="">Taste</label><br />
                            <input className="p-3 rounded-xl w-full " placeholder="Enter coffee taste" defaultValue={Taste} type="text" name="Taste" id="" />
                        </div>
                    </div>
                    <div className=" flex w-full space-x-6">
                        <div className="w-1/2">
                            <label className="font-semibold " htmlFor="">Category</label><br />
                            <input className="p-3 rounded-xl w-full " placeholder="Enter coffee category" defaultValue={Category} type="text" name="Category" id="" />
                        </div>
                        <div className="w-1/2">
                            <label className="font-semibold " htmlFor="">Details</label><br />
                            <input className="p-3 rounded-xl w-full " placeholder="Enter coffee details" defaultValue={Details} type="text" name="Details" id="" />
                        </div>
                    </div>
                    <div className=" flex w-full space-x-6">
                        <div className="w-full">
                            <label className="font-semibold " htmlFor="">Photo URL</label><br />
                            <input className="p-3 rounded-xl w-full " placeholder="Enter photo url" defaultValue={Photo} type="text" name="Photo" id="" />
                        </div>
                    </div>
                    <input className="btn bg-blue-700 text-white" type="submit" value="Update ITEM"/>
                </div>
            </form>
        </div>
    );
};

export default UpdateCoffee;