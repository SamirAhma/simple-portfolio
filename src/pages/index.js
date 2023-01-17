import Head from "next/head";
import Image from "next/image";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Works from "@/components/Works";
import About from "@/components/About";
import Skills from "@/components/Skills";
import ContactUs from "@/components/ContactUs";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ahmaddin</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <Hero />
        <Works />
        <About />
        <Skills />
        <ContactUs />
      </main>
    </>
  );
}
