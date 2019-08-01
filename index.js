//http://thbastos.com/blog/tutorial-aprendendo-nodejs-6-socketio-desenvolvendo-uma-aplicacao-de-bate-papo
// Iniciamos uma nova instância do socket.io passando o objeto http(o servidor http)
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// Definimos aqui uma rota "/" que será chamada quando acessarmos a página inicial da nossa aplicação
app.get('/', function(req, res){
    // res.send('<h1>Salveeeee</h1>');
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    socket.on('mensagem de chat', function(msg){
        io.emit('mensagem de chat', msg);
    });
});

// Definimos a porta 3000 para nos servir a aplicação
http.listen(3000, function(){
    console.log('listening on *:3000');
});

