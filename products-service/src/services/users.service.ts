import axios from 'axios';

export const getProfile = async (token: string) => {
  try {
    const response = await axios.get(`${process.env.USER_SERVICE_URI}`, {
      headers: {
        Authorization: `bearer ${token}`
      }
    });
    return response.data;
  } catch (error: any) {
    return error.message
  }
}

// class Users {
//   private api;
//   constructor() {
//     this.api = axios;
//   }

//   async getProfile(token: string) {
//     try {
//       const response = await this.api.get(`${process.env.USER_SERVICE_URI}`, {
//         headers: {
//           Authorization: `bearer ${token}`
//         }
//       });
//       return response.data;
//     } catch (error: any) {
//       return error.message
//     }
//   }
// }

// export default Users