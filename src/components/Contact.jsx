import React, { useRef, useEffect } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_sbwr57g',
        'template_2kaqr6r',
        form.current,
        'K_Q8saME9PkyVsPoj'
      )
      .then(() => {
        alert("Pesan berhasil dikirim!");
        form.current.reset();
      })
      .catch((error) => {
        alert("Gagal mengirim pesan.");
        console.error(error);
      });
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container" data-aos="fade-up">
        <h2 className="contact-title" data-aos="zoom-in">Kontak Saya</h2>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <label htmlFor="name" data-aos="fade-right" data-aos-delay="100">Nama</label>
          <input
            type="text"
            id="name"
            name="user_name"
            placeholder="Nama Anda"
            required
            data-aos="fade-left"
            data-aos-delay="150"
          />

          <label htmlFor="email" data-aos="fade-right" data-aos-delay="200">Email</label>
          <input
            type="email"
            id="email"
            name="user_email"
            placeholder="Email Anda"
            required
            data-aos="fade-left"
            data-aos-delay="250"
          />

          <label htmlFor="message" data-aos="fade-right" data-aos-delay="300">Pesan</label>
          <textarea
            id="message"
            name="message"
            placeholder="Tulis pesan Anda..."
            required
            data-aos="fade-left"
            data-aos-delay="350"
          ></textarea>

          <button
            type="submit"
          >
            Kirim Pesan
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
