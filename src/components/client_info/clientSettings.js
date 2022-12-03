// Coding the client settings list since these don't change

let neededFiles = "(OSP/Edawn Client Files Needed)";

const clientSettings = [
	{
		key: 0,
		setting: "\\rate 25000",
	},
	{
		key: 1,
		setting: "\\snaps 40",
	},
	{
		key: 2,
		setting: "\\com_maxfps 125",
	},
	{
		key: 3,
		setting: "\\cl_maxpackets 125",
	},
	{
		key: 4,
		setting: "\\com_hunkMegs 512",
	},
	{
		key: 5,
		setting: "  \\cg_fov 125",
	},
	{
		key: 6,
		setting: "\\cg_enemyModel “Keel/pm”" + " " + neededFiles,
	},
	{
		key: 7,
		setting: "\\cg_enemyColors “iiii” (Using OSP Client Files)",
	},
	{
		key: 8,
		setting: "\\cg_enemyColors “22226” (Using pak8a.pk3)",
	},
];

// Creating the Setting list component

function ClientSettingLi(props) {
	return (
		<li className="client-info-step">
			<p className="client-info-steps-content">{props.setting}</p>
		</li>
	);
}

function CreateNewClientSetting(setting) {
	return <ClientSettingLi key={setting.key} setting={setting.setting} />;
}
export default clientSettings;
export { CreateNewClientSetting };
