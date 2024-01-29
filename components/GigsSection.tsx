import React from 'react';
import Globe from './magicui/globe';
import { Marquee } from '@devnomic/marquee';
import "@devnomic/marquee/dist/index.css";

import Image from 'next/image';

const GigsSection = () => {
    return (
        <section id='gigs' className='lg:p-8 mt-16  '>

            <h1 className="font-normal tracking-tighter uppercase text-6xl lg:text-[8rem] pb-2">

                <span className="text-white">THE </span>
                <span className="text-white">GIGS </span>




            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 px-0 lg:px-0 gap-6">
                <section className="py-1">
                    <div className="rounded-3xl overflow-hidden  h-full">
                        <div className="overflow-hidden h-full">
                            <div className="p-2 grid content-end">
                                <div>
                                    <div className="flex items-center">
                                    </div>
                                    {/* <p className="mt-12 text-xl font-medium tracking-tighter text-white font-display lg:text-2xl">
                                        About
                                    </p> */}
                                    <p className="mt-12 text-xl font-medium tracking-tighter text-white font-display lg:text-2xl">
                                        Dr. Naz is a full time dental surgeon with a passion for music. Dj-ing started as a hobby, that then developed into a more regular venture with requests piling up.
                                        Fast forward to today, where he has converted his hobby into a full blown career, playing alongside some of the biggest names in the industry and in clubs all over the world.
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
                <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg shadow-2xl">
                    <div className="relative w-full h-full flex items-center justify-center">
                        <center>
                            <Globe className=" object-contain" />
                        </center>
                    </div>
                    <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
                </div>


            </div>

            <div className="mt-12 flex justify-center">
                <div className="max-w-screen-l mx-auto overflow-hidden">


                    <Marquee className="gap-[1rem]" reverse={true} fade={true} pauseOnHover={true}>




                        <div className="flag-container">
                            <Image src="/flags/bahrain.png" alt="Bahrain Flag" width={150} height={150}  />
                            <p className="flag-text text-white font-bold">Manama</p>
                        </div>


                        <div className="flag-container">
                            <Image src="/flags/dubai.png" alt="Dubai Flag" width={150} height={150}  />
                            <p className="flag-text text-white font-bold">Dubai</p>
                        </div>

                        <div className="flag-container">
                            <Image src="/flags/lebanon.png" alt="Lebanon Flag" width={150} height={150}  />
                            <p className="flag-text text-white font-bold">Beirut</p>
                        </div>


                        <div className="flag-container">
                            <Image src="/flags/qatar.png" alt="Qatar Flag" width={150} height={150} />
                            <p className="flag-text text-white font-bold">Doha</p>
                        </div>


                        <div className="flag-container">
                            <Image src="/flags/us.png" alt="US Flag" width={150} height={150}  />
                            <p className="flag-text text-white font-bold">New York</p>
                        </div>


                        <div className="flag-container">
                            <Image src="/flags/syria.png" alt="Syria Flag" width={150} height={150} />
                            <p className="flag-text text-white font-bold">Damascus</p>
                        </div>

                        <div className="flag-container">
                            <Image src="/flags/spain.png" alt="Spain Flag" width={150} height={150} />
                            <p className="flag-text text-white font-bold">Ibiza</p>
                        </div>


                        <div className="flag-container">
                            <Image src="/flags/france.png" alt="France Flag" width={150} height={150} />
                            <p className="flag-text text-white font-bold">St Tropez</p>
                        </div>

                        <div className="flag-container">
                            <Image src="/flags/us.png" alt="US Flag" width={150} height={150}  />
                            <p className="flag-text text-white font-bold">Los Angeles</p>
                        </div>
                     

                        



                    </Marquee>
                </div >
            </div >


            <Marquee fade={true} pauseOnHover={false} className='mt-5'>


                <Image src="/logo/ahm.png" alt="Logo" width={110} height={100} />
                <Image src="/logo/amelia.png" alt="Logo" width={110} height={100} />
                <Image src="/logo/analogue.png" alt="Logo" width={110} height={100} />
                <Image src="/logo/b018.png" alt="Logo" width={110} height={100} />
                <Image src="/logo/bluemarlin.png" alt="Logo" width={110} height={100} />
                <Image src="/logo/hide.png" alt="Logo" width={110} height={100} />
                <Image src="/logo/iris.png" alt="Logo" width={110} height={100} />
                <Image src="/logo/madhouse.png" alt="Logo" width={110} height={100} />
                <Image src="/logo/odin.png" alt="Logo" width={110} height={100} />
                <Image src="/logo/spine.png" alt="Logo" width={110} height={100} />
                <Image src="/logo/aya.png" className="black-and-white" alt="Logo" width={140} height={100} />
                <Image className="black-and-white" src="/logo/gospel.png" alt="Logo" width={140} height={100} style={{


                }} />

            </Marquee>


            <button></button>


        </section >


    );
};

export default GigsSection;