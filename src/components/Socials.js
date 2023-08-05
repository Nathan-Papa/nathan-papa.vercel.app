'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image'

const Socials = (props) => {
    const SocialsButton = (props) => {
        if (props.visible == "home") {
            return (<a href="/Nathan Papa Resume.pdf" download="Nathan_Papa_Resume" target="_blank">
                <button className="text-[#FFFDE7] min-w-[5%] text-md md:text-lg hover:border-[#FFFDE7] border-[2px] border-[#A8A9AD] py-[1%] px-[3px] rounded-md">Download my Resume</button>
            </a>);
        } else if (props.visible == "clicker") {
            return (
                <button onClick={storeClick} className="text-[#FFFDE7] min-w-[5%] text-md md:text-lg hover:border-[#FFFDE7] border-[2px] border-[#A8A9AD] py-[1%] px-[3px] rounded-md">Store</button>
            );
        } else if (props.visible == "store") {
            return (
                <button onClick={exitStoreClick} className="text-[#FFFDE7] min-w-[5%] text-md md:text-lg hover:border-[#FFFDE7] border-[2px] border-[#A8A9AD] py-[1%] px-[3px] rounded-md">Exit Store</button>
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
        <div className="flex min-w-[70%] min-h-[5.5%] lg:min-h-[7%] justify-between px-[3%] items-center bg-[#680C07] text-[#E1E1E1] border-[2px] border-[#A8A9AD] rounded-t-lg">
            <a href="https://www.linkedin.com/in/nathan-papa/" className="my-[2%] xl:my-0" target="_blank">
                <Image 
                    src="/linkedinlogo.png"
                    alt="Linkedin Logo"
                    width={40}
                    height={40}
                />
            </a>
            <SocialsButton visible = {props.visible} />
            <a href="https://github.com/Nathan-Papa" className="my-[2%] xl:my-0" target="_blank">
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