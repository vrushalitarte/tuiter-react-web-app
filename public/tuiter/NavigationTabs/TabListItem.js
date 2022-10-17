const TabListItem = (tab) => {
    return(`
        <li class="nav-item">
            <a class=
            "${tab.active ? "nav-link active"
            : "nav-link"}" href="${tab.page}">
             ${tab.name}
            </a>
        </li>`
    );
}
export default TabListItem;