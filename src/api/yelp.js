import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: 'Bearer pDY4p_o7CbI1gkQHpQn3_xRF6Zl3YAWKcm44yB0VhalOmZVXtCh1G6qHTBU_4QxmZRUPQI10jXYfz8fCas0MMoPY3PngHm7RxojZAFyqLJmfGgCSKUimixi5otllZXYx'
    }
});