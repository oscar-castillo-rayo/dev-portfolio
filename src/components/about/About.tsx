import "./About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="section-title section-about-me">About me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            I am a passionate and self-taught web developer who has mastered
            technologies such as React, TypeScript, and C# through my own
            learning journey. I am excited about being part of innovative
            development teams and committed to continuously improving my
            technical skills, constantly seeking opportunities to apply my
            knowledge and face new challenges that allow me to grow
            professionally.
          </p>
          <br />
          <div className="about-values">
            <h2 className="section-title section-values">My Values</h2>
            <p>
              My professional approach is based on three core principles:
              responsibility, commitment, and effective communication. I have
              developed discipline and problem-solving abilities that add value
              to any team. This journey has taught me to strive to exceed
              expectations in every project.
            </p>
            <h2 className="section-title section-vision">My Vision</h2>
            <p>
              I seek environments where I can continue learning while working
              with dynamic teams that value initiative and new ideas. My path
              has enabled me to identify opportunities for improvement and
              propose creative solutions. I believe in building working
              relationships based on trust and commitment to results that
              generate real impact.
            </p>
          </div>
        </div>
        {/* <div className="h-screen"></div> */}
      </div>
    </section>
  );
};

export default About;
