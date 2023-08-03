'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image'

const Socials = (props) => {
    const SocialsButton = (props) => {
        if (props.visible == "home") {
            return (<a href="/Nathan Papa Resume.pdf" download="Nathan_Papa_Resume" target="_blank">
                <button className="text-[#FFFDE7] min-w-[40%] text-md md:text-lg lg:text-lg xl:text-lg hover:border-[#FFFDE7] border-[2px] border-[#A8A9AD] py-[1%] px-[3px] rounded-md">Download my Resume</button>
            </a>);
        } else if (props.visible == "clicker") {
            return (
                <button onClick={storeClick} className="text-[#FFFDE7] text-lg hover:border-[#FFFDE7] border-[2px] border-[#A8A9AD] py-[1%] px-[3px] rounded-md">Store</button>
            );
        } else if (props.visible == "store") {
            return (
                <button onClick={exitStoreClick} className="text-[#FFFDE7] text-lg hover:border-[#FFFDE7] border-[2px] border-[#A8A9AD] py-[1%] px-[3px] rounded-md">Exit Store</button>
            );
        }
    }

    function storeClick() {
        props.setVisible("store");
    }

    function exitStoreClick() {
        props.setVisible("clicker");
    }
    
    return (
        <div className="flex min-w-[70%] h-[7%] justify-between px-[3%] items-center bg-[#680C07] text-[#E1E1E1] border-[2px] border-[#A8A9AD] rounded-t-lg">
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