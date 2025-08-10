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
        additionalNotes,
  
    } = food;




    return (
        <div className="border border-primary p-4 bg-white rounded-xl shadow-2xl hover:shadow-md transition-all flex flex-col justify-between h-full">
            <div>
                <img src={foodImage} alt={foodName} className="w-full h-72 object-cover rounded" />
                <div className='pt-9'>
                    <div className='space-y-1'>
                        <h2 className="text-xl text-black font-semibold mt-2">{foodName}</h2>
                        <p className='text-black'>Quantity: <span className='text-primary'>{foodQuantity}</span></p>
                        <div className=''>
                            <p className='text-black'>{additionalNotes}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-5'>
                <Link to={`/foodDetails/${_id}`}>
                    <button className='btn btn-primary hover:btn-secondary text-white w-full'>
                        View Details
                    </button>
                </Link>
            </div>
        </div>

    );
};

export default AvailableFoodCard;