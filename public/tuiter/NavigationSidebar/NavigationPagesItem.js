const NavigationPagesItem = (page) => {
    return(`
        <a class=
            "${page.active ? "list-group-item active"
            : "list-group-item"}" href="#">
            <i class="${page.icon}"></i> ${page.title}
        </a>`
    );
}
export default NavigationPagesItem;