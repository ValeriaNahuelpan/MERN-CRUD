import mongoose from 'mongoose'
import { setTheUsername } from 'whatwg-url' 

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        trim: true //quita espacios
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    }
}, {
    timestamp: true
})
export default mongoose.model('User', userSchema)
