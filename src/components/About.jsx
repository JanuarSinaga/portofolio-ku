import React, { useEffect, useRef, useState } from 'react';
import './About.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {
  const [typedText, setTypedText] = useState('');
  const [typedTechTitle, setTypedTechTitle] = useState('');

  const fullText =
    "Halo! Saya Januar, mahasiswa Teknik Informatika yang antusias mengeksplorasi pengembangan web modern seperti Laravel, React.js, dan membangun sistem interaktif berbasis data.";
  const techTitleFull = 'Teknologi yang Saya Gunakan';

  const aboutRef = useRef(null);
  const descIntervalRef = useRef(null);
  const descIndexRef = useRef(0);
  const techIntervalRef = useRef(null);
  const techIndexRef = useRef(0);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const startTyping = () => {
    if (descIntervalRef.current) clearInterval(descIntervalRef.current);
    setTypedText('');
    descIndexRef.current = 0;

    descIntervalRef.current = setInterval(() => {
      if (descIndexRef.current >= fullText.length) {
        clearInterval(descIntervalRef.current);
        descIntervalRef.current = null;
        return;
      }
      const nextChar = fullText[descIndexRef.current];
      if (nextChar !== undefined) {
        setTypedText((prev) => prev + nextChar);
      }
      descIndexRef.current++;
    }, 50);
  };

  const startTechTyping = () => {
    if (techIntervalRef.current) clearInterval(techIntervalRef.current);
    setTypedTechTitle('');
    techIndexRef.current = 0;

    techIntervalRef.current = setInterval(() => {
      if (techIndexRef.current >= techTitleFull.length) {
        clearInterval(techIntervalRef.current);
        techIntervalRef.current = null;
        return;
      }
      const nextChar = techTitleFull[techIndexRef.current];
      if (nextChar !== undefined) {
        setTypedTechTitle((prev) => prev + nextChar);
      }
      techIndexRef.current++;
    }, 70);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startTyping();
          startTechTyping();
        } else {
          setTypedText('');
          setTypedTechTitle('');
          if (descIntervalRef.current) clearInterval(descIntervalRef.current);
          if (techIntervalRef.current) clearInterval(techIntervalRef.current);
        }
      },
      { threshold: 0.5 }
    );

    const section = aboutRef.current;
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
      if (descIntervalRef.current) clearInterval(descIntervalRef.current);
      if (techIntervalRef.current) clearInterval(techIntervalRef.current);
    };
  }, []);

  return (
    <section id="about" className="about-section" ref={aboutRef}>
      <div className="about-container">

        {/* BAGIAN KIRI - TEXT */}
        <div className="about-text" data-aos="fade-right">
          <h2 className="about-title">Tentang Saya</h2>
          <p className="about-description typed-text">{typedText}</p>
          <a href="/cv-janu.pdf" download className="btn-cv" data-aos="zoom-in">
            📄 Download CV
          </a>
        </div>

        {/* BAGIAN KANAN - LOGO */}
        <div className="about-logos" data-aos="fade-left">
          <h3 className="typed-tech-title">{typedTechTitle}</h3>
          <div className="tech-logos">
            {[
              'html', 'css', 'js', 'react',
              'php', 'laravel', 'mysql', 'python', 'java',
            ].map((tech, index) => (
              <img
                key={tech}
                src={`/assets/tech/${tech}.png`}
                alt={tech.toUpperCase()}
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
