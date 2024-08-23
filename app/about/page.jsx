import Link from "next/link";
const aboutPage = () => {
  return (
    <div className="about">
      <h1 className="page-title">Dee Caulcrick</h1>
      <p className="subtitle">
        <i>Designer. Computer Scientist. Writer</i>
      </p>
      <div className="links">
        <ul>
          <li>
            <img src="/twitter.svg" alt="twitter" />{" "}
            <Link href="https://twitter.com/deecaulcrick">@deecaulcrick</Link>
          </li>
          <li>
            <img src="/linkedin-in.svg" alt="twitter" />{" "}
            <Link href="https://linkedin.com/deborah-caulcrick">
              deborah-caulcrick
            </Link>
          </li>
          <li>
            <img src="/paper-plane.svg" alt="twitter" />{" "}
            <Link href="mailto:deecaulcrick@gmail.com">
              deecaulcrick@gmail.com
            </Link>
          </li>
        </ul>
      </div>
      <img src="/dee.png" alt="dee" className="dee" />
      <p className="page-desc">
        Hiiii, I'm Dee Caulcrick.
        <br />
        <br />
        And this is where I reinforce my thinking and learning. I'm an avid
        reader and learner and I love to write about what I learn and read.
        <br />
        <br />
        Someone once said, "When you teach, you learn twice." I have years of
        experience teaching kids and my goal is for this blog to be an avenue to
        help others learn.
        <br />
        <br />
      </p>
      <h2>Favourite Things</h2>
      <br /> <h3>Books</h3>
      <ul>
        <li>A Song Of Ice And Fire by G.R.R. Martin</li>
        <li>Purple Hibiscus by Chimamanda Ngozi Adichie</li>
        <li>Who Fears Death by Nnedi Okorafor</li>
      </ul>
    </div>
  );
};

export default aboutPage;
