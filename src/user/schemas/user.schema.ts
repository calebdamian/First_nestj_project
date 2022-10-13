//modelar los datos que van a venir

import { Schema } from 'mongoose'

//el schema es lo que voy a guardar en mongo db, en este caso el User
//no permite trabjar ya que requiere MODELO para eso, es decir por si solo no funciona como un objeto
// FIXME: Permite crear un usuario sin email y sin nombre
export const UserSchema = new Schema({
    name: { type: String, require: true },
    username: { type: String, require: true },
    password: { type: String, require: true },
    email: { type: String, require: true },
    imageURL: { type: String, require: false },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

