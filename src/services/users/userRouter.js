import UserController from './userController.js';
import { Router } from 'express';

// creating userRouter instance
export const userRouter = Router();

//creating instance of UserController class
const userController = new UserController();


// user home landing
userRouter.get('/', (req, res) => {
    res.send('this is user routes.')
})

// user registration
userRouter.post('/signup', userController.signUp);

// user login
userRouter.post('/sigin', userController.signIn);

// user logout
userRouter.post('/logout', userController.logOut);

// user logout from all device
userRouter.post('/logout-all-device', userController.logOutAllDevices);