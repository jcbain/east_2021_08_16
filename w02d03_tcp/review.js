// what does async code allow us to do

const fs = require('fs');


console.log('i should run first')

fs.readFile('./index.html', {encoding: 'utf8'}, (err, data) => {
  if(err) {
    return console.log(`there was an error! ${err}`)
    // return
  }
  const dataArray = data.split(" ")
  console.log(dataArray)
})

console.log('i should also run before reading the data')