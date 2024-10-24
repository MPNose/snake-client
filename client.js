//uses conn variable to name object that represents connection to server
const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: '50541',
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on('connect', () => {
    console.log("Successfully connected to game server");
  });
  conn.on('connect', () => {
    conn.write("Name: MPN");
  });
  // conn.on('connect', () => {
  //   conn.write("Move: up");
  // });
  // conn.on('connect', () => {
  //   setInterval(() => {
  //     conn.write('Move: left');
  //   }, 200);
  // })
  // when it receives data, it will callback data as a function and console log it
  conn.on('data', (data) => {
    console.log('the server says', data);
  });
  return conn;
};

module.exports = connect;


// "Move: up" - move up one square (unless facing down)
// "Move: down" - move down one square (unless facing up)
// "Move: left" - move left one square (unless facing right)
// "Move: right" - move left one square (unless facing left)