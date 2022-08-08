import React, { useState } from "react";
import Header from "../components/Header";
import MyTypewriter from "../components/MyTypewriter";

export default function MapsPage() {
	return (
		<main className="app">
			<Header />
			<section className="maps-section">
				<MyTypewriter message="Maps" />
				<hr className="pages-hr" />
				<div className="maps-container">
					<h2>Maps Info</h2>
					<p className="maps-content">
						Each server is running an updated version of the Linux 64 bit 1.32e
						release. The servers are set to allow downloads, redirecting clients
						to use the faster HTTP protocol built into the 1.32e executable and
						automatically download new maps as the user connects to them. It is
						recommended that clients download this new release to take advantage
						of its many improvements.
					</p>
				</div>
				<div className="maps-container">
					<h2>Download Links</h2>
					<span className="maps-content">
						The maps running on all four servers can be downloaded manually{" "}
						<a
							href="http://dl.warserver.net/files/quake3/baseq3/"
							rel="noreferrer"
							target="_blank">
							<MyTypewriter message="HERE" />
						</a>
						if needed. Place these files in your “baseq3” directory.
					</span>
				</div>
			</section>
		</main>
	);
}
