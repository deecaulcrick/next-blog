import PostList from '../components/PostList'
import getPostMetaData from '../utils/getPostMetaData';

const postsPage = () => {
    const postMetaData = getPostMetaData()
    return (
        <div className="posts">
            <div className="hero-container">
                <h1 className='page-title'>Posts<sup className='superscript'>{postMetaData.length}</sup></h1>
                <p className='page-desc'>My thoughts and explorations on computer science, web development, cool software, and the occasional meme. </p>
            </div>

            <PostList />

        </div>
    )
}

export default postsPage