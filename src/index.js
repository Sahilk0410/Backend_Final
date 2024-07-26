// require('dotenv').config({path: "./env"})

import dotenv from "dotenv"
import connectDB from "./db/index.js"
import { app } from "./app.js"


dotenv.config({
     path: "./env"
})


connectDB()
.then( () => {
    // Handle Express app errors (used to set up an event listener for the error event on the app object.)
    app.on("error", (error) => {
        console.log("error: ", error);
        throw error  // This could also be handled more gracefully in a real app
    });
    

     // Start the server
    app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running on port: ${process/env.PORT}`);
        })
    
})
    
    
   
.catch( (err) => {
     console.log("MONGODB connection failed !!!", err)
})









/*

import mongoose from "mongoose"
import { DB_NAME } from "./constants"

import express from "express"
const app = express()


( async () => {
    try {
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       app.on("error", (error) => {
           console.log("error: ", error)
           throw error // express app kuch error throw kare usko check krne ke liye use kiya 
       })
       app.listen(process.env.PORT, () => {
        console.log(`app is listening on port ${process.env.PORT}`)
       })
    } catch (error) {
        console.error("ERROR: ", error)
        throw err
    }
})()  //IIFE -> iske andar arrow function diya -> asnyc await lagaya 

*/