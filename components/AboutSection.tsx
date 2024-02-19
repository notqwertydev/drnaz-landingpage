// PortfolioSection.js

import React from 'react';
import SocialLinks from "@/components/SocialLinks";

const AboutSection = () => {
    return (
        <section id='about' className="lg:p-8 overflow-hidden mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
                <section className="py-3">
                    <h1 className="font-normal tracking-tighter uppercase text-6xl lg:text-[8rem] pb-2">
                        <span className="text-white">ABOUT </span>
                    </h1>
                    <div className="rounded-3xl overflow-hidden bg-blackr h-full">
                        <div className="overflow-hidden h-full">
                            <div className="p-2 grid content-end">
                                <div>
                                    <div className="flex items-center">
                                    </div>
                                    {/* <p className="mt-12 text-xl font-medium tracking-tighter text-white font-display lg:text-2xl">
                                        About
                                    </p> */}
                                    <p className="mt-12 text-xxl font-medium tracking-tighter text-white font-display lg:text-2xl">
                                        Dentist by day DJ by night
                                    </p>
                                    <p className="mt-12 text-xl font-medium tracking-tighter text-white font-display lg:text-2xl">
                                        Nazir is a full time dental surgeon with a passion for music. Dj-ing started as a hobby, that then developed into a more regular venture with requests piling up.
                                        Fast forward to today, where he has converted his hobby into a full blown career, playing alongside some of the biggest names in the industry and in clubs all over the world.
                                    </p>
                                    <SocialLinks />
                                </div>



                            </div>
                        </div>
                    </div>
                </section>
                <div className="xl:col-span-1 hidden sm:block ">
                    <section className="py-3">
                        <div className="rounded-3xl overflow-hidden">
                            <div className=''>
                                <img className="xl:aspect-square object-cover" alt="#" src="/Pictures/naz3.JPG" />
                            </div>
                        </div>
                    </section>
                </div>
            </div>

        </section>
    );
};

export default AboutSection;
