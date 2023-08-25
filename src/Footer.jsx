import React from 'react'

function Footer() {
  return (
    <footer className="footer">
      <div className="foot">
        <h3>Info</h3>
        <p>+91-6364449198</p>
        <p>contact@spacephilic.com</p>
      </div>
      <div className="social-icons">
        <a href="#" className="icon">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" className="icon">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="icon">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" className="icon">
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
      </div>
      <p className="rt">&copy; All rights reserved.</p>
    </footer>
  )
}

export default Footer
