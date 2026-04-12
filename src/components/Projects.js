import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TrackVisibility from 'react-on-screen';
import { projects } from '../data/portfolioData';
import { Github, ArrowUpRight } from 'react-bootstrap-icons';

const PlaceholderImg = ({ title }) => (
  <div className="project-img-placeholder">
    <div className="placeholder-code">{"</ >"}</div>
    <span>{title}</span>
  </div>
);

export const Projects = () => {
  const [filter, setFilter] = useState('all');
  const tags = ['all', ...new Set(projects.flatMap(p => p.techStack))].slice(0, 6);

  const filtered = filter === 'all'
    ? projects
    : projects.filter(p => p.techStack.includes(filter));

  return (
    <section className="projects-section" id="projects">
      <Container>
        <Row>
          <Col xs={12}>
            <div className="section-header">
              <span className="section-tag">What I've Built</span>
              <h2>Projects</h2>
            </div>
            <div className="filter-tabs">
              {tags.map(tag => (
                <button
                  key={tag}
                  className={`filter-tab ${filter === tag ? 'active' : ''}`}
                  onClick={() => setFilter(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
          </Col>
        </Row>
        <Row className="project-grid">
          {filtered.map((proj, i) => (
            <Col xs={12} md={6} lg={4} key={i}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div className={`project-card ${isVisible ? 'animate__animated animate__fadeInUp' : ''}`} style={{ animationDelay: `${i * 0.1}s` }}>
                    <div className="project-img-wrap">
                      {proj.image
                        ? <img src={proj.image} alt={proj.title} />
                        : <PlaceholderImg title={proj.title} />
                      }
                      {proj.featured && <span className="featured-badge">Featured</span>}
                    </div>
                    <div className="project-body">
                      <span className="project-subtitle">{proj.subtitle}</span>
                      <h3 className="project-title">{proj.title}</h3>
                      <p className="project-desc">{proj.description}</p>
                      <div className="project-stack">
                        {proj.techStack.map((t, k) => (
                          <span key={k} className="tech-pill">{t}</span>
                        ))}
                      </div>
                      <div className="project-links">
                        <a href={proj.githubLink} target="_blank" rel="noopener noreferrer" className="proj-link">
                          <Github size={16} /> Code
                        </a>
                        {proj.liveLink && proj.liveLink !== '#' && (
                          <a href={proj.liveLink} target="_blank" rel="noopener noreferrer" className="proj-link live">
                            <ArrowUpRight size={16} /> Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </TrackVisibility>
            </Col>
          ))}
        </Row>
        {filtered.length === 0 && (
          <p className="no-results">No projects found for this filter.</p>
        )}
      </Container>
    </section>
  );
};
