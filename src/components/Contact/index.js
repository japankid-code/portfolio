import React from "react";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <section
      id="contact"
      className="grid grid-cols-12 m-2 mt-8 self-center flex-grow min-w-full"
    >
      <h2 className="col-start-1 xl:col-start-2 col-span-3 flex justify-end text-2xl">
        Contact
        <div className="divider m-1 h-8 w-1 rounded bg-dark ml-2"></div>
      </h2>

      <div className="col-span-7 xl:col-span-5 flex flex-col m-2">
        <span className="mb-4">
          Please submit the following form in order to contact me:
        </span>
        <ContactForm />
      </div>
    </section>
  );
}

export default Contact;
