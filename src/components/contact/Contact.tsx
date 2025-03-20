import { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target as HTMLFormElement;

    const iframe = document.createElement("iframe");
    iframe.name = "hidden-iframe";
    iframe.style.display = "none";
    document.body.appendChild(iframe);

    form.target = "hidden-iframe";
    form.submit();

    form.reset();
    setSubmitSuccess(true);
    setIsSubmitting(false);

    setTimeout(() => {
      document.body.removeChild(iframe);
      setSubmitSuccess(false);
    }, 5000);
  };

  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Contact</h2>
      <div className="contact-container">
        <div className="contact-info">
          <h3 className="uppercase">get in touch</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
            rem blanditiis officiis architecto ducimus est voluptate perferendis
            rerum numquam quam? Iusto tempora velit repudiandae architecto,
            suscipit eveniet mollitia quasi enim?
          </p>
          <div className="contact-details">
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <span className="concact-email">manuel.rayo3@gmail.com</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">☎️</span>
              <span className="concact-email">+506 60099234</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <span className="concact-email">Costa Rica</span>
            </div>
          </div>
          <div className="social-links">
            <a href="#" className="social-link">
              LinkedIn
            </a>
            <a href="#" className="social-link">
              GitHub
            </a>
            <a href="#" className="social-link">
              Twitter
            </a>
          </div>
        </div>
        <div className="contact-form">
          {submitSuccess && (
            <div className="success-message">
              ¡Email sent successful! Thank you, I will contact you soon!.
            </div>
          )}
          <form
            action="https://formsubmit.co/manuel.rayo3@gmail.com"
            method="POST"
            onSubmit={handleSubmit}
          >
            <input
              type="hidden"
              name="_subject"
              value="Message from Portfolio"
            />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_format" value="plain" />{" "}
            <input type="text" name="_honey" style={{ display: "none" }} />{" "}
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />{" "}
            </div>
            <div className="form-group">
              <label htmlFor="subject">subject</label>
              <input type="text" id="subject" name="subject" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">message</label>
              <textarea
                name="message"
                id="message"
                cols={20}
                rows={5}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn btn-primary send-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
