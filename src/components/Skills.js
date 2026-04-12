import TrackVisibility from 'react-on-screen';
import { Container, Row, Col } from 'react-bootstrap';
import { skills } from '../data/portfolioData';

export const Skills = () => {
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col xs={12}>
            <div className="section-header">
              <span className="section-tag">What I Know</span>
              <h2>Technical Skills</h2>
            </div>
          </Col>
        </Row>
        <Row className="skills-grid">
          {skills.map((skill, i) => (
            <Col xs={12} sm={6} md={4} key={i}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div className={`skill-item ${isVisible ? 'animate__animated animate__fadeInUp' : ''}`} style={{ animationDelay: `${i * 0.07}s` }}>
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percent">{skill.level}%</span>
                    </div>
                    <div className="skill-bar-bg">
                      <div
                        className="skill-bar-fill"
                        style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                      ></div>
                    </div>
                  </div>
                )}
              </TrackVisibility>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
