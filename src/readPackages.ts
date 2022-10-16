import { readFileSync } from "fs";

export const readPackages = () => {
	const package_JSON = JSON.parse(readFileSync("./package.json").toString());

	const dependencies = Object.keys(package_JSON.dependencies);
	const devDependencies = Object.keys(package_JSON.devDependencies);

	return { dependencies, devDependencies };
};
