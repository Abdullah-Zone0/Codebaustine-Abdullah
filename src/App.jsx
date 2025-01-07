import React from "react";
import "./App.css";
import Hero from "./assets/ui/hero";
import ServicesWealsooffer from "./assets/ui/ServicesWealsooffer";
import Navbar from "./assets/ui/Navbar";
import Whoweare from "./assets/ui/Whoweare";
import Whatwedo from "./assets/ui/Whatwedo";
import Tabs from "./assets/ui/Tabs";
import WhyCodeBoustine from "./assets/ui/WhyCodeBoustine";
import LatestInsights from "./assets/ui/LatestInsights";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <dl className="h-20"></dl>
      <Whoweare />
      <dl className="h-20"></dl>
      <ServicesWealsooffer />
      <dl className="h-20"></dl>
      <Whatwedo />
      <dl className="h-20"></dl>
      <Tabs />
      <dl className="h-20"></dl>
      <WhyCodeBoustine />
      <dl className="h-20"></dl>
      <LatestInsights />
    </>
  );
}

export default App;
