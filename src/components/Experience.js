import { Container, Row, Col } from 'react-bootstrap';
import TrackVisibility from 'react-on-screen';
import { experiences } from '../data/portfolioData';

export const Experience = () => {
  if (experiences.length === 0) return null;

  return (
    <section className="experience-section" id="experience">
      <Container>
        <Row>
          <Col xs={12}>
            <div className="section-header">
              <span className="section-tag">My Journey</span>
              <h2>Work Experience</h2>
            </div>
          </Col>
        </Row>
        <div className="timeline">
          {experiences.map((exp, i) => (
            <TrackVisibility key={i}>
              {({ isVisible }) => (
                <div className={`timeline-item ${isVisible ? 'animate__animated animate__fadeInLeft' : ''}`} style={{ animationDelay: `${i * 0.15}s` }}>
                  <div className="timeline-dot"></div>
                  <div className="timeline-card">
                    <div className="timeline-header">
                      <div>
                        <h3 className="exp-role">{exp.role}</h3>
                        <p className="exp-company">
                          <span className="company-name">{exp.company}</span>
                          {exp.location && <span className="exp-location"> · {exp.location}</span>}
                        </p>
                      </div>
                      <div className="exp-meta">
                        <span className="exp-badge">{exp.type}</span>
                        <p className="exp-dates">{exp.startDate} – {exp.endDate}</p>
                      </div>
                    </div>
                    <p className="exp-desc">{exp.description}</p>
                    <ul className="exp-points">
                      {exp.points.map((pt, j) => (
                        <li key={j}>{pt}</li>
                      ))}
                    </ul>
                    <div className="exp-stack">
                      {exp.techStack.map((t, k) => (
                        <span key={k} className="tech-pill">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </TrackVisibility>
          ))}
        </div>
      </Container>
    </section>
  );
};
