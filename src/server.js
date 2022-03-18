const Hapi = require('@hapi/hapi');
const notesPlugin = require('./notesPlugin');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);

  // registrasi satu plugin
  await server.register({
    plugin: notesPlugin,
    options: { notes: [] },
  });

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
