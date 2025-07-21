import React, { useEffect, useRef } from 'react';
import './Home.css';

function Home() {
  const homeRef = useRef(null);
  const nameRef = useRef(null);
  const titleRef = useRef(null);
  const profileImgRef = useRef(null);
  const textBlockRef = useRef(null);
  const buttonRef = useRef(null);
  const iconsRef = useRef([]);

  const typingInterval = useRef(null);

  const startTypingName = () => {
    const text = "Januar Tua Sinaga";
    let index = 0;

    if (!nameRef.current) return;

    nameRef.current.textContent = "";
    if (typingInterval.current) clearInterval(typingInterval.current);

    typingInterval.current = setInterval(() => {
      if (index < text.length) {
        nameRef.current.textContent += text[index];
        index++;
      } else {
        clearInterval(typingInterval.current);
      }
    }, 100);
  };

  const animateHome = () => {
    nameRef.current.textContent = "";
    titleRef.current.style.width = "0";
    profileImgRef.current.classList.remove("animate-pop");
    textBlockRef.current.classList.remove("fade-up");
    buttonRef.current.classList.remove("slide-up");
    iconsRef.current.forEach((icon) => icon.classList.remove("fall-down"));

    // Trigger reflow
    void profileImgRef.current.offsetWidth;

    profileImgRef.current.classList.add("animate-pop");
    textBlockRef.current.classList.add("fade-up");
    buttonRef.current.classList.add("slide-up");
    iconsRef.current.forEach((icon, i) => {
      setTimeout(() => {
        icon.classList.add("fall-down");
      }, 200 * i);
    });

    startTypingName();
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateHome();
        }
      },
      { threshold: 0.5 }
    );

    if (homeRef.current) observer.observe(homeRef.current);
    return () => {
      if (homeRef.current) observer.unobserve(homeRef.current);
      if (typingInterval.current) clearInterval(typingInterval.current);
    };
  }, []);

  return (
    <section id="home" className="home-section" ref={homeRef}>
      <div className="home-container">
        {/* KIRI */}
        <div className="home-left">
          <img
            ref={profileImgRef}
            src={`${process.env.PUBLIC_URL}/assets/profile.jpg`}
            alt="Profil"
            className="profile-img"
          />
          <h2 className="name" ref={nameRef}></h2>
          <p className="title" ref={titleRef}>Software Engineer</p>

          <div className="social-icons">
            {["whatsapp", "instagram", "linkedin", "tiktok"].map((platform, i) => (
              // eslint-disable-next-line jsx-a11y/anchor-is-valid
              <a
                key={platform}
                ref={(el) => (iconsRef.current[i] = el)}
                href="#"
                className={`icon ${platform}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className={`fab fa-${platform === "linkedin" ? "linkedin-in" : platform}`}></i>
              </a>
            ))}
          </div>
        </div>

        {/* KANAN */}
        <div className="home-right" ref={textBlockRef}>
          <h1>Halo, I'm Januar!</h1>
          <p>Saya adalah mahasiswa Teknik Informatika yang tertarik pada pengembangan web modern, baik frontend maupun backend.</p>
          <p>Saat ini saya sedang mempelajari Laravel, React.js, dan membangun portofolio ini sebagai proyek pribadi saya.</p>
          <a href="#about" className="btn-start" ref={buttonRef}>Kenali Saya Lebih Lanjut</a>
        </div>
      </div>
    </section>
  );
}

export default Home;
