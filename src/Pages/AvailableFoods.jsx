import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import AvailableFoodCard from '../Components/AvailableFoodCard';
import Spinner from "../Components/Spinner";

const AvailableFoods = () => {
  const [searchText, setSearchText] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [isThreeColumn, setIsThreeColumn] = useState(true);

  const { isLoading, data: allFoods = [], refetch } = useQuery({
    queryKey: ['availableFoods', sortOrder],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/foods/availableFoods?sort=${sortOrder}`);
      return res.json();
    }
  });

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
    refetch();
  };
  const filteredFoods = allFoods.filter(food =>
    food.foodName.toLowerCase().includes(searchText.toLowerCase())
  );

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="px-4 py-11 max-w-11/12 mx-auto">
      <h1 className='text-4xl text-center font-bold text-primary mb-6'>Available Foods</h1>

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
        <div className="flex  w-full md:w-auto">
          <input
            type="text"
            placeholder="Search food..."
            className="rounded-tl-md rounded-bl-md  border border-primary py-2 px-3 w-full md:w-64 focus:border-primary focus:outline-2 transition"
            value={searchText}
            onChange={handleSearchChange}
          />
          <button
            className="bg-primary text-white px-4  hover:bg-primary transition"

          >
            Search
          </button>
        </div>

     

        <div className="flex items-center gap-2">
          <label htmlFor="sort" className="text-lg font-medium">Sort by Expiry:</label>
          <select
            id="sort"
            value={sortOrder}
            onChange={handleSortChange}
            className="border border-primary rounded-md py-2 px-3"
          >
            <option value="asc">Sooner</option>
            <option value="desc">Later</option>
          </select>
        </div>
      </div>

         <div className="flex justify-end mb-4">
          <button
            onClick={() => setIsThreeColumn(prev => !prev)}
            className="bg-primary cursor-pointer hover:bg-secondary text-white px-4 py-2 rounded-md hover:bg-opacity-80 transition"
          >
            Change Layout
          </button>
        </div>

      {
        filteredFoods.length === 0 ? (
          <p className="text-center min-h-screen flex items-center justify-center text-xl text-gray-500">No foods found matching your search.</p>
        ) : (
          <div className={`grid grid-cols-1 sm:grid-cols-2 ${isThreeColumn ? 'lg:grid-cols-3' : 'lg:grid-cols-2'} gap-6`}>
            {filteredFoods.map(food => (
              <AvailableFoodCard key={food._id} food={food} />
            ))}
          </div>
        )
      }
    </div>
  );
};

export default AvailableFoods;
