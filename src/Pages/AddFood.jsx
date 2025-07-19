import React, { use } from 'react';
import { AuthContext } from '../Provider/AuthContext';
import banner from '../assets/images/banner3.jpg'
import logo from '../assets/images/logo2.png'
import axios from 'axios';
import Swal from 'sweetalert2';





const AddFood = () => {
    const { user } = use(AuthContext);
    const handleAddFood = e => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form)


        // set user info 
        if (user?.email) formData.set("userEmail", user.email);
        if (user?.displayName) formData.set("userName", user.displayName);
        if (user?.photoURL) formData.set("userPhotoURL", user.photoURL);

        const newFoodItem = Object.fromEntries(formData.entries());
        // console.log('data', newFoodItem);


        axios.post('https://bites-share-server.vercel.app/foods', newFoodItem)
            .then(data => {
                
                if(data.data.insertedId){
                     Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Food added successfully!",
                        showConfirmButton: false,
                        timer: 1500
                    });

                    
                     form.reset()
                }
            })
    }


    return (

        <div className="relative w-full ">
            {/* Background Image */}
            <img
                src={banner}
                alt="Banner"
                className="w-full h-full object-cover"
            />

            {/*  Transparent Overlay */}
            <div className="absolute inset-0 bg-black/50 ">


                <form onSubmit={handleAddFood} className="max-w-3xl mx-auto bg-white p-6 mt-5 py-9 mb-32 shadow-2xl space-y-6">

                    <div className='flex justify-center  mb-6 gap-3 items-center'>
                        <img src={logo} alt="" className='' />
                        <h2 className="text-3xl text-primary font-bold">Add Food to Share</h2>

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Food Name */}
                        <div>
                            <label className="block text-sm font-medium mb-1">Food Name</label>
                            <input
                                type="text"
                                name="foodName"
                                className="input input-bordered w-full"
                                placeholder='Food Name'
                                required
                            />
                        </div>

                        {/* Food Image URL */}
                        <div>
                            <label className="block text-sm font-medium mb-1">Food Image URL</label>
                            <input
                                type="text"
                                name="foodImage"
                                className="input input-bordered w-full"
                                placeholder='Food Image URL '
                                required
                            />
                        </div>

                        {/* Food Quantity */}
                        <div>
                            <label className="block text-sm font-medium mb-1">Food Quantity</label>
                            <input
                                type="text"
                                name="foodQuantity"
                                className="input input-bordered w-full"
                                placeholder='Food Quantity'
                                required
                            />
                        </div>

                        {/* Pickup Location */}
                        <div>
                            <label className="block text-sm font-medium mb-1">Pickup Location</label>
                            <input
                                type="text"
                                name="pickupLocation"
                                className="input input-bordered w-full"
                                placeholder='Pickup Location'
                                required
                            />
                        </div>

                        {/* Expired Date/Time */}
                        <div>
                            <label className="block text-sm font-medium mb-1">Expired Date & Time</label>
                            <input
                                type="datetime-local"
                                name="expiredDateTime"
                                className="input input-bordered w-full"
                                placeholder='Expired Date & Time'
                                required
                            />
                        </div>
                    

                        {/* Additional Notes */}
                        <div className=''>
                            <label className="block text-sm font-medium mb-1">Additional Notes</label>
                            <textarea
                                name="additionalNotes"
                                className="textarea textarea-bordered w-full"
                                rows={3}
                                placeholder='Add additional info'
                            ></textarea>
                        </div>






                        {/* Donor Name (read-only) */}
                        <div>
                            <label className="block text-sm font-medium mb-1">Donor Name</label>
                            <input
                                type="text"
                                value={user?.displayName || ''}
                                readOnly
                                className="input input-bordered w-full bg-gray-100"


                            />
                        </div>

                        {/* Donor Email (read-only) */}
                        <div>
                            <label className="block text-sm font-medium mb-1">Donor Email</label>
                            <input
                                type="email"
                                value={user?.email || ''}
                                readOnly
                                className="input input-bordered w-full bg-gray-100"
                            />
                        </div>
                    </div>

                    {/* Donor Photo */}
                    <div className="mt-4 flex justify-center flex-col items-center">
                        <label className="block text-sm font-medium mb-1">Donor Photo</label>
                        <img
                            src={user?.photoURL}
                            alt="Donor"
                            className="w-16 h-16 rounded-full border"
                        />
                    </div>

                    {/* Hidden Status */}
                    <input type="hidden" name="status" value="available" />

                    {/* Submit */}
                    <div className="text-right mt-6">
                        <button type="submit" className="btn w-full btn-primary">Add Food</button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default AddFood;
