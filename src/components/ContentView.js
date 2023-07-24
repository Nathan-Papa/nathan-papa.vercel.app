'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import Building from './Building'
import Upgrade from './Upgrade'

const ContentView = (props) => {
    const [cannoli, setCannoli] = useState(0);
    const [totalCannoli, setTotalCannoli] = useState(0);
    const [cps, setCPS] = useState(0);
    const [cpc, setCPC] = useState(1);
    const [autoPrice, setAutoPrice] = useState(1);
    const [nonnaPrice, setNonnaPrice] = useState(25);
    const [standPrice, setStandPrice] = useState(100);
    const [bakeryPrice, setBakeryPrice] = useState(250);
    const [doublePrice, setDoublePrice] = useState(100);
    const [autoClickers, setAutoClickers] = useState(0);
    const [nonnas, setNonnas] = useState(0);
    const [stands, setStands] = useState(0);
    const [bakeries, setBakeries] = useState(0);
    const [doubleClicks, setDoubleClicks] = useState(0);
    const [storeWindow, setStoreWindow] = useState("buildings");
    const [timer, setTimer] = useState(null);
    const [cpsMultiplier, setCPSMultiplier] = useState(1);
    const [cpcMultiplier, setCPCMultiplier] = useState(1);
    const [autoClickCPS, setAutoClickCPS] = useState(1);
    const [nonnaCPS, setNonnaCPS] = useState(3);
    const [standCPS, setStandCPS] = useState(5);
    const [bakeryCPS, setBakeryCPS] = useState(10);
    const [vanillaVisible, setVanillaVisible] = useState(true);
    const [strawberryVisible, setStrawberryVisible] = useState(true);
    const [lemonVisible, setLemonVisible] = useState(true);
    const [mangoVisible, setMangoVisible] = useState(true);
    const [chocolateVisible, setChocolateVisible] = useState(true);
    const [doubleClickersVisible, setDoubleClickersVisible] = useState(true);
    const [superNonnasVisible, setSuperNonnasVisible] = useState(true);
    const [mesVisible, setMESVisible] = useState(true);
    const [msbVisible, setMSBVisible] = useState(true);
    const [best1Visible, setBest1Visible] = useState(true);
    const [best2Visible, setBest2Visible] = useState(true);
    const [best3Visible, setBest3Visible] = useState(true);
    const [cursor1Visible, setCursor1Visible] = useState(true);
    const [cursor2Visible, setCursor2Visible] = useState(true);
    const [cursor3Visible, setCursor3Visible] = useState(true);
    const [cursor4Visible, setCursor4Visible] = useState(true);
    const [cursor5Visible, setCursor5Visible] = useState(true);

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

    const CannoliCount = (props) => {
        return (<p className="text-[#FFFDE7] text-center text-xl">{props.cannoli} cannoli</p>);
    }

    const AutoCannoliCount = (props) => {
        return (<p className="text-[#FFFDE7] text-center text-xl">{Math.round(props.cps * props.cpsMultiplier)} cannoli per second</p>);
    }

    const CannoliClickCount = (props) => {
        return (<p className="text-[#FFFDE7] text-center text-xl">{Math.round(props.cpc * props.cpcMultiplier)} cannoli per click</p>);
    }

    function cannoliClick() {
        setCannoli((current) => current + (cpcMultiplier * cpc));
        setTotalCannoli((current) => current + (cpcMultiplier * cpc));
    }

    function buildingsClick() {
        setStoreWindow("buildings");
    }

    function upgradesClick() {
        setStoreWindow("upgrades");
    }

    function statsClick() {
        setStoreWindow("stats");
    }

    function changeAutoPrice() {
        setAutoPrice((current) => current + autoClickers + Math.round(Math.pow(1.5, autoClickers + 1)));
    }

    function changeNonnaPrice() {
        setNonnaPrice((current) => current + nonnas + Math.round(Math.pow(1.75, nonnas + 1)));
    }

    function changeStandPrice() {
        setStandPrice((current) => current + stands + Math.round(Math.pow(2, stands + 1)));
    }

    function changeBakeryPrice() {
        setBakeryPrice((current) => current + bakeries + Math.round(Math.pow(2.5, bakeries + 1)));
    }

    function changeDoublePrice() {
        setDoublePrice((current) => current * 10);
    }

    if (props.visible == "home") {
        return (
            <div className="flex w-[90%] h-[75%] justify-between items-center text-[#FFFDE7]">
                <div className="flex flex-col h-[80%] self-center justify-between w-[45%] border-[#FFFDE7] border-[2px] overflow-y-auto rounded-lg p-[2%]">
                    <h1 className="text-5xl">Nathan Papa</h1>
                    <hr className="my-[2%]"/>
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
                <div className="flex flex-col h-full w-[40%] justify-around">
                    <div className="w-[80%] h-[40%] flex flex-col justify-between border-[#FFFDE7] border-[2px] rounded-lg p-[2%] overflow-auto">
                        <h3 className="text-xl self-center">Python Minesweeper</h3>
                        <hr className="mb-[2%] mt-[1%]"/>
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
                        <hr className="mb-[2%]"/>
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
                    <h1 className="text-3xl md:text-5xl lg:text-5xl xl:text-5xl text-center text-[#FFFDE7]">Cannoli Clicker</h1>
                    <div className="h-[45%] flex flex-col justify-between">
                        <CannoliCount cannoli={cannoli} />
                        <AutoCannoliCount cps={cps} cpsMultiplier={cpsMultiplier} />
                        <CannoliClickCount cpc={cpc} cpcMultiplier={cpcMultiplier} />
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
                        <h1 className="text-3xl md:text-5xl lg:text-5xl xl:text-5xl text-center text-[#FFFDE7]">Cannoli Clicker</h1>
                        <div className="h-[45%] flex flex-col justify-between">
                            <CannoliCount cannoli={cannoli} />
                            <AutoCannoliCount cps={cps} cpsMultiplier={cpsMultiplier} />
                            <CannoliClickCount cpc={cpc} cpcMultiplier={cpcMultiplier} />
                        </div>
                    </div>
                    <div className="flex flex-col justify-between items-center min-w-[50%] max-w-[70%] h-[60%] text-[#FFFDE7] overflow-y-auto border-[#FFFDE7] p-[1%] border-[2px] rounded-lg">
                        <Building type="cps" count={autoClickers} setCount={setAutoClickers} cannoli={cannoli} setCannoli={setCannoli} 
                            setCPS={setCPS} name="Auto Clicker" description="Each auto clicker clicks the cannoli once every second."
                            price={autoPrice} setPrice={changeAutoPrice} cpsModifier={autoClickCPS} />
                        {totalCannoli >= 50 ? <Building type="cps" count={nonnas} setCount={setNonnas} cannoli={cannoli} setCannoli={setCannoli}
                            setCPS={setCPS} name="Nonna" description="Hire a nonna to bake cannoli."
                            price={nonnaPrice} setPrice={changeNonnaPrice} cpsModifier={nonnaCPS} /> : <Building type="locked" unlock={50} />}
                        {totalCannoli >= 250 ? <Building type="cps" count={stands} setCount={setStands} cannoli={cannoli} setCannoli={setCannoli}
                            setCPS={setCPS} name="Stand" description="Send a cannoli stand to the streets to tempt tourists."
                            price={standPrice} setPrice={changeStandPrice} cpsModifier={standCPS} /> : <Building type="locked" unlock={250} />}
                        {totalCannoli >= 1500 ? <Building type="cps" count={bakeries} setCount={setBakeries} cannoli={cannoli} setCannoli={setCannoli}
                            setCPS={setCPS} name="Bakery" description="Each bakery sells lots of cannoli."
                            price={bakeryPrice} setPrice={changeBakeryPrice} cpsModifier={bakeryCPS} /> : <Building type="locked" unlock={1500} />}
                        {totalCannoli >= 1000 ? <Building type="cpc" count={doubleClicks} setCount={setDoubleClicks} cannoli={cannoli} setCannoli={setCannoli}
                            setCPC={setCPC} name="Double Click" description="Each double click doubles your cannoli per click."
                            price={doublePrice} setPrice={changeDoublePrice} cpcModifier={2} /> : <Building type="locked" unlock={1000} />}
                    </div>
                    <div className="flex min-w-[50%] max-w-[70%] justify-evenly items-center text-[#42403C] border-[#FFFDE7] p-[1%] border-[2px] rounded-lg">
                        <button onClick={buildingsClick} className="text-[#FFFDE7] text-lg overflow-auto max-w-[20%] w-[17%] hover:border-[#FFFDE7] bg-[#680C07] border-[2px] border-[#A8A9AD] py-[1px] px-[3px] rounded-md">Buildings</button>
                        <button onClick={upgradesClick} className="text-[#FFFDE7] text-lg overflow-auto max-w-[20%] w-[17%] hover:border-[#FFFDE7] bg-[#680C07] border-[2px] border-[#A8A9AD] py-[1px] px-[3px] rounded-md">Upgrades</button>
                        <button onClick={statsClick} className="text-[#FFFDE7] text-lg overflow-auto hover:border-[#FFFDE7] max-w-[20%] w-[17%] bg-[#680C07] border-[2px] border-[#A8A9AD] py-[1px] px-[3px] rounded-md">Stats</button>
                    </div>
                </div>
            )
        } else if (storeWindow == "upgrades") {
            return (
                <div className="flex flex-col w-full h-[80%] justify-between items-center">
                    <div className="h-[25%] flex flex-col justify-around">
                        <h1 className="text-3xl md:text-5xl lg:text-5xl xl:text-5xl text-center text-[#FFFDE7]">Cannoli Clicker</h1>
                        <div className="h-[45%] flex flex-col justify-between">
                            <CannoliCount cannoli={cannoli} />
                            <AutoCannoliCount cps={cps} cpsMultiplier={cpsMultiplier} />
                            <CannoliClickCount cpc={cpc} cpcMultiplier={cpcMultiplier} />
                        </div>
                    </div>
                    <div className="flex flex-col justify-between items-center w-[50%] h-[60%] text-[#FFFDE7] overflow-y-auto border-[#FFFDE7] p-[1%] border-[2px] rounded-lg">
                        {totalCannoli >= 125 ? 
                            vanillaVisible && <Upgrade type="cps" cannoli={cannoli} setCannoli={setCannoli} setCPSMultiplier={setCPSMultiplier}
                            name="Vanilla Cannoli" description="Your taskforce can now bake vanilla cannoli, increasing your cannoli per second by 2%."
                            price={100} cpsMultiplier={.02} visible={vanillaVisible} setVisible={setVanillaVisible} /> :
                            <Upgrade type="locked" unlock={125}/>}
                        {totalCannoli >= 175 ?
                            strawberryVisible && <Upgrade type="cps" cannoli={cannoli} setCannoli={setCannoli} setCPSMultiplier={setCPSMultiplier}
                            name="Strawberry Cannoli" description="Your taskforce can now bake strawberry cannoli, increasing your cannoli per second by 2%."
                            price={150} cpsMultiplier={.02} visible={strawberryVisible} setVisible={setStrawberryVisible} /> :
                            <Upgrade type="locked" unlock={175}/>}
                        {totalCannoli >= 300 ?
                            cursor1Visible && <Upgrade type="cpc" cannoli={cannoli} setCannoli={setCannoli} setCPCMultiplier={setCPCMultiplier}
                            name="Iron Cursor" description="Your clicks are now fortified by iron, producing a 2% increase in cannoli per click."
                            price={150} cpcMultiplier={.02} visible={cursor1Visible} setVisible={setCursor1Visible} /> :
                            <Upgrade type="locked" unlock={300}/>}
                        {totalCannoli >= 500 ?
                            doubleClickersVisible && <Upgrade type="boost" cannoli={cannoli} setCannoli={setCannoli} setCPS={setCPS} count={autoClickers}
                            name="Double Auto Clickers" description="Your auto clickers now click twice a second."
                            price={200} cpsModifier={autoClickCPS} setCPSModifier={setAutoClickCPS} cpsMultiplier={2}
                            visible={doubleClickersVisible} setVisible={setDoubleClickersVisible} /> :
                            <Upgrade type="locked" unlock={500}/>}
                        {totalCannoli >= 750 ?
                            cursor2Visible && <Upgrade type="cpc" cannoli={cannoli} setCannoli={setCannoli} setCPCMultiplier={setCPCMultiplier}
                            name="Steel Cursor" description="Your clicks are now fortified by steel, producing a 3% increase in cannoli per click."
                            price={300} cpcMultiplier={.03} visible={cursor2Visible} setVisible={setCursor2Visible} /> :
                            <Upgrade type="locked" unlock={750}/>}
                        {totalCannoli >= 1500 ?
                            superNonnasVisible && <Upgrade type="boost" cannoli={cannoli} setCannoli={setCannoli} setCPS={setCPS} count={nonnas}
                            name="Super Nonnas" description="Your nonnas bake twice as fast as before."
                            price={500} cpsModifier={nonnaCPS} setCPSModifier={setNonnaCPS} cpsMultiplier={2} visible={superNonnasVisible} setVisible={setSuperNonnasVisible} /> :
                            <Upgrade type="locked" unlock={1500}/>}
                        {totalCannoli >= 2000 ?
                            lemonVisible && <Upgrade type="cps" cannoli={cannoli} setCannoli={setCannoli} setCPSMultiplier={setCPSMultiplier}
                            name="Lemon Cannoli" description="Your taskforce can now bake lemon cannoli, increasing your cannoli per second by 5%."
                            price={1000} cpsMultiplier={.05} visible={lemonVisible} setVisible={setLemonVisible} /> :
                            <Upgrade type="locked" unlock={2000}/>}
                        {totalCannoli >= 2000 ?
                            cursor3Visible && <Upgrade type="cpc" cannoli={cannoli} setCannoli={setCannoli} setCPCMultiplier={setCPCMultiplier}
                            name="Gold Cursor" description="Your clicks are fortified by gold, producing a 3% increase in cannoli per click."
                            price={750} cpcMultiplier={.03} visible={cursor3Visible} setVisible={setCursor3Visible} /> :
                            <Upgrade type="locked" unlock={2000}/>}
                        {totalCannoli >= 2500 ?
                            mesVisible && <Upgrade type="boost" cannoli={cannoli} setCannoli={setCannoli} setCPS={setCPS} count={stands}
                            name="More Enticing Stands" description="Your stands attract twice the tourists."
                            price={1000} cpsModifier={standCPS} setCPSModifier={setStandCPS} cpsMultiplier={2} visible={mesVisible} setVisible={setMESVisible} /> :
                            <Upgrade type="locked" unlock={2500}/>}
                        {totalCannoli >= 2500 ?
                            best1Visible && <Upgrade type="cpc" cannoli={cannoli} setCannoli={setCannoli} setCPCMultiplier={setCPCMultiplier}
                            name="Best in Town" description="Your cannoli are named the best in town, causing your 
                            clicks to be boosted by 5% of your cannoli per second."
                            price={1000} cpcMultiplier={.05 * cps} visible={best1Visible} setVisible={setBest1Visible} /> :
                            <Upgrade type="locked" unlock={2500}/>}
                        {totalCannoli >= 3000 ?
                            mangoVisible && <Upgrade type="cps" cannoli={cannoli} setCannoli={setCannoli} setCPSMultiplier={setCPSMultiplier}
                            name="Mango Cannoli" description="Your taskforce can now bake mango cannoli, increasing your cannoli per second by 5%."
                            price={1500} cpsMultiplier={.05} visible={mangoVisible} setVisible={setMangoVisible} /> :
                            <Upgrade type="locked" unlock={3000}/>}
                        {totalCannoli >= 5000 ?
                            cursor4Visible && <Upgrade type="cpc" cannoli={cannoli} setCannoli={setCannoli} setCPCMultiplier={setCPCMultiplier}
                            name="Platinum Cursor" description="Your clicks are fortified by platinum, producing a 5% increase in cannoli per click."
                            price={1750} cpcMultiplier={.05} visible={cursor4Visible} setVisible={setCursor4Visible} /> :
                            <Upgrade type="locked" unlock={5000}/>}
                        {totalCannoli >= 10000 ?
                            msbVisible && <Upgrade type="boost" cannoli={cannoli} setCannoli={setCannoli} setCPS={setCPS} count={bakeries}
                            name="Michelin Star Bakeries" description="Your bakeries now sell twice as many cannolis."
                            price={5000} cpsModifier={bakeryCPS} setCPSModifier={setBakeryCPS} cpsMultiplier={2} visible={msbVisible} setVisible={setMSBVisible} /> :
                            <Upgrade type="locked" unlock={10000}/>}
                        {totalCannoli >= 10000 ?
                            best2Visible && <Upgrade type="cpc" cannoli={cannoli} setCannoli={setCannoli} setCPCMultiplier={setCPCMultiplier}
                            name="Best in Italy" description="Your cannoli are granted the award of best in Italy, causing 
                            your clicks to be boosted by 5% of your cannoli per second."
                            price={5000} cpcMultiplier={.05 * cps} visible={best2Visible} setVisible={setBest2Visible} /> :
                            <Upgrade type="locked" unlock={10000}/>}
                        {totalCannoli >= 12500 ?
                            cursor5Visible && <Upgrade type="cpc" cannoli={cannoli} setCannoli={setCannoli} setCPCMultiplier={setCPCMultiplier}
                            name="Diamond Cursor" description="Your clicks are fortified by diamond, producing a 10% increase in cannoli per click."
                            price={5000} cpcMultiplier={.1} visible={cursor5Visible} setVisible={setCursor5Visible} /> :
                            <Upgrade type="locked" unlock={12500}/>}
                        {totalCannoli >= 15000 ?
                            chocolateVisible && <Upgrade type="cps" cannoli={cannoli} setCannoli={setCannoli} setCPSMultiplier={setCPSMultiplier}
                            name="Chocolate Cannoli" description="Your taskforce can now bake chocolate cannoli, increasing your cannoli per second by 10%."
                            price={5000} cpsMultiplier={.1} visible={chocolateVisible} setVisible={setChocolateVisible} /> :
                            <Upgrade type="locked" unlock={15000}/>}
                        {totalCannoli >= 30000 ?
                            best3Visible && <Upgrade type="cpc" cannoli={cannoli} setCannoli={setCannoli} setCPCMultiplier={setCPCMultiplier}
                            name="Best in the World" description="Your cannoli are famous for being the best in the world. 
                            Your clicks are boosted by 10% of your cannoli per second."
                            price={15000} cpcMultiplier={.1 * cps} visible={best3Visible} setVisible={setBest3Visible} /> :
                            <Upgrade type="locked" unlock={30000}/>}
                    </div>
                    <div className="flex w-[50%] justify-evenly items-center text-[#42403C] border-[#FFFDE7] p-[1%] border-[2px] rounded-lg">
                        <button onClick={buildingsClick} className="text-[#FFFDE7] text-lg max-w-[20%] w-[17%] hover:border-[#FFFDE7] bg-[#680C07] border-[2px] border-[#A8A9AD] py-[1px] px-[3px] rounded-md">Buildings</button>
                        <button onClick={upgradesClick} className="text-[#FFFDE7] text-lg max-w-[20%] w-[17%]hover:border-[#FFFDE7] bg-[#680C07] border-[2px] border-[#A8A9AD] py-[1px] px-[3px] rounded-md">Upgrades</button>
                        <button onClick={statsClick} className="text-[#FFFDE7] text-lg hover:border-[#FFFDE7] max-w-[20%] w-[17%] bg-[#680C07] border-[2px] border-[#A8A9AD] py-[1px] px-[3px] rounded-md">Stats</button>
                    </div>
                </div>
            )
        } else if (storeWindow == "stats") {
            return (
                <div className="flex flex-col w-full h-[80%] justify-between items-center">
                    <div className="h-[25%] flex flex-col justify-around">
                        <h1 className="text-3xl md:text-5xl lg:text-5xl xl:text-5xl text-center text-[#FFFDE7]">Cannoli Clicker</h1>
                        <div className="h-[45%] flex flex-col justify-between">
                            <CannoliCount cannoli={cannoli} />
                            <AutoCannoliCount cps={cps} cpsMultiplier={cpsMultiplier} />
                            <CannoliClickCount cpc={cpc} cpcMultiplier={cpcMultiplier} />
                        </div>
                    </div>
                    <div className="flex w-[50%] justify-evenly items-center text-[#42403C] border-[#FFFDE7] p-[1%] border-[2px] rounded-lg">
                        <button onClick={buildingsClick} className="text-[#FFFDE7] text-lg max-w-[20%] w-[17%] hover:border-[#FFFDE7] bg-[#680C07] border-[2px] border-[#A8A9AD] py-[1px] px-[3px] rounded-md">Buildings</button>
                        <button onClick={upgradesClick} className="text-[#FFFDE7] text-lg max-w-[20%] w-[17%]hover:border-[#FFFDE7] bg-[#680C07] border-[2px] border-[#A8A9AD] py-[1px] px-[3px] rounded-md">Upgrades</button>
                        <button onClick={statsClick} className="text-[#FFFDE7] text-lg hover:border-[#FFFDE7] max-w-[20%] w-[17%] bg-[#680C07] border-[2px] border-[#A8A9AD] py-[1px] px-[3px] rounded-md">Stats</button>
                    </div>
                </div>
            )
        }
    }
}

export default ContentView;