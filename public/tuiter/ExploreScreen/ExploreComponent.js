import NavigationTabs from "../NavigationTabs";
import PostSummaryList from "../PostSummaryList";

const ExploreComponent = () => {
    return(`
        <div class="row">
            <i class="fa fa-search d-flex float-start mt-3 ms-2 wd-search" style="color: gray"></i>
            <input type="text" class="form-control d-flex float-start ms-2 rounded-pill search-text"
                   placeholder="Search Tuiter"> 
            <div class="col-1">
                <i class="fa fa-gear fa-2x d-flex justify-content-end" style="color: #2a9fd6;"></i>
            </div>
        </div>
        ${NavigationTabs()}
        <img class="img-fluid" src="images/starship.png">
        <h2 class="wd-caption"><b>SpaceX's Starship</b></h2>
        ${PostSummaryList()}
    `);
}
export default ExploreComponent;
