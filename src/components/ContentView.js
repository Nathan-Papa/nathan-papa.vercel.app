'use client';
import React from 'react';

const ContentView = (props) => {
    if (props.visible == "about-me") {
        return (
            <div className="flex w-[90%] h-[75%] justify-between items-center text-[#42403C]">
                <div className="flex flex-col h-full w-[40%]">
                    <h1 className="text-5xl mb-[4%]">Nathan Papa</h1>
                    <p className="ml-[4%]">
                        I'm an aspiring software engineer, currently a second-year student
                        studying computer science at Georgia Tech.
                    </p>
                </div>
                <div className="flex h-full w-[40%]">
                    <p>Resume goes here</p>
                </div>
            </div>
        );
    } else if (props.visible == "projects") {
        return (
            <div className="flex w-[90%] h-[75%] justify-around items-center text-[#42403C]">
                <div className="flex flex-col h-full w-full">
                    <h1 className="text-5xl mb-[4%]">Projects</h1>
                    <div className="flex w-full h-full flex-col items-start">
                        
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="flex w-full h-[75%] justify-around items-center text-[#42403C]">
                <h1 className="text-5xl mb-[4%]">Clicker Game</h1>
            </div>
        );
    }
}

export default ContentView;