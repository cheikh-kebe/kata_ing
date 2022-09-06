import axios from "axios";
import { API_URL } from './config'

const API = axios.create({
  baseURL: API_URL
})

const apiSetting ={
  fetchData: async () =>{
    const endpoint = API_URL;
    return API.get(endpoint)
  }

}
export default apiSetting