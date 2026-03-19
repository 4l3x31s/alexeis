import resumeData from '../data/resume.json';

export default function ResumeContent() {
  const { personal, experience, skills, education, projects } = resumeData;

  return (
    <div className="resume-content" id="resume-content">
      <header className="resume-header">
        <h1 className="resume-name">{personal.name}</h1>
        <p className="resume-title">{personal.title}</p>
        <div className="resume-contact">
          <span>{personal.location}</span>
          <span>•</span>
          <span>{personal.email}</span>
        </div>
      </header>

      <section className="resume-section">
        <h2 className="resume-section-title">Resumen Profesional</h2>
        <p className="resume-summary">{personal.summary}</p>
      </section>

      <section className="resume-section">
        <h2 className="resume-section-title">Experiencia</h2>
        {experience.map((job) => (
          <div key={job.id} className="resume-job">
            <div className="resume-job-header">
              <h3 className="resume-role">{job.role}</h3>
              <span className="resume-period">{job.period}</span>
            </div>
            <p className="resume-company">{job.company}</p>
            <ul className="resume-description">
              {job.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="resume-section">
        <h2 className="resume-section-title">Habilidades</h2>
        <div className="resume-skills">
          <div className="resume-skill-group">
            <strong>Lenguajes:</strong> {skills.languages.join(', ')}
          </div>
          <div className="resume-skill-group">
            <strong>Frameworks:</strong> {skills.frameworks.join(', ')}
          </div>
          <div className="resume-skill-group">
            <strong>DevOps:</strong> {skills.devops.join(', ')}
          </div>
          <div className="resume-skill-group">
            <strong>LLMs & IA:</strong> {skills.ai_llm.join(', ')}
          </div>
          <div className="resume-skill-group">
            <strong>AI Automatización:</strong> {skills.ai_automation.join(', ')}
          </div>
        </div>
      </section>

      <section className="resume-section">
        <h2 className="resume-section-title">Educación</h2>
        <div className="resume-education">
          <h3 className="resume-degree">{education.degree}</h3>
          <p className="resume-institution">{education.institution}</p>
          <p className="resume-period">{education.period}</p>
          <p className="resume-courses">
            <strong>Cursos:</strong> {education.courses.join(', ')}
          </p>
        </div>
      </section>

      <section className="resume-section">
        <h2 className="resume-section-title">Proyectos & Emprendimientos</h2>
        <div className="resume-projects">
          {projects.map((project) => (
            <div key={project.id} className="resume-project">
              <strong>{project.name}</strong> - {project.description}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
