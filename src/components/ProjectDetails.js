import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Carousel, Row, Col } from 'react-bootstrap';
import { projectDetails } from '../constants/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/css/Custom.css';
import ContactUs from './ContactUs';

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectDetails[id];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <>
      <section className="hero-section">
        <Carousel>
          {project.gridImg.map((image, index) => (
            <Carousel.Item key={index}>
              <img className="d-block w-100" src={image.src} alt={image.alt} />
              <Carousel.Caption>
                <h3>{project.caption}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </section>
      
      <ContactUs />

      <section className="project-description mt-5">
        <Container>
          <Row>
            <Col md={3}>
              <ul className="headline-list">
                <li><strong>Client:</strong> {project.details.client}</li>
                <li><strong>Venue:</strong> {project.details.venue}</li>
                <li><strong>Category:</strong> {project.details.category}</li>
                <li><strong>Status:</strong> {project.details.status}</li>
              </ul>
            </Col>
            <Col md={9}>
              <h2 className="font-bold">{project.alt}</h2>
              <p className="font-regular text-justify">{project.desc}</p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="project-gallery mt-5 container-fluid">
        <Row>
          {project.gridImg.map((image, index) => (
            <Col key={index} md={4} className="mb-4">
              <img src={image.src} alt={image.alt} className="image-fluid project-gallery-img" />
            </Col>
          ))}
        </Row>
      </section>
    </>
  );
};

export default ProjectDetails;