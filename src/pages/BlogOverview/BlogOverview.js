import React from 'react';
import posts from '../../data/posts.json'
import { Link } from 'react-router-dom'

function BlogOverview() {
    return (
        <main>
            <h1>Alle blogposts</h1>
            <ul>
                {posts.map((blogpost) => {
                    return (
                        <li> keys={blogpost.id}><Link to={'blogposts/${blogpost.id}'}>{blogpost.title}</Link></li>
                )
                })}
            </ul>
        </main>
    );
}

export default BlogOverview;