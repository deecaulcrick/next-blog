import React from "react";
import fs from "fs";
import BlogPost from "../../components/BlogPost";
import Link from "next/link";
import matter from "gray-matter";
import getSnippetMetaData from "../../utils/getSnippetMetaData";

const getSnippetContent = (slug) => {
  const folder = "all-snippets/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf-8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const snippet = getSnippetMetaData();
  return snippet.map((snippet) => ({ slug: snippet.slug }));
};

const singleSnippet = (props) => {
  const slug = props.params.slug;
  const snippetContent = getSnippetContent(slug);

  return (
    <div className="snippet">
      <div className="snippet-info">
        <div className="category-box">
          <div className="category">Snippet</div>
        </div>

        <h1 className="post-title snippet-title">
          {snippetContent.data.title}
        </h1>

        <p className="post-date">Last Updated: {snippetContent.data.date}</p>
      </div>

      <BlogPost content={snippetContent.content} />

      <div className="post-footer">
        <p>
          Reply via:{" "}
          <a href="mailto:deecaulcrick@gmail.com" target="_blank">
            Email
          </a>{" "}
          or{" "}
          <a href="https://twitter.com/deecaulcrick" target="_blank">
            Twitter
          </a>
        </p>
      </div>
    </div>
  );
};

export default singleSnippet;
