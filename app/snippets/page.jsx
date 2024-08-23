import getSnippetMetaData from "../utils/getSnippetMetaData";
import Link from "next/link";

const snippets = () => {
  const snippetMetaData = getSnippetMetaData();
  return (
    <div className="snippets">
      <div className="hero-container">
        <h1 className="page-title">
          Snippets<sup className="superscript">{snippetMetaData.length}</sup>
        </h1>
        <p>
          Short solutions to discrete problems which can be copied and pasted.
          Bits and pieces of code to use when I need to use/remember them.
        </p>
      </div>

      <div className="snippet-grid">
        {snippetMetaData.map((snippet) => (
          <div key={snippet.slug} className="snippet-card">
            <div className="category-box">
              <div className="category">{snippet.category}</div>
            </div>
            <h2>
              <Link href={`/snippets/${snippet.slug}`}>{snippet.title}</Link>
            </h2>
            <p className="snippet-description">{snippet.description}</p>

            <p className="post-date">{`Last updated: ${snippet.date}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default snippets;
