import axios from "axios"

export class BaseApiRessource {
    constructor() {
        axios.defaults.baseURL = "https://pokeapi.co/api/v2/"
    }

    get<T>(url: string): Promise<T> {
        return axios.get(url)
            .then(response => response.data)
            .catch(error => console.log(error))
    }
}

export {}