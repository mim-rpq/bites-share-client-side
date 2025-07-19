import React, { use, useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router';
import axios from 'axios';
import { toast } from 'react-toastify';
import { AuthContext } from '../Provider/AuthContext';
import Swal from 'sweetalert2';



const FoodDetails = () => {
    const food = useLoaderData();
    const { id: foodId } = useParams()
    // console.log(food);
    const navigate = useNavigate();
    const { user } = use(AuthContext);
    const [notes, setNotes] = useState('');
    const [isRequesting, setIsRequesting] = useState(false);

    const {
        _id,
        foodName,
        foodImage,
        foodQuantity,
        pickupLocation,
        expiredDateTime,
        userName,
        userPhotoURL,
        userEmail
    } = food;
    console.log(user.accessToken);
    const handleRequest = async () => {
        setIsRequesting(true);
        try {
            const response = await axios.post(
                'https://bites-share-server.vercel.app/foodRequests',
                {
                    requesterEmail: user.email,
                    requestNotes: notes,
                    status: 'requested',
                    foodId: foodId
                },
                {
                    headers: {
                        Authorization: `Bearer ${user.accessToken}`
                    },

                    validateStatus: () => true
                }
            );

            if (response.status === 403) {
                    document.getElementById('request_modal')?.close();
                Swal.fire({
                    position: "center",
                    icon: 'error',
                    title: 'Request Limit Exceeded',
                   
                    text: response.data.message || 'You have reached your daily limit of 3 requests.'
                });
                return;
            }

            if (response.data.insertedId) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Food Request sent successfully!",
                    showConfirmButton: false,
                    timer: 1500,
                  
                });

                navigate('/myFoodRequest');
            } else {
                toast.error('Failed to submit request');
            }
        } catch (error) {
            toast.error('Error sending request');
            console.error(error);
        } finally {
            setIsRequesting(false);
        }
    };


    return (
        <div className="max-w-3xl mx-auto p-6">
            <img src={foodImage} alt={foodName} className="w-full h-96 object-cover rounded-xl" />
            <div className="mt-6 space-y-3">
                <h1 className="text-3xl font-bold">{foodName}</h1>
                <p><strong>Quantity:</strong> {foodQuantity}</p>
                <p><strong>Pickup Location:</strong> {pickupLocation}</p>
                <p><strong>Expires:</strong> {new Date(expiredDateTime).toLocaleString()}</p>
                <div className="flex items-center gap-3">
                    <img src={userPhotoURL} alt={userName} className="w-12 h-12 rounded-full border-2 border-primary" />
                    <div>
                        <p><strong>Donor:</strong> {userName}</p>
                        <p>{userEmail}</p>
                    </div>
                </div>
                <button
                    className="btn btn-primary mt-5"
                    onClick={() => document.getElementById('request_modal').showModal()}
                >
                    Request This Food
                </button>
            </div>

            {/* Modal */}
            <dialog id="request_modal" className="modal">
                <div className="modal-box w-full max-w-2xl">
                    <h3 className="font-bold text-lg mb-4">Request Confirmation</h3>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                        <input disabled value={foodName} className="input input-bordered w-full" placeholder="Food Name" />
                        <input disabled value={_id} className="input input-bordered w-full" placeholder="Food ID" />
                        <input disabled value={userEmail} className="input input-bordered w-full" placeholder="Donor Email" />
                        <input disabled value={userName} className="input input-bordered w-full" placeholder="Donor Name" />
                        <input disabled value={user?.email} className="input input-bordered w-full" placeholder="Your Email" />
                        <input disabled value={new Date().toLocaleString()} className="input input-bordered w-full" placeholder="Request Date" />
                        <input disabled value={pickupLocation} className="input input-bordered w-full" placeholder="Pickup Location" />
                        <input disabled value={new Date(expiredDateTime).toLocaleString()} className="input input-bordered w-full" placeholder="Expire Date" />
                    </div>

                    <div className="mt-4">
                        <label className="block mb-1 font-semibold">Additional Notes (optional)</label>
                        <textarea
                            className="textarea textarea-bordered w-full"
                            rows={3}
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                            placeholder="Write any message for the donor..."
                        />
                    </div>

                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">Cancel</button>
                        </form>
                        <button
                            className="btn btn-primary"
                            disabled={isRequesting}
                            onClick={handleRequest}
                        >
                            {isRequesting ? "Requesting..." : "Confirm Request"}
                        </button>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default FoodDetails;
