import './Projects.css'
import ImgMediaCard from './ImgMediaCard';
import projects from './projects'




const Projects = () => {




  return (
    <section className='projects'>
      <h2> Projetos em destaque! </h2>
      {
        projects.map(project =>
          <ImgMediaCard 
            key={project.title}
            alt={project.alt}
            image={project.image}
            title={project.title}
            content={project.content}
            repo={project.repo}
            app={project.app}
          />
        )
      }
    </section>
  )
}
export default Projects