import React from "react";
import { Parallax } from "react-parallax";
import Header from "../components/Header";
import MyTypewriter from "../components/MyTypewriter";
import servers, { CreateServerCard } from "../components/servers/serverList";

export default function ServerPage() {
	return (
		<main className="app">
			<Header />
			<section className="server-section">
				<MyTypewriter message="WarServeR Quake 3 Arena Servers" />
				<hr className="pages-hr" />
				<p className="server-intro">
					Below are the currently running Quake 3 Arena servers. I run these
					servers just for fun and to practice various skills required when
					playing online.
				</p>
				<div className="server-list">{servers.map(CreateServerCard)}</div>
			</section>
		</main>
	);
}
