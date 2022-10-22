import React from "react";
import pagesArray from "./pages.json";
import NavigationSidebarItem from "./navigation-sidebar-item";

const NavigationSidebar = (
    {
        active = 'Home'
    }
) => {
    return (
        <>
            <div className="list-group">
                <a class="list-group-item" href="#">
                    <i class="bi bi-twitter"></i> Tuiter</a>
                {
                    pagesArray.map(page =>
                        <NavigationSidebarItem
                            key={page._id} page={page} active={active}/> )
                }
            </div>
            <div className="d-grid mt-2">
                <a href="tuit.html"
                   className="btn btn-primary btn-block rounded-pill">
                    Tuit</a>
            </div>
        </>
    );
};

export default NavigationSidebar;