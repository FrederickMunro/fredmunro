import { FaReact, FaNodeJs, FaJava, FaPython, FaDocker, FaHtml5, FaCss3 } from "react-icons/fa";
import { SiTypescript, SiJavascript, SiSpring, SiGradle } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { DiPython, DiJava } from "react-icons/di";
import StackItem from "./components/StackItem";


const Stack = () => {

  const frontend = [
    {
      name: 'React',
      icon: <FaReact
              className='stack-item-icon'
              color='#61DAFB'
            />
    },
    {
      name: 'Node',
      icon: <FaNodeJs
              className='stack-item-icon'
              color='#339933'
            />
    },
    {
      name: 'TypeScript',
      icon: <SiTypescript
              className='stack-item-icon'
              color='#3178C6'
            />
    },
    {
      name: 'JavaScript',
      icon: <SiJavascript
              className='stack-item-icon'
              color='#F7DF1E'
            />
    },
    {
      name: 'HTML',
      icon: <FaHtml5
              className='stack-item-icon'
              color='#E34F26'
            />
    },
    {
      name: 'CSS',
      icon: <FaCss3
              className='stack-item-icon'
              color='#1572B6'
            />
    },
  ];

  const backend = [
    {
      name: 'Java',
      icon: <FaJava
              className='stack-item-icon'
              color='#007396'
            />
    },
    {
      name: 'Spring',
      icon: <SiSpring
              className='stack-item-icon'
              color='#6DB33F'
            />
    },
    {
      name: 'Python',
      icon: <FaPython
              className='stack-item-icon python'
              color='#3776AB'
            />
    },
    {
      name: 'C++',
      icon: <TbBrandCpp
              className='stack-item-icon'
              color='#00599C'
            />
    },
  ];

  const other = [
    {
      name: 'Docker',
      icon: <FaDocker
              className='stack-item-icon'
              color='#2496ED'
            />
    },
    {
      name: 'Gradle',
      icon: <SiGradle
              className='stack-item-icon'
              color='#009B75'
            />
    },
  ]

  return(
    <div className='stack-master-container'>
      <h2>Tech Stack</h2>
      <h3>Front end</h3>
      <div className='stack-container'>
        {frontend.map((e,i) => {
          return <StackItem name={e.name} icon={e.icon} key={i} />
        })}
      </div>
      <h3>Back end</h3>
      <div className='stack-container'>
        {backend.map((e,i) => {
          return <StackItem name={e.name} icon={e.icon} key={i} />
        })}
      </div>
      <h3>Tools</h3>
      <div className='stack-container'>
        {other.map((e,i) => {
          return <StackItem name={e.name} icon={e.icon} key={i} />
        })}
      </div>
    </div>
  )
}

export default Stack;