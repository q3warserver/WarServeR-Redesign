import MyTypewriter from "../MyTypewriter";

// Coding the server list since he only runs these

const servers = [
	{
		key: 0,
		name: "WarServeR CTF",
		description:
			"This server is running a custom server side MOD called ZMOD. The gametype is CTF running base maps and VQ3 physics.",
		address: "\\connect ctf.warserver.net",
		location: "(Virginia)",
		imgSrc:
			"https://cache.gametracker.com/server_info/ctf.warserver.net:27960/b_560_95_1.png",
		imgLink: "https://www.gametracker.com/server_info/ctf.warserver.net:27960/",
	},
	{
		key: 1,
		name: "WarServeR CTF 2",
		description:
			"This server is running a custom server side MOD called ZMOD. The gametype is CTF running a mixture of customized maps and base maps.",
		address: "\\connect ctf2.warserver.net",
		location: "(New Jersey)",
		imgSrc:
			"https://cache.gametracker.com/server_info/8.12.17.108:27960/b_560_95_1.png ",
		imgLink: "https://www.gametracker.com/server_info/8.12.17.108:27960/",
	},
	{
		key: 2,
		name: "WarServeR CTF 3",
		description:
			"This server is running a custom server side MOD called ZMOD. The gametype is CTF running a mixture of customized maps and base maps.)",
		address: "\\connect ctf3.warserver.net:27966",
		location: "(Amsterdam)",
		imgSrc:
			"https://cache.gametracker.com/server_info/136.244.97.162:27966/b_560_95_1.png",
		imgLink: "https://www.gametracker.com/server_info/136.244.97.162:27966/",
	},
	{
		key: 3,
		name: "WarServeR DueL",
		description:
			"This server is running a Duel Q3A ZMOD set to VQ3 physics settings. The maps set in the default rotation are geared for 1v1. There is a bot running around that is set to a medium skill level.",
		address: "\\connect duel.warserver.net:27964",
		location: "(New Jersey)",
		imgSrc:
			"https://cache.gametracker.com/server_info/207.148.26.119:27964/b_560_95_1.png",
		imgLink: "https://www.gametracker.com/server_info/207.148.26.119:27964/",
	},
	{
		key: 4,
		name: "WarServeR DueL 2",
		description:
			"This server is running a Duel Q3A ZMOD set to VQ3 physics settings. The maps set in the default rotation are geared for 1v1. There is a bot running around that is set to a medium skill level.",
		address: "\\connect duel2.warserver.net:27964",
		location: "(Virginia)",
		imgSrc:
			"https://cache.gametracker.com/server_info/150.136.62.83:27964/b_560_95_1.png",
		imgLink: "https://www.gametracker.com/server_info/150.136.62.83:27964/",
	},
	{
		key: 5,
		name: "WarServeR DueL 3",
		description:
			"This server is running a Duel Q3A ZMOD set to VQ3 physics settings. The maps set in the default rotation are geared for 1v1. There is a bot running around that is set to a medium skill level.",
		address: "\\connect duel3.warserver.net:27961",
		location: "(Atlanta)",
		imgSrc:
			"https://cache.gametracker.com/server_info/155.138.197.166:27961/b_560_95_1.png",
		imgLink: "https://www.gametracker.com/server_info/155.138.197.166:27961/",
	},
	{
		key: 6,
		name: "WarServeR DueL 4",
		description:
			"This server is running a Duel Q3A ZMOD set to VQ3 physics settings. The maps set in the default rotation are geared for 1v1. There is a bot running around that is set to a medium skill level.",
		address: "\\connect duel4.warserver.net:27961",
		location: "(Amsterdam)",
		imgSrc:
			"https://cache.gametracker.com/server_info/136.244.97.162:27961/b_560_95_1.png",
		imgLink: "https://www.gametracker.com/server_info/136.244.97.162:27961/",
	},
	{
		key: 7,
		name: "WarServeR FFA",
		description:
			"This server is running a FFA Q3A ZMOD set to VQ3 physics settings. The maps set in the default rotations are geared for 1v1 play with a few slightly larger maps that will be triggered should more players connect.",
		address: "\\connect ffa.warserver.net:27963",
		location: "(New Jersey)",
		imgSrc:
			"https://cache.gametracker.com/server_info/ffa.warserver.net:27963/b_560_95_1.png",
		imgLink: "https://www.gametracker.com/server_info/ffa.warserver.net:27963/",
	},
	{
		key: 8,
		name: "WarServeR FFA 2",
		description:
			"This server is running a FFA Q3A ZMOD set to VQ3 physics settings. The maps set in the default rotations are geared for 1v1 play with a few slightly larger maps that will be triggered should more players connect.",
		address: "\\connect ffa2.warserver.net:27963",
		location: "(Atlanta)",
		imgSrc:
			"https://cache.gametracker.com/server_info/155.138.197.166:27963/b_560_95_1.png",
		imgLink: "https://www.gametracker.com/server_info/155.138.197.166:27963/",
	},
	{
		key: 9,
		name: "WarServeR FFA 3",
		description:
			"This server is running a FFA Q3A ZMOD set to VQ3 physics settings. The maps set in the default rotations are geared for 1v1 play with a few slightly larger maps that will be triggered should more players connect.",
		address: "\\connect ffa3.warserver.net",
		location: "(Virginia)",
		imgSrc:
			"https://cache.gametracker.com/server_info/158.101.103.219:27960/b_560_95_1.png",
		imgLink: "https://www.gametracker.com/server_info/158.101.103.219:27960/",
	},
	{
		key: 10,
		name: "WarServeR FFA 4",
		description:
			"This server is running a FFA Q3A ZMOD set to VQ3 physics settings. The maps set in the default rotations are geared for 1v1 play with a few slightly larger maps that will be triggered should more players connect.",
		address: "\\connect ffa4.warserver.net:27963",
		location: "(Amsterdam)",
		imgSrc:
			"https://cache.gametracker.com/server_info/136.244.97.162:27963/b_560_95_1.png",
		imgLink: "https://www.gametracker.com/server_info/136.244.97.162:27963/",
	},
	{
		key: 11,
		name: "WarServeR DeFraG",
		description:
			"This server is running the popular Defrag MOD. Two of the most popular maps running on the server are 'XCM_TRICKS2' and 'DFWC2017-6",
		address: "\\connect defrag.warserver.net:27962",
		location: "(New Jersey)",
		imgSrc:
			"https://cache.gametracker.com/server_info/defrag.warserver.net:27962/b_560_95_1.png",
		imgLink:
			"https://www.gametracker.com/server_info/defrag.warserver.net:27962/",
	},
	{
		key: 12,
		name: "WarServeR Freeze",
		description:
			"This server is running a Freeze Q3A ZMOD set to VQ3 physics settings. The maps set in the default rotations are geared for 1v1 play with a few slightly larger maps that will be triggered should more players connect.",
		address: "\\connect frz.warserver.net:27963",
		location: "(Virginia)",
		imgSrc:
			"https://cache.gametracker.com/server_info/158.101.103.219:27963/b_560_95_1.png",
		imgLink: "https://www.gametracker.com/server_info/158.101.103.219:27963/",
	},
	{
		key: 13,
		name: "WarServeR InsTagib",
		description:
			"This server is running a Q3A ZMOD with slightly tweaked speed and gravity settings. Instagib is fun, but it is even more fun when it is fast paced.",
		address: "\\connect instagib.warserver.net",
		location: "(New Jersey)",
		imgSrc:
			"https://cache.gametracker.com/server_info/instagib.warserver.net:27960/b_560_95_1.png",
		imgLink:
			"https://www.gametracker.com/server_info/instagib.warserver.net:27960/",
	},
];

// Creating the Server card component

function ServerCard(props) {
	return (
		<div className="server-card">
			<MyTypewriter message={props.name} />
			<div className="server-card-wrapper">
				<p className="server-card-description">{props.description}</p>
				<p className="server-card-address">{props.address}</p>
				<p>{props.location}</p>
				<a
					className="server-card-img"
					href={props.imgLink}
					rel="noreferrer"
					target="_blank">
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
			location={server.location}
			imgLink={server.imgLink}
			imgSrc={server.imgSrc}
		/>
	);
}

export default servers;
export { CreateServerCard };
