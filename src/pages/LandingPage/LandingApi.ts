import {get, post, put, destroy} from "../../api/axios";
// const cheerio = require("cheerio");


export const mainYoutubeApi = () => {
    return get(`/api/results?search_query=flutter`);
};

