'use client';
import React, { useEffect, useState } from 'react';

const Building = (props) => {

    function buyCPSBuilding() {
        if (props.cannoli >= props.price) {
            props.setCannoli((current) => current - props.price);
            props.setCount((current) => current + 1);
            props.setCPS((current) => current + props.cpsModifier);
            props.setPrice();
        }
    }

    function buyCPCBuilding() {
        if (props.cannoli >= props.price) {
            props.setCannoli((current) => current - props.price);
            props.setCount((current) => current + 1);
            props.setCPC((current) => current * props.cpcModifier);
            props.setPrice();
        }
    }

    if (props.type == "cps") {
        return (
            <div className="flex justify-between min-h-[25%] w-full border-[#FFFDE7] border-[1px] overflow-y-auto rounded-md">
                <div className="flex flex-col justify-between w-[60%] pl-[2%] my-[2%]">
                    {props.name.charAt(props.name.length - 1) == 'y' ? 
                        props.count != 1 ? <p>{`${props.count} ${props.name.substring(0, props.name.length - 1)}ies`}</p> : <p>{`${props.count} ${props.name}`}</p> :
                        props.count != 1 ? <p>{`${props.count} ${props.name}s`}</p> : <p>{`${props.count} ${props.name}`}</p>
                    }
                    <p className="ml-[2%]">{props.description}</p>
                </div>
                <div className="flex flex-col justify-between w-[60%] pl-[2%] my-[2%]">
                    <button onClick={buyCPSBuilding} className="text-[#FFFDE7] max-w-[85%] text-lg hover:border-[#FFFDE7] mr-[2%] bg-[#680C07] border-[2px] border-[#A8A9AD] py-[1px] px-[5px] rounded-md self-center">Buy 1</button>
                    <p className="self-center w-[70%] text-center">Price: {props.price} Cannoli</p>
                </div>
            </div>
        );
    } else if (props.type == "cpc") {
        return (
            <div className="flex justify-between min-h-[25%] w-full border-[#FFFDE7] border-[1px] overflow-y-auto rounded-md">
                <div className="flex flex-col justify-between w-[60%] pl-[2%] my-[2%]">
                    {props.count != 1 ? <p>{`${props.count} ${props.name}s`}</p> : <p>{`${props.count} ${props.name}`}</p>}
                    <p className="ml-[2%]">{props.description}</p>
                </div>
                <div className="flex flex-col justify-between w-[60%] pl-[2%] my-[2%]">
                <button onClick={buyCPCBuilding} className="text-[#FFFDE7] max-w-[85%] text-lg hover:border-[#FFFDE7] mr-[2%] bg-[#680C07] border-[2px] border-[#A8A9AD] py-[1px] px-[5px] rounded-md self-center">Buy 1</button>
                    <p className="self-center w-[70%] text-center">Price: {props.price} Cannoli</p>
                </div>
            </div>
        );
    } else if (props.type == "locked") {
        return (
            <div className="flex justify-center items-center min-h-[25%] w-full border-[#FFFDE7] border-[1px] overflow-y-auto rounded-md">
                <p>Unlock this building after gaining <u>{props.unlock}</u> total cannolis.</p>
            </div>
        );
    }
}

export default Building;