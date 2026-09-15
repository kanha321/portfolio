import React from 'react'
import { Hero } from '../components/Hero'
import { siteConfig } from '../data/siteConfig'
import { experienceList } from '../data/experience'
import { educationList } from '../data/education'
import { skillsData } from '../data/skills'
import { projectsList } from '../data/projects'
import { achievementsList } from '../data/achievements'

export const ResumePage = () => {
  return (
    <>
      <Hero
        title="Resume"
        description="A structured overview of my experience, education, skills, and technical achievements."
      >
        <div style={{ marginTop: '1.25rem' }}>
          <a
            href={siteConfig.resumeUrl}
            download="Shubham_Gupta_CV.pdf"
            className="button primary"
          >
            Download CV (PDF)
          </a>
        </div>
      </Hero>

      <div className="resume-container" style={{ marginTop: '2.5rem' }}>
        {/* Contact Info Bar */}
        <section className="card" style={{ marginBottom: '2rem' }}>
          <div className="flex-space-between" style={{ flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <h2 style={{ margin: '0 0 0.25rem', fontSize: '1.5rem' }}>{siteConfig.name}</h2>
              <div style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                {siteConfig.tagline}
              </div>
            </div>
            <div style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
              <div><strong>Email:</strong> <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></div>
              <div><strong>Phone:</strong> {siteConfig.phone}</div>
              <div>
                <strong>GitHub:</strong>{' '}
                <a href={siteConfig.social.github} target="_blank" rel="noreferrer">
                  github.com/kanha321
                </a>
              </div>
              <div>
                <strong>LinkedIn:</strong>{' '}
                <a href={siteConfig.social.linkedin} target="_blank" rel="noreferrer">
                  linkedin.com/in/kanha321
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Work Experience */}
        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ borderBottom: '2px solid var(--color-border)', paddingBottom: '0.5rem', marginBottom: '1.25rem' }}>
            Work Experience
          </h2>
          {experienceList.map((exp) => (
            <div key={exp.id} style={{ marginBottom: '1.5rem' }}>
              <div className="flex-space-between" style={{ flexWrap: 'wrap', alignItems: 'baseline' }}>
                <h3 style={{ margin: 0, fontSize: '1.2rem' }}>
                  {exp.role} — <span style={{ color: 'var(--color-primary)' }}>{exp.company}</span>
                  {exp.certificateUrl && (
                    <a
                      href={exp.certificateUrl}
                      target="_blank"
                      rel="noreferrer"
                      style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-primary)', marginLeft: '0.5rem' }}
                    >
                      [Certificate ↗]
                    </a>
                  )}
                </h3>
                <span style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                  {exp.period} | {exp.location}
                </span>
              </div>
              <div style={{ fontStyle: 'italic', fontSize: '0.88rem', color: 'var(--color-text-muted)', margin: '0.25rem 0 0.5rem' }}>
                {exp.stack}
              </div>
              <ul style={{ paddingLeft: '1.25rem', margin: 0 }}>
                {exp.bullets.map((b, i) => (
                  <li key={i} style={{ marginBottom: '0.35rem', lineHeight: 1.5 }}>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Technical Skills */}
        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ borderBottom: '2px solid var(--color-border)', paddingBottom: '0.5rem', marginBottom: '1.25rem' }}>
            Technical Skills
          </h2>
          <div style={{ display: 'grid', gap: '0.75rem' }}>
            {skillsData.map((cat) => (
              <div key={cat.category} style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'baseline' }}>
                <strong style={{ minWidth: '160px', color: 'var(--color-text-emphasized)' }}>
                  {cat.category}:
                </strong>
                <span style={{ color: 'var(--color-text)' }}>
                  {cat.skills.map((s) => s.name).join(', ')}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Selected Projects */}
        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ borderBottom: '2px solid var(--color-border)', paddingBottom: '0.5rem', marginBottom: '1.25rem' }}>
            Recent Projects
          </h2>
          {projectsList.map((proj) => (
            <div key={proj.slug} style={{ marginBottom: '1.25rem' }}>
              <div className="flex-space-between" style={{ flexWrap: 'wrap', alignItems: 'baseline' }}>
                <h3 style={{ margin: 0, fontSize: '1.15rem' }}>
                  <a href={proj.github} target="_blank" rel="noreferrer">
                    {proj.name}
                  </a>
                  {proj.award && (
                    proj.awardUrl ? (
                      <a
                        href={proj.awardUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="chip"
                        style={{ marginLeft: '0.5rem', verticalAlign: 'middle', textDecoration: 'none' }}
                        title="View certificate / proof"
                      >
                        <span className="chip-highlight">{proj.award} ↗</span>
                      </a>
                    ) : (
                      <span className="chip" style={{ marginLeft: '0.5rem', verticalAlign: 'middle' }}>
                        <span className="chip-highlight">{proj.award}</span>
                      </span>
                    )
                  )}
                </h3>
                <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                  {proj.date}
                </span>
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', margin: '0.2rem 0 0.4rem' }}>
                <strong>Tech Stack:</strong> {proj.tech.join(', ')}
              </div>
              <p style={{ margin: 0, lineHeight: 1.5, fontSize: '0.95rem' }}>
                {proj.description}
              </p>
            </div>
          ))}
        </section>

        {/* Education */}
        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ borderBottom: '2px solid var(--color-border)', paddingBottom: '0.5rem', marginBottom: '1.25rem' }}>
            Education
          </h2>
          {educationList.map((edu) => (
            <div key={edu.degree} style={{ marginBottom: '1rem' }}>
              <div className="flex-space-between" style={{ flexWrap: 'wrap', alignItems: 'baseline' }}>
                <div>
                  <h3 style={{ margin: 0, fontSize: '1.15rem' }}>{edu.degree}</h3>
                  <div style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                    {edu.institution}
                  </div>
                </div>
                <div style={{ textAlign: 'right', fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                  <div>{edu.period}</div>
                  <div><strong>{edu.grade}</strong></div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Achievements */}
        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ borderBottom: '2px solid var(--color-border)', paddingBottom: '0.5rem', marginBottom: '1.25rem' }}>
            Honors & Achievements
          </h2>
          <ul style={{ paddingLeft: '1.25rem', margin: 0 }}>
            {achievementsList.map((ach) => (
              <li key={ach.title} style={{ marginBottom: '0.5rem', lineHeight: 1.5 }}>
                <strong>{ach.title}</strong>: {ach.description}
                {ach.certificateUrl && (
                  <>
                    {' '}
                    <a
                      href={ach.certificateUrl}
                      target="_blank"
                      rel="noreferrer"
                      style={{ fontWeight: 600, color: 'var(--color-primary)' }}
                    >
                      [Certificate ↗]
                    </a>
                  </>
                )}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  )
}
