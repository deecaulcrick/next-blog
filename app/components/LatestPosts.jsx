import React from 'react'
import getPostMetaData from '../utils/getPostMetaData';
import Link from "next/link";

function LatestPosts() {

    const latestPosts = getPostMetaData().slice(0, 4)


    return (
        <div className="latest-posts">
            <h3 className='section-title'>LATEST POSTS</h3>
            <div className="post-grid">
                {latestPosts.map((post) => (
                    <div className="post-card">
                        <Link href={`/posts/${post.slug}`}>
                            <img src={`/images/${post.coverImage}`} />
                        </Link>
                        <h2 key={post.slug}><Link href={`/posts/${post.slug}`} className='post-card-title'>{post.title}</Link></h2>
                        <p className="post-date">{post.date}</p>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default LatestPosts