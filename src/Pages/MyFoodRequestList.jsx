import FoodRequestRow from './FoodRequestRow';

const MyFoodRequestList = ({ requests }) => {
    return (
        <div className="max-w-6xl mx-auto  min-h-screen lg:pb-32  p-4">
            <h2 className="text-2xl font-bold mb-4 text-center">My Food Requests</h2>

            <div className="overflow-x-auto bg-white min-h-screen rounded-lg shadow-md">
                <table className="table w-full text-sm md:text-base">
                    <thead className="bg-primary text-white">
                        <tr>
                            <th className="p-3 text-left">No.</th>
                            <th className="p-3 text-left">Food Name</th>
                            <th className="p-3 text-left">Donor Name</th>
                            <th className="p-3 text-left">Pickup Location</th>
                            <th className="p-3 text-left">Expire Date</th>
                            <th className="p-3 text-left">Request Date</th>
                            <th className="p-3 text-left">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            requests.length > 0 ? (
                                requests.map((request, index) =>
                                    <FoodRequestRow
                                        key={request._id}
                                        index={index}
                                        request={request}
                                    />
                                )
                            ) : (
                                <tr>
                                    <td colSpan="8" className="text-center py-6 text-gray-500">
                                        No food requests found.
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyFoodRequestList;
