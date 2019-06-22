import Routes from './routes';

exports.plugin = {
    pkg: require('../package.json'),
    register: async function (server, options) {

        server.route(Routes);
    }
};
