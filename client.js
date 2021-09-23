const net = require('net');
const stdin = process.stdin;
// don't worry about these next two lines of setup work.

stdin.setEncoding('utf8');


const conn = net.createConnection({
  host: '135.23.223.133', // change to IP address of computer or ngrok host if tunneling
  port: 3001 // or change to the ngrok port if tunneling
},() => {
  console.log('You"ve Connected!');
});

conn.setEncoding('utf8'); // interpret data as text

conn.on('data', (data) => {
  console.log('Server says: ', data);
});

conn.on('connect', () => {
  conn.write('This is Tom"s Client!');
});

stdin.on('data', (key) => {
  if (key === '\u0003') {
    conn.write('ctrl-c end connection');
    conn.end();
    process.exit();
  }
  conn.write('Tom"s: ' + key);
});

// Change credentials
// .write('name: slkfdjsj')wasd
// status