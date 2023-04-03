import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

// React Icons
import { BsJournals, BsTextWrap } from "react-icons/bs";

// Naviagtion Data
import { NavBarData, LogoName } from "../../data/Naviagtion";

// Naviagtion Style
import style from "./Navigation.module.scss";

// Icon Style
const Iconstyle = {
  fontSize: "2em",
  color: "#0F4598",
  cursor: "pointer",
};

// Naviagtion Component
const Naviagtion = () => {
  const router = useRouter();

  // Current Path
  const current_url_pathname: any = router.pathname;

  return (
    <>
      <nav id={style.nav}>
        <div className={style.container}>
          <div id="container">
            <div className={style.navbar_container}>
              <div className={style.left_items}>
                <div className={style.logo}>
                  <Link href="/">
                    <BsJournals />
                    {LogoName}
                  </Link>
                </div>
                <div className={style.list}>
                  <ul>
                    {NavBarData.map((data) => {
                      return (
                        <Link
                          key={data.id}
                          href={data.url.toLowerCase()}
                          id={
                            current_url_pathname === "/"
                              ? "active"
                              : "not-active"
                          }
                        >
                          <li>{data.title}</li>
                        </Link>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className={style.right_items}>
                <Link href="/getting-started">
                  <button className={style.btn} id={style.primary}>
                    Get Mentorship
                  </button>
                </Link>
              </div>
              <div className={style.hivee_hamburger}>
                <div className="hivee_fold_hamburger">
                  <BsTextWrap style={Iconstyle} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Naviagtion;
