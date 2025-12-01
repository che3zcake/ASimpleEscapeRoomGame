import {Router} from "express";
import * as timers from "node:timers";

const healthRouter = Router();

healthRouter.get("/health", (req,res)=>{
    res.status(200).send("OK")
})

healthRouter.get("/healthz", (req,res) =>{
    const healthcheck = {
        uptime: process.uptime(),
        message: "OK",
        timestamp: Date.now()
    }
    try {
        res.status(200).send(healthcheck)
    }catch (error: any){
        healthcheck.message = error.message;
        res.status(503).send(healthcheck)
    }
})

export default healthRouter