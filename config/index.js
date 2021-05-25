const _ = require('lodash');
const defaults = require('./defaults');
const { envs } = require('./env_vars');

if (!_.has(process.env, 'CONFIG_ENV')) {
    throw Error('CONFIG_ENV is not set');
}

let envPath;
const configEnv = process.env.CONFIG_ENV;

try {
    envPath = require.resolve(`./env/${configEnv}`);
} catch (err) {
    throw Error(`No config for specific environment ${configEnv}`);
}

const config = _.merge(
    {},
    defaults,
    require(envPath).default,
    envs,
);

module.exports = config;
