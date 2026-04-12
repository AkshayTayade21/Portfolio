import { Container, Row, Col } from 'react-bootstrap';
import TrackVisibility from 'react-on-screen';
import { certificates } from '../data/portfolioData';
import { Award, BoxArrowUpRight } from 'react-bootstrap-icons';

const CertPlaceholder = ({ issuer }) => (
  <div className="cert-img-placeholder">
    <Award size={40} />
    <span>{issuer}</span>
  </div>
);

export const Certificates = () => {
  if (certificates.length === 0) return null;

  return (
    <section className="certificates-section" id="certificates">
      <Container>
        <Row>
          <Col xs={12}>
            <div className="section-header">
              <span className="section-tag">My Credentials</span>
              <h2>Certificates</h2>
            </div>
          </Col>
        </Row>
        <Row>
          {certificates.map((cert, i) => (
            <Col xs={12} sm={6} lg={4} key={i}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div className={`cert-card ${isVisible ? 'animate__animated animate__fadeInUp' : ''}`} style={{ animationDelay: `${i * 0.1}s` }}>
                    <div className="cert-img-wrap">
                      {cert.image
                        ? <img src={cert.image} alt={cert.title} />
                        : <CertPlaceholder issuer={cert.issuer} />
                      }
                    </div>
                    <div className="cert-body">
                      <h3 className="cert-title">{cert.title}</h3>
                      <p className="cert-issuer">{cert.issuer}</p>
                      <p className="cert-date">{cert.date}</p>
                      {cert.skills && cert.skills.length > 0 && (
                        <div className="cert-skills">
                          {cert.skills.map((s, k) => (
                            <span key={k} className="tech-pill">{s}</span>
                          ))}
                        </div>
                      )}
                      {cert.credentialLink && cert.credentialLink !== '#' && (
                        <a href={cert.credentialLink} target="_blank" rel="noopener noreferrer" className="cert-verify-link">
                          <BoxArrowUpRight size={14} /> Verify Credential
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </TrackVisibility>
            </Col>
          ))}
        </Row>

        {/* ADD CERTIFICATE GUIDE */}
        {/* <Row>
          <Col xs={12}>
            <div className="add-cert-hint">
              <p>🎓 To add a new certificate, open <code>src/data/portfolioData.js</code> and add an entry to the <code>certificates</code> array.</p>
            </div>
          </Col>
        </Row> */}
      </Container>
    </section>
  );
};
