# media_server

#### Установка библиотек
```
npm install node-media-server
```

#### Запуск видео-потока
```
ffmpeg -re -stream_loop -1 -i video.mp4 -c:v libx264 -preset veryfast -tune zerolatency -c:a aac -ar 44100 -f flv rtmp://localhost/live/stream
```

#### Запуск сервера
```
node app.js
```

#### Открыть index.html в браузере