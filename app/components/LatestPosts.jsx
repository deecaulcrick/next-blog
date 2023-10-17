import React from 'react'
import getPostMetaData from '../utils/getPostMetaData';
import Link from "next/link";
import Image from 'next/image';

function LatestPosts() {

    const latestPosts = getPostMetaData().slice(0, 4)


    return (
        <div className="latest-posts">
            <h3 className='section-title'>LATEST POSTS</h3>
            <div className="post-grid">
                {latestPosts.map((post) => (
                    <div key={post.slug} className="post-card">
                        <Link href={`/posts/${post.slug}`}>
                            <div className="post-grid-image">
                                <img src={`/images/${post.coverImage}`}
                                    alt={post.title} />

                            </div>

                        </Link>
                        <h2><Link href={`/posts/${post.slug}`} className='post-card-title'>{post.title}</Link></h2>
                        <p className="post-date">{post.date}</p>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default LatestPosts