const path=require('path')
const http=require('http')
const express=require('express')
const socketio=require('socket.io')

const app=express()
const server=http.createServer(app)
const io=socketio(server)

//to set static folder
app.use(express.static(path.join(__dirname, 'public')))

//run when a client connectsss
io.on('connection',socket=>
{
    socket.emit('message','Welcome to chatt')

    //broadcast when a user connects
    socket.broadcast.emit('message','a user joined the chat')

    //runs when the client DISCONNECTS
    socket.on('disconnect',()=>
    {
        io.emit('message','a user disconnected')
    })

})
const PORT = 3000 || process.env.PORT
server.listen(PORT,()=>console.log('server running'))