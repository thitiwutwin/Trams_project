import axios from 'axios';

const url = 'http://localhost:5000/data';

export const fetchData = () => axios.get(url);