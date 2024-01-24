"use client";
import React, { useState, useEffect } from 'react';

const ArtistSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, [currentSlide]);

    const showSlides = (n: number) => {
        let slides = document.getElementsByClassName('mySlides') as HTMLCollectionOf<HTMLElement>;
        if (n >= slides.length) n = 0;
        if (n < 0) n = slides.length - 1;

        Array.from(slides).forEach(slide => {
            slide.style.display = "none";
        });

        slides[n].style.display = "flex"; // Changed from block to flex
        setCurrentSlide(n);
    };

    const nextSlide = () => {
        showSlides(currentSlide + 1);
    };

    const prevSlide = () => {
        showSlides(currentSlide - 1);
    };

    useEffect(() => {
        showSlides(currentSlide);
    }, [currentSlide]);

    return (
        <section id="artists" className='lg:p-8'>

            <h1 className="font-normal tracking-tighter uppercase text-6xl lg:text-[8rem] pb-2">
                <span className="text-white">ARTISTS  </span>
                <p className="mt-12 text-xl font-medium tracking-tighter text-white font-display lg:text-2xl">
                    Music with industry playmakers like you’ve never experienced before.
                </p>
                <p className="mt-1 text-xl font-medium tracking-tighter text-white font-display lg:text-1xl">
                    Over the past year Dr. Naz has been spinning beats alongside globally renown DJs.
                </p>

            </h1>

            <div className="mt-12">

                {/* Previous Button */}
                <button
                    className="prev-slide-button"
                    onClick={prevSlide}
                >
                    &#10094;
                </button>

                {/* Next Button */}
                <button
                    className="next-slide-button"
                    onClick={nextSlide}
                >
                    &#10095;
                </button>
                {/* Slides */}
                <div className="mySlides fade">
                    <div className="numbertext">1 / 3</div>
                    <img src="/Pictures/Francis.JPG" className="slide-image" />
                    <div className="text">Francis Mercier</div>
                </div>
                <div className="mySlides fade">
                    <div className="numbertext">1 / 3</div>
                    <img src="/Pictures/nitefreak.jpeg" className="slide-image" />
                    <div className="text">Nitefreak</div>
                </div>
                <div className="mySlides fade">
                    <div className="numbertext">1 / 3</div>
                    <img src="/Pictures/notredame.jpeg" className="slide-image" />
                    <div className="text">Notre Dame</div>
                </div>
                <div className="mySlides fade">
                    <div className="numbertext">1 / 3</div>
                    <img src="/Pictures/cairo.jpeg" className="slide-image" />
                    <div className="text">CAIRO</div>
                </div>
                <div className="mySlides fade">
                    <div className="numbertext">1 / 3</div>
                    <img src="/Pictures/aryme.JPG" className="slide-image" />
                    <div className="text">ARYME</div>
                </div>
                <div className="mySlides fade">
                    <div className="numbertext">1 / 3</div>
                    <img src="/Pictures/emmanuel.jpeg" className="slide-image" />
                    <div className="text">EMMANUEL ESPOSITO</div>
                </div>
                <div className="mySlides fade">
                    <div className="numbertext">1 / 3</div>
                    <img src="/Pictures/kasango.jpeg" className="slide-image" />
                    <div className="text">KASANGO</div>
                </div>
                <div className="mySlides fade">
                    <div className="numbertext">1 / 3</div>
                    <img src="/Pictures/kimotion.jpeg" className="slide-image" />
                    <div className="text">KIMOTION</div>
                </div>
                <div className="mySlides fade">
                    <div className="numbertext">1 / 3</div>
                    <img src="/Pictures/moojo.jpeg" className="slide-image" />
                    <div className="text">MOOJO</div>
                </div>
                <div className="mySlides fade">
                    <div className="numbertext">1 / 3</div>
                    <img src="/Pictures/shimza.jpeg" className="slide-image" />
                    <div className="text">Shimza</div>
                </div>
                <div className="mySlides fade">
                    <div className="numbertext">1 / 3</div>
                    <img src="/Pictures/ahmedspins.jpeg" className="slide-image" />
                    <div className="text">Ahmed Spins</div>
                </div>
            </div>

        </section>
    );
}

export default ArtistSection;
