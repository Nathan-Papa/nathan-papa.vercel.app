'use client';
import React from 'react';
import github from './github.png';

const Socials = (props) => {
    return (
        <div className="flex w-[60%] h-[7%] justify-around space-around items-center bg-[#D13F3F] text-[#E1E1E1] border-[3px] border-[#42403C] rounded-t-lg">
            <a href="https://www.linkedin.com/in/nathan-papa/" target="_blank">
                <img src='./linkedin.png' alt="Linkedin Logo"/>
            </a>
            <a href="https://github.com/Nathan-Papa">
                <img src={github} alt="Github Logo"/>
            </a>
        </div>
    );
}

export default Socials;