const fetch = require('node-fetch');
const { error } = require('console');
const baseurl = "https://api.huskyio.repl.co";
const funEndpoint = "/fun";
const animeEndpoint = "/anime";
const nsfwEndpoint = "/nsfw";
const infoEndpoint = "/info";

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

async function anime(name) {
    if (!name) return "[HUSKY-AP wrapper: anime()] No anime name was provided.";
    const body = await fetch(`${baseurl}${animeEndpoint}?name=${encodeURIComponent(name)}`)
    const result = await body.json();
    try {
        if (typeof result === "object") return result;
    } catch (error) {
        return "[HUSKY-API wrapper: anime()] We encountered a error on our end. Try again later!";
    };
};


module.exports = {
    eightball,
    anime
};

