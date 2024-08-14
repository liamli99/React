import heroImg from './assets/hero.svg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit facilis minus reiciendis voluptas corrupti, repellendus ullam unde eos iure dolor fuga tempore dolores hic, quaerat in animi minima distinctio! Commodi.</p>
        </div>

          <div className="img-container">
            <img className='img' src={heroImg} alt="not found" />
          </div>
      </div>
    </section>
  );
}

export default Hero;