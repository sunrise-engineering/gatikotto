---
layout: default
title: Contact Gatikotto – Get in Touch for Engineering Solutions
permalink: /contact-us
description: "Reach out to Gatikotto for expert guidance in SPM, automation systems, conveyors, dies, jigs, and custom rubber & plastic parts. We're here to assist you with tailored Sunrise Engineering solutions."
---

<style>
  .glass-card {
    max-width: 1000px;
    margin: 2rem auto;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-wrap: wrap;
  }
  
  /* COMPANY INFO SECTION */
  .company-info {
    flex: 1;
    min-width: 300px;
    padding: 40px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: rgba(0, 0, 0, 0.2);
  }
  
  .logo {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
  }
  
  .logo-text {
    font-size: 28px;
    font-weight: 700;
  }
  
  .tagline {
    font-size: 14px;
    opacity: 0.8;
    margin-bottom: 30px;
  }
  
  .contact-details {
    margin-bottom: 30px;
  }
  
  .contact-item {
    display: flex;
    margin-bottom: 20px;
    align-items: center;
  }
  
  .contact-icon {
    margin-right: 15px;
    min-width: 30px;
  }
  
  /* CONTACT FORM SECTION */
  .awesome-form {
    flex: 1;
    min-width: 300px;
    padding: 40px;
    background: white;
  }
  
  .form-group {
    margin-bottom: 1.5rem;
  }
  
  .label-text {
    display: block;
    margin-bottom: 0.5rem;
    color: #4a5568;
    font-weight: 500;
  }
  
  .form-group {
  margin-bottom: 1.5rem;
}

.input-label {
  display: block;
  position: relative;
}

.label-text {
  display: block;
  margin-bottom: 0.5rem;
  color: #4a5568;
  font-weight: 500;
  font-size: 0.9rem;
}

.form-input {
  width: 100%;
  padding: 0.8rem 1rem 0.8rem 2.5rem;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background-color: #f8fafc;
}

.form-input:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.2);
  background-color: white;
}

.textarea {
  min-height: 120px;
  resize: vertical;
  padding-top: 1rem;
}
  
  .submit-btn {
    width: 100%;
    padding: 15px;
    background: linear-gradient(45deg, #6c63ff, #9b59b6);
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
  }
  
  .submit-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(108, 99, 255, 0.3);
  }
  
  /* RESPONSIVE ADJUSTMENTS */
  @media (max-width: 768px) {
    .glass-card {
      flex-direction: column;
    }
    
    .company-info, .awesome-form {
      padding: 30px;
    }
  }
</style>

<div class="glass-card">
  <!-- COMPANY INFORMATION SECTION -->
  <div class="company-info bg-primary bg-gradient">
    <div class="logo">
      <div class="logo-text">📍 GATIKOTTO</div>
    </div>
    <p class="tagline">Engineering solutions with precision and innovation</p>
    <div class="contact-details">
      <div class="contact-item">
        <div class="contact-icon">📍</div>
        <div class="contact-text">
          <h3>Our Location</h3>
          <p> Kharkhara Dharuhera-121306</p>
          <p>201-5200 Dixie Road, Mississauga ON L4W 1E4</p>
        </div>
      </div>
      <div class="contact-item">
        <div class="contact-icon">✉️</div>
        <div class="contact-text">
          <h3>Email Us</h3>
          <p>info@gatikotto.com</p>
        </div>
      </div>
      <div class="contact-item">
        <div class="contact-icon">📞</div>
        <div class="contact-text">
          <h3>Call Us</h3>
          <p>+91-8448864776</p>
        </div>
      </div>
    </div>
  </div>
  
  <!-- CONTACT FORM SECTION -->
  <form action="https://formspree.io/f/mkgbvdqy" method="POST" class="awesome-form">
    <h4 class="mb-1 text-center">Send Us a Message</h4>
    <p class="mb-1 text-center">We'd love to hear from you!</p>
    <div class="form-group">
      <label for="email" class="input-label">
        <span class="label-text">Your Email</span>
        <input type="email" name="email" id="email" class="form-input" placeholder="name@example.com" required>
      </label>
    </div>
    <div class="form-group">
      <label for="message" class="input-label">
        <span class="label-text">Your Message</span>
        <textarea name="message" id="message" class="form-input textarea" placeholder="What would you like to say?" rows="5" required></textarea>
      </label>
    </div>
    <div class="form-footer">
      <button type="submit" class="submit-btn">
        Send Message
      </button>
    </div>
  </form>
</div>