import React, { useState } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

import ContactForm from "./ContactForm";

function Contact({ currentSection }) {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  return (
    <section
      id="contact"
      className="grid grid-cols-12 m-2 mt-8 self-center flex-grow"
    >
      <h2 className="col-start-1 xl:col-start-2 col-span-3 flex justify-end text-2xl">
        {capitalizeFirstLetter(currentSection.name)}
        <div className="divider m-1 h-8 w-1 rounded bg-dark ml-2"></div>
      </h2>

      <div className="col-span-7 xl:col-span-5 flex flex-col m-2">
        <span>{currentSection.description}</span>
        <ContactForm formState={formState} setFormState={setFormState} />
      </div>
    </section>
  );
}

export default Contact;
