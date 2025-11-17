// Funciones que permiten procesar las peticiones
import bcrypt from 'bcryptjs';
import User from '../models/user.model.js'
import jwt from 'jsonwebtoken'
import { token } from 'morgan';
import { createAccessToken } from '../libs/jwt.js';


export const register = async (req, res) => {
    // Recibimos valores del body
    const {email, password, username} = req.body;

    try {

        // Encriptamos la contraseña
        const passwordHash = await bcrypt.hash(password, 10)

        // Creamos instancia de User
        const newUser = new User({
            username,
            email,
            password: passwordHash
        }); // Solo se crea el objeto pero no se guarda en base de datos
        console.log(newUser);

        const userSaved = await newUser.save(); // lo guarda en la base de datos

        // jwt.sign(
        //   {
        //     id: userSaved._id
        //   },
        //   'secret123',
        //   {
        //     expiresIn: "1d",
        //   },
        //   (err, token) => {
        //     if (err) console.log(err);
        //     res.cookie('token', token)
        //     res.json({message: 'User created successfully'});
        //   }
        // ); // se movio a libs/jwt.js en forma de promesa para poder usar await

        //Creacion de token
        const token = await createAccessToken({id: userSaved._id});
        res.cookie('token', token);
        
        //res.json(userSaved); // api responde con un json con todo el usuario
        res.json({
            id: userSaved._id, //api responde con solo el id, nombre y email del usuario creado
            email: userSaved.email,
            username: userSaved.username,
            createdAt: userSaved.createdAt
        });
        //res.send("register"); //api responde con un texto
    } catch (error) {
        console.log(error)
        res.status(500).json({message: error.message});
    }
};


export const login = async (req, res) => {
    // Recibimos valores del body
    const {email, password} = req.body;

    try {

        
        // Buscamos el usuario
        const userFound = await User.findOne({email});
        
        if (!userFound) return res.status(400).json({message: "User not found"});
        
        // Verificar la contraseña
        const isMatch = await bcrypt.compare(password, userFound.password);

        if (!isMatch) return res.status(400).json({message: "Incorrect password"});

        //Creacion de token
        const token = await createAccessToken({id: userFound._id});
        res.cookie('token', token);
        
        //res.json(userSaved); // api responde con un json con todo el usuario
        res.json({
            id: userFound._id, //api responde con solo el id, nombre y email del usuario creado
            email: userFound.email,
            username: userFound.username,
            createdAt: userFound.createdAt
        });
        //res.send("register"); //api responde con un texto
    } catch (error) {
        console.log(error)
        res.status(500).json({message: error.message});
    }
};

export const logout = (req, res) => {
    res.cookie('token', '', {expires: new Date(0)});
    return res.sendStatus(200)
}