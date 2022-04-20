const Redis = require('ioredis');

const client = new Redis({
  port: process.env.REDIS_PORT, // Redis port
  host: process.env.REDIS_HOST, // Redis host
  username: 'default', // needs Redis >= 6
  password: process.env.REDIS_PASS,
  db: 0, // Defaults to 0
});

console.log('Redis', client.status);

client.connect(function () {
  console.log('Redis connected');
});

module.exports = client;
