import React from 'react'

export const ExperienceCard = ({ item, featured = false }) => {
  return (
    <article
      className={`card experience-card ${featured ? 'card-featured-experience' : ''}`}
      id={item.id}
      style={{
        marginBottom: '1.75rem',
        borderLeft: '4px solid var(--color-primary)',
        position: 'relative'
      }}
    >
      <div className="flex-space-between" style={{ alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.75rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
            <h3 style={{ margin: 0, fontSize: '1.3rem', color: 'var(--color-text-emphasized)' }}>
              {item.role}
            </h3>
            {item.certificateUrl ? (
              <a
                href={item.certificateUrl}
                target="_blank"
                rel="noreferrer"
                className="chip"
                style={{ fontSize: '0.75rem', textDecoration: 'none' }}
                title="View Experience Certificate / Proof"
              >
                <span className="chip-highlight" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
                  Verified Certificate ↗
                </span>
              </a>
            ) : item.certificate ? (
              <span className="chip" style={{ fontSize: '0.75rem' }}>
                <span className="chip-highlight">Verified Role</span>
              </span>
            ) : null}
          </div>
          <div style={{ fontWeight: 700, color: 'var(--color-primary)', fontSize: '1.1rem', marginTop: '0.2rem' }}>
            {item.company}
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <span className="chip">
            <span className="chip-highlight">{item.period}</span>
          </span>
          <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginTop: '0.35rem' }}>
            {item.location}
          </div>
        </div>
      </div>

      <div
        style={{
          fontSize: '0.9rem',
          color: 'var(--color-text-muted)',
          margin: '0.75rem 0',
          padding: '0.4rem 0.75rem',
          background: 'var(--color-background-alternate)',
          borderRadius: 'var(--border-radius)',
          borderLeft: '2px solid var(--color-primary)'
        }}
      >
        <strong>Architecture:</strong> {item.stack}
      </div>

      <ul style={{ paddingLeft: '1.25rem', margin: '0.75rem 0' }}>
        {item.bullets.map((bullet, idx) => (
          <li key={idx} style={{ marginBottom: '0.5rem', lineHeight: 1.6, fontSize: '0.98rem' }}>
            {bullet}
          </li>
        ))}
      </ul>

      {item.tags && (
        <div className="tags" style={{ marginTop: '0.85rem' }}>
          {item.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      )}

      {item.certificateUrl && (
        <div style={{ marginTop: '0.85rem' }}>
          <a
            href={item.certificateUrl}
            target="_blank"
            rel="noreferrer"
            style={{
              fontSize: '0.88rem',
              fontWeight: 600,
              color: 'var(--color-primary)'
            }}
          >
            View Experience Certificate / Proof ↗
          </a>
        </div>
      )}
    </article>
  )
}
