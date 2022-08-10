import React, { useState } from "react";
import Header from "../components/Header";
import MyTypewriter from "../components/MyTypewriter";
import servers, { CreateServerCard } from "../components/servers/serverList";

// Server list Page

export default function ServerPage() {
	const [selectedID, setSelectedID] = useState(null);

	return (
		<main className="app">
			<Header />
			<section className="server-section">
				<MyTypewriter message="WarServeR Quake 3 Arena Servers" />
				<hr className="pages-hr" />
				<p className="server-intro">
					These are the currently running Quake 3 Arena servers.
				</p>
				<div className="server-list">{servers.map(CreateServerCard)}</div>
			</section>
		</main>
	);
}
