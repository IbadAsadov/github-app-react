import {api_route, api_token} from "../../helper/api";
import axios from "axios";

const github = axios.create({
    baseURL: api_route,
    headers: {
        'Authorization': `Bearer ${api_token}`,
    }
});

//get users
export const searchUsers = async (text) => {
    const $params = new URLSearchParams({
        q: text
    });
    console.log(api_token);
    const response = await github.get(`/search/users?${$params}`);
    return response.data.items;
};

//get user
export const getUserAndRepos = async (login) => {
    const responseUser = await github.get(`/users/${login}`);
    const params = new URLSearchParams({
        sort: 'created',
        per_page: 10,
    });
    const responseUserRepos = await github.get(`/users/${login}/repos?${params}`);

    return {
        user: responseUser.data,
        repos: responseUserRepos.data
    };
};


