
import Link from 'next/link'
import projectsData from '../../index/projects'
const projects = () => {
    return (
        <div className="projects">
            <div className='hero-container'>

                <h1 className='page-title'>Projects<sup className='superscript'>{projectsData.length}</sup></h1>
                <p>Here's a list of projects that made it to the internet:</p>

            </div>
            <div className="project-list">

                {projectsData.map((project, id) => (
                    <div className='project-card' key={id}>
                        <h2><Link href={project.link} target='_blank'>{`${project.title} ↗`}</Link></h2>

                        <p className='project-excerpt'>{project.desc}</p>

                        <div className="category-box">
                            {project.tools.map((tool) => (
                                <div className="category">{tool}</div>


                            ))}
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default projects