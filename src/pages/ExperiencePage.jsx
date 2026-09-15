import React from 'react'
import { Hero } from '../components/Hero'
import { ExperienceCard } from '../components/ExperienceCard'
import { experienceList } from '../data/experience'
import { Briefcase } from '../assets/Briefcase'
import { siteConfig } from '../data/siteConfig'

export const ExperiencePage = () => {
  return (
    <>
      <Hero
        title="Experience"
        description="Professional software engineering and Android development experience, from multiplatform architectures to low-level video playback optimization."
      />

      <div style={{ marginTop: '2rem' }}>
        {experienceList.map((item) => (
          <ExperienceCard key={item.id} item={item} />
        ))}
      </div>

      <section className="card" style={{ marginTop: '2.5rem', background: 'var(--color-background-alternate)' }}>
        <h3 style={{ marginTop: 0 }}>Engineering Approach</h3>
        <p>
          Throughout my engineering internships and productions, I focus on:
        </p>
        <ul style={{ paddingLeft: '1.25rem', margin: 0 }}>
          <li>
            <strong>Performance on Constraints</strong>: Tuning buffer sizes, cache limits, and memory allocation in ExoPlayer to maintain 60 FPS playback on budget Android devices.
          </li>
          <li>
            <strong>Shared Business Logic with KMP</strong>: Minimizing duplication by sharing data layers, networking, and state models across Android, iOS, and Desktop platforms.
          </li>
          <li>
            <strong>Decoupled Architecture</strong>: Following strict Clean Architecture and MVVM patterns to ensure maintainability and testability.
          </li>
        </ul>
        <div style={{ marginTop: '1.25rem' }}>
          <a
            href={siteConfig.resumeUrl}
            download
            className="button secondary small"
          >
            Download Full CV (PDF)
          </a>
        </div>
      </section>
    </>
  )
}
