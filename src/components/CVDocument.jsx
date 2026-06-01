import { forwardRef } from 'react';

const C = {
  ink: '#0f172a',
  body: '#334155',
  muted: '#64748b',
  accent: '#2563eb',
  line: '#e2e8f0',
};

const CVDocument = forwardRef(function CVDocument({ data, t }, ref) {
  const { personal, experience, skills, education, languages, projects, social } = data;
  const cv = t.cv;
  const cat = t.skills.categories;

  const skillGroups = [
    [cat.architecture, skills.architecture],
    [cat.frontend, skills.frontend],
    [cat.mobile, skills.mobile],
    [cat.devops, skills.devops],
    [cat.ai_llm, skills.ai_llm],
    [cat.data, skills.data],
  ];

  const sectionTitle = (text) => (
    <h2
      style={{
        fontSize: '13px',
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '1px',
        color: C.accent,
        borderBottom: `2px solid ${C.line}`,
        paddingBottom: '4px',
        margin: '22px 0 12px',
      }}
    >
      {text}
    </h2>
  );

  return (
    <div
      ref={ref}
      style={{
        boxSizing: 'border-box',
        // ~A4 printable width at 96dpi minus the html2pdf page margins, so the
        // canvas is placed 1:1 inside the page without clipping on the right.
        width: '686px',
        background: '#ffffff',
        color: C.body,
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        padding: '8px 10px',
        fontSize: '13px',
        lineHeight: 1.5,
      }}
    >
      {/* Header */}
      <div style={{ borderBottom: `3px solid ${C.accent}`, paddingBottom: '14px' }}>
        <h1 style={{ fontSize: '28px', fontWeight: 800, color: C.ink, margin: 0 }}>{personal.name}</h1>
        <p style={{ fontSize: '15px', color: C.accent, fontWeight: 600, margin: '4px 0 8px' }}>{personal.title}</p>
        <p style={{ fontSize: '12px', color: C.muted, margin: 0 }}>
          {personal.location} · {personal.email} · {personal.phone}
        </p>
        <p style={{ fontSize: '12px', color: C.muted, margin: '2px 0 0' }}>
          {social.linkedin.replace('https://www.', '')} · {social.github.replace('https://', '')}
        </p>
      </div>

      {/* Summary */}
      {sectionTitle(cv.summary)}
      <p style={{ margin: 0 }}>{personal.summary}</p>

      {/* Experience */}
      {sectionTitle(cv.experience)}
      {experience.map((job) => (
        <div key={job.id} data-cv-block style={{ marginBottom: '14px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <span style={{ fontSize: '14px', fontWeight: 700, color: C.ink }}>{job.role}</span>
            <span style={{ fontSize: '11px', color: C.muted }}>{job.period}</span>
          </div>
          <div style={{ fontSize: '12px', color: C.accent, fontWeight: 600, marginBottom: '5px' }}>{job.company}</div>
          <ul style={{ margin: 0, paddingLeft: '16px' }}>
            {job.description.map((d, i) => (
              <li key={i} style={{ marginBottom: '2px' }}>{d}</li>
            ))}
          </ul>
          <div style={{ fontSize: '11px', color: C.muted, marginTop: '4px' }}>{job.stack.join(' · ')}</div>
        </div>
      ))}

      {/* Skills */}
      {sectionTitle(cv.skills)}
      {skillGroups.map(([title, items]) => (
        <p key={title} style={{ margin: '0 0 5px' }}>
          <strong style={{ color: C.ink }}>{title}:</strong> {items.join(', ')}
        </p>
      ))}

      {/* Education */}
      {sectionTitle(cv.education)}
      <p style={{ margin: 0 }}>
        <strong style={{ color: C.ink }}>{education.degree}</strong> — {education.institution} ({education.period})
      </p>
      {education.ongoing && (
        <p style={{ margin: '3px 0 0', color: C.accent, fontWeight: 600 }}>{education.ongoing}</p>
      )}
      <p style={{ margin: '6px 0 0', fontSize: '12px' }}>{education.courses.join(' · ')}</p>

      {/* Languages */}
      {sectionTitle(cv.languages)}
      <p style={{ margin: 0 }}>
        {languages.map((l) => `${l.name} (${l.level})`).join('  ·  ')}
      </p>

      {/* Projects */}
      {sectionTitle(cv.projects)}
      {projects.filter((p) => p.featured).map((p) => (
        <p key={p.id} data-cv-block style={{ margin: '0 0 6px' }}>
          <strong style={{ color: C.ink }}>{p.name}:</strong> {p.description}
        </p>
      ))}
    </div>
  );
});

export default CVDocument;
