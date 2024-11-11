import React from 'react';
import { Link, useHistory, useNavigate } from 'react-router-dom';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Image, Accordion } from 'react-bootstrap';
//Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//Constants
import { aboutHero, ourServices, visionMission, clientsLogo, frequentAQ } from '../constants/index.js';
//CSS
import '../components/css/AboutUs.css';
import '../components/css/Custom.css';
//Pages
import ContactUs from './ContactUs.js';
//Images
import ourTeam from '../assets/ourTeam.jpg'

const AboutUs = () => {
  const navigate = useNavigate();

  const handleIconClick = (serviceId) => {
    navigate(`/pricing/${serviceId}`);
  };

  return (
    <>
      <Container>
        {/* Who We Are */}
        <section className="mt-5 pt-5 _hero">
          <Row className="_heroServices">
            <Col md={6} sm={12} xs={12} className="justify-content-center align-content-center align-items-center"> 
              <h2 className="font-heavy mb-3">{aboutHero.aboutUsContent.title}</h2>
              <p className="font-light text-justify">
                {aboutHero.aboutUsContent.description.split('\n').map((line, index) => ( 
                  <React.Fragment key={index}>{line}</React.Fragment>
                ))}
              </p>

              <Row className="mt-5 _iconContainer">
                {ourServices.map(service => (
                  <Col key={service.id} md={4} sm={4} xs={4} className="justify-content-center align-content-center align-items-center">
                    <div onClick={() => handleIconClick(service.id)} className="text-center _serviceIcon" style={{ cursor: 'pointer' }}>
                      <FontAwesomeIcon icon={service.icon} size="3x" className="mb-3" />
                      <h6>{service.title}</h6>
                    </div>
                  </Col>
                ))}
              </Row>
              
            </Col>

            <Col md={6} sm={12} xs={12} className="text-center">
              <Image src={aboutHero.teamworkImage} alt="Our Team" className="hero_img" />
            </Col>

          </Row>
        </section>

        <ContactUs />

        {/* Vision and Mission */}
        <section className="mb-3 visionMission">
          <Row className="align-items-center">
            {visionMission.map((item, index) => (
              <Col key={index} md={6} sm={12} xs={12} className="content-box">
                <div className="content-inner">
                  <h2 className="text-center font-heavy">{item.title}</h2>
                  <p className="text-center">{item.text}</p>
                </div>
              </Col>
            ))}
          </Row>
        </section>
        
        {/* Our Team */}
        <section id="team" className="py-5 _ourTeam text-center">
          <h2 className="text-center font-heavy mb-">Our Team</h2>
          <img src={ourTeam} alt="Banner" className="image-fluid"/>
        </section>

        {/* Clients Showcase */}
        <section className="mt-5 mb-5 _clientShowcase">
          <Row className="justify-content-center align-items-center">
            {clientsLogo.map((client, index) => (
              <Col key={index} xs={12} sm={2} md={2} className="text-center mb-4">
                <img src={client.src} alt={client.alt} className="_clientLogo" />
              </Col>
            ))}
          </Row>
        </section>
      </Container>

      {/* FAQ Section */}
      <section className="mb-5 _faq">
        <Container>
          <h2 className="text-center font-heavy justify-content-center mb-4">Frequently Asked Questions</h2>

          <Row className="text-justify">
            <Col md={6}>
              <Accordion>
                {frequentAQ.FAQ1.map((item, index) => (
                  <Accordion.Item eventKey={item.eventKey} key={index}>
                    <Accordion.Header style={{ backgroundColor: '#C5CED4'}}>{item.question}</Accordion.Header>
                    <Accordion.Body style={{ backgroundColor: '#D8D8D8'}}>{item.answer}</Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </Col>

            <Col md={6}>
              <Accordion>
                {frequentAQ.FAQ2.map((item, index) => (
                  <Accordion.Item eventKey={item.eventKey} key={index}>
                    <Accordion.Header style={{ backgroundColor: '#D8D8D8'}}>{item.question}</Accordion.Header>
                    <Accordion.Body style={{ backgroundColor: '#C5CED4'}}>{item.answer}</Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </Col>
          </Row>
          
        </Container>
      </section>
    </>
  );
}

export default AboutUs;