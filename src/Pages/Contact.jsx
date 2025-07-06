import React from "react";

const Contact = () => {

  const handleFormSubmit = (formData) => {
    // console.log(formData.entries());
    const fromInputData = Object.fromEntries(formData.entries())
    console.log(fromInputData);
  }
  return (
    <>
      <section className="section-contact">
        <h2 className="container-title">Contact Us</h2>

        <div className="contact-wrapper container">
          <form action={handleFormSubmit}>
          <input
            type="text"
            className="form-control"
            name="username"
            placeholder="Enter your Name"
            required
            autoComplete="off"
          />
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Enter your Email"
            required
            autoComplete="off"
          />
          <textarea
            className="form-control"
            name="message"
            rows='10'
            placeholder="Enter your Message"
            required
            autoComplete="off"
          ></textarea>
          <button type="submit">Send</button>
        </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
