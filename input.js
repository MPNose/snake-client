
let connection;


const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin; //create variable to hold stdin object, so we don't have to type it multiple times
  stdin.setRawMode(true); //Raw Mode allows us to listen for individual key presses instead of the user to press enter
  stdin.setEncoding("utf8"); //set encoding so that we can read the text data that is input
  stdin.resume(); //resume stdin so the program can listen for input
  stdin.on("data", handleUserInput);//callback function waiting for key input from control c
  return stdin; //return the stdin object so we can use it elsewhere in the program
};
const handleUserInput = function (key) {
  if (key === 'w') {
    connection.write("Move: up");
  }
  if (key === 'a') {
    connection.write("Move: left");
  }
  if (key === 's') {
    connection.write("Move: down");
  }
  if (key === 'd') {
    connection.write("Move: right");
  }
  if (key === "\u0003") {//code representing control c 
    process.exit();
  }
};


module.exports = setupInput;