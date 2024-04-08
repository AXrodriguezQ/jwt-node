import Jwt  from 'jsonwebtoken'
import Users from '../models/users.js'
import bcryptjs from 'bcryptjs';
import { JWT_SECRET, JWT_EXPIRES } from '../config.js'


export const usersControllers = {};

usersControllers.getAll = async (req, res) => {
    try {
        const users = await Users.find();
        res.status(200).send(users);
    } catch (error) {
        res.status(500).send(error);
    }
}

usersControllers.getById = async (req, res) => {
    try {
        const user = await Users.findById(req.params.id);
        res.status(200).send(user);
    } catch (error) {
        res.status(500).send(error);
    }
}

usersControllers.create = async (req, res) => {
    try {
        const { username, password, email } = req.body;
        const newUser = new Users({
            username,
            password: await bcryptjs.hash(password, 8),
            email
        });
        await newUser.save();
        res.status(200).send(newUser);
    } catch (error) {
        res.status(500).send(error);
    }
}

usersControllers.update = async (req, res) => {
    try {
        const user = await Users.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).send(user);
    } catch (error) {
        res.status(500).send(error);
    }
}

usersControllers.delete = async (req, res) => {
    try {
        const user = await Users.findByIdAndDelete(req.params.id);
        res.status(200).send(user);
    } catch (error) {
        res.status(500).send(error);
    }
}

usersControllers.login = async (req, res) => {
    try {
        const {email, password} = req.body

        let info = await Users.findOne({email: email})

        console.log(info.password);

        if (!await bcryptjs.compare(password, info.password)) {
            return res.status(404).json({status: false, errors: ['Ese usuario no existe']})
        } 
        const token = Jwt.sign({id:info._id}, JWT_SECRET, {
            expiresIn: JWT_EXPIRES
        })
        const usuario = {id:info._id, username:info.username, email:info.email, token:token}
        return res.status(200).json({status: true, data: usuario, message:'Acceso correcto'})
    } catch (error) {
        res.status(500).json(error);
    }
}