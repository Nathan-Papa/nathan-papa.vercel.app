'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image'

const Socials = (props) => {
    const SocialsButton = (props) => {
        if (props.visible == "home") {
            return (<a href="/Nathan Papa Resume.pdf" download="Nathan_Papa_Resume" target="_blank">
                <button className="text-[#FFFDE7] text-lg hover:border-[#FFFDE7] rounded-lg border-[2px] border-[#A8A9AD] py-[1px] px-[3px] rounded-md">Download my Resume</button>
            </a>);
        } else {
            return (
                <button className="text-[#FFFDE7] text-lg hover:border-[#FFFDE7] rounded-lg border-[2px] border-[#A8A9AD] py-[1px] px-[3px] rounded-md">Store</button>
            );
        }
    }
    
    return (
        <div className="flex w-[60%] h-[7%] justify-around items-center bg-[#680C07] text-[#E1E1E1] border-[2px] border-[#A8A9AD] rounded-t-lg">
            <a href="https://www.linkedin.com/in/nathan-papa/" target="_blank">
                <Image 
                    src="/linkedinlogo.png"
                    alt="Linkedin Logo"
                    width={40}
                    height={40}
                />
            </a>
            <SocialsButton visible = {props.visible} />
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