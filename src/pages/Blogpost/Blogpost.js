import React from 'react';
import {useParams, Link} from "react-router-dom";
import posts from '../../data/posts.json';

function Blogpost() {
    const { blogId } = useParams()

    const currentPost = posts.find((post) => {
        return post.id === blogId;
    });

    return (
        <main>
            <article>
                <h1>{currentPost.title}</h1>
                <h3>{currentPost.date}</h3>
                <p>{currentPost.content}</p>
            </article>
            <article>
                <Link to="/blogposts">Terug naar het overzicht</Link>
            </article>
        </main>
    );
}

export default Blogpost;