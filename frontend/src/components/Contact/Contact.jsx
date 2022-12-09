import React from "react";
import emailIcon from "../../assets/icons/email.png";
import resumeIcon from "../../assets/icons/resume.png";
import githubIcon from "../../assets/icons/github.png";
import linkedInIcon from "../../assets/icons/linkedin.png";
import resume from "../../assets/Haopeng_Zeng_Resume.pdf";
import AOS from "aos";

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [messageStatus, setStatus] = React.useState("unsent");

  React.useEffect(() => {
    AOS.init();
  }, []);

  const sendMessageHandler = async (e) => {
    e.preventDefault();
    setStatus("pending");
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    };

    await fetch("http://localhost:5000/api/sendEmail", options)
      .then((response) => {
        //handle response
        if (response.status === 200) {
          setStatus("success");
          setMessage("");
          setEmail("");
          setName("");
        } else {
          setStatus("error");
        }
      })
      .catch((error) => {
        //handle error
        console.log(error);
        setStatus("error");
      });
  };

  return (
    <div id="contact" className="contact">
      <div className="contact__container">
        <div className="contact__title">Contact Me</div>
        <div className="contact__inputs-container">
          <div className="contact-infos">
            <div
              className="contact-infos--description"
              data-aos="fade-right"
              data-aos-duration="700"
            >
              If you'd like to chat about working together or just want to say
              hi, my inbox is open for All! I'll try my best to get back to you!
            </div>
            <a
              data-aos="fade-right"
              data-aos-duration="700"
              className="contact-infos--nav"
              href="https://github.com/andyzhp234"
            >
              <img src={githubIcon} alt="resume-icon" />
              GitHub
            </a>
            <a
              data-aos="fade-right"
              data-aos-duration="700"
              className="contact-infos--nav"
              href="https://www.linkedin.com/in/haopengzeng"
            >
              <img src={linkedInIcon} alt="resume-icon" />
              LinkedIn
            </a>
            <div
              data-aos="fade-right"
              data-aos-duration="700"
              className="contact-infos--nav contact-infos--email"
              href="https://github.com/andyzhp234"
            >
              <img src={emailIcon} alt="email-icon" />
              <div>haopeng.zeng234@gmail.com</div>
            </div>
            <a
              data-aos="fade-right"
              data-aos-duration="700"
              className="contact-infos--nav"
              href={resume}
              download="Haopeng_Zeng_Resume"
            >
              <img src={resumeIcon} alt="resume-icon" />
              Download Resume
            </a>
          </div>
          <form className="contact-forms" onSubmit={sendMessageHandler}>
            {messageStatus === "pending" ? (
              <h1
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  color: "#eed202",
                  fontSize: "1.2rem",
                  marginBlock: "20px",
                }}
              >
                Sending...
              </h1>
            ) : messageStatus === "success" ? (
              <h1
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  color: "green",
                  fontSize: "1.2rem",
                  marginBlock: "20px",
                }}
              >
                Message Sent Successfully
              </h1>
            ) : messageStatus === "error" ? (
              <h1
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  color: "red",
                  fontSize: "1.2rem",
                  marginBlock: "20px",
                }}
              >
                Message sending failed
              </h1>
            ) : null}
            <input
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <textarea
              value={message}
              rows="5"
              placeholder="Message"
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <button>Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}
