import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import TrackVisibility from 'react-on-screen';
import { personalInfo } from '../data/portfolioData';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(150);
  const period = 2000;
  const toRotate = personalInfo.roles;

  useEffect(() => {
    let ticker = setInterval(() => { tick(); }, delta);
    return () => clearInterval(ticker);
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);
    if (isDeleting) setDelta(prev => prev / 2);
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(150);
    }
  };

  return (
    <section className="banner" id="home">
      <div className="banner-bg-grid"></div>
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">👋 Welcome to my Portfolio</span>
                  <h1>
                    Hi! I'm <span className="name-highlight">{personalInfo.name}</span>
                    <br />
                    <span className="txt-rotate">
                      <span className="wrap">{text}</span>
                      <span className="cursor">|</span>
                    </span>
                  </h1>
                  <p>{personalInfo.bio}</p>
                  <div className="banner-btns">
                    <button className="btn-primary-custom" onClick={() => document.getElementById('connect').scrollIntoView({ behavior: 'smooth' })}>
                      Let's Connect <ArrowRightCircle size={20} />
                    </button>
                    <button className="btn-outline-custom" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
                      View Projects
                    </button>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__zoomIn banner-avatar-wrap" : "banner-avatar-wrap"}>
                  <div className="avatar-ring">
                    <div className="avatar-inner">
                      <span className="avatar-initials">AT</span>
                    </div>
                  </div>
                  <div className="floating-badge badge-1">React</div>
                  <div className="floating-badge badge-2">Node.js</div>
                  <div className="floating-badge badge-3">MongoDB</div>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
