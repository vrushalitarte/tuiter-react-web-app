import TabListItem from "./TabListItem.js";
import tabs from "./tabs.js";

const NavigationTabs = () => {
    return (`
        <ul class="nav mb-2 mt-2 nav-tabs">
            ${
        tabs.map(tab => {
            return (TabListItem(tab));
        }).join('')
    }
        </ul>
    `);
}

export default NavigationTabs;