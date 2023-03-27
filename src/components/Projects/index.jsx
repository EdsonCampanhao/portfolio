import './Projects.css'
import ImgMediaCard from './ImgMediaCard';




const Projects = () => {


  const projects = [
    {
      'alt': 'fotinha',
      'image': 'http://github.com/EdsonCampanhao.png',
      'title': 'teste',
      'content': 'teste de novo man'
    },
    {
      'alt': 'fotinha',
      'image': 'http://github.com/EdsonCampanhao.png',
      'title': 'teste',
      'content': 'teste de novo man'
    },
    {
      'alt': 'fotinha',
      'image': 'http://github.com/EdsonCampanhao.png',
      'title': 'teste',
      'content': 'teste de novo man'
    },
    {
      'alt': 'fotinha',
      'image': 'http://github.com/EdsonCampanhao.png',
      'title': 'teste',
      'content': 'teste de novo man'
    },

  ]

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
          />
        )
      }


    </section>
  )
}

export default Projects