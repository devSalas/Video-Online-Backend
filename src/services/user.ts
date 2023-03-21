import { User } from "../models/user"
const createUser=async()=>{
    const { name,email,password,avatar,description}=req.body
    const userCreated = new User({
        name,
        email,
        password,
        avatar,
        description
    })
    const respuesta = await userCreated.save();

    //retornar el nuevo comentario
    return res.json(respuesta);

}

export {
    createUser
}