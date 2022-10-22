import React from "react";
const TabListItem = (
    {
        tab = { name: 'For You', page: '#'},
        active = 'For You'
    }
) => {
    return(
        <li className="nav-item">
            <a className={`nav-link
            ${active === tab.name ? 'active'
                : ''}`} href={tab.page}>
                {tab.name}
            </a>
        </li>
    );
}
export default TabListItem;