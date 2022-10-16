import { exec } from "child_process";

const execCommand = (command: string) => {
	exec(command, (err, stdout, stderr) => {
		if (err) return err;

		console.log(`stdout: ${stdout}`);
		console.log(`stderr: ${stderr}`);

		return `${command} executed successfully`;
	});
};

export default execCommand;
