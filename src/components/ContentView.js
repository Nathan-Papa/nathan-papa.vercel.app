'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import Building from './Building'

const ContentView = (props) => {
    const [cannolis, setCannolis] = useState(0);
    const [cps, setCPS] = useState(0);
    const [cpc, setCPC] = useState(1);
    const [autoPrice, setAutoPrice] = useState(1);
    const [nonnaPrice, setNonnaPrice] = useState(25);
    const [doublePrice, setDoublePrice] = useState(100);
    const [autoClickers, setAutoClickers] = useState(0);
    const [nonnas, setNonnas] = useState(0);
    const [doubleClicks, setDoubleClicks] = useState(0);
    const [storeWindow, setStoreWindow] = useState("buildings");
    const [timer, setTimer] = useState(null);

    useEffect(() => {
        if (timer != null) {
            clearInterval(timer);
        }
        if (cps != 0) {
            setTimer(setInterval(() => {
                setCannolis((current) => current + 1);
            }, 1000 / cps));
        }
    }, [cps]);

    const CannoliCount = (props) => {
        return (<p className="text-[#FFFDE7] text-center text-xl">{props.cannolis} cannolis</p>);
    }

    const AutoCannoliCount = (props) => {
        return (<p className="text-[#FFFDE7] text-center text-xl">{props.cps} cannolis per second</p>);
    }

    const CannoliClickCount = (props) => {
        return (<p className="text-[#FFFDE7] text-center text-xl">{props.cpc} cannolis per click</p>);
    }

    function cannoliClick() {
        setCannolis((current) => current + (1 * cpc));
    }

    function exitStoreClick() {
        props.setVisible("clicker");
    }

    function buildingsClick() {
        setStoreWindow("buildings");
    }

    function upgradesClick() {
        setStoreWindow("upgrades");
    }

    function changeAutoPrice() {
        setAutoPrice((current) => current + Math.round(1.5 * Math.pow(autoClickers + 1, 1.5)));
    }

    function changeNonnaPrice() {
        setNonnaPrice((current) => current + Math.round(2 * Math.pow(nonnas + 1, 1.75)));
    }

    function changeDoublePrice() {
        setDoublePrice((current) => current * 10);
    }

    if (props.visible == "home") {
        return (
            <div className="flex w-[90%] h-[75%] justify-between items-center text-[#FFFDE7]">
                <div className="flex flex-col h-[70%] self-start justify-between w-[40%]">
                    <h1 className="text-5xl">Nathan Papa</h1>
                    <p className="ml-[4%] overflow-y-auto">
                        {`I'm an aspiring software engineer, currently a second-year student
                        studying computer science at Georgia Tech. My passion for computer
                        science always stemmed from my enjoyment for playing video games
                        when I was young and always having that small amount of curiosity
                        when I'd ask myself how everything works. When I eventually decided
                        to start educating myself on the inner workings of computers, I found
                        myself in a vast field of something I was genuinely interested in. Since
                        that moment, I've participated in cybersecurity competitions, developed websites
                        and programs in many different languages, and been educated in many different paradigms
                        of technology, and I've found my passion and skill for coding in the process and strive
                        to pursue it professionally.`}
                    </p>
                    <p className="ml-[4%]">
                        {`Email: nathanpapa35@gmail.com`}
                        <br />
                        {`Phone Number: (931) 303-2306`}
                    </p>
                </div>
                <div className="flex flex-col h-full w-[40%] justify-around">
                    <div className="w-[80%] h-[40%] flex flex-col justify-between border-[#FFFDE7] border-[2px] rounded-lg p-[2%] overflow-auto">
                        <h3 className="text-xl self-center">Python Minesweeper</h3>
                        <p className="text-lg self-start w-[85%] ml-[2%]">
                            {`I wanted to try the python turtle module so I decided to
                            create a python reboot of a classic video game: Minesweeper.
                            Click the icon for the github.`}
                        </p>
                        <a href="https://github.com/Nathan-Papa/Projects/tree/main/Python%20Mine%20Sweeper" target="_blank" className="self-end">
                            <Image
                                src="/mine.png"
                                alt="Minesweeper Logo"
                                width={70}
                                height={70}
                            />
                        </a>
                    </div>
                    <div className="w-[80%] h-[40%] flex flex-col self-end justify-between border-[#FFFDE7] border-[2px] rounded-lg p-[2%] overflow-auto">
                    <h3 className="text-xl self-center">JavaFX Calculator</h3>
                        <p className="text-lg self-start w-[85%] ml-[2%]">
                            {`I wanted to create a GUI using Java as I had just learned Java, 
                            and I decided to try and create a calculator. Click the icon for the github.`}
                        </p>
                        <a href="https://github.com/Nathan-Papa/Projects/tree/main/JavaFX%20Calculator" target="_blank" className="self-end">
                            <Image
                                src="/calc.png"
                                alt="Calculator Icon"
                                width={70}
                                height={70}
                            />
                        </a>
                    </div>
                </div>
            </div>
        );
    } else if (props.visible == "clicker") {
        return (
            <div className="flex flex-col w-full h-[80%] justify-between items-center text-[#42403C]">
                <div className="h-[25%] flex flex-col justify-around">
                    <h1 className="text-5xl text-[#FFFDE7]">Cannoli Clicker</h1>
                    <div className="h-[45%] flex flex-col justify-between">
                        <CannoliCount cannolis={cannolis} />
                        <AutoCannoliCount cps={cps} />
                        <CannoliClickCount cpc={cpc} />
                    </div>
                </div>
                <Image
                    onClick={cannoliClick}
                    src="/cannoliIcon.png"
                    alt="Cannoli to Click"
                    width={250}
                    height={250}
                />
                <div></div>
            </div>
        );
    } else if (props.visible == "store") {
        if (storeWindow == "buildings") {
            return (
                <div className="flex flex-col w-full h-[80%] justify-between items-center">
                    <div className="h-[25%] flex flex-col justify-around">
                        <h1 className="text-5xl">Cannoli Clicker</h1>
                        <div className="h-[45%] flex flex-col justify-between">
                            <CannoliCount cannolis={cannolis} />
                            <AutoCannoliCount cps={cps} />
                            <CannoliClickCount cpc={cpc} />
                        </div>
                    </div>
                    <div className="flex flex-col justify-between items-center w-[40%] h-[50%] text-[#FFFDE7] overflow-y-auto border-[#FFFDE7] p-[1%] border-[2px] rounded-lg">
                        <Building type="cps" count={autoClickers} setCount={setAutoClickers} cannolis={cannolis} setCannolis={setCannolis} 
                            setCPS={setCPS} name="Autoclicker" description="Each autoclicker clicks the cannoli once every second."
                            price={autoPrice} setPrice={changeAutoPrice} cpsModifier={1} />
                        <Building type="cps" count={nonnas} setCount={setNonnas} cannolis={cannolis} setCannolis={setCannolis}
                            setCPS={setCPS} name="Nonna" description="Each nonna bakes cannolis for you."
                            price={nonnaPrice} setPrice={changeNonnaPrice} cpsModifier={3} />
                        <Building type="cpc" count={doubleClicks} setCount={setDoubleClicks} cannolis={cannolis} setCannolis={setCannolis}
                            setCPC={setCPC} name="Double Click" description="Each double click doubles your cannolis per click."
                            price={doublePrice} setPrice={changeDoublePrice} cpcModifier={2} />
                    </div>
                    <div className="flex flex-col w-full h-[10%] items-center justify-between">
                        <div className="flex w-[50%] justify-around items-center text-[#42403C]">
                            <button onClick={buildingsClick} className="text-[#FFFDE7] text-lg hover:border-[#FFFDE7] bg-[#680C07] border-[2px] border-[#A8A9AD] py-[1px] px-[3px] rounded-md">Buildings</button>
                            <button onClick={upgradesClick} className="text-[#FFFDE7] text-lg hover:border-[#FFFDE7] bg-[#680C07] border-[2px] border-[#A8A9AD] py-[1px] px-[3px] rounded-md">Upgrades</button>
                        </div>
                        <button onClick={exitStoreClick} className="text-[#FFFDE7] text-lg hover:border-[#FFFDE7] bg-[#680C07] border-[2px] border-[#A8A9AD] py-[1px] px-[3px] rounded-md">Exit Store</button>
                    </div>
                </div>
            )
        } else if (storeWindow == "upgrades") {
            return (
                <div className="flex flex-col w-full h-[80%] justify-between items-center">
                    <div className="h-[25%] flex flex-col justify-around">
                        <h1 className="text-5xl">Cannoli Clicker</h1>
                        <div className="h-[45%] flex flex-col justify-between">
                            <CannoliCount cannolis={cannolis} />
                            <AutoCannoliCount cps={cps} />
                            <CannoliClickCount cpc={cpc} />
                        </div>
                    </div>
                    <div className="flex flex-col w-full h-[10%] items-center justify-between">
                        <div className="flex w-[50%] justify-around items-center text-[#42403C]">
                            <button onClick={buildingsClick} className="text-[#FFFDE7] text-lg hover:border-[#FFFDE7] bg-[#680C07] border-[2px] border-[#A8A9AD] py-[1px] px-[3px] rounded-md">Buildings</button>
                            <button onClick={upgradesClick} className="text-[#FFFDE7] text-lg hover:border-[#FFFDE7] bg-[#680C07] border-[2px] border-[#A8A9AD] py-[1px] px-[3px] rounded-md">Upgrades</button>
                        </div>
                        <button onClick={exitStoreClick} className="text-[#FFFDE7] text-lg hover:border-[#FFFDE7] bg-[#680C07] border-[2px] border-[#A8A9AD] py-[1px] px-[3px] rounded-md">Exit Store</button>
                    </div>
                </div>
            )
        }
    }
}

export default ContentView;