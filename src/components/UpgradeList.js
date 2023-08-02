'use client';
import React, {useState} from 'react';
import Upgrade from './Upgrade';

const UpgradeList = (props) => {
    
    function buyDoubleClickers() {
        if (props.cannoli >= 200) {
            props.setCannoli((current) => current - 200);
            props.setCPS((current) => current + (props.buildings.autoClickers.count * props.buildings.autoClickers.cps));
            props.setBuildings({...props.buildings,
                autoClickers: {
                    ...props.buildings.autoClickers,
                    cps: props.buildings.autoClickers.cps * 2,
                }
            })
            props.setUpgradesVisible({...props.upgradesVisible, doubleClickersVisible: false});
        }
    }

    function buySuperNonnas() {
        if (props.cannoli >= 500) {
            props.setCannoli((current) => current - 500);
            props.setCPS((current) => current + (props.buildings.nonnas.count * props.buildings.nonnas.cps));
            props.setBuildings({...props.buildings,
                nonnas: {
                    ...props.buildings.nonnas,
                    cps: props.buildings.nonnas.cps * 2,
                }
            })
            props.setUpgradesVisible({...props.upgradesVisible, superNonnasVisible: false});
        }
    }

    function buyMES() {
        if (props.cannoli >= 1000) {
            props.setCannoli((current) => current - 1000);
            props.setCPS((current) => current + (props.buildings.stands.count * props.buildings.stands.cps));
            props.setBuildings({...props.buildings,
                stands: {
                    ...props.buildings.stands,
                    cps: props.buildings.stands.cps * 2,
                }
            })
            props.setUpgradesVisible({...props.upgradesVisible, mesVisible: false});
        }
    }

    function buyMSB() {
        if (props.cannoli >= 5000) {
            props.setCannoli((current) => current - 5000);
            props.setCPS((current) => current + (props.buildings.bakeries.count * props.buildings.bakeries.cps));
            props.setBuildings({...props.buildings,
                bakeries: {
                    ...props.buildings.bakeries,
                    cps: props.buildings.bakeries.cps * 2,
                }
            })
            props.setUpgradesVisible({...props.upgradesVisible, msbVisible: false});
        }
    }

    return (
        <div className="flex flex-col justify-between items-center min-w-[50%] max-w-[70%] h-[75%] text-[#FFFDE7] overflow-y-auto border-[#FFFDE7] p-[1%] border-[2px] rounded-lg">
            {props.totalCannoli >= 125 ? 
                props.upgradesVisible.vanillaVisible && <Upgrade type="cps" cannoli={props.cannoli} setCannoli={props.setCannoli} setCPSMultiplier={props.setCPSMultiplier}
                name="Vanilla Cannoli" description="Your taskforce can now bake vanilla cannoli, increasing your cannoli per second by 2%."
                price={100} cpsMultiplier={.02} visible={props.upgradesVisible.vanillaVisible} setVisible={() => {props.setUpgradesVisible({...props.upgradesVisible, vanillaVisible: false})}} /> :
                <Upgrade type="locked" unlock={125}/>}
            {props.totalCannoli >= 175 ?
                props.upgradesVisible.strawberryVisible && <Upgrade type="cps" cannoli={props.cannoli} setCannoli={props.setCannoli} setCPSMultiplier={props.setCPSMultiplier}
                name="Strawberry Cannoli" description="Your taskforce can now bake strawberry cannoli, increasing your cannoli per second by 2%."
                price={150} cpsMultiplier={.02} visible={props.upgradesVisible.strawberryVisible} setVisible={() => {props.setUpgradesVisible({...props.upgradesVisible, strawberryVisible: false})}} /> :
                <Upgrade type="locked" unlock={175}/>}
            {props.totalCannoli >= 300 ?
                props.upgradesVisible.cursor1Visible && <Upgrade type="cpc" cannoli={props.cannoli} setCannoli={props.setCannoli} setCPCMultiplier={props.setCPCMultiplier}
                name="Iron Cursor" description="Your clicks are now fortified by iron, producing a 2% increase in cannoli per click."
                price={150} cpcMultiplier={.02} visible={props.upgradesVisible.cursor1Visible} setVisible={() => {props.setUpgradesVisible({...props.upgradesVisible, cursor1Visible: false})}} /> :
                <Upgrade type="locked" unlock={300}/>}
            {props.totalCannoli >= 500 ?
                props.upgradesVisible.doubleClickersVisible && <Upgrade type="boost" name="Double Auto Clickers" description="Your auto clickers now click twice a second."
                buyUpgrade={buyDoubleClickers} price={200} visible={props.upgradesVisible.doubleClickersVisible} /> :
                <Upgrade type="locked" unlock={500}/>}
            {props.totalCannoli >= 750 ?
                props.upgradesVisible.cursor2Visible && <Upgrade type="cpc" cannoli={props.cannoli} setCannoli={props.setCannoli} setCPCMultiplier={props.setCPCMultiplier}
                name="Steel Cursor" description="Your clicks are now fortified by steel, producing a 3% increase in cannoli per click."
                price={300} cpcMultiplier={.03} visible={props.upgradesVisible.cursor2Visible} setVisible={() => {props.setUpgradesVisible({...props.upgradesVisible, cursor2Visible: false})}} /> :
                <Upgrade type="locked" unlock={750}/>}
            {props.totalCannoli >= 1500 ?
                props.upgradesVisible.superNonnasVisible && <Upgrade type="boost" name="Super Nonnas" description="Your nonnas bake twice as fast as before."
                buyUpgrade={buySuperNonnas} price={500} visible={props.upgradesVisible.superNonnasVisible}/> :
                <Upgrade type="locked" unlock={1500}/>}
            {props.totalCannoli >= 2000 ?
                props.upgradesVisible.lemonVisible && <Upgrade type="cps" cannoli={props.cannoli} setCannoli={props.setCannoli} setCPSMultiplier={props.setCPSMultiplier}
                name="Lemon Cannoli" description="Your taskforce can now bake lemon cannoli, increasing your cannoli per second by 5%."
                price={1000} cpsMultiplier={.05} visible={props.upgradesVisible.lemonVisible} setVisible={() => {props.setUpgradesVisible({...props.upgradesVisible, lemonVisible: false})}} /> :
                <Upgrade type="locked" unlock={2000}/>}
            {props.totalCannoli >= 2000 ?
                props.upgradesVisible.cursor3Visible && <Upgrade type="cpc" cannoli={props.cannoli} setCannoli={props.setCannoli} setCPCMultiplier={props.setCPCMultiplier}
                name="Gold Cursor" description="Your clicks are fortified by gold, producing a 3% increase in cannoli per click."
                price={750} cpcMultiplier={.03} visible={props.upgradesVisible.cursor3Visible} setVisible={() => {props.setUpgradesVisible({...props.upgradesVisible, cursor3Visible: false})}} /> :
                <Upgrade type="locked" unlock={2000}/>}
            {props.totalCannoli >= 2500 ?
                props.upgradesVisible.mesVisible && <Upgrade type="boost" name="More Enticing Stands" description="Your stands attract twice the tourists."
                buyBuilding={buyMES} price={1000} visible={props.upgradesVisible.mesVisible}/> :
                <Upgrade type="locked" unlock={2500}/>}
            {props.totalCannoli >= 2500 ?
                props.upgradesVisible.best1Visible && <Upgrade type="cpc" cannoli={props.cannoli} setCannoli={props.setCannoli} setCPCMultiplier={props.setCPCMultiplier}
                name="Best in Town" description="Your cannoli are named the best in town, causing your 
                clicks to be boosted by 5% of your cannoli per second."
                price={1000} cpcMultiplier={.05 * props.cps} visible={props.upgradesVisible.best1Visible} setVisible={() => {props.setUpgradesVisible({...props.upgradesVisible, best1Visible: false})}} /> :
                <Upgrade type="locked" unlock={2500}/>}
            {props.totalCannoli >= 3000 ?
                props.upgradesVisible.mangoVisible && <Upgrade type="cps" cannoli={props.cannoli} setCannoli={props.setCannoli} setCPSMultiplier={props.setCPSMultiplier}
                name="Mango Cannoli" description="Your taskforce can now bake mango cannoli, increasing your cannoli per second by 5%."
                price={1500} cpsMultiplier={.05} visible={props.upgradesVisible.mangoVisible} setVisible={() => {props.setUpgradesVisible({...props.upgradesVisible, mangoVisible: false})}} /> :
                <Upgrade type="locked" unlock={3000}/>}
            {props.totalCannoli >= 5000 ?
                props.upgradesVisible.cursor4Visible && <Upgrade type="cpc" cannoli={props.cannoli} setCannoli={props.setCannoli} setCPCMultiplier={props.setCPCMultiplier}
                name="Platinum Cursor" description="Your clicks are fortified by platinum, producing a 5% increase in cannoli per click."
                price={1750} cpcMultiplier={.05} visible={props.upgradesVisible.cursor4Visible} setVisible={() => {props.setUpgradesVisible({...props.upgradesVisible, cursor4Visible: false})}} /> :
                <Upgrade type="locked" unlock={5000}/>}
            {props.totalCannoli >= 10000 ?
                props.upgradesVisible.msbVisible && <Upgrade type="boost" name="Michelin Star Bakeries" description="Your bakeries now sell twice as many cannolis."
                price={5000} buyBuilding={buyMSB} visible={props.upgradesVisible.msbVisible}/> :
                <Upgrade type="locked" unlock={10000}/>}
            {props.totalCannoli >= 10000 ?
                props.upgradesVisible.best2Visible && <Upgrade type="cpc" cannoli={props.cannoli} setCannoli={props.setCannoli} setCPCMultiplier={props.setCPCMultiplier}
                name="Best in Italy" description="Your cannoli are granted the award of best in Italy, causing 
                your clicks to be boosted by 5% of your cannoli per second."
                price={5000} cpcMultiplier={.05 * props.cps} visible={props.upgradesVisible.best2Visible} setVisible={() => {props.setUpgradesVisible({...props.upgradesVisible, best2Visible: false})}} /> :
                <Upgrade type="locked" unlock={10000}/>}
            {props.totalCannoli >= 12500 ?
                props.cursor5Visible && <Upgrade type="cpc" cannoli={props.cannoli} setCannoli={props.setCannoli} setCPCMultiplier={props.setCPCMultiplier}
                name="Diamond Cursor" description="Your clicks are fortified by diamond, producing a 10% increase in cannoli per click."
                price={5000} cpcMultiplier={.1} visible={props.upgradesVisible.cursor5Visible} setVisible={() => {props.setUpgradesVisible({...props.upgradesVisible, cursor5Visible: false})}} /> :
                <Upgrade type="locked" unlock={12500}/>}
            {props.totalCannoli >= 15000 ?
                props.upgradesVisible.chocolateVisible && <Upgrade type="cps" cannoli={props.cannoli} setCannoli={props.setCannoli} setCPSMultiplier={props.setCPSMultiplier}
                name="Chocolate Cannoli" description="Your taskforce can now bake chocolate cannoli, increasing your cannoli per second by 10%."
                price={5000} cpsMultiplier={.1} visible={props.upgradesVisible.chocolateVisible} setVisible={() => {props.setUpgradesVisible({...props.upgradesVisible, chocolateVisible: false})}} /> :
                <Upgrade type="locked" unlock={15000}/>}
            {props.totalCannoli >= 30000 ?
                props.upgradesVisible.best3Visible && <Upgrade type="cpc" cannoli={props.cannoli} setCannoli={props.setCannoli} setCPCMultiplier={props.setCPCMultiplier}
                name="Best in the World" description="Your cannoli are famous for being the best in the world. 
                Your clicks are boosted by 10% of your cannoli per second."
                price={15000} cpcMultiplier={.1 * props.cps} visible={props.upgradesVisible.best3Visible} setVisible={() => {props.setUpgradesVisible({...props.upgradesVisible, best3Visible: false})}} /> :
                <Upgrade type="locked" unlock={30000}/>}
        </div>
    );
}

export default UpgradeList;