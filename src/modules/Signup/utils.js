import axios from 'axios';
import config from '../../config';

export const editUser = (email, password, userType, id) => new Promise((resolve, reject) => {
      axios({
          method: 'post',
          url: `${config.serviceURL}/users/edit`,
          data: {
          username: email,
          password: password,
          userType: userType,
          id: id
          },
      }).then(() => {
          resolve();
      })
          .catch((error) => {
          console.error(error);
  
         
          });
  });

export default editUser;