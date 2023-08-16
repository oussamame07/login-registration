
// const NodeMediaServer = require('node-media-server');

// const config = {
//   rtmp: {
//     port: 1935,
//     chunk_size: 60000,
//     gop_cache: true,
//     ping: 30,
//     ping_timeout: 60
//   },
//   http: {
//     port: 8000,
//     allow_origin: '*'
//   }
// };

// const nms = new NodeMediaServer(config);
// nms.run();

// nms.on('prePublish', (id, StreamPath, args) => {
//   // Implement authentication logic here
//   const isAuthorized = true; // Replace with your authentication logic
//   if (!isAuthorized) {
//     const session = nms.getSession(id);
//     session.reject();
//   }
// });
