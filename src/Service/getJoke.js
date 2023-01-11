import axios from "axios";
import {BASE_URL} from '../Consts'

export const getJoke = () =>{
    return axios.get({BASE_URL})
}