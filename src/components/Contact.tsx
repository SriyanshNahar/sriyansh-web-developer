import { useState } from 'react';

import styles from './Contact.module.css';

const Contact = () => {
  const [formType, setFormType] = useState<'contact' | 'hire'>('contact');
  
  // WhatsApp Integration logic
  const handleWhatsAppSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    let messageText;
    
    if (formType === 'contact') {
      messageText = `Hello Sriyansh!%0A%0A*Name:* ${data.name}%0A*Email:* ${data.email}%0A*Message:* ${data.message}`;
    } else {
      messageText = `Hello Sriyansh! I want to hire you.%0A%0A*Name:* ${data.name}%0A*Project Type:* ${data.projectType}%0A*Budget:* ${data.budget}%0A*Timeline:* ${data.timeline}%0A*Details:* ${data.details}`;
    }

    const phoneNumber = '+918302181553'; // User's phone number
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${messageText}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="section-container">
      <div className={styles.header}>
        <span className="mono-text accent-text">FIFTH FLOOR // CONTACT</span>
        <h2 className={styles.heading}>LET'S BUILD<br/>SOMETHING TOGETHER.</h2>
      </div>

      <div className={styles.grid}>
        <div className={styles.formSection}>
          <div className={styles.toggleContainer}>
            <button 
              className={`${styles.toggleBtn} ${formType === 'contact' ? styles.active : ''}`}
              onClick={() => setFormType('contact')}
            >
              General Contact
            </button>
            <button 
              className={`${styles.toggleBtn} ${formType === 'hire' ? styles.active : ''}`}
              onClick={() => setFormType('hire')}
            >
              Hire Me
            </button>
          </div>

          <form onSubmit={handleWhatsAppSubmit} className={styles.form}>
            {formType === 'contact' ? (
              <>
                <div className={styles.inputGroup}>
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows={5} required></textarea>
                </div>
              </>
            ) : (
              <>
                <div className={styles.inputGroup}>
                  <label htmlFor="hireName">Name / Company</label>
                  <input type="text" id="hireName" name="name" required />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="projectType">Project Type</label>
                  <select id="projectType" name="projectType">
                    <option value="Website Development">Website Development</option>
                    <option value="Online Listing">Online Product Listing</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                  </select>
                </div>
                <div className={styles.rowGrid}>
                  <div className={styles.inputGroup}>
                    <label htmlFor="budget">Estimated Budget</label>
                    <input type="text" id="budget" name="budget" placeholder="e.g. $1000" />
                  </div>
                  <div className={styles.inputGroup}>
                    <label htmlFor="timeline">Timeline</label>
                    <input type="text" id="timeline" name="timeline" placeholder="e.g. 2 weeks" />
                  </div>
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="details">Project Details</label>
                  <textarea id="details" name="details" rows={4} required></textarea>
                </div>
              </>
            )}
            <button type="submit" className={styles.submitBtn}>
              Send via WhatsApp
            </button>
          </form>
        </div>

        {/* GlobalScene handles the 3D visual */}
        <div className={styles.visualColumn}></div>
      </div>
    </section>
  );
};

export default Contact;
