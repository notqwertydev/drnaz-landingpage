// Marquee.js

import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";

import React from 'react';

const MarqueeComp = () => {
    return (
        <div className="relative w-full">
            <div className=" whitespace-nowrap gap-4 flex mt-64 lg:mt-96 items-baseline">
                <Marquee
                    // fade={true}
                    direction="left"
                    reverse={false}
                    pauseOnHover={false}
                    
                    className="gap-[3rem] [--duration:15s]" // pass class to change gap or speed
                    innerClassName="" // pass class to change gap or speed
                >

                    <h1 className="font-normal tracking-tighter uppercase text-6xl lg:text-[8rem] pb-12 text-white"
                    
                      
                    >
                        DENTIST BY DAY DJ BY NIGHT

                     

                        

                    </h1>

                </Marquee>
            </div>
        </div>
    );
};

export default MarqueeComp;
