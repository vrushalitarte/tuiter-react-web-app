const PostSummaryItem = (post) => {
    return (`
    <li class="list-group-item">
        <span style="color: gray">${post.topic}</span>
        <img
            class="float-end wd-image"
            src=${post.image}          
        />
        <br>
        <b>${post.userName} &#9898;</b>
        <span style="color: gray">- ${post.time}</span>
        <br>
        <b>${post.title}</b>
        <br>
        <span style="color: gray">
            ${post.tweets ? post.tweets + " Tuits" : ""}
        </span>
        <br>
    </li>`
    );
};

export default PostSummaryItem;