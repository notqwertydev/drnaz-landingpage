import Image from 'next/image';

import Link from 'next/link';
import Marquee from './Marquee';
const HeroSection = () => {


    return (
        <section className="lg:p-8 overflow-hidden">
            <div className="mx-auto py-24 lg:px-16 md:px-12 px-8 xl:px-40 items-center lg:py-40 w-full bg-[#f9f9f9] rounded-[3rem] overflow-hidden relative">

                <Marquee />
            </div>
        </section>
    );
};

export default HeroSection;
