import Link from 'next/link'
import getPostMetaData from '../utils/getPostMetaData';


function PostList() {
    const postMetaData = getPostMetaData()

    return (
        <div className="post-grid">
            {postMetaData.map((post) => (
                <div className="post-card">

                    <Link href={`/posts/${post.slug}`}>
                        <img src={`/images/${post.coverImage}`} />
                    </Link>
                    <h2 key={post.slug}><Link href={`/posts/${post.slug}`} className='post-card-title'>{post.title}</Link></h2>
                    <p className="post-date">{post.date}</p>
                </div>
            ))}
        </div>
    )
}

export default PostList