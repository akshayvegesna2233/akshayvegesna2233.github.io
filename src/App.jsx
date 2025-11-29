import "./index.css";
import {
  FiMail,
  FiPhone,
  FiGithub,
  FiLinkedin,
  FiArrowUp,
  FiMapPin,
  FiCalendar,
  FiExternalLink,
} from "react-icons/fi";

function App() {
  return (
    <div className="page">
      {/* NAVBAR */}
      <header className="navbar">
        <div className="navbar-left">
          <span className="logo-first">Akshay</span>{" "}
          <span className="logo-last">Vegesna</span>
        </div>

        <nav className="navbar-center">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="navbar-right">
          <a
            href="https://github.com/akshayvegesna2233"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FiGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/Akshay-varma-vegesna"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FiLinkedin />
          </a>
          <a
            href="mailto:akshayvegesna488@gmail.com"
            aria-label="Email"
          >
            <FiMail />
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <main className="hero" id="home">
        <div className="hero-inner">
          <h1 className="hero-name">
            Akshay Varma <span>Vegesna</span>
          </h1>

          <h2 className="hero-title">Full-Stack Developer</h2>

          <p className="hero-summary">
            Full-stack developer with strong proficiency in Django, React.js,
            PHP, MySQL, and modern frontend frameworks. Experienced in
            developing secure, scalable, and maintainable web applications with
            robust authentication, efficient database design, and clean API
            integrations. Adept in Agile development, version control, and
            systematic debugging to deliver production-ready solutions.
          </p>

          <div className="hero-buttons">
            <a
              href="mailto:akshayvegesna488@gmail.com"
              className="btn btn-primary"
            >
              <FiMail />
              <span>Contact Me</span>
            </a>

            <a
              href="tel:+14436038788"
              className="btn btn-secondary"
            >
              <FiPhone />
              <span>+1 443 603 8788</span>
            </a>
          </div>

          <div className="hero-scroll">
            <span>Scroll down</span>
            <span className="arrow">↓</span>
          </div>
        </div>
      </main>

      {/* ABOUT SECTION */}
      <section id="about" className="section about-section">
        <div className="section-header">
          <h2>About Me</h2>
          <div className="section-underline" />
          <p>
            Full-stack developer with experience across web development, data
            systems, and machine learning.
          </p>
        </div>

        <div className="about-grid">
          {/* Professional Summary */}
          <div className="card about-card">
            <h3>Professional Summary</h3>
            <p>
              Full-stack developer with strong proficiency in Django, React.js,
              PHP, MySQL, and modern frontend frameworks. Experienced in
              developing secure, scalable, and maintainable web applications
              with robust authentication, efficient database design, and clean
              API integrations.
            </p>
            <p>
              Adept in Agile development, GitHub-based collaboration, and
              systematic debugging to deliver high-quality, production-ready
              solutions. Comfortable working across both frontend and backend,
              integrating REST APIs, and optimizing user experience.
            </p>
            <p>
              Hands-on experience spans full-stack web development, event
              management systems, travel planning platforms, and secure
              healthcare applications, plus practical exposure to machine
              learning through fraud detection models.
            </p>
          </div>

          {/* Contact Details */}
          <div className="card about-card">
            <h3>Contact Details</h3>

            <p>
              <span className="muted-label">Location</span>
              <br />
              Arlington, Texas, United States
            </p>

            <p>
              <span className="muted-label">Email</span>
              <br />
              <a
                href="mailto:akshayvegesna488@gmail.com"
                className="about-link"
              >
                akshayvegesna488@gmail.com
              </a>
            </p>

            <p>
              <span className="muted-label">Phone</span>
              <br />
              +1 443 603 8788
            </p>

            <p>
              <span className="muted-label">Current Education</span>
              <br />
              M.S. in Computer and Information Science,
              <br />
              The University of Texas at Arlington (2024–2026, expected)
            </p>

            <p className="muted-label">Connect with me</p>
            <div className="about-socials">
              <a
                href="https://github.com/akshayvegesna2233"
                target="_blank"
                rel="noreferrer"
                className="social-btn"
              >
                <FiGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/Akshay-varma-vegesna"
                target="_blank"
                rel="noreferrer"
                className="social-btn"
              >
                <FiLinkedin />
              </a>

              <a
                href="mailto:akshayvegesna488@gmail.com"
                className="social-btn"
              >
                <FiMail />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="section experience-section">
        <div className="section-header">
          <h2>Work Experience</h2>
          <div className="section-underline" />
          <p>My journey across full-stack development and machine learning.</p>
        </div>

        <div className="timeline">
          <div className="timeline-line" />

          {/* Full Stack Development Intern */}
          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="card experience-card">
              <div className="experience-header">
                <div>
                  <h3>Full Stack Development Intern</h3>
                  <p className="experience-company">Henotic Technology</p>
                  <p className="experience-location">
                    <FiMapPin /> Hyderabad, India
                  </p>
                </div>
                <div className="experience-date">
                  <FiCalendar />
                  <span>Jun 2023 – Aug 2023</span>
                </div>
              </div>

              <p className="experience-subtitle">Key Responsibilities:</p>
              <ul className="experience-list">
                <li>
                  Developed a full-stack event management web application using
                  Python, Django, HTML, CSS, and MySQL, enabling 200+ users to
                  register and manage college events digitally.
                </li>
                <li>
                  Implemented secure authentication, database models, and API
                  integration, strengthening backend and deployment skills.
                </li>
                <li>
                  Collaborated in an Agile environment using GitHub for version
                  control and sprint tracking.
                </li>
                <li>
                  Enhanced UI design, debugging, and workflow optimization,
                  improving event-management efficiency.
                </li>
              </ul>
            </div>
          </div>

          {/* AI & ML Intern */}
          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="card experience-card">
              <div className="experience-header">
                <div>
                  <h3>AI &amp; Machine Learning Intern</h3>
                  <p className="experience-company">Henotic Technology</p>
                  <p className="experience-location">
                    <FiMapPin /> Hyderabad, India
                  </p>
                </div>
                <div className="experience-date">
                  <FiCalendar />
                  <span>Jul 2022 – Sep 2022</span>
                </div>
              </div>

              <p className="experience-subtitle">Key Responsibilities:</p>
              <ul className="experience-list">
                <li>
                  Developed a fraud detection model using Python (Scikit-learn,
                  Pandas, Seaborn, Matplotlib), achieving strong prediction
                  performance and reducing false positives.
                </li>
                <li>
                  Applied classification and clustering algorithms such as
                  Random Forest and K-Means with optimized data preprocessing
                  to improve training speed.
                </li>
                <li>
                  Conducted feature engineering and model evaluation using
                  metrics like confusion matrices and ROC curves to improve
                  detection reliability.
                </li>
                <li>
                  Documented the ML pipeline and collaborated with data analysts
                  to integrate insights into dashboards for real-time monitoring.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="section projects-section">
        <div className="section-header">
          <h2>Projects</h2>
          <div className="section-underline" />
          <p>Key academic and personal projects I’ve worked on.</p>
        </div>

        <div className="projects-grid">
          {/* UTA Marketplace */}
          <div className="card project-card">
            <h3>UTA Marketplace</h3>
            <p className="project-meta">
              React.js · Django · MySQL · WebSocket · Agile
            </p>
            <ul>
              <li>
                Built a marketplace platform for university students to buy,
                sell, and manage listings with secure role-based authentication.
              </li>
              <li>
                Implemented real-time chat using WebSocket APIs and
                category-based search filters to improve communication and
                product discovery.
              </li>
              <li>
                Used state management, form validation, and robust error
                handling in React to reduce UI errors and submission issues.
              </li>
              <li>
                Collaborated in a five-member Agile team using GitHub for
                version control and sprint-based development.
              </li>
            </ul>
          </div>

          {/* Travel Planning Application */}
          <div className="card project-card">
            <h3>Travel Planning Application</h3>
            <p className="project-meta">
              PHP · MySQL · HTML · CSS · JavaScript · Bootstrap · Selenium · Agile
            </p>
            <ul>
              <li>
                Engineered a secure, responsive web application that supports
                user registration, trip management, and experience sharing.
              </li>
              <li>
                Implemented role-based authentication, session management, and
                SSL encryption to ensure data integrity and privacy.
              </li>
              <li>
                Followed Agile Scrum for iterative development, using GitHub for
                version control and Selenium (Python) for automated UI testing.
              </li>
              <li>
                Deployed to UTA Cloud, optimizing database connectivity and
                scalability for production reliability.
              </li>
            </ul>
          </div>

          {/* Securing Patient Health Records */}
          <div className="card project-card">
            <h3>Securing Patient Health Records</h3>
            <p className="project-meta">
              Angular · Django · Blockchain · MySQL · Smart Contracts
            </p>
            <ul>
              <li>
                Developed a decentralized healthcare web platform with Angular
                frontend, Django backend, and a blockchain ledger for secure
                EHR management.
              </li>
              <li>
                Designed smart contracts for role-based access control to ensure
                data integrity and prevent unauthorized access.
              </li>
              <li>
                Built interactive dashboards for admins, doctors, and patients
                to manage medical records, appointments, and consultations.
              </li>
              <li>
                Optimized data retrieval and transaction handling, reducing
                access time while enhancing privacy and security.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="section skills-section">
        <div className="section-header">
          <h2>Technical Skills</h2>
          <div className="section-underline" />
          <p>Technologies and tools I work with.</p>
        </div>

        <div className="skills-grid">
          <div className="card skill-card">
            <h3>Programming Languages</h3>
            <ul>
              <li>C</li>
              <li>Python</li>
              <li>JavaScript</li>
              <li>PHP</li>
              <li>HTML &amp; CSS</li>
              <li>SQL</li>
            </ul>
          </div>

          <div className="card skill-card">
            <h3>Frameworks &amp; Libraries</h3>
            <ul>
              <li>Django</li>
              <li>React.js</li>
              <li>Bootstrap</li>
              <li>Scikit-Learn</li>
              <li>Pandas</li>
              <li>NumPy</li>
            </ul>
          </div>

          <div className="card skill-card">
            <h3>Databases &amp; Tools</h3>
            <ul>
              <li>MySQL</li>
              <li>MongoDB</li>
              <li>GitHub</li>
              <li>Visual Studio Code</li>
              <li>Ubuntu (Linux)</li>
              <li>Selenium</li>
              <li>Jira &amp; Slack</li>
            </ul>
          </div>

          <div className="card skill-card">
            <h3>Practices &amp; Methodologies</h3>
            <ul>
              <li>Agile (Scrum)</li>
              <li>Software Development Lifecycle (SDLC)</li>
              <li>CI/CD with GitHub Actions</li>
              <li>Project Management &amp; Documentation</li>
              <li>Systematic debugging &amp; testing</li>
            </ul>
          </div>
        </div>
      </section>

      {/* EDUCATION SECTION */}
      <section id="education" className="section education-section">
        <div className="section-header">
          <h2>Education</h2>
          <div className="section-underline" />
          <p>My academic background.</p>
        </div>

        <div className="education-grid">
          <div className="card education-card">
            <h3>Academic Background</h3>

            <div className="education-item">
              <h4>Master of Science – Computer and Information Science</h4>
              <p className="education-school">
                The University of Texas at Arlington, TX, USA
              </p>
              <p className="education-detail">
                <FiCalendar /> Fall 2024 – Spring 2026 (Expected)
              </p>
              <p className="education-detail">
                GPA (Current): 4.0 / 4.0
              </p>
            </div>

            <div className="education-item">
              <h4>Bachelor of Technology – Computer Science Engineering</h4>
              <p className="education-school">
                Sagi Rama Krishnam Raju Engineering College, AP, India
              </p>
              <p className="education-detail">
                <FiCalendar /> 2020 – 2024
              </p>
              <p className="education-detail">
                GPA: 8.78 / 10
              </p>
            </div>
          </div>

          <div className="card education-card">
            <h3>Highlights</h3>
            <ul className="education-highlights">
              <li>
                Strong academic performance across both undergraduate and
                graduate programs in computer science.
              </li>
              <li>
                Coursework and projects focused on full-stack development, data
                structures, algorithms, databases, and machine learning.
              </li>
              <li>
                Hands-on experience building end-to-end applications integrated
                with secure backends and modern UIs.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="section contact-section">
        <div className="section-header">
          <h2>Contact Me</h2>
          <div className="section-underline" />
          <p>
            Feel free to reach out for opportunities, collaborations, or project
            discussions.
          </p>
        </div>

        <div className="contact-grid">
          {/* Get in Touch */}
          <div className="card contact-card">
            <h3>Get In Touch</h3>
            <p>
              I’m interested in full-stack development roles, internships, and
              collaborative projects involving web applications, backend
              systems, and data-driven solutions. If you think I could be a good
              fit for your team or project, please contact me.
            </p>

            <div className="contact-item">
              <FiMail />
              <div>
                <span className="muted-label">Email</span>
                <br />
                <a
                  href="mailto:akshayvegesna488@gmail.com"
                  className="about-link"
                >
                  akshayvegesna488@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-item">
              <FiPhone />
              <div>
                <span className="muted-label">Phone</span>
                <br />
                +1 443 603 8788
              </div>
            </div>

            <div className="contact-item">
              <FiMapPin />
              <div>
                <span className="muted-label">Location</span>
                <br />
                Arlington, Texas, United States
              </div>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="card contact-card">
            <h3>Social Profiles</h3>
            <p>
              Connect with me on professional networks and view my repositories
              and projects.
            </p>

            <a
              href="https://github.com/akshayvegesna2233"
              target="_blank"
              rel="noreferrer"
              className="contact-link-row"
            >
              <FiGithub />
              <span>GitHub: github.com/akshayvegesna2233</span>
              <FiExternalLink />
            </a>

            <a
              href="https://www.linkedin.com/in/Akshay-varma-vegesna"
              target="_blank"
              rel="noreferrer"
              className="contact-link-row"
            >
              <FiLinkedin />
              <span>LinkedIn: Akshay Varma Vegesna</span>
              <FiExternalLink />
            </a>

            <button
              className="btn btn-primary contact-btn"
              onClick={() =>
                (window.location.href =
                  "mailto:akshayvegesna488@gmail.com")
              }
            >
              <FiMail />
              <span>Send me an email</span>
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-left">
          <p className="footer-name">
            Akshay <span>Varma Vegesna</span>
          </p>
          <p className="footer-role">Full-Stack Developer</p>
        </div>

        <button
          className="footer-top-btn"
          onClick={() =>
            window.scrollTo({ top: 0, behavior: "smooth" })
          }
          aria-label="Back to top"
        >
          <FiArrowUp />
        </button>

        <p className="footer-copy">
          © {new Date().getFullYear()} Akshay Varma Vegesna. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
