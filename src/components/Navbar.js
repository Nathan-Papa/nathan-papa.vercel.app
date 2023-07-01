'use client';
import React, { useEffect, useRef } from 'react';

const Navbar = (props) => {
    const aboutMeButton = useRef(null);
    const projectsButton = useRef(null);
    const clickerButton = useRef(null);

    function aboutMeClicked() {
        aboutMeButton.current.style.textDecoration = 'underline';
        projectsButton.current.style.textDecoration = 'none';
        clickerButton.current.style.textDecoration = 'none';
    }

    function projectsClicked() {
        aboutMeButton.current.style.textDecoration = 'none';
        projectsButton.current.style.textDecoration = 'underline';
        clickerButton.current.style.textDecoration = 'none';
    }

    function clickerClicked() {
        aboutMeButton.current.style.textDecoration = 'none';
        projectsButton.current.style.textDecoration = 'none';
        clickerButton.current.style.textDecoration = 'underline';
    }

    return (
        <div className="flex w-full h-[7%] justify-around space-around items-center bg-[#D13F3F] text-[#FFFDE7] border-[3px] border-[#42403C] rounded-b-lg">
            <button ref={aboutMeButton} onClick={aboutMeClicked} className="text-2xl underline h-full hover:border-[#FFFDE7] border-2 rounded-lg border-transparent">About Me</button>
            <button ref={projectsButton} onClick={projectsClicked} className="text-2xl h-full hover:border-[#FFFDE7] border-2 rounded-lg border-transparent">Projects</button>
            <button ref={clickerButton} onClick={clickerClicked} className="text-2xl h-full hover:border-[#FFFDE7] border-2 rounded-lg border-transparent">Clicker Game</button>
        </div>
    );
}

export default Navbar;