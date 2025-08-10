// src/Components/FeaturedCard.jsx
import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { CiTimer } from "react-icons/ci";

const FeaturedFoodsCard = ({ food }) => {
    const {
        foodName,
        foodImage,
        foodQuantity,
        additionalNotes,

    } = food;

    return (
        <div className="border border-primary p-4 bg-white rounded-xl shadow-2xl hover:shadow-md transition-all">
            <img src={foodImage} alt={foodName} className="w-full h-72 object-cover rounded" />
            <div className='flex flex-col lg:flex-row lg:justify-between  lg:items-end pt-9 '>
                <div className='space-y-1'>
                    <h2 className="text-xl font-semibold mt-2">{foodName}</h2>
                    <p>Quantity:{foodQuantity}</p>
                    <p>Details:{additionalNotes}</p>
                </div>
            </div>

        </div>
    );
};

export default FeaturedFoodsCard;
