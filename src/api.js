import axios from 'axios';


//Definimos la ruta local del servidor VueJs
export default axios.create({
    baseURL: 'https://apitest.cargofive.com/api'
});