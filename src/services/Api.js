import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:5000",
})

export const getExperience = async (userId, query) => {
    let url = `users/${userId}/experiences/`
    if (query !== '') {
        url += `?q=${query}`;
    }

    return api.get(url)
}