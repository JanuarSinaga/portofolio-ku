import React, { useEffect } from 'react';
import './Projects.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Projects() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title" data-aos="title-pop">Proyek Saya</h2>
      <div className="projects-container">
        <div className="project-card" data-aos="fade-up">
          <img src={`${process.env.PUBLIC_URL}/assets/project1.jpg`} alt="Proyek 1" />
          <h3>Website Sekolah</h3>
          <p>Website untuk sistem informasi sekolah berbasis Laravel + MySQL.</p>
          <a
            href="https://github.com/ayangganteng/website-sekolah"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-view"
          >
            Lihat
          </a>
        </div>

        <div className="project-card" data-aos="fade-up" data-aos-delay="100">
          <img src={`${process.env.PUBLIC_URL}/assets/project2.jpg`} alt="Proyek 2" />
          <h3>Portofolio Pribadi</h3>
          <p>Portofolio ini dibuat menggunakan React.js dan custom CSS.</p>
          <a
            href="https://github.com/ayangganteng/portofolio-react"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-view"
          >
            Lihat
          </a>
        </div>

        <div className="project-card" data-aos="fade-up" data-aos-delay="200">
          <img src={`${process.env.PUBLIC_URL}/assets/project3.jpg`} alt="Proyek 3" />
          <h3>Aplikasi CRUD Mahasiswa</h3>
          <p>Aplikasi CRUD data mahasiswa dengan Laravel dan Bootstrap 5.</p>
          <a
            href="https://github.com/ayangganteng/crud-mahasiswa"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-view"
          >
            Lihat
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
