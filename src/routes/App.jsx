import React from "react";
import Header from "../components/Header";
import WelcomeTypewriter from "../components/WelcomeTypewriter";

function App() {
  return (
    <main className="app">
      <Header />
      <WelcomeTypewriter message="Welcome to WarServeR" />{" "}
      <section className="home-intro">
        <h2>What is WarServeR?</h2>
        <p>
          At WarServeR, we are keeping Quake 3 Arena alive for the all the
          players that have stuck with it over the last 2 decades as well as the
          next generation of players.
        </p>
      </section>
    </main>
  );
}

export default App;
