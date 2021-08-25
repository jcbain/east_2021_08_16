const net = require('net');
const { generateRandomEmoji, generateRandomId } = require('./helpers')
const port = 3001; // we can define the port 

// create a tcp server
const server = net.createServer();

const listOfClients = []

const writeToAllClients = (data, client, listOfClients) =>{
  for(const individualClient of listOfClients) {
    if(individualClient.id !== client.id){
      individualClient.write(`\t${client.avatar}: ${data}`)
    }
  }
}

server.on('connection', (client) => {

  // let the server know
  client.setEncoding('utf8')

  client.id = generateRandomId()
  client.avatar = generateRandomEmoji()

  // add our connection (client) to our list of clients
  listOfClients.push(client)

  console.log(`\t${client.avatar} ${client.id} has connected to the server`)

  // send confirmation to the client that they have connected
  client.write('🦜 hello from the server!\n')
  client.write(`🦜 your avatar is ${client.avatar} and your id is ${client.id}\n`)
  
  client.on('data', (data) => {
    console.log(`${client.avatar} ${client.id}: ${data}`)
  })

  client.on('data', (data) => {
    // broadcast to all
    writeToAllClients(data, client, listOfClients)
  })

})

server.listen(port, () => {
  console.log(`🦜 server is listening on port ${port}`)
})
