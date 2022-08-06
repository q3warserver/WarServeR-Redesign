const clientCommands = [
	{
		key: 0,
		description: "Callvote a map vote",
		command: "\\callvote map “mapname” (without the quotes)",
	},
	{
		key: 1,
		description: "Test",
		command: "\\Test",
	},
	{
		key: 2,
		description: "Test",
		command: "\\Test",
	},
	{
		key: 3,
		description: "Test",
		command: "\\Test",
	},
];

function CommandLi(props) {
  return (
    <li className="client-info-step">
      <p className="client-info-steps-content">
        {props.description}:{props.command}
      </p>
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
