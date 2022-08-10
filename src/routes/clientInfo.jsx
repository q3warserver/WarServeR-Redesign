import React, { useState } from "react";
import Header from "../components/Header";
import MyTypewriter from "../components/MyTypewriter";
import clientSettings, {
	CreateNewClientSetting,
} from "../components/client_info/clientSettings";
import clientCommands, {
	CreateNewCommandLi,
} from "../components/client_info/clientCommands";

export default function ClientInfoPage() {
	// Handling clicks on the different h2s for client page

	const [isClicked1, setisClicked1] = useState(false);
	const [isClicked2, setisClicked2] = useState(false);
	const [isClicked3, setisClicked3] = useState(false);
	function HandleClick1() {
		if (!isClicked1) {
			setisClicked1(true);
		} else {
			setisClicked1(false);
		}
	}
	function HandleClick2() {
		if (!isClicked2) {
			setisClicked2(true);
		} else {
			setisClicked2(false);
		}
	}
	function HandleClick3() {
		if (!isClicked3) {
			setisClicked3(true);
		} else {
			setisClicked3(false);
		}
	}

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
					<h2
						onClick={HandleClick1}
						className="client-info-steps-title hidden-client-title page-h2">
						Step by Step{" "}
						<span>
							<i
								style={{ transform: isClicked1 ? "rotate(180deg)" : null }}
								className="fa-solid fa-arrow-down"></i>
						</span>
					</h2>
					<div
						style={{
							display: isClicked1 ? "block" : "none",
						}}>
						<ul className="client-info-steps-list">
							<li className="client-info-step">
								<p className="client-info-steps-content">
									The first thing you want to do is download QUAKE3E. This is a
									MODERN version of the Q3 exe file. You can download the file
									here:{" "}
									<a
										href="https://github.com/ec-/Quake3e/releases"
										rel="noreferrer"
										target="_blank">
										QUAKE3E
									</a>
									<br />
									The file you will most likely want is the one named
									“quake3e-windows-msvc-x86_64.zip” if you are running a Windows
									64 bit OS. You only need to copy ONE of the files in the zip
									archive (quake3e.x64.exe) to the main Quake 3 directory where
									your game is installed. Just place that file alongside your
									current “quake3.exe” file. You will be launching the game from
									this file from now on. If Windows gives a warning that the
									file is unsafe, just tell Windows to allow it.
								</p>
							</li>
							<li className="client-info-step">
								<p className="client-info-steps-content">
									Next, download the files below and extract them into your
									“BASEQ3” directory.
								</p>
								<ul>
									<li>
										<p className="client-info-steps-content">
											To take advantage of the OSP commands and features
											supported by ZMOD, grab{" "}
											<a
												href="http://dl.warserver.net/files/quake3/osp/"
												rel="noreferrer"
												target="_blank">
												these
											</a>{" "}
											files and extract them into your BASEQ3 directory.
										</p>
									</li>
									<li>
										<p className="client-info-steps-content">
											If you plan on playing CTF you will want the{" "}
											<a
												href="http://dl.warserver.net/files/misc/3wave/"
												rel="noreferrer"
												target="_blank">
												3wave map pak
											</a>{" "}
											files. Download the 3wave pk3’s via the link below and
											extract them into your BASEQ3 directory:
										</p>
									</li>
									<li>
										<p className="client-info-steps-content">
											If you want to run the game using HIRES textures. Download
											the{" "}
											<a
												href="http://dl.warserver.net/files/misc/"
												rel="noreferrer"
												target="_blank">
												HIRES texture pk3
											</a>{" "}
											and extract them into your BASEQ3 directory:
										</p>
									</li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
				<div className="client-info-settings client-container">
					<h2
						onClick={HandleClick2}
						className="client-info-settings-title hidden-client-title page-h2">
						Client Settings{" "}
						<span>
							<i
								style={{
									transform: isClicked2 ? "rotate(180deg)" : null,
									animationTimingFunction: "ease-in-out",
								}}
								className="fa-solid fa-arrow-down"></i>
						</span>
					</h2>
					<div
						style={{
							display: isClicked2 ? "block" : "none",
						}}
						className="client-hidden">
						<p className="client-info-settings-instructions client-content">
							These settings are broadcast on the servers which will help
							players configure their clients to optimize play. You can enter
							each of these settings into the console in the game as follows:
						</p>
						<ul>{clientSettings.map(CreateNewClientSetting)}</ul>
					</div>
				</div>
				<div className="client-info-steps-commands client-container">
					<h2
						onClick={HandleClick3}
						className="client-info-commands-title hidden-client-title page-h2">
						Client Commands{" "}
						<span>
							<i
								style={{ transform: isClicked3 ? "rotate(180deg)" : null }}
								className="fa-solid fa-arrow-down"></i>
						</span>
					</h2>
					<div
						style={{
							display: isClicked3 ? "block" : "none",
						}}
						className="client-hidden">
						<p className="client-info-commands-instructions">
							These commands do things. Enter them in as follows:
						</p>
						<ul>{clientCommands.map(CreateNewCommandLi)}</ul>
					</div>
				</div>
			</section>
		</main>
	);
}
