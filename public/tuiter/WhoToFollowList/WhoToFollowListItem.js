const WhoToFollowListItem = (who) => {
    return (`
        <li class="list-group-item">
            <img class="rounded-circle float-start me-3" src=../explorescreen/images/${who.avatarIcon} width="40px"/>
            <button class="btn btn-primary rounded-pill d-flex float-end">
                Follow
            </button>
            <div class="row fw-bolder">${who.userName} &#9898;</div>
             <div class="row">@${who.handle}</div>
        </li>`
    );
}
export default WhoToFollowListItem;