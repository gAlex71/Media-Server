const NodeMediaServer = require('node-media-server');


const config = {
    host: '127.0.0.1',
    logType: 3, // 3 - Log everything (debug)
    rtmp: {
 hostname: '127.0.0.1',
        edge: 'rtmp://127.0.0.1',
 port: 1935,
        chunk_size: 60000,
        gop_cache: true,
        ping: 60,
        ping_timeout: 30
    },
    http: {
        eject: '127.0.0.1',
        port: 8000,
        allow_origin: '*',
        mediaroot: './media'
    },
    relay: {
        ffmpeg: '/usr/bin/ffmpeg',
        tasks: [
            {
                app: 'live',
                mode: 'static',
                edge: 'rtmp://localhost/live/stream',
                name: 'udp',
                rtsp_transport: 'udp'
            }
        ]
    },
    fission: {
      ffmpeg: '/usr/bin/ffmpeg',
      tasks: [
        {
          rule: "live/*",
          model: [
            {
              ab: "128k",
              vb: "1500k",
              vs: "1280x720",
              vf: "30",
            },
            {
              ab: "96k",
              vb: "1000k",
              vs: "854x480",
              vf: "24",
            },
            {
              ab: "96k",
              vb: "600k",
              vs: "640x360",
              vf: "20",
            },
          ]
        }
      ]
    }
};

var nms = new NodeMediaServer(config, hostname = '127.0.0.1')
nms.run();