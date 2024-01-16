// import dotenv
import dotenv from 'dotenv';
// dotenv folder configuration
dotenv.config();

// import server instance
import server from "./index.js";
import { connectToMongodb } from './src/config/connectDB.js';

// port variable
const PORT = process.env.PORT || 8080

// db URL
const URL = process.env.DB_URL
console.log(URL);

// define mode
// const DEV_MODE = process.env.DEV_MODE


// Start the server
server.listen(PORT, () => {
    connectToMongodb(URL);
    console.log(`Server is running on http://localhost:${PORT}`);
});