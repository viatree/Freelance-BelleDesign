import { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import './css/ContactUs.css';
import emailjs from '@emailjs/browser';
import { FaWhatsapp } from 'react-icons/fa';

const YOUR_SERVICE_ID = 'service_eg0dub2';
const YOUR_TEMPLATE_ID = 'template_ii8xrzj';
const YOUR_USER_ID = 'sYTBvFdvXdiO0w8f0';

const ContactUs = () => {
  const [show, setShow] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const form = useRef();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCloseAlert = () => setShowAlert(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form.current, YOUR_USER_ID)
      .then(
        (result) => {
          setAlertMessage('Email sent successfully!');
          setShowAlert(true);
        },
        (error) => {
          setAlertMessage('Failed to send email. Please try again.');
          setShowAlert(true);
        }
      );
  };

  return (
    <>
      <Button className="waitlist-button" onClick={handleShow}>
        Join the Waitlist
      </Button>

      <Modal show={show} onHide={handleClose} className="custom-modal">
        <Modal.Header className="modal-header">
          <Button variant="close" onClick={handleClose} className="btn-close" />
        </Modal.Header>
        <Modal.Body className="modal-body">
          <h2>JOIN THE WAITLIST</h2>
          <p>Be the first to build your vault and test out new features.</p>
          <Form ref={form} onSubmit={sendEmail}>
            <Form.Group className="mb-3">
              <Form.Control
                type="email"
                placeholder="Your Email Address"
                required
                name="from_email"
              />
            </Form.Group>
            <Button variant="dark" type="submit">
              SUBMIT
            </Button>
          </Form>
          <div className="mt-3">
            <a
              href="https://wa.me/+6281909790555?text=Hello!%20I%20have%20an%20inquiry."
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-link"
            >
              <FaWhatsapp size={40} /> Contact us on WhatsApp
            </a>
          </div>
        </Modal.Body>
      </Modal>

      <Modal show={showAlert} onHide={handleCloseAlert}>
        <Modal.Header closeButton>
          <Modal.Title>{alertMessage.includes('successfully') ? 'Success' : 'Error'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{alertMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAlert}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ContactUs;
