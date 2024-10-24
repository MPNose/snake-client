//uses conn variable to name object that represents connection to server
const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: '50541',
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  // when it receives data, it will callback data as a function and console log it
  conn.on('data', (data) => {
    console.log('the server says', data);
  });
  return conn;
};

module.exports = connect;
