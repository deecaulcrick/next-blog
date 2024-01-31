import fs from 'fs'
import matter from 'gray-matter'

const getSnippetMetaData = () => {
    const folder = 'all-snippets/';
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter((file) => file.endsWith('.md'))

    //Get gray-matter data from each file
    const snippets = markdownPosts.map((filename) => {
        const fileContents = fs.readFileSync(`all-snippets/${filename}`, 'utf-8')
        const matterResult = matter(fileContents)
        return {
            title: matterResult.data.title,
            description: matterResult.data.description,
            category: matterResult.data.category,
            lastUpdated: matterResult.data.lastUpdated,
            slug: filename.replace('.md', ''),
        }
    })


    snippets.sort((a, b) => new Date(b.date) - new Date(a.date))
    return snippets
}

export default getSnippetMetaData