const fs = require('fs');

let getParam = function(name) {
  let result;
  process.argv.forEach(function(val) {
    if (val.includes(name + '=')) {
      result = val.replace(name + '=', '');
      return false;
    }
  });

  return result;
}

let tmpParam = getParam('env');
let env = !!tmpParam ? 'environment.' + tmpParam + '.ts' : 'environment.ts';

tmpParam = getParam('prod');
let production = !!tmpParam ? tmpParam : false;

tmpParam = getParam('api');
let api = !!tmpParam ? tmpParam : '';

environmentFile = `
export const environment = {
  production: ${production},
  api: '${api}'
};
`;

fs.writeFile('./src/environments/' + env, environmentFile, (err) => {
    if (err) throw err;

    console.log('Environment file created!');
});
