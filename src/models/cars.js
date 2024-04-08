import { Schema, model } from "mongoose";

const Car = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    }
}, { versionKey: false })

export default model("cars", Car)