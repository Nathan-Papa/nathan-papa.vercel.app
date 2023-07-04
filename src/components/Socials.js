'use client';
import React from 'react';
import Image from 'next/image'

const Socials = (props) => {
    return (
        <div className="flex w-[60%] h-[7%] justify-around items-center bg-[#D13F3F] text-[#E1E1E1] border-[3px] border-[#42403C] rounded-t-lg">
            <a href="https://www.linkedin.com/in/nathan-papa/" target="_blank">
                <Image 
                    src="/linkedin.png"
                    alt="Linkedin Logo"
                    width={40}
                    height={40}
                />
            </a>
            <a href="https://github.com/Nathan-Papa" target="_blank">
            <Image 
                    src="/github.png"
                    alt="Github Logo"
                    width={40}
                    height={40}
                />
            </a>
        </div>
    );
}

export default Socials;