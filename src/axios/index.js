import axios from "axios";
import {TOKEN_COOKIE_NAME} from "../constant";
import cookie from "react-cookies";

const token = cookie.load(TOKEN_COOKIE_NAME);
export default axios.create(
    {
        baseURL: "http://localhost:8080",
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
)