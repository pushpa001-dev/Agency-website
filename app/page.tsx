"use client";
import { useState } from 'react';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Service from "@/components/Service";
import Workflow from "@/components/Workflow";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";

export default function Home() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <main>
      {!loadingComplete && <Loader onComplete={() => setLoadingComplete(true)} />}
      <Navbar />
      <Hero />
      <Service />
      <Workflow />
      <Contact />
      <Footer />
    </main>
  );
}
