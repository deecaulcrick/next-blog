import fs from 'fs'
import BlogPost from '../../components/BlogPost'
import BackButton from '../../components/BackButton'
import Link from 'next/link'
import matter from 'gray-matter'
import getPostMetaData from '../../utils/getPostMetaData'



const getPostContent = (slug) => {
    const folder = 'all-posts/'
    const file = `${folder}${slug}.md`
    const content = fs.readFileSync(file, 'utf-8')
    const matterResult = matter(content)
    return matterResult
}

export const generateStaticParams = async () => {
    const posts = getPostMetaData()
    return posts.map((post) => (
        { slug: post.slug }
    ))
}

const singlePost = (props) => {
    const slug = props.params.slug
    const postContent = getPostContent(slug)

    return (
        <div className='post'>
            <Link href='/posts' className='back-link'><BackButton />
            </Link>

            <div className="post-info">

                <div className="category-box">
                    {postContent.data.tags.map((tag) => (
                        <div className="category">{tag}</div>
                    ))}
                </div>

                <h1 className="post-title">{postContent.data.title}</h1>

                <p className="post-date">{postContent.data.date}</p>

                <img src={`/images/${postContent.data.coverImage}`} className='post-image' />
                <figcaption>{postContent.data.caption}</figcaption>

            </div>

            <BlogPost content={postContent.content} />

            <div className="post-footer">
                <p>Reply via: <a href='mailto:deecaulcrick@gmail.com' target='_blank'>Email</a> or <a href='https://twitter.com/deecaulcrick' target='_blank'>Twitter</a></p>
            </div>
        </div>
    )
}

export default singlePost