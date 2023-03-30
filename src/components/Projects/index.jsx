import './Projects.css';
import ImgMediaCard from './ImgMediaCard';
import projects from './projects';
import { GoFileSymlinkDirectory } from'react-icons/go';




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
      <div className='button__toDirectory'>
        <a href="https://github.com/EdsonCampanhao?tab=repositories"><h1>ver mais projetos <GoFileSymlinkDirectory size={32} /></h1> </a>
      </div>
    </section>
  )
}
export default Projects