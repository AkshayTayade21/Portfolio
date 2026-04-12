import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { personalInfo } from '../data/portfolioData';
import { Envelope, Telephone, GeoAlt, Linkedin, Github } from 'react-bootstrap-icons';

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Wire up to your preferred email service (EmailJS, Formspree, etc.)
    setStatus('Thanks! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact-section" id="connect">
      <Container>
        <Row>
          <Col xs={12}>
            <div className="section-header">
              <span className="section-tag">Get In Touch</span>
              <h2>Contact Me</h2>
            </div>
          </Col>
        </Row>
        <Row className="contact-row">
          <Col xs={12} md={5} className="contact-info-col">
            <h3>Let's work together</h3>
            <p>I'm open to full-time roles, freelance projects, and collaborations. Feel free to reach out!</p>
            <div className="contact-detail">
              <Envelope size={20} />
              <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
            </div>
            <div className="contact-detail">
              <Telephone size={20} />
              <span>+91 {personalInfo.phone}</span>
            </div>
            <div className="contact-detail">
              <GeoAlt size={20} />
              <span>{personalInfo.location}</span>
            </div>
            <div className="contact-socials">
              <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin size={22} /> LinkedIn
              </a>
              <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer">
                <Github size={22} /> GitHub
              </a>
            </div>
          </Col>
          <Col xs={12} md={7} className="contact-form-col">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                  required
                />
              </div>
              {status && <p className="form-success">{status}</p>}
              <button type="submit" className="btn-primary-custom">Send Message</button>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
