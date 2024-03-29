import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import { userModel } from './userModel.js';


// process jwt secret key
dotenv.config()
const JWT_KEY = process.env.JWT_SECRET_KEY;



export default class UserController{
  
    // function to handle user registration
    async signUp(req, res){
        try {
            const {username, email, password} = req.body;
            // Check if the user already exist
            const existingUser = await userModel.findOne({email});
            if (existingUser){
                return res.status(400).json({message: "User already Exist."});
            };

            // Hash password
            const hashedPassword = await bcrypt.hash(password, 10);
            
            // Create new user
            const newUser = new userModel({
                username: username,
                email: email,
                password: password
            });

            // save the user to database
            await newUser.save()

            
            // Create jwt token for authorization
            const token = jwt.sign({userId:newUser._id}, JWT_KEY, {expiresIn: '1h'});
            
            // Respond with user deatails and token
            res.status(201).send({user: newUser, token});
        } 
        catch (error) {
            console.error(error);
            res.status(500).send({ message: 'Internal Server Error' });
        }
    };

    // function to handle user login
    async logIn(req, res){
        try {
            const {email, password} = req.body;
            // find the user by email
            const user = await userModel.findOne({email});
            if(!user){
                return res.status(404).send({message: "Invalid Email!"});
            };

            // Check if the password is correct
            const isValidPassword = await bcrypt.compare(password, user.password)
            
            if(isValidPassword){
                // Create JWT token for authentication
                const token = jwt.sign({userId:user._id}, JWT_KEY, {expiresIn: '1h'});

                // Respond with user details and token
                res.status(200).send({message: "Login Succefully", token})
            }
            else{
                return res.status(401).send({message:"Invalid Password!"})
            };
        } 
        catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server Error to login user' });
        }
    };

    // function to handle user logout
    async logOut(req, res){
        try {
            // Clear the user's JWT token on the client side
            res.clearCookie('token'); 
        
            res.status(200).json({ message: 'Logout successful' });
          } 
          catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal Server Error' });
          }
    };


    // function to handle user logout from all device
    async logOutAllDevices(req, res){

    };
};