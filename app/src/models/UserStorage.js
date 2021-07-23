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
}

module.exports = UserStorage;