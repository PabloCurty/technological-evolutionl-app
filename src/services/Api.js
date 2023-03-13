import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:5000",
});

export const createSession = async (email, password) => {
    return api.post('/sessions', { email, password });
};

export const getExperience = async (userId, query) => {
    let url = `users/${userId}/experiences/`
    if (query !== '') {
        url += `?q=${query}`;
    }

    console.log(query, url)

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

export const destroyExperience = async (userId, id) => {
    const url = `/users/${userId}/${id}/experiences`;
    return api.delete(url);
}