'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image'

const ContentView = (props) => {
    const [cannolis, setCannolis] = useState(0);
    const [cps, setCPS] = useState(0);
    const [cpc, setCPC] = useState(1);
    const [autoPrice, setAutoPrice] = useState(1);
    const [doublePrice, setDoublePrice] = useState(100);
    const [autoClickers, setAutoClickers] = useState(0);
    const [doubleClicks, setDoubleClicks] = useState(0);
    const [storeWindow, setStoreWindow] = useState("buildings");
    const [timer, setTimer] = useState(null);

    useEffect(() => {
        if (autoClickers != 0) {
            setTimer(setInterval(() => {
                setCannolis((current) => current + 1);
            }, 1000 / autoClickers));
        }
    }, [autoClickers]);

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

    function buyAuto() {
        if (cannolis >= autoPrice) {
            setCannolis((current) => current - autoPrice);
            setAutoClickers((current) => current + 1);
            setCPS((current) => current + 1);
            (current) => current + Math.round(1.5 * Math.pow(autoClickers + 1, 1.5))
            setAutoPrice((current) => current + Math.round(1.5 * Math.pow(autoClickers + 1, 1.5)));
            if (timer != null) {
                clearInterval(timer);
            }
        }
        
    }

    function buyDouble() {
        if (cannolis >= doublePrice) {
            setCannolis((current) => current - doublePrice);
            setDoubleClicks((current) => current + 1);
            setCPC((current) => current * 2);
            setDoublePrice((current) => current * 100);
        }
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
                    <div className="flex flex-col justify-between items-center w-[40%] h-[50%] text-[#FFFDE7] overflow-y-auto">
                        <div className="flex justify-between min-h-[25%] w-full border-[#FFFDE7] border-[1px] rounded-md">
                            <div className="flex flex-col justify-around w-[60%] pl-[2%]">
                                <p>{autoClickers} Autoclicks</p>
                                <p className="ml-[2%]">Each autoclick grants +1 cannolis per second.</p>
                            </div>
                            <div className="flex flex-col justify-around w-[60%] pl-[2%]">
                                <button onClick={buyAuto} className="text-[#FFFDE7] max-w-[85%] text-lg hover:border-[#FFFDE7] mr-[2%] bg-[#680C07] border-[2px] border-[#A8A9AD] py-[1px] px-[3px] rounded-md self-center">Buy 1 Autoclick</button>
                                <p className="self-center w-[70%] text-center">Price: {autoPrice} Cannoli</p>
                            </div>
                        </div>
                        <div className="flex justify-between min-h-[25%] w-full border-[#FFFDE7] border-[1px] rounded-md">
                            <div className="flex flex-col justify-around w-[60%] pl-[2%]">
                                <p>{doubleClicks} Double Clicks</p>
                                <p className="ml-[2%]">Each double click doubles your cannolis per click.</p>
                            </div>
                            <div className="flex flex-col justify-around w-[60%] pl-[2%]">
                                <button onClick={buyDouble} className="text-[#FFFDE7] max-w-[85%] text-lg hover:border-[#FFFDE7] mr-[2%] bg-[#680C07] border-[2px] border-[#A8A9AD] py-[1px] px-[3px] rounded-md self-center">Buy 1 Double Click</button>
                                <p className="self-center w-[70%] text-center">Price: {doublePrice} Cannoli</p>
                            </div>
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