let express=require('express');
let app = express();
let server=require('http').Server(app);
let io = require('socket.io')(server);

//middleware de express vista estatica para el chat
app.use(express.static('cliente'));
//rutas
app.get('/',(req,res)=>{
	res.status(200).send('Hola mundo desde una ruta');
});

let  message=[{ 
	id:1,
	text:'bienvenido al chat',
	nickname:'Bot -Tapia'}];

//abrir sockets 
io.on('connection',(socket)=>{
	console.log('El nodo con IP: '+ socket.handshake.address + 'se ha conectado... ');
	socket.emit('message',message)
});


server.listen(6677,()=>{
console.log('El servidor esta funcionando');
});