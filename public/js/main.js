const chatForm=document.getElementById('chat-form')
const socket=io()

socket.on('message',message=>
{
  console.log(message)
  output
})
//msg submit
chatForm.addEventListener('submit',(e)=>
{
  e.preventDefault()//coz it gets submitted in file by default
  const msg = e.target.element.msg.value//get msg text
  socket.emit('chatMessage',msg) //emitting msg to server
})