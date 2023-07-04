'use client';
import React from 'react';

const Socials = (props) => {
    return (
        <div className="flex w-[60%] h-[7%] justify-around items-center bg-[#D13F3F] text-[#E1E1E1] border-[3px] border-[#42403C] rounded-t-lg">
            <a href="https://www.linkedin.com/in/nathan-papa/" target="_blank">
                <img src='./linkedin.png' alt="Linkedin Logo"/>
            </a>
            <a href="https://github.com/Nathan-Papa" target="_blank">
                <img className="w-[40px] h-[40px]" src='./github.png' alt="Github Logo"/>
            </a>
        </div>
    );
}

export default Socials;