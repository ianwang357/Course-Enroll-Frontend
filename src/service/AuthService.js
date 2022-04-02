import axios from "../axios";

export const AuthService = {
    getToken: function(username, password) {
        return axios.post("/api/authenticate", {
            username, password
        })
    }
}