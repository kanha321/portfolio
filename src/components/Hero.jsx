import React from 'react'
import { Link } from 'react-router-dom'

export const Hero = ({
  highlight,
  subTitle,
  title,
  date,
  description,
  children,
  type = 'page',
  breadcrumb,
  icon
}) => {
  return (
    <header className={`hero hero-${type}`}>
      {subTitle && (
        <div className="sub-title">
          {breadcrumb && (
            <>
              <Link to={breadcrumb.value}>{breadcrumb.label}</Link>{' '}
              <span>/</span>
            </>
          )}
          <div>
            {highlight && <span className="highlight">{highlight}</span>}
            <span>{subTitle}</span>
          </div>
        </div>
      )}
      {date && <div className="post-date">{date}</div>}
      {title && (
        <h1 className={date ? 'has-date' : 'flex-align-center large-gap'}>
          {icon && <img src={icon} alt="" />}
          {title}
        </h1>
      )}
      {description && <div className="hero-description">{description}</div>}
      {children}
    </header>
  )
}
