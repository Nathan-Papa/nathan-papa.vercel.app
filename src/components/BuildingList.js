'use client';
import Building from "./Building";
import React, {useState} from "react";

const BuildingList = (props) => {
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
    const [autoClickCPS, setAutoClickCPS] = useState(1);
    const [nonnaCPS, setNonnaCPS] = useState(3);
    const [standCPS, setStandCPS] = useState(5);
    const [bakeryCPS, setBakeryCPS] = useState(10);

    return (
        <div className="flex flex-col justify-between items-center min-w-[50%] max-w-[70%] h-[60%] text-[#FFFDE7] overflow-y-auto border-[#FFFDE7] p-[1%] border-[2px] rounded-lg">
            <Building type="cps" count={autoClickers} setCount={setAutoClickers} cannoli={props.cannoli} setCannoli={props.setCannoli} 
                setCPS={props.setCPS} name="Auto Clicker" description="Each auto clicker clicks the cannoli once every second."
                price={autoPrice} setPrice={changeAutoPrice} cpsModifier={autoClickCPS} />
            {props.totalCannoli >= 50 ? <Building type="cps" count={nonnas} setCount={setNonnas} cannoli={props.cannoli} setCannoli={props.setCannoli}
                setCPS={props.setCPS} name="Nonna" description="Hire a nonna to bake cannoli."
                price={nonnaPrice} setPrice={changeNonnaPrice} cpsModifier={nonnaCPS} /> : <Building type="locked" unlock={50} />}
            {props.totalCannoli >= 250 ? <Building type="cps" count={stands} setCount={setStands} cannoli={props.cannoli} setCannoli={props.setCannoli}
                setCPS={props.setCPS} name="Stand" description="Send a cannoli stand to the streets to tempt tourists."
                price={standPrice} setPrice={changeStandPrice} cpsModifier={standCPS} /> : <Building type="locked" unlock={250} />}
            {props.totalCannoli >= 1500 ? <Building type="cps" count={bakeries} setCount={setBakeries} cannoli={props.cannoli} setCannoli={props.setCannoli}
                setCPS={props.setCPS} name="Bakery" description="Each bakery sells lots of cannoli."
                price={bakeryPrice} setPrice={changeBakeryPrice} cpsModifier={bakeryCPS} /> : <Building type="locked" unlock={1500} />}
            {props.totalCannoli >= 1000 ? <Building type="cpc" count={doubleClicks} setCount={setDoubleClicks} cannoli={props.cannoli} setCannoli={props.setCannoli}
                setCPC={props.setCPC} name="Double Click" description="Each double click doubles your cannoli per click."
                price={doublePrice} setPrice={changeDoublePrice} cpcModifier={2} /> : <Building type="locked" unlock={1000} />}
        </div>
    )
}

export default BuildingList;