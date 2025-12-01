import express from "express"
import cors from "cors"
import http from "http"
import {Server} from "socket.io"

import healthRouter from "./routes/health.routes.js";
import {socketHandler} from "./sockets/main.socket.js";

const app = express()

app.use(express.json())
app.use(cors())

app.use("/", healthRouter)

const server = http.createServer(app)

const io = new Server(server, {
    cors: {
        origin: "*"
    },
})

socketHandler(io)

server.listen(3000, ()=>{
    console.log("Server has started at port 3000")
})
