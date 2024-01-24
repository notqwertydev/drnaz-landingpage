import Image from 'next/image';

import Link from 'next/link';
import Marquee from './MarqueeHero';
import React from 'react';
const HeroSection = () => {


    return (
        <section className="lg:p-8 overflow-hidden">
            <div className="mx-auto pt-24 items-center lg:pt-40 w-full bg-[url('/Pictures/naz15.jpg')] rounded-[3rem] overflow-hidden relative"
                style={{
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                }}
            
            >

                <Marquee />
            </div>
        </section>
    );
};

export default HeroSection;
