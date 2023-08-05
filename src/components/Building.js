'use client';
import React, { useEffect, useState } from 'react';

const Building = (props) => {

    if (props.type == "cps") {
        return (
            <div className="flex justify-between min-h-[30%] w-full border-[#FFFDE7] md:text-sm xl:text-md 2xl:text-lg border-[1px] overflow-y-auto rounded-md">
                <div className="flex flex-col justify-between w-[60%] pl-[2%] my-[1%]">
                    {props.name.charAt(props.name.length - 1) == 'y' ? 
                        props.building.count != 1 ? <p>{`${props.building.count} ${props.name.substring(0, props.name.length - 1)}ies`}</p> : <p>{`${props.building.count} ${props.name}`}</p> :
                        props.building.count != 1 ? <p>{`${props.building.count} ${props.name}s`}</p> : <p>{`${props.building.count} ${props.name}`}</p>
                    }
                    <p className="ml-[2%]">{props.description}</p>
                </div>
                <div className="flex flex-col justify-between w-[60%] pl-[2%] my-[2%]">
                    <button onClick={props.buyBuilding} className="text-[#FFFDE7] max-w-[85%] md:text-md 2xl:text-lg hover:border-[#FFFDE7] mr-[2%] bg-[#680C07] border-[2px] border-[#A8A9AD] py-[1px] px-[5px] rounded-md self-center">Buy 1</button>
                    <p className="self-center w-[70%] text-center">Price: {props.building.price} Cannoli</p>
                </div>
            </div>
        );
    } else if (props.type == "cpc") {
        return (
            <div className="flex justify-between min-h-[30%] w-full border-[#FFFDE7] md:text-sm 2xl:text-md border-[1px] overflow-y-auto rounded-md">
                <div className="flex flex-col justify-between w-[60%] pl-[2%] my-[1%]">
                    {props.building.count != 1 ? <p>{`${props.building.count} ${props.name}s`}</p> : <p>{`${props.building.count} ${props.name}`}</p>}
                    <p className="ml-[2%]">{props.description}</p>
                </div>
                <div className="flex flex-col justify-between w-[60%] pl-[2%] my-[2%]">
                <button onClick={props.buyBuilding} className="text-[#FFFDE7] max-w-[85%] md:text-md 2xl:text-lg hover:border-[#FFFDE7] mr-[2%] bg-[#680C07] border-[2px] border-[#A8A9AD] py-[1px] px-[5px] rounded-md self-center">Buy 1</button>
                    <p className="self-center w-[70%] text-center">Price: {props.building.price} Cannoli</p>
                </div>
            </div>
        );
    } else if (props.type == "locked") {
        return (
            <div className="flex justify-center items-center min-h-[30%] w-full border-[#FFFDE7] md:text-sm xl:text-md 2xl:text-lg border-[1px] overflow-y-auto rounded-md">
                <p>Unlock this building after gaining <u>{props.unlock}</u> total cannolis.</p>
            </div>
        );
    }
}

export default Building;