import React, { useState } from "react";

import { validateEmail } from "../../utils/helpers";

function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log("Submit Form", formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      // console.log("Handle Form", formState);
    }
  };

  return (
    <section className="ring-2 bg-mid text-light max-w-sm min-w-max self-center rounded-sm">
      <form
        id="contact-form"
        onSubmit={handleSubmit}
        action="mailto:japankid.jake@gmail.com"
        method="get"
        enctype="text/plain"
        className="flex flex-col"
      >
        <div className="flex flex-grow justify-between p-1">
          <label htmlFor="name">Name:</label>
          <input
            className="rounded-sm text-dark"
            type="text"
            name="name"
            size="24"
            defaultValue={name}
            onBlur={handleChange}
          />
        </div>
        <div className="flex flex-grow justify-between p-1">
          <label htmlFor="email">Email address:&nbsp;</label>
          <input
            className="rounded-sm text-dark"
            type="email"
            name="email"
            size="24"
            defaultValue={email}
            onBlur={handleChange}
          />
        </div>
        <div className="flex flex-grow justify-between p-1">
          <label htmlFor="message">Message:</label>
          <textarea
            className="rounded-sm text-dark"
            name="message"
            cols="24"
            rows="5"
            defaultValue={message}
            onBlur={handleChange}
          />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text p-1 text-red-600">{errorMessage}</p>
          </div>
        )}
        <button
          data-testid="button"
          type="submit"
          className="bg-pop m-2 py-1 p-4 ring-2 rounded max-w-min self-center text-dark"
        >
          Submit
        </button>
      </form>
    </section>
  );
}

export default ContactForm;
