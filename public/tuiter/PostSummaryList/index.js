import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.js";

const PostSummaryList = () => {
    return (`
        <ul class="list-group" style="margin-top: -58px">
            ${
        posts.map(post => {
            return (PostSummaryItem(post));
        }).join('')
    }
        </ul>
    `);
};

export default PostSummaryList;