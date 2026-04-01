import React from "react";
import "./About.css";

function About() {
  return (
    <div>

      {/* 🔹 Header / Navbar */}
      <header className="header-wrapper">
        <nav className="navbar">
          <h2>InspiresAndInnovate</h2>
          <ul className="nav-links">
            <li>Home</li>
            <li>About</li>
            <li>My Books</li>
            <li>Blogs</li>
            <li>Article</li>
            <li>Newsletters</li>
            <li>Login</li>
          </ul>
        </nav>
      </header>

      {/* 🔹 Team Section */}
      <section className="team">
        <div className="team-member">
          <img src="/images/author-min.webp" alt="Anusha" />
          <h2>Anusha Konathala</h2>
          <p>Founder of InspiresAndInnovate</p>
          <p>anushakonathala@inspiresandinnovate.com</p>
          <p>inspiresandinnovate@gmail.com</p>
          <p>
            Visionary behind InspireAndInnovate, bringing creativity and innovation.
          </p>
        </div>
      </section>

      {/* 🔹 About Title */}
      <h1 className="title">About InspiresAndInnovate</h1>

      {/* 🔹 Vision */}
      <section className="vision">
        <h3>Our Vision</h3>
        <p>
          To empower individuals and businesses with innovative website solutions.
        </p>
      </section>

      {/* 🔹 Mission */}
      <section className="mission">
        <h3>Our Mission</h3>
        <p>
          To simplify website creation using intuitive tools and continuous innovation.
        </p>
      </section>

      {/* 🔹 Goals */}
      <section className="goal-section">
        <h3>Short-Term Goals</h3>
        <ul>
          <li>Expand E-book Portfolio</li>
          <li>Build Partnerships</li>
          <li>Improve Online Visibility</li>
        </ul>
      </section>

      <section className="goal-section">
        <h3>Mid-Term Goals</h3>
        <ul>
          <li>Launch Publishing Platform</li>
          <li>Grow Team</li>
          <li>Expand Global Reach</li>
        </ul>
      </section>

      <section className="goal-section">
        <h3>Long-Term Goals</h3>
        <ul>
          <li>AI-based publishing tools</li>
          <li>Global reader-writer community</li>
          <li>Industry leadership</li>
        </ul>
      </section>

      {/* 🔹 Back Button */}
      <div className="navigation-buttons">
        <button onClick={() => window.history.back()}>⬅ Back</button>
      </div>

      {/* 🔹 Footer */}
      <footer className="footer">
        <p>© 2026 Anusha Konathala. All Rights Reserved.</p>
      </footer>

    </div>
  );
}

export default About;