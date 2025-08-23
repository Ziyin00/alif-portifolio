import { Navbar } from "./components/core/navbar";
import { WhoWeAre } from "./components/sections/about";
import { GetInTouch } from "./components/sections/contact";
import { Footer } from "./components/sections/footer";
import { Hero } from "./components/sections/hero"
import { JoinBeta } from "./components/sections/join";
import { SuccessStories } from "./components/sections/projects";
import { WhatWeDo } from "./components/sections/service";


export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Fixed Navbar */}
      <Navbar />
      
      {/* Main Content */}
      <main className="flex flex-col">
        <Hero />
        <WhoWeAre />
        <WhatWeDo />
        <SuccessStories />
        <GetInTouch />
        <JoinBeta />
        <Footer />
      </main>
    </div>
  );
}