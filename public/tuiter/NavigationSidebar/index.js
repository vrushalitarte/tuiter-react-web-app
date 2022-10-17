import NavigationPagesItem from "./NavigationPagesItem.js";
import pages from "./pages.js";

const NavigationSidebar = () => {
    return (`
        <div class="list-group style="color: gray">
        <a class="list-group-item" href="#">
        <i class="fab fa-twitter"></i></a>
        ${
        pages.map(page => {
            return(NavigationPagesItem(page));
        }).join('')
    }
        </div>
        <div class="d-grid mt-2">
        <a href="tuit.html"
            class="btn btn-primary btn-block rounded-pill">
            Tuit</a>
        </div>
    `);
}
export default NavigationSidebar;
