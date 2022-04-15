import axios from 'axios';
import userAPI from './UserAPI';


const server = axios.create({
  baseURL: 'http://localhost:7000/'
});


const UserAPI = new userAPI(server);


export {
  UserAPI
};