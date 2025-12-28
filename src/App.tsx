import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ClientSections } from "./components/ClientSections";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { PrivacyPolicy } from "./components/PrivacyPolicy";
import { Footer } from "./components/Footer";
import "./globals.css";

export default function App() {
  return (
    <div className="min-h-screen bg-black dark">
      <Header />
      <Hero />
      <ClientSections />
      <About />
      <Contact />
      <PrivacyPolicy />
      <Footer />
    </div>
  );
}
