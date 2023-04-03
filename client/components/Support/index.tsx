import React from "react";

// Support Style
import style from "./support.module.scss";

const Support = () => {
  return (
    <div className={style.support_section}>
      <div className={style.support_container}>
        <div className={style.support_text_holder}>
          <h2>Do you need our help ?</h2>
          <p>
            Their focus is on creating unique and unforgettable experiences for
            clients.
          </p>
        </div>
        <form action="POST" className={style.support_form}>
          <div className={style.grouped_data}>
            <input
              type="text"
              name="school"
              className={style.input}
              placeholder="Type your first name"
            />
          </div>
          <div className={style.grouped_data}>
            <input
              type="text"
              name="school"
              className={style.input}
              placeholder="Type your message "
            />
          </div>
          <div className={style.support_button}>
            <button>Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Support;
