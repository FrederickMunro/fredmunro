
interface Props {
  image: string;
  title: string
  description: string;
  stack: string[];
}

const Project = ({ image, title, description, stack }: Props) => {
  return(
    <div className='project-container'>
      <div className='project-container-left'>
          
      </div>
      <div className='project-container-right'>
          <h2 className='project-title'>{title}</h2>
          <p className='project-description'>{description}</p>
          {stack.map((item, e) => {
            return <p className='stack-item' key={e}>{item}</p>
          })}
      </div>
    </div>
  )
}
  
export default Project;