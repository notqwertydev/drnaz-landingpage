// Marquee.js

import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";

import React from 'react';

const MarqueeComp = () => {
    return (
        <div className="absolute bottom-0 w-full">
            <div className=" whitespace-nowrap gap-4 flex items-baseline">
                <Marquee
                    // fade={true}
                    direction="left"
                    reverse={false}
                    pauseOnHover={false}

                    className="gap-[2rem] [--duration:10s] lg:[--duration:17s] pt-12" // pass class to change gap or speed
                    innerClassName="" // pass class to change gap or speed
                >

                    <h1 className="font-normal tracking-tighter uppercase text-6xl lg:text-[8rem] pb-12 text-white"
                    
                      
                    >
                        MAKING PEOPLE SMILE 24/7
                        

                     

                        

                    </div>


                </Marquee>


            </div>
        </div>
    );
};

export default MarqueeComp;
