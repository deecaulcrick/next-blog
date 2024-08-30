import Link from "next/link";
import projectsData from "../../index/projects";
import currentData from "../../index/current";
const aboutPage = () => {
  return (
    <div className="about">
      <h1 className="page-title">Dee Caulcrick</h1>
      <p className="subtitle-1">
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
          <li>
            <img src="/shopping-cart.svg" alt="gumroad" />{" "}
            <Link href="https://deecaulcrick.gumroad.com">
              deecaulcrick.gumroad.com
            </Link>
          </li>
          <li>
            <img src="/notion.svg" alt="notion" />{" "}
            <Link href="https://notion.so/@deecaulcrick">
              notion.so/@deecaulcrick
            </Link>
          </li>
        </ul>
      </div>
      <img src="/dee.png" alt="dee" className="dee" />
      {/* <p className="page-desc">
        Hiiii, I&apos;m Dee Caulcrick.
        <br />
        <br />
        And this is where I reinforce my thinking and learning. I&apos;m an avid
        reader and learner and I love to write about what I learn and read.
        <br />
        <br />
        Someone once said, &quot;When you teach, you learn twice.&quot; I have
        years of experience teaching kids and my goal is for this blog to be an
        avenue to help others learn.
        <br />
        <br />
      </p> */}
      <div className="stuff">
        <h2>Active Projects</h2>
        <p className="subtitle-2">Projects I am actively working on</p>

        <div className="project-list">
          <ul>
            {currentData.map((project) => (
              <li key={project.id}>
                <h3>
                  <Link href={project.link} target="_blank">
                    {project.title}
                  </Link>
                </h3>
                <p className="project-excerpt">{project.desc}</p>
                <p id="stuff-date">{project.date}</p>
              </li>
            ))}
          </ul>
        </div>
        

        <h2>Archived Projects</h2>
        <p className="subtitle-2">
          These projects are still up but I will not be updating them anytime
          soon.
        </p>
        <div className="project-list">
          <ul>
            {projectsData.map((project) => (
              <li key={project.id}>
                <h3>
                  <Link href={project.link} target="_blank">
                    {project.title}
                  </Link>
                </h3>
                <p className="project-excerpt">{project.desc}</p>
                <p id="stuff-date">{project.date}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* <h2>Favourite Things</h2>
      <br /> <h3>Books</h3>
      <ul>
        <li>A Song Of Ice And Fire by G.R.R. Martin</li>
        <li>Purple Hibiscus by Chimamanda Ngozi Adichie</li>
        <li>Who Fears Death by Nnedi Okorafor</li>
      </ul> */}
      </div>
    </div>
  );
};

export default aboutPage;
