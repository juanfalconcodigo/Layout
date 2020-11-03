const { writeFile } = require('fs');
const { argv } = require('yargs');

// read environment variables from .env file
//require('dotenv').config();

// read the command line argument passed
// with yargs
const environment = argv.environment;
const isProduction = environment === 'prod';

let targetPath=`./src/environments/environment.ts`;

if(isProduction){
    targetPath=`./src/environments/environment.prod.ts`;
}else if(environment==='qa'){
    targetPath=`./src/environments/environment.qa.ts`;
}else{
    targetPath=`./src/environments/environment.ts`;
}

// we have access to our environment variables
// in the process.env object thanks to dotenv
//overwrite environment.ts
const environmentFileContent = `
export const environment = {
  production: ${isProduction},
  backendUrl: "http://localhost:${process.env.PORT}"
};
`;

// write the content to the respective file
writeFile(targetPath, environmentFileContent, function (err) {
    if (err) {
        console.log(err);
    }

    console.log(`Wrote variables to ${targetPath}` );

});