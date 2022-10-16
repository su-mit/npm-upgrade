import { exec } from "child_process";

import { readFileSync } from "fs";

const package_JSON = JSON.parse(readFileSync("./package.json").toString());

const dependencies = Object.keys(package_JSON.dependencies);
const devDependencies = Object.keys(package_JSON.devDependencies);

// console.log(`Dependencies: ${dependencies}`);
// console.log(`Dev dependencies: ${devDependencies}`);

exec(
	"rm -rf node_modules && npm update --save-dev && npm update --save",
	(err, stdout, stderr) => {
		if (err) {
			// node couldn't execute the command
			return err;
		}

		// the *entire* stdout and stderr (buffered)
		console.log(`stdout: ${stdout}`);
		console.log(`stderr: ${stderr}`);
	}
);
