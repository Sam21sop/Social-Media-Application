import mongoose from "mongoose";
import bcrypt from 'bcrypt';


// Create user schema
const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    }
})


// Hash the password before saving to database
UserSchema.pre('save', async function(next){
    try {
        const user = this;

        // Only hash the password if it has been modified or is new
        if(!user.isModified('password')){
            return next()
        };

        // Hashed the password with the salt
        const hashedPassword = await bcrypt.hash(user.password, 10);
        user.password = hashedPassword;
        next();

    } 
    catch (error) {
        return next(error)
    }
});


export const userModel = mongoose.model('User', UserSchema);