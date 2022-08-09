// Coding the client commands since these don't change

const clientCommands = [
	{
		key: 0,
		description: "Provides a list of maps currently loaded on the server.",
		command: "\\maplist",
	},
	{
		key: 1,
		description:
			"To list additional pages of maps if supported or needed by server.",
		command: "\\maplist 2",
	},
	{
		key: 2,
		description: "Calls a vote on the server.",
		command:
			"\\callvote (Example: callvote map 'mapname' (without the quotes))",
	},
	{
		key: 3,
		description: "Show the server stats.",
		command: "\\stats",
	},
];

// Creating the Command list component

function CommandLi(props) {
	return (
		<li className="client-info-step">
			<p className="client-info-steps-content">{props.description}</p>
			<p>{props.command}</p>
		</li>
	);
}

function CreateNewCommandLi(command) {
	return (
		<CommandLi
			key={command.key}
			description={command.description}
			command={command.command}
		/>
	);
}

export default clientCommands;
export { CreateNewCommandLi };
