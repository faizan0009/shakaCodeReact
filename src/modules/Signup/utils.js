import axios from 'axios';

export const editUser = (email, password, userType, id) => new Promise((resolve, reject) => {
      axios({
          method: 'post',
          url: 'http://localhost:3000/users/edit',
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