let config = {};

/**
 * Localhost web server configurations
 */
config.web = {};
config.web.port = process.env.PORT || '3000';
config.web.secret = 'topsecret';


/**
 * Development database configurations
 *
 */
config.database = {};
config.database.username = 'johnnyV';
config.database.password = 'stayal1ve';
config.database.port = '29434';
config.database.url = 'ds129434.mlab.com';
config.database.name = 'nodequiz';


module.exports = config;