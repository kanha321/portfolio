import React, { useState } from 'react'

export const ProjectCard = ({ project }) => {
  const [showMore, setShowMore] = useState(false)

  return (
    <div
      className={`card project-card ${showMore ? 'is-expanded' : ''}`}
      key={project.slug}
      style={{
        padding: '1.25rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition: 'all 0.25s ease'
      }}
    >
      <div>
        {/* Top Meta: Date & Category */}
        <div className="flex-space-between" style={{ alignItems: 'flex-start', marginBottom: '0.4rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
            <span className="chip" style={{ fontSize: '0.8rem' }}>
              <span className="chip-highlight">{project.date}</span>
            </span>
            {project.type && (
              <span style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', fontWeight: 500 }}>
                {project.type}
              </span>
            )}
          </div>
        </div>

        {/* Title */}
        <h3 style={{ margin: '0.35rem 0 0.25rem', fontSize: '1.35rem' }}>
          <a
            className="card-header"
            href={project.github}
            target="_blank"
            rel="noreferrer"
            style={{ color: 'var(--color-text-emphasized)' }}
          >
            {project.name}
          </a>
        </h3>

        {/* Award Badge if present */}
        {project.award && (
          <div style={{ margin: '0.35rem 0 0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
            {project.awardUrl ? (
              <a
                href={project.awardUrl}
                target="_blank"
                rel="noreferrer"
                className="chip"
                style={{ background: 'var(--color-background-alternate)', textDecoration: 'none' }}
                title="View certificate / proof"
              >
                <span className="chip-highlight" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                  🏆 {project.award} ↗
                </span>
              </a>
            ) : (
              <span className="chip" style={{ background: 'var(--color-background-alternate)' }}>
                <span className="chip-highlight" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                  🏆 {project.award}
                </span>
              </span>
            )}
          </div>
        )}

        {/* Tagline: Clean, concise summary shown by default */}
        <p style={{ fontSize: '0.95rem', color: 'var(--color-text)', margin: '0.4rem 0 0.85rem', lineHeight: 1.55 }}>
          {project.tagline}
        </p>

        {/* Full-Width Expandable Technical Breakdown (Spanning both columns) */}
        {showMore && (
          <div
            style={{
              marginTop: '1rem',
              marginBottom: '1rem',
              paddingTop: '1rem',
              borderTop: '1px solid var(--color-border)',
              animation: 'fadeIn 0.25s ease'
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '1.5rem',
                alignItems: 'start'
              }}
            >
              {/* Left Column: Overview & The Challenge */}
              <div>
                <h4 style={{ margin: '0 0 0.5rem', fontSize: '1.05rem', color: 'var(--color-text-emphasized)' }}>
                  Overview & Motivation
                </h4>
                {project.description && (
                  <p style={{ margin: '0 0 0.75rem', lineHeight: 1.6, fontSize: '0.92rem', color: 'var(--color-text)' }}>
                    {project.description}
                  </p>
                )}

                {project.problem && (
                  <div
                    style={{
                      padding: '0.75rem 1rem',
                      background: 'var(--color-background-alternate)',
                      borderRadius: 'var(--border-radius)',
                      borderLeft: '3px solid var(--color-primary)',
                      fontSize: '0.88rem',
                      lineHeight: 1.55
                    }}
                  >
                    <strong style={{ color: 'var(--color-text-emphasized)' }}>The Problem: </strong>
                    <span>{project.problem}</span>
                  </div>
                )}
              </div>

              {/* Right Column: Architecture & Key Decisions */}
              {project.highlights && project.highlights.length > 0 && (
                <div
                  style={{
                    padding: '1rem 1.15rem',
                    background: 'var(--color-background-alternate)',
                    borderRadius: 'var(--border-radius)',
                    border: '1px solid var(--color-border)'
                  }}
                >
                  <h4 style={{ margin: '0 0 0.6rem', fontSize: '1.05rem', color: 'var(--color-text-emphasized)' }}>
                    Architecture & Implementation
                  </h4>
                  <ul style={{ paddingLeft: '1.15rem', margin: 0, fontSize: '0.88rem', lineHeight: 1.6 }}>
                    {project.highlights.map((highlight, idx) => {
                      const [title, ...rest] = highlight.split(': ')
                      return (
                        <li key={idx} style={{ marginBottom: '0.45rem' }}>
                          {rest.length > 0 ? (
                            <>
                              <strong style={{ color: 'var(--color-primary)' }}>{title}:</strong> {rest.join(': ')}
                            </>
                          ) : (
                            highlight
                          )}
                        </li>
                      )
                    })}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Footer: Tags & Action Links */}
      <div>
        {project.tech && (
          <div className="tags" style={{ marginBottom: '0.85rem' }}>
            {project.tech.map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>
        )}

        <div
          className="card-links"
          style={{
            borderTop: '1px solid var(--color-border)',
            paddingTop: '0.75rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '0.5rem'
          }}
        >
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" style={{ fontWeight: 600 }}>
                Source Code &rarr;
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noreferrer" style={{ fontWeight: 600 }}>
                Live Demo &rarr;
              </a>
            )}
            {project.awardUrl && (
              <a
                href={project.awardUrl}
                target="_blank"
                rel="noreferrer"
                style={{ fontWeight: 600, color: 'var(--color-primary)' }}
              >
                Certificate ↗
              </a>
            )}
          </div>

          <button
            type="button"
            className={`button ${showMore ? 'primary' : 'secondary'} small`}
            onClick={() => setShowMore(!showMore)}
            style={{
              fontSize: '0.8rem',
              padding: '4px 12px',
              borderRadius: '12px',
              cursor: 'pointer'
            }}
          >
            {showMore ? 'Collapse Details ▲' : 'More Info ▼'}
          </button>
        </div>
      </div>
    </div>
  )
}
