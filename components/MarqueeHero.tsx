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

                    <div className="font-normal tracking-tighter uppercase text-5xl lg:text-[8rem] pb-40 lg:pb-20 text-white"


                    >
                        MAKING PEOPLE SMILE 24/7






                    </div>
                    <div className="font-normal tracking-tighter uppercase text-5xl lg:text-[8rem] pb-40 lg:pb-20 text-white"


                    >
                        MAKING PEOPLE SMILE 24/7






                    </div>
                    <div className="font-normal tracking-tighter uppercase text-5xl lg:text-[8rem] pb-40 lg:pb-20 text-white"


                    >
                        MAKING PEOPLE SMILE 24/7






                    </div>


                </Marquee>


            </div>
        </div>
    );
};

export default MarqueeComp;
