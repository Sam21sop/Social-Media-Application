// #############################  Dependencies ########################################
import express from 'express';
import path from 'path';
import expressEjsLayouts from 'express-ejs-layouts';
import cors from 'cors';
import { homePage } from './controllers/test.controller.js';


// ######################################################################################

// create express instance
const server = express();

// set the ejs view engine 
server.set('view engine', 'ejs')
// const PATH = path.resolve(path.join('views', 'home.html'))
const PATH = path.resolve(path.join('views'))
// set the path to the views directory
server.set('views', PATH)

// cors policy
server.use(cors())

// formatting for API data
server.use(express.json())

// ####################################### All Routes ####################################
// Define a landing page route
server.get('/', homePage);


// server.post('/signup', homePage);

// ###################### Export Server Instace ##########################################
export default server;