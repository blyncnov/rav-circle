import React from "react";

// Pricing Styles
import style from "./pricing.module.scss";

// Data
import {
  ProfessionalDetails,
  EnterpriseDetails,
  EnterprisePlusDetails,
} from "../../data/pricing";

const Pricing = () => {
  return (
    <div className={style.pricing_section}>
      <div className={style.subscriptions_plans}>
        <div>
          <div className={style.pricing_header}>
            <h1>Our Services Pricing:</h1>
            <p>
              Revel is a company that specializes in organizing private and
              secure events .
            </p>
          </div>
          <div className={style.pricing_grid}>
            <PricingCard PricingDetails={ProfessionalDetails} />
            <PricingCard PricingDetails={EnterpriseDetails} tainted />
            <PricingCard PricingDetails={EnterprisePlusDetails} />
          </div>
        </div>
      </div>
    </div>
  );
};

const PricingCard = ({ tainted, PricingDetails }: any) => {
  return (
    <>
      <section className={style.pricing_card}>
        <div className={style.pricing_card_top_title}>
          <p> {PricingDetails.title.toUpperCase()}</p>
        </div>
        <section className={style.pricing_card_inner_section}>
          <div className={style.pricing_card_top}>
            <h1>
              ${PricingDetails.price}
              <sub>/Month</sub>
            </h1>
            <p>Billed Monthly</p>
          </div>
          <div className={style.pricing_card_middle}>
            <h4>Package Includes:</h4>
            <ul>
              {PricingDetails.details.map((data: string) => {
                return <li>{data}</li>;
              })}
            </ul>
          </div>
          <div className={style.pricing_card_bottom}>
            <button>Subscribe</button>
          </div>
        </section>
      </section>
    </>
  );
};

export default Pricing;
