import React from 'react';
import SwimmingImg from '../../assets/swimming.png'
import classImg from '../../assets/class.png'
import playImg from '../../assets/playground.png'

const Qzone = () => {
    return (
        <div className='mt-6 bg-base-200 p-4 rounded-lg'>
            <h2 className="text-xl font-semibold mb-3">QZone</h2>
            <div className='flex flex-col justify-center items-center gap-4 pb-6'>
                <img src={SwimmingImg} alt="" /><img src={classImg} alt="" /><img src={playImg} alt="" />
            </div>
        </div>
    );
};

export default Qzone;