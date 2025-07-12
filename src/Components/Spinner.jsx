import Lottie from 'lottie-react';
import React from 'react';
import spinnerLottie from '../assets/lottie/Loading.json'
const Spinner = () => {
    return (
        <div className='flex justify-center items-center lg:h-[500px]'>
             <Lottie style={{ width: '200px', height: '200px' }} animationData={spinnerLottie} loop={true}></Lottie>
        </div>
    );
};

export default Spinner;