import {Server, Socket} from "socket.io"

export function socketHandler(io: Server) {
    io.on("connection", (socket:Socket) => {
        console.log("User connected:", socket.id)

        socket.on("message", (data: any) => {
            console.log("Message received:", data)

            socket.emit("message", {
                from: "server",
                receivedData: data,
            })
        })

        socket.on("disconnect", ()=>{
            console.log("User disconnected:", socket.id)
        })
    })
}