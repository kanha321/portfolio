import React from 'react'
import { Link } from 'react-router-dom'
import { Hero } from '../components/Hero'
import { siteConfig } from '../data/siteConfig'
import { aboutData } from '../data/about'
import { educationList } from '../data/education'
import { achievementsList } from '../data/achievements'

export const AboutPage = () => {
  return (
    <>
      <Hero
        title="About Me"
        description={aboutData.headline}
      />

      <article style={{ marginTop: '2rem' }}>
        {aboutData.paragraphs.map((p, idx) => (
          <p key={idx} style={{ fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
            {p}
          </p>
        ))}

        <h2 id="education" style={{ marginTop: '2.5rem', borderBottom: '2px solid var(--color-border)', paddingBottom: '0.5rem' }}>
          Education
        </h2>
        <div className="cards cards-half" style={{ marginTop: '1.5rem' }}>
          {educationList.map((edu) => (
            <div className="card" key={edu.degree}>
              <div className="flex-space-between">
                <span className="chip"><span className="chip-highlight">{edu.period}</span></span>
                <strong>{edu.grade}</strong>
              </div>
              <h3 style={{ margin: '0.75rem 0 0.25rem', fontSize: '1.15rem' }}>{edu.degree}</h3>
              <div style={{ color: 'var(--color-primary)', fontWeight: 600, marginBottom: '0.5rem' }}>
                {edu.institution}
              </div>
              <p style={{ fontSize: '0.9rem', margin: 0 }}>{edu.description}</p>
            </div>
          ))}
        </div>

        <h2 style={{ marginTop: '2.5rem', borderBottom: '2px solid var(--color-border)', paddingBottom: '0.5rem' }}>
          Toolbox & Specialties
        </h2>
        <div className="cards cards-half" style={{ marginTop: '1.5rem' }}>
          {aboutData.toolbox.map((item) => (
            <div className="card" key={item.title}>
              <div style={{ fontWeight: 600, fontSize: '1.05rem', marginBottom: '0.5rem' }}>
                {item.title}
              </div>
              <p style={{ margin: 0, color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
                {item.items}
              </p>
            </div>
          ))}
        </div>

        <h2 style={{ marginTop: '2.5rem', borderBottom: '2px solid var(--color-border)', paddingBottom: '0.5rem' }}>
          Competitions & Recognition
        </h2>
        <div style={{ marginTop: '1.5rem' }}>
          <ul style={{ paddingLeft: '1.25rem' }}>
            {achievementsList.map((ach) => (
              <li key={ach.title} style={{ marginBottom: '0.75rem', lineHeight: 1.6 }}>
                <strong>{ach.title}</strong> ({ach.year}): {ach.description}
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
        </div>

        <div className="card" style={{ marginTop: '2.5rem', background: 'var(--color-background-alternate)' }}>
          <h3 style={{ marginTop: 0 }}>Let's Connect</h3>
          <p>
            I am always open to exploring new engineering opportunities, open-source collaborations, and challenging projects in mobile development, backend infrastructure, or machine learning.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
            <a href={siteConfig.social.email} className="button primary small">
              Email Me ({siteConfig.email})
            </a>
            <a href={siteConfig.social.github} target="_blank" rel="noreferrer" className="button secondary small">
              GitHub Profile
            </a>
            <a href={siteConfig.social.linkedin} target="_blank" rel="noreferrer" className="button secondary small">
              LinkedIn
            </a>
          </div>
        </div>
      </article>
    </>
  )
}
