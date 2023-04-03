import React from "react";
import Image from "next/image";
import Link from "next/link";

// Naviagtion Style
import style from "./Hero.module.scss";

const Hero = () => {
  return (
    <>
      <div id="container">
        <div className={style.hero_container}>
          <div className={style.hero_section_cto}>
            <div className={style.hero_text}>
              <div className={style.cto_text}>
                <h1>
                  The Better private and secure events and parties for
                  individuals.
                </h1>
              </div>
              <div className={style.cto_desc}>
                <p>
                  Revel is a company that specializes in organizing private and
                  secure events and parties for individuals. Their focus is on
                  creating unique and unforgettable experiences that cater to
                  the specific needs and preferences of their clients.
                </p>
              </div>
              <div className={style.cto_action}>
                <Link href="/">
                  <button data-btn="primary">Book a demo</button>
                </Link>
                <Link href="/getting-started">
                  <button data-btn="transparent">Get Mentorship</button>
                </Link>
              </div>
            </div>
            <div className={style.hero_send_message_area}>
              <div className={style.hero_form_container}>
                <form className={style.hero_form}>
                  <div className={style.form_title}>
                    <h2>Contact Us Today !!!</h2>
                    <p>Send us a message today.</p>
                  </div>
                  <div className={style.group_field}>
                    <label htmlFor="subject">Subject</label>
                    <input type="text" name="subject" id="subject" />
                  </div>

                  <div className={style.group_field}>
                    <label htmlFor="message">Message</label>
                    <textarea name="message" rows={5}></textarea>
                  </div>

                  <div className={style.group_field}>
                    <button>Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
