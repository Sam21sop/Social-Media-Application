// #############################  Dependencies ########################################
import express from 'express';
import path from 'path';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import { userRouter } from './src/services/users/userRouter.js';


// ######################################################################################

// create express instance
const server = express();

// set the ejs view engine 
server.set('view engine', 'ejs')
// const PATH = path.resolve(path.join('views', 'home.html'))
const PATH = path.resolve(path.join('views'))
// set the path to the views directory
server.set('views', PATH)


// ####################################### All application level middleware ####################################
// cors policy
server.use(cors())

// formatting for API data
server.use(express.json())

server.use(helmet())

// creating log
server.use(morgan("common"))

// Define a landing page route
server.get('/', (req, res) => {
    res.render('home')
});

// user router 
server.use('/api/users', userRouter);


// ###################### Export Server Instace ##########################################
export default server;