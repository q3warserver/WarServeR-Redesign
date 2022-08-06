import React from "react";
import Header from "../components/Header";
import WelcomeTypewriter from "../components/WelcomeTypewriter";

export default function MapsPage() {
  return (
    <main className="app">
      <Header />
      <section className="maps-section">
        <div className="maps-container">
          <WelcomeTypewriter message="Maps" />
          <hr className="pages-hr" />
          <p className="maps-intro">
            Each server is running an updated version of the Linux 64 bit 1.32e
            release. The servers are set to allow downloads, redirecting clients
            to use the faster HTTP protocol built into the 1.32e executable. It
            is recommended that clients download this new release to take
            advantage of its many improvements.
          </p>
        </div>
      </section>
    </main>
  );
}
