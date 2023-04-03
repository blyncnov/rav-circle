import React, { useState } from "react";

// Features Style
import style from "./features.module.scss";

// React Icons
import { BsCheckCircleFill } from "react-icons/bs";

// Data
import { OurPackage } from "../../data/Features";
import Image from "next/image";

// Image
import MentorshipImage from "../../public/mentor-2.webp";

// Icon Style
const Icon_style = {
  fontSize: "30px",
};

const Features = () => {
  return (
    <>
      <div className={style.feature_section}>
        <div className={style.feature_header}>
          <h1>Services We Offers:</h1>
          <p>
            Revel is a company that specializes in organizing private and secure
            events and parties for individuals. Their focus is on creating
            unique and unforgettable experiences for clients.
          </p>
        </div>
        <div className={style.feature_grid_section}>
          <div className={style.feature_grid_container}>
            <div className={style.feature_column}>
              <div className={style.feature_display}>
                <Image priority={true} src={MentorshipImage} alt="mentorship" />
              </div>
            </div>
            <div className={style.feature_column}>
              <div className={style.feature_options}>
                {OurPackage.map((data) => {
                  return <FeatureAccordion key={data.id} data={data} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const FeatureAccordion = (props: any) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <div className={style.feature_opt}>
        <BsCheckCircleFill style={Icon_style} />
        <div className={style.feature_opt_content}>
          <p> {props.data.package} </p>
          <div className={style.feature_dropdown_content}>
            <p></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
