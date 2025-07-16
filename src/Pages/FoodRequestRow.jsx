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
            <td>{index + 1}</td>

            <td className="font-semibold">{foodName}</td>

            <td>{donorName}</td>
            <td>{pickupLocation}</td>
            <td>{new Date(expiredDateTime).toLocaleDateString()}</td>
            <td>{new Date(requestDate).toLocaleDateString()}</td>

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
