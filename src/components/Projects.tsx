import Project from "./Project";



const Projects = () => {

  const projects = [
    {
      image: '',
      title: 'Groupe Skella',
      description: '',
      stack: ['Typescript', 'React', 'HTML', 'CSS'],
    },
    {
      image: '',
      title: 'Groupe Skella',
      description: '',
      stack: [''],
    },
  ]

  return (
    <>
      {projects.map((project, e) => {
        return <Project
          image={project.image}
          title={project.title}
          description={project.description}
          stack={project.stack}
          key={e}
        />
      })}
    </>
  );
}

export default Projects;