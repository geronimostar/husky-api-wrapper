const fetch = require('node-fetch');
const { error } = require('console');
const baseurl = "https://api.huskyio.repl.co";
const funEndpoint = "/fun";
const animeEndpoint = "/anime";
const nsfwEndpoint = "/nsfw";
const infoEndpoint = "/info";
const miscEndpoint = "/misc";
const animalsEndpoint = "/animals";
const version = "1.1.4";

//fun endpoints

async function eightball() {
    try {
        const body = await fetch(`${baseurl}${funEndpoint}/8ball`);
        const result = await body.json();
        if (typeof result === "object") return result;
    } catch (error) {
        return "[HUSKY-API wrapper: eightball()] We encountered a error on our end. Try again later!";
    };
};

async function subreddit(q) {
    if (!q) return "No subreddit was provided!";
    try {
        const body = await fetch(`${baseurl}${miscEndpoint}/subreddit?q=${encodeURIComponent(q)}`)
        const result = await body.json();
        if (result.message ===  "Invalid subreddit!") return "Invalid subreddit!";
        if (typeof result === "object") return result;
    } catch (error) {
        return "[HUSKY-API wrapper: subreddit()] We encountered a error on our end. Try again later!";
    };
};

async function anime(q) {
    if (!q) return "[HUSKY-API wrapper: anime()] No anime name was provided.";
    try {
        const body = await fetch(`${baseurl}${animeEndpoint}?q=${encodeURIComponent(q)}`)
        const result = await body.json();
        if (typeof result === "object") return result;
    } catch (error) {
        return "[HUSKY-API wrapper: anime()] We encountered a error on our end. Try again later!";
    };
};

module.exports = {
    version,
    eightball,
    subreddit,
    anime,
};

