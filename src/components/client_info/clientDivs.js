import React from "react";
import { motion } from "framer-motion";
import clientCommands, { CreateNewCommandLi } from "./clientCommands";
import clientSettings, { CreateNewClientSetting } from "./clientSettings";

const slideIn = {
	hidden: { x: "-100vh", opactiy: 0 },
	visible: {
		y: "0",
		opactiy: 1,
		transition: {
			duration: 0.1,
			type: "spring",
			damping: 25,
			stiffness: 500,
		},
	},
	exit: { y: "100vh", opactiy: 0 },
};

function Div1() {
	return (
		<motion.div
			onClick={(e) => e.stopPropagation()}
			initial="hidden"
			animate="visible"
			exit="exit">
			<ul className="client-info-steps-list">
				<li className="client-info-step">
					<p className="client-info-steps-content">
						The first thing you want to do is download QUAKE3E. This is a MODERN
						version of the Q3 exe file. You can download the file here:{" "}
						<a
							href="https://github.com/ec-/Quake3e/releases"
							rel="noreferrer"
							target="_blank">
							QUAKE3E
						</a>
						<br />
						The file you will most likely want is the one named
						“quake3e-windows-msvc-x86_64.zip” if you are running a Windows 64
						bit OS. You only need to copy ONE of the files in the zip archive
						(quake3e.x64.exe) to the main Quake 3 directory where your game is
						installed. Just place that file alongside your current “quake3.exe”
						file.
					</p>
				</li>
				<li className="client-info-step">
					<p className="client-info-steps-content">
						Next, download the files below and extract them into your “BASEQ3”
						directory.
					</p>
					<ul>
						<li>
							<p className="client-info-steps-content">
								To take advantage of the OSP commands and features supported by
								ZMOD, grab{" "}
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
								files. Download the 3wave pk3’s via the link below and extract
								them into your BASEQ3 directory:
							</p>
						</li>
						<li>
							<p className="client-info-steps-content">
								If you want to run the game using HIRES textures. Download the{" "}
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
		</motion.div>
	);
}

function Div2() {
	return (
		<motion.div
			onClick={(e) => e.stopPropagation()}
			initial="hidden"
			animate="visible"
			exit="exit"
			className="client-hidden">
			<p className="client-info-settings-instructions client-content">
				These settings are broadcast on the servers which will help players
				configure their clients to optimize play. You can enter each of these
				settings into the console in the game as follows:
			</p>
			<ul>{clientSettings.map(CreateNewClientSetting)}</ul>
		</motion.div>
	);
}

function Div3() {
	return (
		<motion.div
			onClick={(e) => e.stopPropagation()}
			initial="hidden"
			animate="visible"
			exit="exit"
			className="client-hidden">
			<p className="client-info-commands-instructions">
				These commands do things. Enter them in as follows:
			</p>
			<ul>{clientCommands.map(CreateNewCommandLi)}</ul>
		</motion.div>
	);
}

export default Div1;
export { Div2, Div3 };
