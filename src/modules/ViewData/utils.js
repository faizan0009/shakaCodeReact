import axios from 'axios';



export const fetchUsers = () => new Promise((resolve, reject) => {
    axios({
        method: 'get',
        url: 'http://localhost:3000/users/fetchusers',
    }).then((users) => {
        resolve(users.data.users);
    }).catch((error) => {
        console.error(error);
        });
});

export const deleteUSER = (id) => new Promise((resolve, reject) => {
    axios({
        method: 'post',
        url: 'http://localhost:3000/users/delete',
        data: {
            id: id
            },
    }).then((users) => {
        resolve();
    }).catch((error) => {
        console.error(error);
        });
});


export default { fetchUsers };