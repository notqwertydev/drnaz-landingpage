// Marquee.js

import React from 'react';

const Marquee = () => {
    return (
        <div className="relative w-full">
            <div className="animate-marquee whitespace-nowrap gap-4 flex mt-64 lg:mt-96 items-baseline">
                <h1 className="font-normal tracking-tighter uppercase text-6xl lg:text-14xl pb-12">
                    <span className="text-white">Flaco</span>
                    <span className="text-gray"> is a portfolio</span>
                    <span className="text-grayest"> for designers</span>
                    <span className="text-grayest"> and developers</span>
                </h1>
            </div>
        </div>
    );
};

export default Marquee;
