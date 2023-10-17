import Link from 'next/link'
import Image from 'next/image'
import getPostMetaData from '../utils/getPostMetaData';


function PostList() {
    const postMetaData = getPostMetaData()

    return (
        <div className="post-grid">
            {postMetaData.map((post) => (
                <div key={post.slug} className="post-card">

                    <Link href={`/posts/${post.slug}`}>
                        <img src={`/images/${post.coverImage}`} alt={post.title} />

                    </Link>
                    <h2 ><Link href={`/posts/${post.slug}`} className='post-card-title'>{post.title}</Link></h2>
                    <p className="post-date">{post.date}</p>
                </div>
            ))}
        </div>
    )
}

export default PostList