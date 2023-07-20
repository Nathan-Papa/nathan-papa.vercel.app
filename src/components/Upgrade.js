'use client';
import React, { useEffect, useState, useRef } from 'react';

const Upgrade = (props) => {
    const upgrade = useRef(null);

    function buyCPSUpgrade() {
        if (props.cannoli >= props.price) {
            props.setCannoli((current) => current - props.price);
            props.setCPSMultiplier((current) => current + props.cpsMultiplier);
            upgrade.current.style.display = "none";
        }
    }

    function buyCPCUpgrade() {
        if (props.cannoli >= props.price) {
            props.setCannoli((current) => current - props.price);
            props.setCPCMultiplier((current) => current + props.cpcMultiplier);
            upgrade.current.style.display = "none";
        }
    }

    function buyBoostUpgrade() {
        if (props.cannoli >= props.price) {
            props.setCannoli((current) => current - props.price);
            props.setCPS((current) => current - (props.count * props.cpsModifier))
            props.setCPSModifier((current) => current * props.cpsMultiplier);
            const newCPS = props.cpsModifier * props.cpsMultiplier;
            props.setCPS((current) => current + (props.count * newCPS))
            upgrade.current.style.display = "none";
        }
    }

    if (props.type == "cps") {
        return (
            <div ref={upgrade} className="flex justify-between min-h-[30%] w-full border-[#FFFDE7] border-[1px] rounded-md">
                <div className="flex flex-col justify-between w-[60%] pl-[2%] my-[2%]">
                    <p>{props.name}</p>
                    <p className="ml-[2%]">{props.description}</p>
                </div>
                <div className="flex flex-col justify-between w-[60%] pl-[2%] my-[2%]">
                    <button onClick={buyCPSUpgrade} className="text-[#FFFDE7] max-w-[85%] text-lg hover:border-[#FFFDE7] mr-[2%] bg-[#680C07] border-[2px] border-[#A8A9AD] py-[1px] px-[3px] rounded-md self-center">Enable {props.name}</button>
                    <p className="self-center w-[70%] text-center">Price: {props.price} Cannoli</p>
                </div>
            </div>
        );
    } else if (props.type == "cpc") {
        return (
            <div ref={upgrade} className="flex justify-between min-h-[30%] w-full border-[#FFFDE7] border-[1px] rounded-md">
                <div className="flex flex-col justify-between w-[60%] pl-[2%] my-[2%]">
                    <p>{props.name}</p>
                    <p className="ml-[2%]">{props.description}</p>
                </div>
                <div className="flex flex-col justify-between w-[60%] pl-[2%] my-[2%]">
                    <button onClick={buyCPCUpgrade} className="text-[#FFFDE7] max-w-[85%] text-lg hover:border-[#FFFDE7] mr-[2%] bg-[#680C07] border-[2px] border-[#A8A9AD] py-[1px] px-[3px] rounded-md self-center">Enable {props.name}</button>
                    <p className="self-center w-[70%] text-center">Price: {props.price} Cannoli</p>
                </div>
            </div>
        );
    } else if (props.type == "boost") {
        return (
            <div ref={upgrade} className="flex justify-between min-h-[30%] w-full border-[#FFFDE7] border-[1px] rounded-md">
                <div className="flex flex-col justify-between w-[60%] pl-[2%] my-[2%]">
                    <p>{props.name}</p>
                    <p className="ml-[2%]">{props.description}</p>
                </div>
                <div className="flex flex-col justify-between w-[60%] pl-[2%] my-[2%]">
                    <button onClick={buyBoostUpgrade} className="text-[#FFFDE7] max-w-[85%] text-lg hover:border-[#FFFDE7] mr-[2%] bg-[#680C07] border-[2px] border-[#A8A9AD] py-[1px] px-[3px] rounded-md self-center">Enable {props.name}</button>
                    <p className="self-center w-[70%] text-center">Price: {props.price} Cannoli</p>
                </div>
            </div>
        );
    }
}

export default Upgrade;