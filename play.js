const net = require("net");
// use net library to create a connection
// establishes a connection with the game server
//uses conn variable to name object that represents connection to server
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: '50541',
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on('data', (data) => {
    console.log('the server says', data);
  });
  return conn;
};

console.log("Connecting ...");
connect();
