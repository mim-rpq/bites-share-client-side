import React from 'react';

const FoodRequestRow = ({ request, index }) => {
    const {
        foodName,
        donorName,
        pickupLocation,
        expiredDateTime,
        requestDate,
        status
    } = request;

    return (
        <tr className=" hover:bg-gray-50 transition-all border-b border-gray-200">
            <td className='text-black'>{index + 1}</td>

            <td  className="font-semibold text-black">{foodName}</td>

            <td className='text-black'   >{donorName}</td>
            <td className='text-black' >{pickupLocation}</td>
            <td className='text-black' >{new Date(expiredDateTime).toLocaleDateString()}</td>
            <td className='text-black' >{new Date(requestDate).toLocaleDateString()}</td>

            <td>
                <span className={`px-2 py-1 rounded text-xs font-medium capitalize 
                    ${status === 'requested'
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-green-100 text-green-700'}
                `}>
                    {status}
                </span>
            </td>
        </tr>
    );
};

export default FoodRequestRow;
