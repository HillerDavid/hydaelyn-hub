import axios from 'axios';

const API = {
    searchCharacter: function (query) {
        return axios.get('/api/characters/' + query);
    }
}

export default API;