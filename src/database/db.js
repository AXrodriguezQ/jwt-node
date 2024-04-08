import mongoose from 'mongoose';

import { MONGODB_URI } from '../config.js'

export const connectedToDatabase = () => {
    
    mongoose.connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(() => {
            console.log('Connected to MongoDB');
        })
        .catch((err) => {
            console.log(err);
        });
        
}