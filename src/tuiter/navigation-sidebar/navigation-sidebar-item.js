import React from "react";
const NavigationSidebarItem = (
    {
        page = { name: 'Home', icon: 'home' },
        active='Home'
    }
) => {
    return (
        <a className={`list-group-item
                    ${active === page.name ? 'active' : ''}`} href="#">
            <i className={`bi bi-${page.icon}`}></i> {page.name}
        </a>
    );
};
export default NavigationSidebarItem;