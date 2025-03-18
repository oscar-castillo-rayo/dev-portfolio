import "./About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="section-title section-about-me">About me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            I am a passionate web developer dedicated to creating impactful
            projects and delivering exceptional results. With expertise in
            modern web technologies like React, TypeScript, and C#. I
            continuously seek opportunities to expand my skills and tackle new
            challenges.
          </p>
          <br />
          <div className="about-values">
            <h2 className="section-title section-values">My Values</h2>
            <p>
              I build my career on three core principles: responsibility,
              commitment, and effective communication. These values drive me to
              not only meet but exceed expectations in every project, ensuring
              that I bring extra value to every team I collaborate with.
            </p>
            <h2 className="section-title section-vision">My Vision</h2>
            <p>
              I thrive on continuous growth and fostering collaboration within
              dynamic teams. By building trust-based relationships, I focus on
              generating meaningful impact through innovative solutions and
              shared success.
            </p>
          </div>
        </div>
        {/* <div className="h-screen"></div> */}
      </div>
    </section>
  );
};

export default About;
