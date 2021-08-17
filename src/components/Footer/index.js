import React from "react";

function Footer(props) {
  return (
    <footer id="contact" className="grid grid-cols-12 bg-dark text-light">
      <h2 className="col-start-4 col-span-2 flex justify-end items-center">
        Contact
        <div className="divider m-2 h-10 w-1 rounded bg-mid"></div>
      </h2>

      <address className="flex flex-row items-center justify-start">
        <a className="p-1" href="mailto:japankid.jake@gmail.com">
          Email
        </a>
        <a className="p-1" href="https://github.com/japankid-code">
          GitHub
        </a>
        <a className="p-1" href="http://www.linkedin.com/in/jake-rankin">
          LinkedIn
        </a>
        <a
          className="p-1"
          href="https://open.spotify.com/user/iqfbos2wipx6uwwtzmqe2l5x1?si=u7v-GupqTtO07qFdjQCChQ"
        >
          Spotify
        </a>
        <a className="p-1" href="https://discord.com/users/japankid#6969">
          Discord
        </a>
      </address>
    </footer>
  );
}

export default Footer;
