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

//abrir sockets 
io.on('connection',(socket)=>{
	console.log('El nodo con IP: '+ socket.handsnake.address+ 'se ha conectado... ');
});


server.listen(6677,()=>{
console.log('El servidor esta funcionando');
});