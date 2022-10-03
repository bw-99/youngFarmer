import {get, post, put, destroy} from "../../api/axios";
// const cheerio = require("cheerio");

const API_KEY = "sadf";


export const searchGoogleApi = (term : string = "abc") => {
    return get(`/api/search?q=asdf`);
};

const searchTVApi = (term : string = "abc") => {
    return get(`/search/tv?api_key=${API_KEY}&language=ko&query=${
        encodeURIComponent(term)
    }`);
};
