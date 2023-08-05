'use client';
import React, { useEffect, useRef } from 'react';

const Navbar = (props) => {
    const homeButton = useRef(null);
    const clickerButton = useRef(null);

    function homeClick() {
        homeButton.current.style.textDecoration = 'underline';
        clickerButton.current.style.textDecoration = 'none';
        props.setVisible("home");
    }

    function clickerClick() {
        homeButton.current.style.textDecoration = 'none';
        clickerButton.current.style.textDecoration = 'underline';
        props.setVisible("clicker");
    }

    return (
        <div className="flex max-w-full min-w-[50%] min-h-[5.5%] lg:min-h-[7%] w-full justify-around items-center bg-[#680C07] text-[#FFFDE7] border-[2px] border-[#A8A9AD] rounded-b-lg">
            <button ref={homeButton} onClick={homeClick} className="text-2xl underline h-full hover:border-[#FFFDE7] border-2 rounded-lg border-transparent">Home</button>
            <button ref={clickerButton} onClick={clickerClick} className="text-2xl h-full hover:border-[#FFFDE7] border-2 rounded-lg border-transparent">Clicker Game</button>
        </div>
    );
}

export default Navbar;