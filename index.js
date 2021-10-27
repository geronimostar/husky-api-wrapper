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

module.exports = {
    eightball
};

