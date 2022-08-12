import React, { useState } from "react";
import Header from "../components/Header";
import MyTypewriter from "../components/MyTypewriter";
import clientSettings, {
	CreateNewClientSetting,
} from "../components/client_info/clientSettings";
import clientCommands, {
	CreateNewCommandLi,
} from "../components/client_info/clientCommands";
import { motion } from "framer-motion";
import Div1, { Div2, Div3 } from "../components/client_info/clientDivs";

export default function ClientInfoPage() {
	// Handling clicks on the different h2s for client page

	const [div1Open, setDiv1Open] = useState(false);
	const close1 = () => setDiv1Open(false);
	const open1 = () => {
		setDiv1Open(true), setDiv2Open(false), setDiv3Open(false);
	};
	const [div2Open, setDiv2Open] = useState(false);
	const close2 = () => setDiv2Open(false);
	const open2 = () => {
		setDiv2Open(true), setDiv3Open(false), setDiv1Open(false);
	};
	const [div3Open, setDiv3Open] = useState(false);
	const close3 = () => setDiv3Open(false);
	const open3 = () => {
		setDiv3Open(true), setDiv1Open(false), setDiv2Open(false);
	};

	// Client Info Page

	return (
		<main className="app">
			<Header />
			<section className="client-info-wrapper">
				<MyTypewriter message="Client Info" />
				<hr className="pages-hr" />
				<div className="client-container">
					<h2 className="client-info-intro-title page-h2">
						Intro to WarServer
					</h2>
					<p className="client-info-intro-content">
						WarServeR runs ZMOD, an actively developed Q3 modification that
						incorporates many OSP features and features used by other MODs along
						with some original customizations. To optimize your Q3 experience on
						WarServeR, please see the information below.
					</p>
				</div>
				<div className="client-container">
					<h2 className="client-info-steps-title hidden-client-title page-h2">
						Step by Step{" "}
						<motion.button
							whileHover={{ scale: 1.3 }}
							whileTap={{ scale: 0.9 }}
							onClick={() => (div1Open ? close1() : open1())}>
							<i
								style={{ transform: div1Open ? "rotate(180deg)" : null }}
								className="fa-solid fa-arrow-down"></i>
						</motion.button>
					</h2>
					{div1Open && <Div1 div1Open={div1Open} handleClose={close1} />}
				</div>
				<div className="client-info-settings client-container">
					<h2 className="client-info-settings-title hidden-client-title page-h2">
						Client Settings{" "}
						<motion.button
							whileHover={{ scale: 1.3 }}
							whileTap={{ scale: 0.9 }}
							onClick={() => (div2Open ? close2() : open2())}>
							<i
								style={{
									transform: div2Open ? "rotate(180deg)" : null,
									animationTimingFunction: "ease-in-out",
								}}
								className="fa-solid fa-arrow-down"></i>
						</motion.button>
					</h2>
					{div2Open && <Div2 div2Open={div2Open} handleClose={close2} />}
				</div>
				<div className="client-info-steps-commands client-container">
					<h2 className="client-info-commands-title hidden-client-title page-h2">
						Client Commands{" "}
						<motion.button
							whileHover={{ scale: 1.3 }}
							whileTap={{ scale: 0.9 }}
							onClick={() => (div3Open ? close3() : open3())}>
							<i
								style={{ transform: div3Open ? "rotate(180deg)" : null }}
								className="fa-solid fa-arrow-down"></i>
						</motion.button>
					</h2>
					{div3Open && <Div3 div3Open={div3Open} handleClose={close3} />}
				</div>
			</section>
		</main>
	);
}
