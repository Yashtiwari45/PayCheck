import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import PricingSection from "@/components/PricingSection";
import CompetitorComparisonSection from "@/components/CompetitorComparisonSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted email:", email);
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-indigo-900 text-white">
      <Header />
      <main className="container mx-auto mt-20 text-center">
        <Hero email={email} setEmail={setEmail} handleSubmit={handleSubmit} />
        <Features />
        <Testimonials />
        <PricingSection />
        <CompetitorComparisonSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
