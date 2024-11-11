import React, { useEffect, useRef } from 'react';
import '../components/css/Videotron.css';
import buttonscarves from '../assets/images/bs.mov';

const Videotron = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const handleScroll = () => {
      const videoTop = video.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (videoTop < windowHeight) {
        video.play();
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="videotron-container">
      <video className="videotron-video" ref={videoRef} autoPlay loop muted>
        <source src={buttonscarves} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Videotron;
