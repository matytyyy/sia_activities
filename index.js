// package imports

const app = require('express')

// server set up

const server = app()
const PORT = 2007
const HOSTNAME = "0.0.0.0"
server.listen(PORT, HOSTNAME, () => {
console.log("Server is running!! in $(");

})

server.get('/', (req, res) => {
return  res.json({
          lname: "Ijan",
          fname: "Matt",
          mninitial: "D",

})

})