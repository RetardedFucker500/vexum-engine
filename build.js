const { execSync } = require("child_process");

function install(packageName) {
    console.log(`Installing ${packageName}...`);
    execSync(`npm install ${packageName}`, { stdio: "inherit" });
}

install("express");
install("")