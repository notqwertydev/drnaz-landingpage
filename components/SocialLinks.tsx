import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faSoundcloud } from '@fortawesome/free-brands-svg-icons';

const SocialLinks = () => {
    return (
        <div className="flex justify-center items-center mt-12">
            <ul className="flex flex-wrap justify-center gap-6 p-6">
                {/* Instagram Link */}
                <li className="list-none mx-2 my-2 md:mx-4">
                    <a href="https://www.instagram.com/nazirbassit" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-32 h-12 bg-transparent  rounded transition duration-500 ease-in-out hover:scale-110">
                        <FontAwesomeIcon icon={faInstagram} className="text-2xl text-white transition duration-500 ease-in-out" />
                    </a>
                </li>
                {/* Soundcloud Link */}
                <li className="list-none mx-2 my-2 md:mx-4">
                    <a href="https://www.soundcloud.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-32 h-12 bg-transparent  rounded transition duration-500 ease-in-out hover:scale-110">
                        <FontAwesomeIcon icon={faSoundcloud} className="text-2xl text-white transition duration-500 ease-in-out" />
                    </a>
                </li>
                {/* Add more social links as needed */}
            </ul>
        </div>
    );
};

export default SocialLinks;
