var pacman = require("./app/pacman");


// Massage input string into something we can use since many shells strip out the "'" characters from args
var args = process.argv.slice(2)
                  .join('').replace(']','').replace('[','')
                  .split(',');

console.log(pacman.getPackageInstallString(args));
