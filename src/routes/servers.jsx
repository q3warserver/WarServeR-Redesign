import React, { useState } from "react";
import { Parallax } from "react-parallax";
import Header from "../components/Header";
import MyTypewriter from "../components/MyTypewriter";
import servers, { CreateServerCard } from "../components/servers/serverList";
import { AnimateSharedLayout, motion } from "framer-motion";

export default function ServerPage() {
	const [selectedID, setSelectedID] = useState(null);

	return (
		<main className="app">
			<Header />
			<section className="server-section">
				<MyTypewriter message="WarServeR Quake 3 Arena Servers" />
				<hr className="pages-hr" />
				<p className="server-intro">
					Currently running Quake 3 Arena servers. Click one to learn more.
				</p>
				<div className="server-list">{servers.map(CreateServerCard)}</div>
			</section>
		</main>
	);
}
