import React from 'react';
import Banner from '../Components/Banner';
import { useQuery } from '@tanstack/react-query';
import FeaturedCard from '../Components/FeaturedFoodsCard';
import Spinner from '../Components/Spinner';
import featuredFoodTItleLogo from '../assets/images/f-logo.png'
import FeaturedFoodsCard from '../Components/FeaturedFoodsCard';
import { Link } from 'react-router';
import group from '../assets/images/banner3.jpg'
import Count from '../Components/Count';
import HowItWorks from '../Components/HowWorks';


const Home = () => {

    const { isPending, data: featuredFoods } = useQuery({
        queryKey: ['featuredFoods'],
        queryFn: async () => {
            const res = await fetch('https://bites-share-server.vercel.app/foods/featuredFoods');

            return res.json();
        }
    })


    if (isPending) {
        return <Spinner></Spinner>
    }

    // if(isLoading){
    //     <Spinner></Spinner>
    // }


    return (
        <div>

            <Banner></Banner>

            <div className='py-28  bg-gray-50  '>
                <div className='max-w-11/12 mx-auto'>
                    <div className='flex justify-center items-center my-6'>
                        <img src={featuredFoodTItleLogo} alt="" />
                        <h2 className="text-3xl text-primary font-bold  text-center"> Featured <span className='text-secondary'> Foods</span></h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-9">
                        {featuredFoods?.map(food => (
                            <FeaturedFoodsCard key={food._id} food={food} />
                        ))}
                    </div>
                    <div className='flex justify-center'>
                        <Link to='/availableFoods'>
                            <button className='btn bg-primary text-white border-0 mt-16 my-4 hover:bg-secondary'>Show All Available Food</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='relative  min-h-[600px] '>
                <div style={{
                    backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.3), transparent),url(${group})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'bottom',
                    backgroundRepeat: "no-repeat"
                }} className='w-full  h-full absolute inset-0 z-0'>
                    <div className='relative z-10 max-w-7xl mx-auto '>
                        <Count></Count>
                    </div>
                </div>
            </div>

            <div>
                <HowItWorks></HowItWorks>
            </div>

        </div>
    );
};

export default Home;