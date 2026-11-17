"use client";

import { useState } from "react";

const phone = "201205527512";
const whatsapp = `https://wa.me/${phone}?text=${encodeURIComponent("السلام عليكم، عايز أحجز عرض ليزر مع الشناوي")}`;

const links = [
  ["الرئيسية", "#home"],
  ["من نحن", "#about"],
  ["خدماتنا", "#services"],
  ["أعمالنا", "#works"],
  ["تواصل معنا", "#contact"],
];

const services = [
  { icon: "✨", title: "ليزر أفراح", desc: "أجواء استثنائية تضيف لفرحك لمسة من السحر والإبهار." },
  { icon: "🎤", title: "ليزر حفلات", desc: "عروض ضوئية احترافية تناسب الحفلات والمناسبات الكبرى." },
  { icon: "🏬", title: "افتتاحات", desc: "إضاءة وعروض ليزر لافتتاح الكافيهات والمحلات." },
  { icon: "🎭", title: "مؤتمرات", desc: "حلول إضاءة وعروض بصرية بجودة عالية." },
];

const advantages = [
  ["⏱️", "بنوصلك في المعاد", "ملتزمين بمواعيدنا عشان مناسبتك تمشي زي ما خططت."],
  ["💡", "أجهزة ليزر حديثة", "أجهزة قوية وتقنيات حديثة لتقديم أفضل عرض."],
  ["♥", "أسعار مناسبة", "جودة احترافية وأسعار على قد الإيد."],
  ["✨", "إضاءة احترافية", "بنظبط الإضاءة عشان نطلع فرحك بأفضل شكل."],
];

const works = [
  { src: "/images/work-1.jpg", title: "من أعمالنا على أرض الواقع" },
  { src: "/images/work-2.jpg", title: "عروض الليزر والإضاءة" },
  { src: "/images/work-3.jpg", title: "تجهيزات الحفلات" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="site">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="laser laser-one" />
      <div className="laser laser-two" />
      <div className="laser laser-three" />

      <header className="navbar">
        <a href="#home" className="brand">
          <div className="brand-mark"><span>S</span><span>H</span></div>
          <div className="brand-name">
            <strong>ELSHENAWY</strong>
            <small>LASER SHOWS</small>
          </div>
        </a>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="القائمة">
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {links.map(([name, href], i) => (
            <a key={name} href={href} className={i === 0 ? "active" : ""} onClick={() => setMenuOpen(false)}>
              {name}
            </a>
          ))}
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-content">
          <div className="eyebrow"><span className="status-dot" /> THE ART OF LIGHT & MAGIC</div>
          <div className="hero-logo"><span className="logo-s">S</span><span className="logo-h">H</span></div>
          <div className="gold-line" />
          <h1>الشناوي<span>لعروض ليزر الأفراح</span></h1>
          <p className="hero-description">
            نحول لحظات الفرح إلى عروض ضوئية استثنائية،
            <br className="desktop-break" />
            بتقنيات الليزر والمؤثرات البصرية المبهرة.
          </p>
          <div className="hero-actions">
            <a href="#works" className="action-primary">اكتشف عالمنا <span>←</span></a>
            <a href="#contact" className="action-secondary">تواصل معنا</a>
          </div>
          <a className="hero-booking" href={whatsapp} target="_blank" rel="noreferrer">
            <span>☏</span> احجز عرضك الآن على واتساب
          </a>
          <div className="hero-footer">
            <span>LIGHT UP YOUR SPECIAL NIGHT</span>
            <span className="footer-line" />
            <span>ELSHENAWY © 2026</span>
          </div>
        </div>
        <div className="visual-ring ring-one" />
        <div className="visual-ring ring-two" />
        <div className="visual-ring ring-three" />
        <div className="light-beam beam-one" />
        <div className="light-beam beam-two" />
      </section>

      <section className="about section-wrap" id="about">
        <span className="section-tag">WHO WE ARE</span>
        <h2>خبرة تصنع <span>الفرق</span></h2>
        <div className="section-line" />
        <p>
          صاحب ومؤسس عروض الشناوي لليزر.
          خبرة أكثر من 20 سنة في مجال المجاب والعروض والإضاءة،
          وشغلنا في أكبر حفلات مصر مع رامي صبري ومحمد رمضان
          ومحمود العسيلي وجميع المطربين.
        </p>
        <div className="experience">
          <strong>20+</strong>
          <span>سنة من الخبرة والإبداع</span>
        </div>
      </section>

      <section className="services section-wrap" id="services">
        <span className="section-tag">OUR SERVICES</span>
        <h2>خدماتنا</h2>
        <div className="section-line" />
        <p className="section-intro">كل اللي تحتاجه عشان مناسبتك تبقى مختلفة ومبهرة.</p>
        <div className="service-grid">
          {services.map((item) => (
            <article className="service-card" key={item.title}>
              <div className="service-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="works section-wrap" id="works">
        <span className="section-tag">REAL WORK • REAL QUALITY</span>
        <h2>شغلنا على أرض الواقع</h2>
        <div className="section-line" />
        <p className="section-intro">
          دي أعمالنا الحقيقية مش مجرد صور وخلاص 👌❤
        </p>
        <div className="gallery-grid">
          {works.map((work, i) => (
            <article className={`gallery-card gallery-${i + 1}`} key={work.src}>
              <img src={work.src} alt={work.title} />
              <div className="gallery-caption">
                <span>ELSHENAWY LASER SHOWS</span>
                <h3>{work.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="why section-wrap">
        <span className="section-tag">WHY ELSHENAWY</span>
        <h2>ليه تختار الشناوي؟</h2>
        <div className="section-line" />
        <div className="advantage-grid">
          {advantages.map(([icon, title, desc]) => (
            <article className="advantage-card" key={title}>
              <span>{icon}</span>
              <h3>{title}</h3>
              <p>{desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="closing">
        <span className="section-tag">MAKE IT UNFORGETTABLE</span>
        <h2>مستني إيه؟ احجز دلوقتي! 🔥</h2>
        <p>خلّي ليلتك مختلفة مع عروض الشناوي لليزر.</p>
        <a href={whatsapp} target="_blank" rel="noreferrer" className="action-primary">
          احجز على واتساب الآن ←
        </a>
      </section>

      <footer className="footer" id="contact">
        <div className="footer-brand">ELSHENAWY</div>
        <p>LASER SHOWS & SPECIAL EFFECTS</p>
        <p className="footer-ar">الشناوي لعروض ليزر الأفراح والحفلات</p>
        <div className="contact-links">
          <a href={whatsapp} target="_blank" rel="noreferrer">واتساب والحجز</a>
          <a href="tel:01205527512">اتصل بينا: 01205527512</a>
          <a href="https://www.facebook.com/profile.php?id=61586959073734" target="_blank" rel="noreferrer">فيسبوك</a>
          <a href="https://www.instagram.com/sayd85575?obrf=b2hhMzl4YjkyMDJp" target="_blank" rel="noreferrer">إنستغرام</a>
        </div>
        <div className="copyright">جميع الحقوق محفوظة © ELSHENAWY 2026</div>
      </footer>

      <a className="floating-whatsapp" href={whatsapp} target="_blank" rel="noreferrer" aria-label="احجز على واتساب">
        ☎
      </a>
    </main>
  );
}
