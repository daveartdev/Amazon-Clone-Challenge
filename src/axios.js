import axios from "axios"; 

const instance = axios.create({
    baseURL: "https://us-central1-clone-2e61d.cloudfunctions.net/api"
    //"http://localhost:5001/clone-2e61d/us-central1/api"
});

export default instance; 