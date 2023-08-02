'use client';
import React from "react";

const ClickerHeader = (props) => {
    return (
        <div className="h-[25%] flex flex-col justify-around">
            <h1 className="text-3xl md:text-5xl lg:text-5xl xl:text-5xl text-center text-[#FFFDE7]">Cannoli Clicker</h1>
            <div className="h-[45%] flex flex-col justify-between">
                <p className="text-[#FFFDE7] text-center text-xl">{props.cannoli} cannoli</p>
                <p className="text-[#FFFDE7] text-center text-xl">{Math.round(props.cps * props.cpsMultiplier)} cannoli per second</p>
                <p className="text-[#FFFDE7] text-center text-xl">{Math.round(props.cpc * props.cpcMultiplier)} cannoli per click</p>
            </div>
        </div>
    );
}

export default ClickerHeader;