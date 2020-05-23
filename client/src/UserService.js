import axios from 'axios';


const url = 'http://localhost:5000/api/users/';

class UserService {
    // get User
    static getUsers() {
        return new Promise ((resolve,reject) => {
            axios.get(url).then((res) => {
                const data = res.data;
                resolve(
                    data.map(user => ({
                        ...user,
                        createdAt: new Date(user.createdAt)
                    }))
                );
            })
            .catch((err)=> {
                reject(err);
            })
            
        });
    }
    // Create User
    static insertUser(first_name, last_name){
        return axios.post(url, {
            first_name: first_name,
            last_name: last_name
        });
    }
    // Delete User
    static deleteUser(id){
        return axios.delete(`${url}${id}`);

    }
}

export default UserService;