const socket = io()
const chatbox = document.getElementById('chatbox')
let user = sessionStorage.getItem('user') || ''

if (!user) {
    Swal.fire({
        title: 'Auth',
        input: 'text',
        text: 'Set username',
        inputValidator: value => {
            return !value.trim() && 'Please. Write a username'
        },
        allowOutsideClick: false
    }).then(result => {
        user = result.value
        document.getElementById('username').innerHTML = user
        sessionStorage.setItem("user", user)
        socket.emit('new', user)
    })
} else {
    document.getElementById('username').innerHTML = user
    socket.emit('new', user)
}


// Enviar mensajes
chatbox.addEventListener('keyup', event => {
    if (event.key === 'Enter') {
        const message = chatbox.value.trim()
        if (message.length > 0) {
            socket.emit('message', {
                user,
                message
            })

            chatbox.value = ''
        }
    }
})

// Recibir Mensajes
socket.on('logs', data => {
    const divLogs = document.getElementById('logs')
    console.log(data)
    let messages = ''

    data.forEach(msn => {
        messages = `<p><i>${msn.user}</i>: ${msn.message}</p>` + messages
    })

    divLogs.innerHTML = messages
})