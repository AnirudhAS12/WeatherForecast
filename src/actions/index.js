import axios from 'axios';
const API_KEY='84adf7e2237be3007262271190fec8d2';

const ROOT_URL =`http://api.openweathermap.org/data/2.5/forecast?APPID=${API_KEY}`;
export const FETCH_WEATHER='FETCH_WEATHER';
export function fetchWeather (city,country){

    const request=axios.get(`${ROOT_URL}&q=${city},${country}`);
    console.log('Request :',request)
    return{
        type : FETCH_WEATHER,
        payload : request
    }
}