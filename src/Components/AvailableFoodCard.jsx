import React from 'react';
import { CiTimer } from 'react-icons/ci';
import { FaLocationDot } from 'react-icons/fa6';

import { Link } from 'react-router';



const AvailableFoodCard = ({ food }) => {

   

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

    


    return (
        <div className="border border-primary p-4 bg-white rounded-xl shadow-2xl hover:shadow-md transition-all">
            <img src={foodImage} alt={foodName} className="w-full h-72 object-cover rounded" />
            <div className='pt-9 '>
                <div className='space-y-1'>
                    <h2 className="text-xl font-semibold mt-2">{foodName}</h2>
                    <p>Quantity: <span className='text-primary'>{foodQuantity}</span></p>
                    <p className='flex items-center gap-2'> <FaLocationDot color='red' /><span className='font-bold'>Location</span>:{pickupLocation}</p>
                    <p className="text-xs text-gray-400 flex items-center gap-2"> <CiTimer size={15} />Expires: {new Date(expiredDateTime).toLocaleString()}</p>
                </div>

                <div className='flex items-center mt-7 gap-2 '>
                    <div>
                        <img src={userPhotoURL} className='w-11 h-11 rounded-full border-2 border-primary p-1' alt="" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-600 ">Donor: {userName}</p>
                        <p className="text-sm text-gray-600 ">{userEmail}</p>
                    </div>
                </div>
            </div>
            <div className='my-5'>
                <Link to={`/foodDetails/${_id}`}>
                    <button className='btn btn-primary hover:btn-secondary text-white w-full'>View Details</button>
                </Link>
            </div>

        </div>
    );
};

export default AvailableFoodCard;