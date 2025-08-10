import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img from '../assets/images/banner2.jpg'
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router";

const HowItWorks = () => {
    const [activeTab, setActiveTab] = useState("share");
    const navigate = useNavigate();

    const shareContent = (
        <ul className="space-y-3">
            <li className="flex items-center gap-2"><FaCheckCircle className="text-green-600 text-xl" /> Provide food details including image, quantity, and pickup location</li>
            <li className="flex items-center gap-2"><FaCheckCircle className="text-green-600 text-xl" /> Upload your food listing after signing in</li>
            <li className="flex items-center gap-2"><FaCheckCircle className="text-green-600 text-xl" /> Your food is now available for those in need to request</li>
        </ul>
    );

    const findContent = (
        <ul className="space-y-3">
            <li className="flex items-center gap-2"><FaCheckCircle className="text-green-600 text-xl" /> Browse available food items by category or location</li>
            <li className="flex items-center gap-2"><FaCheckCircle className="text-green-600 text-xl" /> View details and request the food you need</li>
            <li className="flex items-center gap-2"><FaCheckCircle className="text-green-600 text-xl" /> Pick up your food at the given location after confirmation</li>
        </ul>
    );

    const handleGetStart = () => {
        if (activeTab === 'share') {
            navigate('/addFood')
        } else {
            navigate('/availableFoods')
        }
    }

    return (
        <div className="bg-secondary/10">
            <div className=" py-20 flex flex-col md:flex-row w-11/12 mx-auto justify-between gap-2 lg:gap-9 items-center">
                <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center">
                    <img src={img} alt="illustration" className="md:w-full rounded-xl" />
                </div>

                <div className="w-full md:w-1/2">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">How to Use Our Platform</h2>
                    <div className="flex space-x-6 mb-6 border-b border-gray-300">
                        <button
                            onClick={() => setActiveTab("share")}
                            className={`pb-2 font-medium cursor-pointer ${activeTab === "share" ? "text-primary border-b-2 border-secondary" : "text-gray-500"}`}
                        >
                            SHARE FOOD
                        </button>
                        <button
                            onClick={() => setActiveTab("find")}
                            className={`pb-2 font-medium cursor-pointer ${activeTab === "find" ? "text-primary border-b-2 border-secondary" : "text-gray-500"}`}
                        >
                            FIND FOOD
                        </button>
                    </div>

                    <div className="min-h-[150px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.4 }}
                            >
                                {activeTab === "share" ? shareContent : findContent}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <button
                        onClick={handleGetStart}
                        className="mt-6 px-5 py-2 bg-primary text-white border rounded shadow hover:bg-secondary cursor-pointer transition"
                    >
                        {activeTab === "share" ? "Share Food" : "Find Food"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;
