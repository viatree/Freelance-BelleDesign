import React, { 
  useState } from 'react';

import { useParams } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import { 
  Container, 
  Row, 
  Col, 
  Card, 
  Button,
  Modal } from 'react-bootstrap';

import { Fade } from "react-awesome-reveal";

import { 
  howToOrder,
  pricingPlansData,
  ourServices } from '../constants/index.js';

import heroImg from '../assets/tanahAbang/tanahAbang1.png';
import salesImg from '../assets/custService.jpg';

import './css/Pricing.css';
import './css/Custom.css';

const handlePdfOpen = (pdfUrl) => {
  window.open(pdfUrl);
};

const openWhatsApp = () => {
  window.open('https://api.whatsapp.com/send/?phone=6281909790555&text&type=phone_number&app_absent=0', '_blank');
};

const Pricing = () => {
  const [show, setShow] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = (content) => {
    setModalContent(content);
    setShow(true);
  };
  
  return (
    <>
      <section className="align-items-center justify-content-center d-flex _heroSection">
        <Container>
          <Row className="align-items-center _heroPricing">
            <Col md={6} sm={12} className="text-md-left font-medium">

              <Fade direction="left" delay={200} triggerOnce={true}>
                <h1>From Concept to Creation</h1>
                <h2>Let's Build Your Vision Together!</h2>
              </Fade>
             
              <Fade direction="up" delay={300} triggerOnce={true}>
                <Button 
                  className="mt-3 text-center _cta"
                  onClick={() => document.getElementById('_contactUs').scrollIntoView({ behavior: 'smooth' })}>
                    Contact Our Sales
                </Button>
              </Fade>
            </Col>

            <Col md={6} sm={12} className="align-items-center justify-content-center text-center">
              <Fade direction="right" delay={400} triggerOnce={true}>
                <img src={heroImg} alt="Hero Section Image"/>
              </Fade>
            </Col>
      
          </Row>
        </Container>
      </section>

      <Container>
        {/* How To Order */}
        <section className="mt-4 mb-5 _orderSteps">
          <h2 className="text-center mb-4 font-bold">How to Order</h2>

          <Row className="align-items-center">
            <Col md={6} className="_serviceContainer" onClick={() => handlePdfOpen(howToOrder.architectureService.pdf)}>
              <Fade direction="left" delay={100} triggerOnce={true}>
                <div className="_bannerMask">
                  <img src={howToOrder.architectureService.src} alt={howToOrder.architectureService.alt} className="img-fluid"/>
                  <div className="text-center _maskText">Architecture</div>
                </div>
              </Fade>
            </Col>

            <Col md={6} className="_serviceContainer" onClick={() => handlePdfOpen(howToOrder.brandingService.pdf)}>
              <Fade direction="right" delay={200} triggerOnce={true}>
                <div className="_bannerMask">
                  <img src={howToOrder.brandingService.src} alt={howToOrder.brandingService.alt} className="img-fluid"/>
                  <div className="text-center _maskText">Branding</div>
                </div>
              </Fade>
            </Col>
          </Row>
          
          <Fade direction="up" delay={300} triggerOnce={true}>
            <div className="mt-3 _bannerContainer">
              <Row>
                <Col>
                  <div className="text-center _bannerMask" onClick={openWhatsApp}>
                    <h2 className="font-black">Want to become our Sponsor?</h2>                      
                  </div>
                </Col>
              </Row>
            </div>
          </Fade>

        </section>
      </Container>

      {/* Promo Section */}
      <section className="pt-4 pb-5 _promoContainer">
        <Container>
          <h2 className="text-center _promoTitle">Package On Sale!</h2>
          <Row className="d-flex">
            {pricingPlansData.map((plan, index) => (
              <Col key={index} sm={12} md={4} className="d-flex">
                <Fade direction="up" delay={index * 300} triggerOnce={true} className="w-100">
                  <Card className="text-center border-0 shadow-sm flex-fill _customCard">
                    <Card.Body className="_cardBody d-flex flex-column">
                      <Card.Title className="font-medium">{plan.title}</Card.Title>
                      <Card.Subtitle className="mt-3 mb-3 text-muted font-heavy">
                        <h5 className="text-decoration-line-through">{plan.beforePrice}</h5>
                        <h2>{plan.afterPrice}</h2>
                      </Card.Subtitle>
                      <ul className="list-unstyled flex-grow-1">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="mt-2">{feature}</li>
                        ))}
                      </ul>
                      <Button variant="dark" className="mt-auto" onClick={openWhatsApp}>Choose Plan</Button>
                    </Card.Body>
                  </Card>
                </Fade>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

     {/* Contact Our Sales Section */}
<section id="_contactUs" className="pt-5 pb-5 d-flex _ourSales">
  <Container>
    <Row className="align-items-center _salesRow flex-column-reverse flex-md-row">
      <Col md={6} className="align-items-center justify-content-center text-center">
        <Fade direction="left" delay={100} triggerOnce={true}>
          <img src={salesImg} alt="Customer Service Image" className="img-fluid"/>
        </Fade>
      </Col>

      <Col md={6} className="text-md-end font-medium text-center text-md-end">
        <Fade direction="right" delay={200} triggerOnce={true}>
          <h1>Start consultation now!</h1>
        </Fade>

        <Fade direction="up" delay={300} triggerOnce={true}>
          <Button className="mt-3 text-center _cta" onClick={openWhatsApp}>Contact Our Sales</Button>
        </Fade>
      </Col>
    </Row>
  </Container>
</section>

    </>
  );
}

export default Pricing;