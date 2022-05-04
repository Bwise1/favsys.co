import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    number: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleFieldChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");

    let data = formData;
    console.log(data);

    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 200) {
        console.log("Response succeeded!");
        setFormData({
          name: "",
          organization: "",
          number: "",
          email: "",
          message: "",
        });
        setSubmitted(true);
      }
    });
  };

  return (
    <div>
      <form>
        {!submitted ? (
          <div className="grid gap-y-6 gap-x-16 py-8 font-umbaReg">
            <div className="">
              <input
                className="contact-input"
                name="name"
                type="name"
                id="email"
                placeholder="Name"
                required
                onChange={handleFieldChange}
                value={formData.name}
              />
            </div>
            <div>
              <input
                className="contact-input"
                name="organization"
                type="text"
                id="org"
                placeholder="Organization"
                onChange={handleFieldChange}
                required
                value={formData.organization}
              />
            </div>
            <div>
              <input
                className="contact-input"
                name="number"
                type="tel"
                id="tel"
                placeholder="Phone Number"
                onChange={handleFieldChange}
                required
                value={formData.number}
              />
            </div>
            <div>
              <input
                className="contact-input"
                name="email"
                type="email"
                id="email"
                onChange={handleFieldChange}
                placeholder="Work Email"
                required
                value={formData.email}
              />
            </div>
            <div className="lg:col-span-2 resize-y">
              <textarea
                className="contact-input"
                name="message"
                type="text"
                id="message"
                placeholder="Message"
                onChange={handleFieldChange}
                required
                value={formData.message}
              />
            </div>
            <div>
              <button
                onClick={(e) => {
                  handleSubmit(e);
                }}
                className="button py-2 px-4"
              >
                Submit
              </button>
            </div>
          </div>
        ) : (
          <div className="m-auto alignitems-center font-medium mt-6 text-xl">
            Your Message has been successfully send. we will contact you very
            soon
          </div>
        )}
      </form>
    </div>
  );
}
