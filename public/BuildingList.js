'use client';
import Building from "./Building";
import React, { useState, useRef } from "react";

const BuildingList = (props) => {

    function buyAutoClicker() {
        if (props.cannoli >= props.buildings.autoClickers.price) {
            props.setCannoli((current) => current - props.buildings.autoClickers.price);
            props.setCPS((current) => current + props.buildings.autoClickers.cps);
            props.setBuildings({...props.buildings, 
                autoClickers: {
                    ...props.buildings.autoClickers, 
                    count: props.buildings.autoClickers.count + 1, 
                    price: props.buildings.autoClickers.price + props.buildings.autoClickers.count + Math.round(Math.pow(1.5, props.buildings.autoClickers.count + 1))
                }});
        }
    }

    function buyNonna() {
        if (props.cannoli >= props.buildings.nonnas.price) {
            props.setCannoli((current) => current - props.buildings.nonnas.price);
            props.setCPS((current) => current + props.buildings.nonnas.cps);
            props.setBuildings({...props.buildings, 
                nonnas: {
                    ...props.buildings.nonnas, 
                    count: props.buildings.nonnas.count + 1, 
                    price: props.buildings.nonnas.price + props.buildings.nonnas.count + Math.round(Math.pow(1.75, props.buildings.nonnas.count + 1))
                }});
        }
    }

    function buyStand() {
        if (props.cannoli >= props.buildings.stands.price) {
            props.setCannoli((current) => current - props.buildings.stands.price);
            props.setCPS((current) => current + props.buildings.stands.cps);
            props.setBuildings({...props.buildings, 
                stands: {
                    ...props.buildings.stands, 
                    count: props.buildings.stands.count + 1, 
                    price: props.buildings.stands.price + props.buildings.stands.count + Math.round(Math.pow(2, props.buildings.stands.count + 1))
                }});
        }
    }

    function buyBakery() {
        if (props.cannoli >= props.buildings.bakeries.price) {
            props.setCannoli((current) => current - props.buildings.bakeries.price);
            props.setCPS((current) => current + props.buildings.bakeries.cps);
            props.setBuildings({...props.buildings, 
                bakeries: {
                    ...props.buildings.bakeries, 
                    count: props.buildings.bakeries.count + 1, 
                    price: props.buildings.bakeries.price + props.buildings.bakeries.count + Math.round(Math.pow(2.25, props.buildings.bakeries.count + 1))
                }});
        }
    }

    function buyDoubleClick() {
        if (props.cannoli >= props.buildings.doubleClicks.price) {
            props.setCannoli((current) => current - props.buildings.doubleClicks.price);
            props.setCPC((current) => current * 2);
            props.setBuildings({...props.buildings, 
                doubleClicks: {
                    ...props.buildings.doubleClicks, 
                    count: props.buildings.doubleClicks.count + 1, 
                    price: props.buildings.doubleClicks.price * 10
                }});
        }
    }

    return (
        <div className="flex flex-col justify-between items-center min-w-[50%] max-w-full md:max-w-[70%] h-[75%] text-[#FFFDE7] overflow-y-auto border-[#FFFDE7] p-[1%] border-[2px] rounded-lg">
            <Building type="cps" building={props.buildings.autoClickers} buyBuilding={buyAutoClicker} cannoli={props.cannoli} setCannoli={props.setCannoli} 
                setCPS={props.setCPS} name="Auto Clicker" description="Each auto clicker clicks the cannoli once every second." />
            {props.totalCannoli >= 50 ? <Building type="cps" building={props.buildings.nonnas} buyBuilding={buyNonna} cannoli={props.cannoli} setCannoli={props.setCannoli}
                setCPS={props.setCPS} name="Nonna" description="Hire a nonna to bake cannoli." /> : <Building type="locked" unlock={50} />}
            {props.totalCannoli >= 250 ? <Building type="cps" building={props.buildings.stands} buyBuilding={buyStand}cannoli={props.cannoli} setCannoli={props.setCannoli}
                setCPS={props.setCPS} name="Stand" description="Send a cannoli stand to the streets to tempt tourists." /> : <Building type="locked" unlock={250} />}
            {props.totalCannoli >= 1500 ? <Building type="cps" building={props.buildings.bakeries} buyBuilding={buyBakery} cannoli={props.cannoli} setCannoli={props.setCannoli}
                setCPS={props.setCPS} name="Bakery" description="Each bakery sells lots of cannoli." /> : <Building type="locked" unlock={1500} />}
            {props.totalCannoli >= 1000 ? <Building type="cpc" cpcModifier={2} building={props.buildings.doubleClicks} buyBuilding={buyDoubleClick} cannoli={props.cannoli} setCannoli={props.setCannoli}
                setCPC={props.setCPC} name="Double Click" description="Each double click doubles your cannoli per click." /> : <Building type="locked" unlock={1000} />}
        </div>
    )
}

export default BuildingList;