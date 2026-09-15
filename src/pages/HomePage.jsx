import React from 'react'
import { Link } from 'react-router-dom'
import { Hero } from '../components/Hero'
import { Heading } from '../components/Heading'
import { ProjectCard } from '../components/ProjectCard'
import { ExperienceCard } from '../components/ExperienceCard'
import { siteConfig } from '../data/siteConfig'
import { heroTimeline } from '../data/timeline'
import { projectsList } from '../data/projects'
import { experienceList } from '../data/experience'
import { skillsData } from '../data/skills'
import { achievementsList } from '../data/achievements'

export const HomePage = () => {
  const highlightedProjects = projectsList.filter((p) => p.highlight)

  return (
    <>
      <Hero type="index">
        <div className="hero-wrapper">
          <div>
            <h1 className="flex-align-center gap">Hey, I'm {siteConfig.shortName}!</h1>
            <p className="hero-description hero-tagline">
              {siteConfig.tagline}
            </p>
            <Heading title="Highlights & Experience" small />
            <ul className="hero-eras">
              {heroTimeline.map((era) => (
                <li key={era.dates}>
                  <span className="era-dates">{era.dates}</span>
                  <span>
                    <Link to={era.linkUrl}>{era.linkText}</Link>: {era.description}
                  </span>
                </li>
              ))}
            </ul>
            <p className="hero-description" style={{ marginTop: '1rem' }}>
              <Link to="/about">More about me</Link>: native Android engineering, KMP cross-platform design, low-latency streaming protocols, machine learning on the edge, and competitive hackathons.
            </p>
          </div>
          <div className="hero-image-container">
            <img
              src={siteConfig.mascot.image}
              className="hero-image"
              alt={siteConfig.mascot.alt}
            />
            <aside className="hero-bubble">
              {siteConfig.mascot.bubbleText}
            </aside>
          </div>
        </div>
      </Hero>

      {/* Featured Work Experience Section (Highlighted First) */}
      <section className="section-index" style={{ marginTop: '2.5rem' }}>
        <Heading
          title="Work Experience"
          slug="/experience"
          buttonText="All Experience"
          description="Professional engineering roles in native Android development, Kotlin Multiplatform, and streaming optimization."
        />
        <div style={{ marginTop: '1.25rem' }}>
          {experienceList.map((item) => (
            <ExperienceCard key={item.id} item={item} featured={true} />
          ))}
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="section-index" style={{ marginTop: '2.5rem' }}>
        <Heading
          title="Featured Projects"
          slug="/projects"
          buttonText="All Projects"
          description="A selection of recent applications, hackathon winners, and streaming systems."
        />
        <div className="cards cards-two-col">
          {highlightedProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      {/* Skills Grid Section */}
      <section className="section-index" style={{ marginTop: '2.5rem' }}>
        <Heading
          title="Skills & Technologies"
          slug="/resume"
          buttonText="View Resume"
          description="Technologies, frameworks, and architectural paradigms I work with."
        />
        <div className="cards cards-half">
          {skillsData.map((category) => (
            <div className="card" key={category.category}>
              <div className="card-title" style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '0.5rem' }}>
                {category.category}
              </div>
              <p style={{ fontSize: '0.9rem', marginBottom: '0.75rem', color: 'var(--color-text-muted)' }}>
                {category.description}
              </p>
              <div className="tags">
                {category.skills.map((s) => (
                  <span key={s.name} className="tag">
                    {s.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements Section */}
      <section className="section-index" style={{ marginTop: '2.5rem' }}>
        <Heading
          title="Key Achievements"
          description="National hackathons, competitive examinations, and technical recognitions."
        />
        <div className="cards cards-half">
          {achievementsList.map((ach) => (
            <div className="card" key={ach.title}>
              <div className="flex-space-between" style={{ alignItems: 'flex-start' }}>
                <div style={{ fontWeight: 600, fontSize: '1.05rem', color: 'var(--color-text-emphasized)' }}>
                  {ach.title}
                </div>
                <span className="chip">
                  <span className="chip-highlight">{ach.year}</span>
                </span>
              </div>
              <div style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '0.9rem', margin: '0.25rem 0' }}>
                {ach.rank}
              </div>
              <p style={{ fontSize: '0.9rem', margin: 0 }}>{ach.description}</p>
              {ach.certificateUrl && (
                <div style={{ marginTop: '0.75rem' }}>
                  <a
                    href={ach.certificateUrl}
                    target="_blank"
                    rel="noreferrer"
                    style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-primary)' }}
                  >
                    View Certificate / Proof ↗
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
