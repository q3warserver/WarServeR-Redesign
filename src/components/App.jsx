import React from "react";
import Header from "./Header";
import WelcomeTypewriter from "./WelcomeTypewriter";
import servers from "./servers/serverList";

function App() {
  return (
    <main className="App">
      <Header />
      <WelcomeTypewriter message="Welcome to WarServeR" />{" "}
      <section className="home-intro">
        <h1>What is WarServeR?</h1>
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
