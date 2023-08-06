'use client';
import React, { useState } from 'react';
import StoreMenu from './StoreMenu';
import BuildingList from './BuildingList';
import UpgradeList from './UpgradeList';

const StoreWindow = (props) => {
    const [visible, setVisible] = useState("buildings");

    function buildingsClick() {
        setVisible("buildings");
    }

    function upgradesClick() {
        setVisible("upgrades");
    }

    if (visible == "buildings") {
        return (
            <div className="flex flex-col w-full h-[70%] justify-between py-[1%] items-center">
                <BuildingList cannoli={props.cannoli} setCannoli={props.setCannoli} setCPS={props.setCPS} setCPC={props.setCPC} totalCannoli={props.totalCannoli}
                    buildings={props.buildings} setBuildings={props.setBuildings} />
                <StoreMenu buildingsClick={buildingsClick} upgradesClick={upgradesClick} />
            </div>
        )
    } else if (visible == "upgrades") {
        return (
            <div className="flex flex-col w-full h-[70%] justify-between py-[1%] items-center">
                <UpgradeList cannoli={props.cannoli} setCannoli={props.setCannoli} totalCannoli={props.totalCannoli} cps={props.cps}
                    setCPSMultiplier={props.setCPSMultiplier} setCPCMultiplier={props.setCPCMultiplier}
                    upgradesVisible={props.upgradesVisible} setUpgradesVisible={props.setUpgradesVisible} 
                    buildings={props.buildings} setBuildings={props.setBuildings} setCPS={props.setCPS} />
                <StoreMenu buildingsClick={buildingsClick} upgradesClick={upgradesClick} />
            </div>
        )
    }
}

export default StoreWindow;