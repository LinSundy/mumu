import {Schema} from 'mongoose';

export const UserSchema = new Schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
    age: {
        type: Number
    },
    name: {
        type: String
    },
    status: {
        type: Number
    },
    avatar: {
        type: String
    },
    roles: {
        type: Array
    }
});
