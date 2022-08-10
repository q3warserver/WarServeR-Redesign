import React from "react";
import Header from "../components/Header";
import MyTypewriter, { Typewriter } from "../components/MyTypewriter";

// Main route you land on

function App() {
	return (
		<main className="app">
			<Header />
			<MyTypewriter message="Welcome to WarServeR" />{" "}
			<section className="home-intro">
				<h2 className="page-h2">What is WarServeR?</h2>
				<p>
					At WarServeR, we are keeping Quake 3 Arena alive for all the players
					that have stuck with it over the last 2 decades as well as the next
					generation of players.
				</p>
				<h3 className="page-h3">Quake 3 Arena</h3>
				<span>
					is the third Quake game developed by id Software and the first game to
					prioritize multiplayer. It was a pioneer for the fps genre by
					introducing advanced movement and numerous player tweaks that would be
					enjoyed by many games in the industry for decades to come. You can buy
					Quake 3 Arena on{" "}
					<a
						href="https://store.steampowered.com/app/2200/Quake_III_Arena/"
						rel="noreferrer"
						target="_blank">
						<Typewriter
							options={{
								cursor: "_",
								delay: 85,
								wrapperClassName: "link-typewriter",
							}}
							onInit={(typewriter) => {
								typewriter.typeString("Steam.").start();
							}}
						/>
					</a>
				</span>
			</section>
		</main>
	);
}

export default App;
