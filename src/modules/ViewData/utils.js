import axios from 'axios';
import config from '../../config';



export const fetchUsers = () => new Promise((resolve, reject) => {
    axios({
        method: 'get',
        url: `${config.serviceURL}/users/fetchusers`,
    }).then((users) => {
        resolve(users.data.users);
    }).catch((error) => {
        console.error(error);
        });
});

export const deleteUSER = (id) => new Promise((resolve, reject) => {
    axios({
        method: 'post',
        url: `${config.serviceURL}/users/delete`,
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