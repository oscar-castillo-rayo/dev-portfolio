import { useState } from "react";
import "./Contact.css";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import ContactCard from "./ContactCard";

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
      <div className="contact-container ">
        <div className="contact-info">
          <h3 className="uppercase">get in touch</h3>
          <p>
            I'm always available to address your questions and concerns. Whether
            you need information, assistance, or just want to connect, don't
            hesitate to reach out through any of the communication channels
            below.
          </p>
          <div className="contact-details">
            <div className="contact-item">
              <span className="contact-item-name">Email: </span>
              <span>
                <ContactCard contactInformation="manuel.rayo3@gmail.com" />
              </span>
            </div>
            <div className="contact-item">
              <span className="contact-item-name">Phone Number: </span>
              <ContactCard contactInformation="+506 60099234" />
            </div>
            <div className="contact-item">
              <span className="contact-item-name">Country: </span>
              <span className="font-bold">Costa Rica </span>
            </div>
          </div>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/oscar-manuel-castillo-rayo-34a552255/"
              className="social-link"
            >
              <FaLinkedin /> LinkedIn
            </a>
            <a
              href="https://github.com/oscar-castillo-rayo"
              className="social-link"
            >
              <FaGithubSquare /> GitHub
            </a>
            {/* <a href="#" className="social-link">
              Twitter
            </a> */}
          </div>
        </div>
        <div className="contact-form ">
          <h3 className="uppercase">Feel free to contact me anytime</h3>
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
            {/* <div className="form-group">
              <label htmlFor="subject">subject</label>
              <input type="text" id="subject" name="subject" required />
            </div> */}
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
            <div className="button-container">
              {!submitSuccess && (
                <div className="success-message">
                  ¡Email sent successful! Thank you, I will contact you soon!.
                </div>
              )}
              <button
                type="submit"
                className="btn btn-primary send-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
