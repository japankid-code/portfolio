import React, { useState } from "react";

import ContactForm from "./ContactForm";

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  return (
    <section>
      <ContactForm
        formState={formState}
        setFormState={setFormState}
      ></ContactForm>
    </section>
  );
}

export default Contact;
