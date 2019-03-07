import axios from 'axios';

const functionsService = {
    async getFilms() {
        let res = await axios.get("https://zzradubzm5.execute-api.eu-west-2.amazonaws.com/dev/films");
        let dataReceived = await res.data;
        return dataReceived;
    },
    async saveFilm(film) {
        let res = await axios.post("https://zzradubzm5.execute-api.eu-west-2.amazonaws.com/dev/films", film);
        let dataReceived = await res.data;
        return dataReceived;
    },
    async deleteFilm(filmId) {
        let res = await axios.delete("https://zzradubzm5.execute-api.eu-west-2.amazonaws.com/dev/films/" + filmId);
        let dataReceived = await res.data;
        return dataReceived;
    }
 };
 
 export default functionsService;