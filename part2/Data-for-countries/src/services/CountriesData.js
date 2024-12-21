import axios from "axios";
const api_url = 'https://studies.cs.helsinki.fi/restcountries/api/all'
const api_country = 'https://studies.cs.helsinki.fi/restcountries/api/name'

const getAll = (name) => {
    const request = axios.get(`${api_country}/${name}`)
    return request.then(response => response.data)
}

const create = newObject => {
    const request = axios.post(api_url, newObject)
    return request.then(response => response.data)
}

const update = (id, number) => {
    const request = axios.put(`${api_url}/${id}`, number)
    return request.then(response => response.data)
}

const remove = (id) => {
    const request = axios.delete(`${api_url}/${id}`)
    return request.then(response => response.data)
}

export default { getAll, create, update, remove }
