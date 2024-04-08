import Cars from '../models/cars.js'

export const carsControllers = {};

carsControllers.getAll = async (req, res) => {
    try {
        const cars = await Cars.find();
        res.status(200).send(cars);
    } catch (error) {
        res.status(500).send({ error: error })
    }
}

carsControllers.getOne = async (req, res) => {
    try {
        const car = await Cars.findById(req.params.id);
        res.status(200).send(car);
    } catch (error) {
        res.status(500).send({ error: error })
    }
}

carsControllers.create = async (req, res) => {
    try {
        const car = new Cars(req.body);
        await car.save();
        res.status(201).send(car);
    } catch (error) {
        res.status(500).send({ error: error })
    }
}

carsControllers.update = async (req, res) => {
    try {
        const car = await Cars.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).send(car);
    } catch (error) {
        res.status(500).send({ error: error })
    }
}

carsControllers.delete = async (req, res) => {
    try {
        await Cars.findByIdAndDelete(req.params.id);
        res.status(200).send({ message: "Car deleted sussefuly" });
    } catch (error) {
        res.status(500).send({ error: error })
    }
}