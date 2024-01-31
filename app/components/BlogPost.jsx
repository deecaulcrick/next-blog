'use client'

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism'; // Choose a style (e.g., 'docco')

// children={content}
function BlogPost({ content }) {

    return (
        <div className="blog-post">
            <ReactMarkdown remarkPlugins={[remarkGfm]}

                components={{
                    code(props) {
                        const { children, className, node, ...rest } = props
                        const match = /language-(\w+)/.exec(className || '')
                        return match ? (
                            <>
                                <div className='code-tag' >{match[1]}</div>
                                <SyntaxHighlighter
                                    {...rest}
                                    // children={String(children).replace(/\n$/, '')}
                                    style={nightOwl}
                                    language={match[1]}
                                    PreTag="div"
                                    showLineNumbers={true}
                                >{String(children).replace(/\n$/, '')}</SyntaxHighlighter>
                            </>
                        ) : (
                            <code {...rest} className={className}>
                                {children}
                            </code>
                        )
                    }
                }}
            >{content}</ReactMarkdown>
        </div>
    )
}

export default BlogPost