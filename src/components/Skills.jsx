import React, { useEffect, useRef, useState } from 'react';
import './Skills.css';

const skills = [
  { name: 'HTML', icon: '/assets/tech/html.png', level: 90 },
  { name: 'CSS', icon: '/assets/tech/css.png', level: 85 },
  { name: 'JavaScript', icon: '/assets/tech/js.png', level: 80 },
  { name: 'React', icon: '/assets/tech/react.png', level: 75 },
  { name: 'Laravel', icon: '/assets/tech/laravel.png', level: 70 },
  { name: 'PHP', icon: '/assets/tech/php.png', level: 70 },
  { name: 'Python', icon: '/assets/tech/python.png', level: 60 },
  { name: 'Java', icon: '/assets/tech/java.png', level: 65 },
  { name: 'MySQL', icon: '/assets/tech/mysql.png', level: 75 },
];

function Skills() {
  const sectionRef = useRef(null);
  const barsRef = useRef([]);
  const percentsRef = useRef([]);
  const iconsRef = useRef([]);
  const typingTask = useRef(null);

  const fullTitle = 'Keahlian Saya';
  const [typedTitle, setTypedTitle] = useState('');

  const animateSkills = () => {
    skills.forEach((skill, i) => {
      const bar = barsRef.current[i];
      const percent = percentsRef.current[i];
      const icon = iconsRef.current[i];

      if (bar && percent) {
        bar.style.transition = 'none';
        bar.style.width = '0%';
        percent.innerText = '0%';
        void bar.offsetWidth;

        setTimeout(() => {
          bar.style.transition = 'width 1.5s ease-in-out';
          bar.style.width = `${skill.level}%`;

          let count = 0;
          const interval = setInterval(() => {
            if (count >= skill.level) {
              clearInterval(interval);
            } else {
              count++;
              percent.innerText = `${count}%`;
            }
          }, 15);
        }, i * 150);
      }

      if (icon) {
        icon.classList.remove('pop-up');
        void icon.offsetWidth;
        icon.classList.add('pop-up');
      }
    });
  };

  const typeText = async (text) => {
    if (typingTask.current) return;
    typingTask.current = true;
    setTypedTitle('');

    for (let i = 0; i < text.length; i++) {
      await new Promise((res) => setTimeout(res, 100));
      setTypedTitle((prev) => prev + text[i]);
    }

    typingTask.current = false;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateSkills();
          typeText(fullTitle);
        } else {
          setTypedTitle('');
          typingTask.current = null;
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section id="skills" className="skills-section" ref={sectionRef}>
      <div className="skills-container">
        <h2 className="skills-title">{typedTitle}</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-box" key={index}>
              <img
                src={skill.icon}
                alt={skill.name}
                className="skill-icon"
                ref={(el) => (iconsRef.current[index] = el)}
              />
              <div className="bar">
                <div
                  className="progress-bar"
                  ref={(el) => (barsRef.current[index] = el)}
                ></div>
              </div>
              <span
                className="skill-percent"
                ref={(el) => (percentsRef.current[index] = el)}
              >
                0%
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
