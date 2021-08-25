const net = require('net');

const client = net.createConnection({
  host: 'localhost', // 127.0.0.1,
  port: 3001
})

client.setEncoding('utf8');

// handling the event of data coming in from the server
// recieving data
client.on('data', (data) => {
  console.log(data)
})

// here we are sending data to the server
client.on('connect', () => {
  process.stdin.on('data', (data) => {
    client.write(data)
  })
})

// listen for the closing of the connection 
client.on('end', () => {
  console.log('disconnected from the server')
  process.exit()
})