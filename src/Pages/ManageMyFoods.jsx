import React, { useContext, useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { AuthContext } from '../Provider/AuthContext';
import moment from 'moment';
import Swal from 'sweetalert2';
import axios from 'axios';
import { ImCross } from 'react-icons/im';
import Spinner from '../Components/Spinner';

const ManageMyFoods = () => {
    const { user } = useContext(AuthContext);
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [updatedData, setUpdatedData] = useState({});
    const [selectedFood, setSelectedFood] = useState(null);
    const queryClient = useQueryClient();


    const { data: myFoods = [], isLoading } = useQuery({
        queryKey: ['myFoods', user?.email],
        enabled: !!user?.email,
        queryFn: async () => {
            const res = await axios.get(`https://bites-share-server.vercel.app/foods/myAddedFood/user`, {
                headers: { Authorization: `Bearer ${user.accessToken}` },
            });
            return res.data;
        },
    });



    const deleteFoodMutation = useMutation({
        mutationFn: async (id) => {
            return await axios.delete(`https://bites-share-server.vercel.app/foods/myAddedFood/${id}`, {
                headers: { Authorization: `Bearer ${user.accessToken}` },
            });
        },
        onSuccess: (res) => {
            if (res.data.deletedCount > 0) {
                Swal.fire("Deleted!", "Your food has been deleted.", "success");
                queryClient.invalidateQueries(['myFoods', user?.email]);
            }
        },
        onError: () => {
            Swal.fire("Error", "Something went wrong.", "error");
        },
    });

    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "This food item will be permanently removed.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                deleteFoodMutation.mutate(_id);
            }
        });
    };


    const updateFoodMutation = useMutation({
        mutationFn: async () => {
            return await axios.put(
                `https://bites-share-server.vercel.app/foods/myAddedFood/${selectedFood._id}`,
                updatedData,
                {
                    headers: { Authorization: `Bearer ${user.accessToken}` },
                }
            );
        },
        onSuccess: (res) => {
            if (res.data.modifiedCount > 0) {
                Swal.fire("Updated!", "Food updated successfully.", "success");
                setShowUpdateModal(false);
                queryClient.invalidateQueries(['myFoods', user?.email]);
            }
        },
        onError: () => {
            Swal.fire("Error", "Update failed.", "error");
        },
    });

    const handleUpdate = () => {
        updateFoodMutation.mutate();
    };

    const openUpdateModal = (food) => {
        setSelectedFood(food);
        setUpdatedData({
            foodName: food.foodName,
            foodQuantity: food.foodQuantity,
            pickupLocation: food.pickupLocation,
            expiredDateTime: food.expiredDateTime,
            additionalNotes: food.additionalNotes || '',
            status: food.status,
            userEmail: food.userEmail,
            userName: food.userName,
            userPhotoURL: food.userPhotoURL,
            foodImage: food.foodImage,
        });
        setShowUpdateModal(true);
    };

    if (isLoading){
        return <Spinner></Spinner>
    };

    return (
        <div className="max-w-6xl bg-gray-50 min-h-screen mx-auto my-10 ">
            <h2 className="text-3xl font-bold mb-6 p-4 text-center">Manage My Foods</h2>
            <div className="overflow-x-auto">
                <table className="table w-full border rounded-lg">
                    <thead className="bg-gray-100">
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Location</th>
                            <th>Expires</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {myFoods.length === 0 ? (
                            <tr>
                                <td colSpan="6" className="text-center py-8 text-gray-500 font-semibold">
                                    No food added yet.
                                </td>
                            </tr>
                        ) : (
                            myFoods.map((food) => (
                                <tr key={food._id}>
                                    <td><img src={food.foodImage} alt={food.foodName} className="w-16 h-16 rounded" /></td>
                                    <td>{food.foodName}</td>
                                    <td>{food.foodQuantity}</td>
                                    <td>{food.pickupLocation}</td>
                                    <td>{moment(food.expiredDateTime).format('YYYY-MM-DD HH:mm')}</td>
                                    <td>
                                        <button className="btn btn-sm bg-primary text-white mr-2" onClick={() => openUpdateModal(food)}>Update</button>
                                        <button className="btn btn-sm bg-red-500 text-white" onClick={() => handleDelete(food._id)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            {/* Update Modal */}
            {showUpdateModal && (
                <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg w-full max-w-2xl relative">
                        <button className="absolute top-3 right-3 text-xl font-bold" onClick={() => setShowUpdateModal(false)}>
                            <ImCross />
                        </button>
                        <h3 className="text-2xl font-bold mb-4 text-center">Update Food Details</h3>

                        {/* Preview Section */}
                        <div className="flex gap-4 mb-6">
                            <img src={selectedFood.foodImage} alt={selectedFood.foodName} className="w-32 h-32 object-cover rounded-lg border" />
                            <div className="flex-1">
                                <p className='font-bold'>Donor: {selectedFood.userName}</p>
                                <p className='font-bold'>Email: {selectedFood.userEmail}</p>
                                <p className='font-bold'>Status: <span className="capitalize">{selectedFood.status}</span></p>
                                <img src={selectedFood.userPhotoURL} alt="User" className="w-12 h-12 rounded-full mt-2 border" />
                            </div>
                        </div>

                        {/* Input Fields */}
                        <div className="space-y-3">
                            <input
                                className="input input-bordered w-full"
                                value={updatedData.foodName}
                                onChange={(e) => setUpdatedData({ ...updatedData, foodName: e.target.value })}
                                placeholder="Food Name"
                            />
                            <input
                                className="input input-bordered w-full"
                                value={selectedFood.foodImage}
                                readOnly
                                placeholder="Image URL"
                            />
                            <input
                                className="input input-bordered w-full"
                                value={updatedData.foodQuantity}
                                onChange={(e) => setUpdatedData({ ...updatedData, foodQuantity: e.target.value })}
                                placeholder="Food Quantity"
                            />
                            <input
                                className="input input-bordered w-full"
                                value={updatedData.pickupLocation}
                                onChange={(e) => setUpdatedData({ ...updatedData, pickupLocation: e.target.value })}
                                placeholder="Pickup Location"
                            />
                            <input
                                className="input input-bordered w-full"
                                type="datetime-local"
                                value={moment(updatedData.expiredDateTime).format('YYYY-MM-DDTHH:mm')}
                                onChange={(e) => setUpdatedData({ ...updatedData, expiredDateTime: e.target.value })}
                            />
                            <textarea
                                className="textarea textarea-bordered w-full"
                                value={updatedData.additionalNotes}
                                onChange={(e) => setUpdatedData({ ...updatedData, additionalNotes: e.target.value })}
                                placeholder="Additional Notes"
                            />
                        </div>

                        <button className="btn btn-success w-full mt-4 text-white" onClick={handleUpdate}>
                            Save Changes
                        </button>
                    </div>
                </div>
            )}

        </div>
    );
};

export default ManageMyFoods;
