'use client';
import React, { useEffect, useState, useRef } from 'react';

const Upgrade = (props) => {
    const upgrade = useRef(null);

    function buyCPSUpgrade() {
        if (props.cannoli >= props.price) {
            props.setCannoli((current) => current - props.price);
            props.setCPSMultiplier((current) => current + props.cpsMultiplier);
            upgrade.current.style.display = "none";
            props.setVisible(false);
        }
    }

    function buyCPCUpgrade() {
        if (props.cannoli >= props.price) {
            props.setCannoli((current) => current - props.price);
            props.setCPCMultiplier((current) => current + props.cpcMultiplier);
            upgrade.current.style.display = "none";
            props.setVisible(false);
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
            props.setVisible(false);
        }
    }

    if (props.type == "cps" && props.visible == true) {
        return (
            <div ref={upgrade} className="flex justify-between min-h-[30%] w-full border-[#FFFDE7] border-[1px] rounded-md">
                <div className="flex flex-col justify-between w-[60%] pl-[2%] my-[2%]">
                    <p>{props.name}</p>
                    <p className="ml-[2%]">{props.description}</p>
                </div>
                <div className="flex flex-col justify-between w-[60%] pl-[2%] my-[2%]">
                    <button onClick={buyCPSUpgrade} className="text-[#FFFDE7] max-w-[85%] text-lg hover:border-[#FFFDE7] mr-[2%] bg-[#680C07] border-[2px] border-[#A8A9AD] py-[1px] px-[5px] rounded-md self-center">Upgrade</button>
                    <p className="self-center w-[70%] text-center">Price: {props.price} Cannoli</p>
                </div>
            </div>
        );
    } else if (props.type == "cpc" && props.visible == true) {
        return (
            <div ref={upgrade} className="flex justify-between min-h-[30%] w-full border-[#FFFDE7] border-[1px] rounded-md">
                <div className="flex flex-col justify-between w-[60%] pl-[2%] my-[2%]">
                    <p>{props.name}</p>
                    <p className="ml-[2%]">{props.description}</p>
                </div>
                <div className="flex flex-col justify-between w-[60%] pl-[2%] my-[2%]">
                    <button onClick={buyCPCUpgrade} className="text-[#FFFDE7] max-w-[85%] text-lg hover:border-[#FFFDE7] mr-[2%] bg-[#680C07] border-[2px] border-[#A8A9AD] py-[1px] px-[5px] rounded-md self-center">Upgrade</button>
                    <p className="self-center w-[70%] text-center">Price: {props.price} Cannoli</p>
                </div>
            </div>
        );
    } else if (props.type == "boost" && props.visible == true) {
        return (
            <div ref={upgrade} className="flex justify-between min-h-[30%] w-full border-[#FFFDE7] border-[1px] rounded-md">
                <div className="flex flex-col justify-between w-[60%] pl-[2%] my-[2%]">
                    <p>{props.name}</p>
                    <p className="ml-[2%]">{props.description}</p>
                </div>
                <div className="flex flex-col justify-between w-[60%] pl-[2%] my-[2%]">
                    <button onClick={buyBoostUpgrade} className="text-[#FFFDE7] max-w-[85%] text-lg hover:border-[#FFFDE7] mr-[2%] bg-[#680C07] border-[2px] border-[#A8A9AD] py-[1px] px-[5px] rounded-md self-center">Upgrade</button>
                    <p className="self-center w-[70%] text-center">Price: {props.price} Cannoli</p>
                </div>
            </div>
        );
    } else if (props.type == "locked") {
        return (
            <div className="flex justify-center items-center min-h-[25%] w-full border-[#FFFDE7] border-[1px] overflow-y-auto rounded-md">
                <p>Unlock this upgrade after gaining <u>{props.unlock}</u> total cannolis.</p>
            </div>
        );
    }
}

export default Upgrade;