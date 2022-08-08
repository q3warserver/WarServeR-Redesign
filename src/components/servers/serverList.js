import MyTypewriter from "../MyTypewriter";

const servers = [
	{
		key: 0,
		name: "WarServeR InsTagib",
		description:
			"This server is running a Q3A ZMOD with slightly tweaked speed and gravity settings. Instagib is fun, but it is even more fun when it is fast paced.",
		address: "Connect to: instagib.warserver.net",
		imgSrc:
			"https://cache.gametracker.com/server_info/instagib.warserver.net:27960/b_560_95_1.png",
		imgLink:
			"https://www.gametracker.com/server_info/instagib.warserver.net:27960/",
	},
	{
		key: 1,
		name: "WarServeR CTF",
		description:
			"This server is running a CTF Q3A OSP MOD set to VQ3 physics settings. The maps set in the default rotations are geared for 1v1 play with a few slightly larger maps that will be triggered should more players connect.",
		address: "Connect to: ctf.warserver.net",
		imgSrc:
			"https://cache.gametracker.com/server_info/ctf.warserver.net:27960/b_560_95_1.png",
		imgLink: "https://www.gametracker.com/server_info/ctf.warserver.net:27960/",
	},
	{
		key: 2,
		name: "WarServeR DeFraG",
		description:
			"This server is running the popular Defrag MOD. Two of the most popular maps running on the server are 'XCM_TRICKS2' and 'DFWC2017-6",
		address: "Connect to: defrag.warserver.net:27962",
		imgSrc:
			"https://cache.gametracker.com/server_info/defrag.warserver.net:27962/b_560_95_1.png",
		imgLink:
			"https://www.gametracker.com/server_info/defrag.warserver.net:27962/",
	},
	{
		key: 3,
		name: "WarServeR FFA",
		description:
			"This server is running a FFA Q3A ZMOD set to VQ3 physics settings. The maps set in the default rotations are geared for 1v1 play with a few slightly larger maps that will be triggered should more players connect.",
		address: "Connect to: ffa.warserver.net:27963",
		imgSrc:
			"https://cache.gametracker.com/server_info/ffa.warserver.net:27963/b_560_95_1.png",
		imgLink: "https://www.gametracker.com/server_info/ffa.warserver.net:27963/",
	},
	{
		key: 4,
		name: "WarServeR DueL",
		description:
			"This server is running a Duel Q3A ZMOD set to VQ3 physics settings. The maps set in the default rotation are geared for 1v1. There is a bot running around that is set to a medium skill level.",
		address: "Connect to: duel.warserver.net:27964",
		imgSrc:
			"https://cache.gametracker.com/server_info/207.148.26.119:27964/b_560_95_1.png",
		imgLink: "https://www.gametracker.com/server_info/207.148.26.119:27964/",
	},
];

function ServerCard(props) {
	return (
		<div className="server-card">
			<MyTypewriter message={props.name} />
			<div className="server-card-wrapper">
				<p className="server-card-description">{props.description}</p>
				<p className="server-card-address"></p>
				<a href={props.imgLink} rel="noreferrer" target="_blank">
					<img className="img-fluid" src={props.imgSrc} alt="server summary" />
				</a>
			</div>
		</div>
	);
}

function CreateServerCard(server) {
	return (
		<ServerCard
			key={server.key}
			name={server.name}
			description={server.description}
			address={server.address}
			imgLink={server.imgLink}
			imgSrc={server.imgSrc}
		/>
	);
}

export default servers;
export { CreateServerCard };
