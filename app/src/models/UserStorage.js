"use strict";

class UserStorage {
    static #users = {
        id : ["dong", "asd", "dsa"],
        password : ["1234", "12345", "123456"],
        name : ["우리밋", "나개발", "호로록"]
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {}); 
        return newUsers;
    }
    
    static getUserInfo(id) {
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const userKeys = Object.keys(users); // => [id, password, name]
        const userInfo = userKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        },{});

        return userInfo;
    }

    static save(userInfo) {
        const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.password.push(userInfo.password);
        return {success : true};
    }
}

module.exports = UserStorage;