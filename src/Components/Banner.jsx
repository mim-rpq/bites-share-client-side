import React from 'react';
import bannerImg1 from '../assets/images/banner1.jpg'
import animationImg1 from '../assets/images/ani2.jpg'
import animationImg2 from '../assets/images/ani.jpg'
import { motion } from "motion/react"

const Banner = () => {
    return (



        <div className="relative w-full h-[800px]">
            {/* Background Image */}
            <img
                src={bannerImg1}
                alt="Banner"
                className="w-full h-full object-cover"
            />

            {/*  Transparent Overlay */}
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <div className="hero bg-base-200 min-h-96">
                    <div className="flex justify-between items-center  w-11/12 mx-auto gap-10 flex-col lg:flex-row-reverse">
                        <div className='flex-1'>
                            <motion.img
                                src={animationImg1}
                                animate={{ y: [60, 150, 60] }}
                                transition={{ duration: 5, repeat: Infinity }}
                                className="hidden lg:block lg:max-w-sm border-l-[14px] border-secondary border-b-[14px] rounded-t-[40px] rounded-br-[40px] shadow-2xl"
                            />
                            <motion.img
                                src={animationImg2}
                                animate={{ x: [100, 150, 100] }}
                                transition={{ duration: 10, delay: 2, repeat: Infinity }}
                                className=" hidden lg:block lg:max-w-md max-h-80 border-l-[14px] border-primary border-b-[14px] rounded-t-[40px] rounded-br-[40px] shadow-2xl"
                            />
                        </div>
                        <div className='flex-1 text-white'>
                            <h1 className="lg:text-5xl text-2xl md:text-3xl font-bold">Don’t Let Good Food Go to Waste — <span className='text-secondary text-3xl md:text-4xl lg:text-6xl'>Share</span> It Instead</h1>

                            <p className="py-6">
                                Join our community in reducing food waste by sharing extra meals with those in need. Together, we can make a difference one <span className='text-secondary'>share</span> at a time. Click “Start Sharing” to get involved today!
                            </p>
                            <button className="btn btn-primary">Start Sharing</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Banner;