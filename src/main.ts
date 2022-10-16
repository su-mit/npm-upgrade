import execCommand from "./execCommand";
import { readPackages } from "./readPackages";

const { dependencies, devDependencies } = readPackages();

for (let npm_package of dependencies.concat(devDependencies)) {
	const status = execCommand(`yarn add ${npm_package}`);
	console.log(status);
}

// Removing node_modules
execCommand(`rm -rf node_modules`);

// Re-initlizing the dependencies
execCommand(`yarn`);
