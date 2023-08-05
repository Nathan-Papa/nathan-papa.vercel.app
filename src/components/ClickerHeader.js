'use client';
import React from "react";

const ClickerHeader = (props) => {
    return (
        <div className="min-h-[20%] lg:min-h-[25%] xl:min-h-[30%] flex flex-col justify-around">
            <h1 className="text-3xl xl:text-4xl 2xl:text-5xl text-center text-[#FFFDE7]">Cannoli Clicker</h1>
            <div className="flex flex-col justify-between">
                <p className="text-[#FFFDE7] text-center text-md xl:text-lg 2xl:text-xl">{props.cannoli} cannoli</p>
                <p className="text-[#FFFDE7] text-center text-md xl:text-lg 2xl:text-xl">{Math.round(props.cps * props.cpsMultiplier)} cannoli per second</p>
                <p className="text-[#FFFDE7] text-center text-md xl:text-lg 2xl:text-xl">{Math.round(props.cpc * props.cpcMultiplier)} cannoli per click</p>
            </div>
        </div>
    );
}

export default ClickerHeader;