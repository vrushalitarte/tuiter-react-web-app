import React from "react";
import TabListItem from "./navigation-tab-item.js";
import tabs from "./tabs.json";

const NavigationTabs = (
    {
        active= 'For You'
    }
) => {
    return (
        <ul className="nav nav-pills mb-2">
            {
                tabs.map(tab =>
                    <TabListItem
                        key={tab._id} tab={tab} active={active}/> )
            }
        </ul>
    );
}

export default NavigationTabs;