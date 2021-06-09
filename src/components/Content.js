import React from 'react';
import ImageOne from '../images/fruit1.jpg';
import ImageTwo from '../images/fruit2.jpg';

const Content = () => {
    return (
    <div>
        <div className="flex flex-col justify-content items-center bg-white h-screen font-mono py-40">
            <img src={ImageOne} alt="" className="h-full rounded mb-2 shadow"/>
            <div className="flex flex-col justify-center items-center">
                <h2 className="text-2xl mb-2">Testy Fruit</h2>
                <p className="mb-2">Delicious and nutritious</p>
                <span>$12</span>
            </div>
        </div>
        <div className="flex flex-col justify-content items-center bg-white h-screen font-mono py-40">
            <img src={ImageTwo} alt="" className="h-full rounded mb-2 shadow"/>
            <div className="flex flex-col justify-center items-center">
                <h2 className="text-2xl mb-2">Many Fruit</h2>
                <p className="mb-2">Delicious and nutritious</p>
                <span>$15</span>
            </div>
        </div>
    </div>
    );
};

export default Content;