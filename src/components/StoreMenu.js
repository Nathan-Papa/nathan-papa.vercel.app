'use client';
import React from 'react';

const StoreMenu = (props) => {
    return (
        <div className="flex min-w-[50%] w-full md:w-[50%] max-w-[70%] justify-around items-center text-[#42403C] border-[#FFFDE7] p-[1%] border-[2px] rounded-lg">
            <button onClick={props.buildingsClick} className="text-[#FFFDE7] md:text-md 2xl:text-lg overflow-auto min-w-[17%] hover:border-[#FFFDE7] bg-[#680C07] border-[2px] border-[#A8A9AD] py-[1px] px-[3px] rounded-md">Buildings</button>
            <button onClick={props.upgradesClick} className="text-[#FFFDE7] md:text-md 2xl:text-lg overflow-auto min-w-[17%] hover:border-[#FFFDE7] bg-[#680C07] border-[2px] border-[#A8A9AD] py-[1px] px-[3px] rounded-md">Upgrades</button>
        </div>
    );
}

export default StoreMenu;