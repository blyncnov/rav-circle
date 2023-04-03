import Head from "next/head";

// => SCSS Styles
import style from "./index.module.scss";

// => Components
import Naviagtion from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Support from "@/components/Support";

export default function Home() {
  return (
    <>
      <Head>
        <title>Rav | Let Me Be Your Mentor today !</title>
        <meta name="Rav | Let Me Be Your Mentor" content="Rav | Mentorship" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header components */}
      <section id={style.main}>
        {/* Navigation components */}
        <Naviagtion />
        {/* Hero components */}
        <Hero />
      </section>
      <section>
        <Features />
        {/* pricing components */}
        <Pricing />
        {/* FAQ components */}
        <FAQ />
        {/* Banner components */}
        <Support />
        {/* Footer components */}
        <Footer />
      </section>
    </>
  );
}
