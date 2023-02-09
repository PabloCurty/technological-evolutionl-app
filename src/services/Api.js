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

export const createExperience = async (userId, experience) => {
    const url = `/users/${userId}/experiences`;
    return api.post(url, {
      nameClient: "Facebook",
      nameProject: experience,
      language: "English",
      nameTech: ["React", "Python"],
      period: ["01/01/1999", "01/01/2012"],
      directLeaders: ["Igor", "Alex"],
    });
}