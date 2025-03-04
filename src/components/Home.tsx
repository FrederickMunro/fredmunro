import InviewObserver from "./Containers/InviewObserver";

const Home = () => {
  return (
    <div className='home-master-container'>
      <div className='home-text-container'>
        <InviewObserver threshold={0.1} triggerOnce={true} anim={'move-right-appear'} delay={0}>
          <h1 className='home-name'>Frederick Munro</h1>
        </InviewObserver>
        <InviewObserver threshold={0.1} triggerOnce={true} anim={'move-left-appear'} delay={0}>
          <h2 className='home-title'>Full Stack Software Engineer</h2>
        </InviewObserver>
      </div>
      <InviewObserver threshold={0.1} triggerOnce={true} anim={'move-up-appear-delay'} delay={2000}>
        <button className='home-button'>
          <p className='home-button-text'>View projects ↓</p>
        </button>
      </InviewObserver>
    </div>
  );
}

export default Home;