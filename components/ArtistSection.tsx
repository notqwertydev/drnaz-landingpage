"use client";
import React, { useState, useEffect } from 'react';




const ArtistSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        }, 3000); // Change image every 5 seconds

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




    const images = [
        {
            src: '/Pictures/Francis.JPG',
            text: 'Francis Mercier',
        },
        {
            src: '/Pictures/nitefreak.jpeg',
            text: 'Nitefreak',
        },
        {
            src: '/Pictures/andfriends.JPG',
            text: '&friends',
        },
        {
            src: '/Pictures/ahmedspins.jpeg',
            text: 'Ahmed Spins',
        },
        {
            src: '/Pictures/cairo.jpeg',
            text: 'Cairo',
        }, {
            src: '/Pictures/aryme.JPG',
            text: 'Aryme',
        }, {
            src: '/Pictures/kasango.jpeg',
            text: 'Kasango',
        },
        {
            src: '/Pictures/notredame.jpeg',
            text: 'Notre Dame',
        },

        {
            src: '/Pictures/moojo.jpeg',
            text: 'Moojo',
        },
        {
            src: '/Pictures/shimza.jpeg',
            text: 'Shimza',
        }, {
            src: '/Pictures/gianni.JPG',
            text: 'Gianni Romano',
        }, {
            src: '/Pictures/emmanuel.jpeg',
            text: 'Emmanuel Esposito',
        },
        {
            src: '/Pictures/kimotion.jpeg',
            text: 'Kimotion',
        },
        {
            src: '/Pictures/chrisidh.JPG',
            text: 'Chris IDH',
        },


    ];

    const [currentImage, setCurrentImage] = useState(images[0]);
    const [highlightedButtonIndex, setHighlightedButtonIndex] = useState(0);

    const changeImage = (image: { src: string; text: string }, index: number) => {
        setCurrentImage(image);
        setHighlightedButtonIndex(index);
    };

    useEffect(() => {
        // Function to change the image randomly
        const changeRandomImage = () => {
            const randomIndex = Math.floor(Math.random() * images.length);
            setCurrentImage(images[randomIndex]);
            setHighlightedButtonIndex(randomIndex);
        };

        // Change the image every 5 seconds (5000 milliseconds)
        const intervalId = setInterval(changeRandomImage, 5000);

        return () => clearInterval(intervalId); // Clean up the interval on component unmount
    }, [images]);

    return (
        <section id="artists" className='lg:p-8 mt-16'>

            <h1 className="font-normal tracking-tighter uppercase text-6xl lg:text-[8rem] pb-2">
                <span className="text-white">ARTISTS</span>
                <p className="mt-12 text-xl font-medium tracking-tighter text-white font-display lg:text-2xl">
                    Music with industry playmakers like you’ve never experienced before.
                </p>
                <p className="mt-1 text-xl font-medium tracking-tighter text-white font-display lg:text-1xl">
                    Over the past year Dr. Naz has been spinning beats alongside globally renown DJs.
                </p>

            </h1>

            <div>
                <div className="mySlides fade">
                    <div className="numbertext">{images.indexOf(currentImage) + 1} / {images.length}</div>
                    <img src={currentImage.src} className="slide-image" alt={currentImage.text} />
                    <div className="text">{currentImage.text}</div>
                    <br></br>
                </div>

                <div className="mt-10 grid grid-cols-5 gap-4 justify-center">
                    {images.map((image, index) => (
                        <button
                            key={index}
                            className={`text-white py-2 px-4 rounded-r m-2 ${index === highlightedButtonIndex ? 'text-red-300' : ''
                                }`}
                            onClick={() => changeImage(image, index)}
                        >
                            {image.text}
                        </button>
                    ))}
                </div>
            </div>







        </section>
    );
}

export default ArtistSection;
