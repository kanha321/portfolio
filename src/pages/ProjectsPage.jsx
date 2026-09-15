import React, { useState } from 'react'
import { Hero } from '../components/Hero'
import { ProjectCard } from '../components/ProjectCard'
import { projectsList } from '../data/projects'
import navProjects from '../assets/nav-projects.png'

export const ProjectsPage = () => {
  const [filter, setFilter] = useState('All')
  const categories = ['All', 'Systems & Networking', 'Android & Mobile', 'AI & Vision', 'UI & Graphics', 'Hackathon Winners']

  const filteredProjects = projectsList.filter((project) => {
    if (filter === 'All') return true
    if (filter === 'Systems & Networking') {
      return project.tech.some((t) => ['C++', 'WinDivert', 'Winsock', 'TCP/IP', 'Spring Boot', 'DASH', 'HLS', 'FastAPI'].includes(t))
    }
    if (filter === 'Android & Mobile') {
      return project.tech.some((t) => ['Kotlin', 'Jetpack Compose', 'KMP', 'Kotlin Multiplatform (KMP)'].includes(t))
    }
    if (filter === 'AI & Vision') {
      return project.tech.some((t) => ['TensorFlow Lite', 'CLIP', 'YOLOv8', 'Computer Vision'].includes(t))
    }
    if (filter === 'UI & Graphics') {
      return project.tech.some((t) => ['Rust', 'egui', 'Physics ODEs', 'Unity'].includes(t))
    }
    if (filter === 'Hackathon Winners') {
      return !!project.award
    }
    return true
  })

  return (
    <>
      <Hero
        title="Projects"
        description="Systems software, kernel network tooling, Android applications, hackathon-winning prototypes, and UI engines I've built."
        icon={navProjects}
      />

      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', margin: '1.5rem 0 2rem' }}>
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            className={`button ${filter === cat ? '' : 'secondary'} small`}
            onClick={() => setFilter(cat)}
            style={{ borderRadius: '20px' }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="cards cards-two-col">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </>
  )
}
