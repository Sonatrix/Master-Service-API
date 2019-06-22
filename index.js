import Hapi from '@hapi/hapi';
import Config from './config';

const init = async () => {

    const server = Hapi.server({
        port: Config.PORT,
        host: Config.HOST
    });

    const dbOpts = {
        url: Config.MONGO_URL,
        settings: {
            poolSize: 10,
            useNewUrlParser: true,
        },
        decorate: true
    };

    await server.register([{
        plugin: require('hapi-mongodb'),
        options: dbOpts
    },
    {
        plugin: require('./routes'),
        routes: {
            prefix: '/api/v1'
        }
    }]);

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();