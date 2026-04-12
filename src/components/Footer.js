import { Container, Row, Col } from 'react-bootstrap';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { personalInfo } from '../data/portfolioData';

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row className="footer-row">
          <Col xs={12} md={4} className="footer-brand">
            <h3>{personalInfo.name}</h3>
            <p>Full Stack Developer · MERN Stack</p>
          </Col>
          <Col xs={12} md={4} className="footer-links">
            <a onClick={() => document.getElementById('home').scrollIntoView({ behavior: 'smooth' })}>Home</a>
            <a onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>Projects</a>
            <a onClick={() => document.getElementById('certificates').scrollIntoView({ behavior: 'smooth' })}>Certificates</a>
            <a onClick={() => document.getElementById('connect').scrollIntoView({ behavior: 'smooth' })}>Contact</a>
          </Col>
          <Col xs={12} md={4} className="footer-social">
            <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer">
              <img src={navIcon1} alt="LinkedIn" />
            </a>
            <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer">
              <img src={navIcon2} alt="GitHub" className="github-icon" />
            </a>
            <a href={personalInfo.social.instagram} target="_blank" rel="noopener noreferrer">
              <img src={navIcon3} alt="Instagram" />
            </a>
          </Col>
        </Row>
        <p className="footer-copy">© {year} {personalInfo.name}. All rights reserved.</p>
      </Container>
    </footer>
  );
};
