'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import StoreWindow from './StoreWindow';
import ClickerHeader from './ClickerHeader';

const ContentView = (props) => {
    const [cannoli, setCannoli] = useState(0);
    const [totalCannoli, setTotalCannoli] = useState(0);
    const [cps, setCPS] = useState(0);
    const [cpc, setCPC] = useState(1);
    const [timer, setTimer] = useState(null);
    const [cpsMultiplier, setCPSMultiplier] = useState(1);
    const [cpcMultiplier, setCPCMultiplier] = useState(1);
    const [buildings, setBuildings] = useState({
        autoClickers: {
            count: 0,
            price: 1,
            cps: 1,
        },
        nonnas: {
            count: 0,
            price: 25,
            cps: 3,
        },
        stands: {
            count: 0,
            price: 100,
            cps: 5,
        },
        bakeries: {
            count: 0,
            price: 250,
            cps: 10,
        },
        doubleClicks: {
            count: 0,
            price: 100,
            cpc: 2,
        }
    });
    const [upgradesVisible, setUpgradesVisible] = useState({
        vanillaVisible: true,
        strawberryVisible: true,
        lemonVisible: true,
        mangoVisible: true,
        chocolateVisible: true,
        doubleClickersVisible: true,
        superNonnasVisible: true,
        mesVisible: true,
        msbVisible: true,
        best1Visible: true,
        best2Visible: true,
        best3Visible: true,
        cursor1Visible: true,
        cursor2Visible: true,
        cursor3Visible: true,
        cursor4Visible: true,
        cursor5Visible: true
    });

    useEffect(() => {
        if (timer != null) {
            clearInterval(timer);
        }
        if (cps != 0) {
            setTimer(setInterval(() => {
                setCannoli((current) => current + 1);
                setTotalCannoli((current) => current + 1);
            }, 1000 / (cps * cpsMultiplier)));
        }
    }, [cps]);

    function cannoliClick() {
        setCannoli((current) => current + Math.round(cpcMultiplier * cpc));
        setTotalCannoli((current) => current + Math.round(cpcMultiplier * cpc));
    }

    if (props.visible == "home") {
        return (
            <div className="flex flex-col md:flex-row w-[90%] h-[75%] justify-between items-center text-[#FFFDE7] overflow-y-auto md:overflow-y-visible">
                <div className="flex flex-col h-[80%] self-center justify-between w-full md:w-[45%] border-[#FFFDE7] border-[2px] overflow-y-auto rounded-lg p-[2%]">
                    <div>
                        <h1 className="text-3xl text-center md:text-4xl">Nathan Papa</h1>
                        <hr />
                    </div>
                    <p className="ml-[2%] mt-[2%]">
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
                    <p className="ml-[2%] mt-[4%]">
                        {`Email: nathanpapa35@gmail.com`}
                        <br />
                        {`Phone Number: (931) 303-2306`}
                    </p>
                </div>
                <div className="flex flex-col h-[50%] md:h-full w-full md:w-[45%] justify-around">
                    <div className="w-full md:w-[80%] h-[40%] flex flex-col justify-between border-[#FFFDE7] border-[2px] rounded-lg p-[2%] overflow-auto">
                        <div>
                            <h3 className="text-xl text-center">Python Minesweeper</h3>
                            <hr className="mb-[2%]" />
                        </div>
                        <p className="text-sm lg:text-md 2xl:text-lg self-start w-[85%] ml-[2%]">
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
                    <div className="w-full md:w-[80%] h-[40%] flex flex-col self-end justify-between border-[#FFFDE7] border-[2px] rounded-lg p-[2%] overflow-auto">
                        <div>
                            <h3 className="text-xl text-center">JavaFX Calculator</h3>
                            <hr className="mb-[2%]" />
                        </div>
                        <p className="text-sm lg:text-md 2xl:text-lg self-start w-[85%] ml-[2%]">
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
                <ClickerHeader cannoli={cannoli} cps={cps} cpsMultiplier={cpsMultiplier} cpc={cpc} cpcMultiplier={cpcMultiplier} />
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
        return (
            <div className="flex flex-col w-full h-[80%] justify-between items-center text-[#42403C]">
                <ClickerHeader cannoli={cannoli} cps={cps} cpsMultiplier={cpsMultiplier} cpc={cpc} cpcMultiplier={cpcMultiplier} />
                <StoreWindow cannoli={cannoli} setCannoli={setCannoli} cps={cps} setCPS={setCPS} setCPC={setCPC} setCPSMultiplier={setCPSMultiplier}
                    setCPCMultiplier={setCPCMultiplier} totalCannoli={totalCannoli} buildings={buildings} setBuildings={setBuildings}
                    upgradesVisible={upgradesVisible} setUpgradesVisible={setUpgradesVisible} />
            </div>
            );
    }
}

export default ContentView;