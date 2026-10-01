import "./App.css";

function App() {
  return (
    <div className="portfolio">

      <nav className="navbar">
        <div className="logo">
          Komal<span>.</span>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#certificates">Certificates</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="home" className="home">
        <div className="home-content">

          <p className="welcome">WELCOME TO MY PORTFOLIO</p>

          <h1>
            Hi, I'm <span>Komal Teli</span>
          </h1>

          <h2>AI, Python & Next.js Developer</h2>

          <p className="description">
            BCA Graduate passionate about Artificial Intelligence,
            Machine Learning, Python and modern Web Development.
            I love building smart and meaningful digital solutions.
          </p>

          <div className="home-buttons">
            <a href="#projects" className="pink-button">
              View My Projects
            </a>

            <a href="#contact" className="blue-button">
              Contact Me
            </a>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/komalteli17"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/komal-teli-147062379/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>

        </div>

        <div className="profile-area">
          <div className="profile-circle">
            <img
              src="/images/komal-photo.jpeg"
              alt="Komal Teli"
            />
          </div>

          <div className="profile-tag">
            AI • ML • Python
          </div>
        </div>
      </section>

      <section id="about" className="about section">

        <p className="section-label">ABOUT ME</p>

        <h2 className="section-title">
          I'm Komal, an <span>AI, Python & Next.js Developer.</span>
        </h2>

        <p className="about-text">
          I am a BCA graduate with a strong interest in Artificial
          Intelligence, Machine Learning, Python development and
          modern web technologies.
        </p>

        <p className="about-text">
          I enjoy building practical projects that solve real-world
          problems and continuously improving my technical skills.
          I am passionate about learning new technologies and
          creating innovative solutions.
        </p>

        <div className="about-cards">

          <div className="info-card pink-card">
            <div className="info-icon">🎓</div>
            <h3>Education</h3>
            <p>BCA Graduate</p>
          </div>

          <div className="info-card blue-card">
            <div className="info-icon">🤖</div>
            <h3>Specialization</h3>
            <p>AI / ML & Python</p>
          </div>

          <div className="info-card pink-card">
            <div className="info-icon">💻</div>
            <h3>Focus</h3>
            <p>Software Development</p>
          </div>

        </div>
      </section>

      <section id="skills" className="skills section">

        <p className="section-label">MY SKILLS</p>

        <h2 className="section-title">
          Technologies I <span>Work With</span>
        </h2>

        <div className="skills-grid">

          <div className="skill-card">
            <div className="skill-icon">🐍</div>
            <h3>Python</h3>
            <p>Programming & Development</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">🤖</div>
            <h3>Artificial Intelligence</h3>
            <p>AI Applications</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">🧠</div>
            <h3>Machine Learning</h3>
            <p>ML Models & Prediction</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">✨</div>
            <h3>Prompt Engineering</h3>
            <p>Generative AI & LLMs</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">🌐</div>
            <h3>HTML & CSS</h3>
            <p>Frontend Development</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">⚡</div>
            <h3>JavaScript</h3>
            <p>Web Development</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">⚛️</div>
            <h3>React.js</h3>
            <p>Frontend Applications</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">🔥</div>
            <h3>Flask</h3>
            <p>Python Web Framework</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">🗄️</div>
            <h3>MySQL</h3>
            <p>Database Management</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">🍃</div>
            <h3>MongoDB</h3>
            <p>NoSQL Database</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">🐙</div>
            <h3>Git & GitHub</h3>
            <p>Version Control</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">💻</div>
            <h3>C / C++</h3>
            <p>Programming Fundamentals</p>
          </div>

        </div>
      </section>

      <section id="projects" className="projects section">

        <p className="section-label">MY PROJECTS</p>

        <h2 className="section-title">
          Featured <span>Projects</span>
        </h2>

        <div className="projects-grid">

          <div className="project-card">
            <div className="project-top pink-bg">❤️</div>

            <h3>HeartGuard AI</h3>

            <p>
              AI-powered heart disease prediction system that uses
              Machine Learning to analyze health-related data and
              provide prediction results through a Flask web
              application.
            </p>

            <div className="tech-tags">
              <span>Python</span>
              <span>Machine Learning</span>
              <span>Flask</span>
            </div>

            <a
              href="https://github.com/komalteli17/HeartGuard-AI"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project →
            </a>
          </div>

          <div className="project-card">
            <div className="project-top blue-bg">🤖</div>

            <h3>CareerPilot AI</h3>

            <p>
              AI-powered resume analyzer designed to analyze
              resumes and provide useful insights to help improve
              career opportunities.
            </p>

            <div className="tech-tags">
              <span>Python</span>
              <span>AI</span>
              <span>Flask</span>
            </div>

            <a
              href="https://github.com/komalteli17/CareerPilot-AI"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project →
            </a>
          </div>

          <div className="project-card">
            <div className="project-top pink-bg">🌐</div>

            <h3>Language Learning</h3>

            <p>
              A language learning project designed to help users
              improve their language skills through an interactive
              web experience.
            </p>

            <div className="tech-tags">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>

            <a
              href="https://github.com/komalteli17/language-learning"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project →
            </a>
          </div>

        </div>
      </section>

      <section id="certificates" className="certificates section">

        <p className="section-label">CERTIFICATES</p>

        <h2 className="section-title">
          My <span>Certifications</span>
        </h2>

        <div className="certificates-grid">

          <div className="certificate-card">
            <h3>AI-Powered Software & System Design</h3>
            <p>DeepLearning.AI</p>

            <a
              href="/certificates/ai-powered-software-design.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Certificate →
            </a>
          </div>

          <div className="certificate-card">
            <h3>AI Prompting for Everyone</h3>
            <p>DeepLearning.AI</p>

            <a
              href="/certificates/ai-prompting-for-everyone.png"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Certificate →
            </a>
          </div>

          <div className="certificate-card">
            <h3>Generative AI</h3>
            <p>DeepLearning.AI</p>

            <a
              href="/certificates/generative-ai.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Certificate →
            </a>
          </div>

          <div className="certificate-card">
            <h3>Introduction to Generative AI</h3>
            <p>DeepLearning.AI</p>

            <a
              href="/certificates/introduction-generative-ai.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Certificate →
            </a>
          </div>

          <div className="certificate-card">
            <h3>Team Software Engineering with AI</h3>
            <p>DeepLearning.AI</p>

            <a
              href="/certificates/team-software-engineering-ai.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Certificate →
            </a>
          </div>

          <div className="certificate-card">
            <h3>TensorFlow Developer Professional Certificate</h3>
            <p>DeepLearning.AI</p>

            <a
              href="/certificates/tensorflow-developer-professional-certificate.png"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Certificate →
            </a>
          </div>

        </div>
      </section>

      <section id="contact" className="contact section">

        <p className="section-label">CONTACT ME</p>

        <h2 className="section-title">
          Let's <span>Connect</span>
        </h2>

        <p className="contact-text">
          Feel free to connect with me for opportunities,
          collaborations or interesting projects.
        </p>

        <div className="contact-buttons">

          <a
            href="mailto:komalteli17@gmail.com"
            className="pink-button"
          >
            📧 Email
          </a>

          <a
            href="https://github.com/komalteli17"
            target="_blank"
            rel="noopener noreferrer"
            className="blue-button"
          >
            🐙 GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/komal-teli-147062379/"
            target="_blank"
            rel="noopener noreferrer"
            className="pink-button"
          >
            💼 LinkedIn
          </a>

        </div>
      </section>

      <footer className="footer">
        <p>© 2026 Komal Teli. All Rights Reserved.</p>
      </footer>

    </div>
  );
}

export default App;