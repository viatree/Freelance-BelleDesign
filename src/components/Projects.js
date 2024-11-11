import React, { 
  useState, 
  useEffect } from 'react';

import { 
  Container, 
  Row, 
  Col, 
  Nav, 
  Carousel } from 'react-bootstrap';

import { useNavigate } from 'react-router-dom';

import { 
  carouselData,
  navPills,
  projectDetails } from '../constants/index.js';
  
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/css/Custom.css'
import '../components/css/ProjectsClicked.css'
import ContactUs from './ContactUs.js';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [fadeClass, setFadeClass] = useState('fade-in');
  const navigate = useNavigate();

  useEffect(() => {
    setFadeClass('fade-out');
    const timeout = setTimeout(() => {
      setFadeClass('fade-in');
    }, 500);

    return () => clearTimeout(timeout);
  }, [activeCategory]);

  const handleSelect = (selectedKey) => {
    setActiveCategory(selectedKey);
  };

  const filteredImages = activeCategory === 'All' ? projectDetails : projectDetails.filter(image => image.category === activeCategory);

  const handleImageClick = (index) => {
    navigate(`/project/${index}`);
  };

  return (
    <>
      <Carousel interval={3500} pause={false} indicators={false} controls={false}>
        {carouselData.map((item, index) => (
          <Carousel.Item key={index}>
            <img className="d-block w-100" src={item.src} alt={item.alt}/>
            <Carousel.Caption>
              <h3>{item.caption}</h3>
              <h4>{item.category}</h4>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      <ContactUs />

      <div className="all_projects_content container-fluid">
        <h2 class="mbr-section-title mbr-fonts-style mbr-bold display-2">Our Projects</h2>
        <Nav variant="pills" className="filter_projects" activeKey={activeCategory} onSelect={handleSelect}>
          {navPills.map((link, index) => (
            <React.Fragment key={link.eventKey}>
              <Nav.Item>
                <Nav.Link eventKey={link.eventKey} className="nav-link-custom">{link.label}</Nav.Link>
              </Nav.Item>
              {index <navPills.length - 1 && <span className="separator">-</span>}
            </React.Fragment>
          ))}
        </Nav>

        <Row className={`project-images ${fadeClass}`}>
          {filteredImages.map((image, index) => (
            <Col key={index} md={4} className="mt-2 mb-2 image-container" onClick={() => handleImageClick(index)}>
              <div className="image-wrapper">
                <img src={image.src} alt={image.alt} className="image-fluid" />
                <div className="image-caption">{image.caption}</div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default Projects;