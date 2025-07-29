import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

const stats = [
  { label: 'Total Food Listings', count: 1200 },
  { label: 'Verified Donors', count: 5000 },
  { label: 'Meals Shared', count: 15000 },
  { label: 'Happy Receivers', count: 8000 }
];


const Count = () => {

    const [inViewRef, inView] = useInView({
        triggerOnce: false,
        threshold: 0.4,
    })

    const [startCount, setStartCount] = useState(false);

    useEffect(() => {
        if (inView) {
            setStartCount(false);
            setTimeout(() => {
                setStartCount(true)
            }, 100)
        }
    }, [inView])
    return (
        <div ref={inViewRef} className=''>
            <div className=' md:h-[500px]  flex flex-col py-4  justify-center items-stretch'>
                <div className='text-center mb-7 md:mb-20 text-white'>
                </div>
                <div className=' grid bg-secondary/50  p-5 py-20 mr-2 grid-cols-2 gap-4 md:gap-0 md:grid-cols-4'>
                    {stats.map((item, index) => (
                        <div key={index} className="  space-y-2 xl:w-[300px] text-center md:border-r-4 text-white border-primary">
                            <h1 className="text-2xl lg:text-5xl font-bold">
                                {startCount ? (
                                    <CountUp end={item.count} duration={3} />
                                ) : (
                                    0
                                )}
                                +
                            </h1>
                            <p className="text-gray-100">{item.label}</p>
                        </div>))}
                </div>

                <div className='flex justify-center mt-14'>
                    <button className='btn w-fit  text-white'>More info</button>
                </div>
            </div>
        </div>
    );
};

export default Count;