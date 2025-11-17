import mongoose from 'mongoose';
export const connectDB = async () => {
    try {
        console.log('Connecting db ...')
        await mongoose.connect('mongodb+srv://valerianahuelpan:hT5cXIcx0ojRNidU@cluster0.pdera3s.mongodb.net/miapp?retryWrites=true&w=majority&appName=Cluster0');
        console.log('DB is connected')
    } catch (error) {
        console.log(error)
    }
};