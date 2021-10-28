const fetch = require('node-fetch');
const { error } = require('console');
const baseurl = "https://api.huskyio.repl.co";
const funEndpoint = "/fun";
const animeEndpoint = "/anime";
const nsfwEndpoint = "/nsfw";
const infoEndpoint = "/info";
const miscEndpoint = "/misc";
const animalsEndpoint = "/animals";
const version = "1.1.2";

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
    if (!name) return "[HUSKY-API wrapper: anime()] No anime name was provided.";
    try {
        const body = await fetch(`${baseurl}${animeEndpoint}?q=${encodeURIComponent(q)}`)
        const result = await body.json();
        if (typeof result === "object") return result;
    } catch (error) {
        return "[HUSKY-API wrapper: anime()] We encountered a error on our end. Try again later!";
    };
};

async function smug() {
    try {
        const body = await fetch(`${baseurl}${animeEndpoint}/smug`)
        const result = await body.json();
        if (typeof result === "object") return result;
    } catch (error) {
        return "[HUSKY-API wrapper: smug()] We encountered a error on our end. Try again later!";
    };
};

async function baka() {
    try {
        const body = await fetch(`${baseurl}${animeEndpoint}/baka`)
        const result = await body.json();
        if (typeof result === "object") return result;
    } catch (error) {
        return "[HUSKY-API wrapper: baka()] We encountered a error on our end. Try again later!";
    };
};

async function tickle() {
    try {
        const body = await fetch(`${baseurl}${animeEndpoint}/tickle`)
        const result = await body.json();
        if (typeof result === "object") return result;
    } catch (error) {
        return "[HUSKY-API wrapper: tickle()] We encountered a error on our end. Try again later!";
    };
};

async function slap() {
    try {
        const body = await fetch(`${baseurl}${animeEndpoint}/slap`)
        const result = await body.json();
        if (typeof result === "object") return result;
    } catch (error) {
        return "[HUSKY-API wrapper: slap()] We encountered a error on our end. Try again later!";
    };
};

async function poke() {
    try {
        const body = await fetch(`${baseurl}${animeEndpoint}/poke`)
        const result = await body.json();
        if (typeof result === "object") return result;
    } catch (error) {
        return "[HUSKY-API wrapper: poke()] We encountered a error on our end. Try again later!";
    };
};

async function pat() {
    try {
        const body = await fetch(`${baseurl}${animeEndpoint}/pat`)
        const result = await body.json();
        if (typeof result === "object") return result;
    } catch (error) {
        return "[HUSKY-API wrapper: pat()] We encountered a error on our end. Try again later!";
    };
};

async function nekoImg() {
    try {
        const body = await fetch(`${baseurl}${animeEndpoint}/nekoImg`)
        const result = await body.json();
        if (typeof result === "object") return result;
    } catch (error) {
        return "[HUSKY-API wrapper: nekoImg()] We encountered a error on our end. Try again later!";
    };
};

async function nekoGif() {
    try {
        const body = await fetch(`${baseurl}${animeEndpoint}/nekoGif`)
        const result = await body.json();
        if (typeof result === "object") return result;
    } catch (error) {
        return "[HUSKY-API wrapper: nekoGif()] We encountered a error on our end. Try again later!";
    };
};

async function hug() {
    try {
        const body = await fetch(`${baseurl}${animeEndpoint}/hug`)
        const result = await body.json();
        if (typeof result === "object") return result;
    } catch (error) {
        return "[HUSKY-API wrapper: hug()] We encountered a error on our end. Try again later!";
    };
};

async function foxGirl() {
    try {
        const body = await fetch(`${baseurl}${animeEndpoint}/foxGirl`)
        const result = await body.json();
        if (typeof result === "object") return result;
    } catch (error) {
        return "[HUSKY-API wrapper: foxGirl()] We encountered a error on our end. Try again later!";
    };
};

async function feed() {
    try {
        const body = await fetch(`${baseurl}${animeEndpoint}/feed`)
        const result = await body.json();
        if (typeof result === "object") return result;
    } catch (error) {
        return "[HUSKY-API wrapper: feed()] We encountered a error on our end. Try again later!";
    };
};

async function cuddle() {
    try {
        const body = await fetch(`${baseurl}${animeEndpoint}/cuddle`)
        const result = await body.json();
        if (typeof result === "object") return result;
    } catch (error) {
        return "[HUSKY-API wrapper: cuddle()] We encountered a error on our end. Try again later!";
    };
};

async function kemonomimi() {
    try {
        const body = await fetch(`${baseurl}${animeEndpoint}/kemonomimi`)
        const result = await body.json();
        if (typeof result === "object") return result;
    } catch (error) {
        return "[HUSKY-API wrapper: kemonomimi()] We encountered a error on our end. Try again later!";
    };
};

async function holo() {
    try {
        const body = await fetch(`${baseurl}${animeEndpoint}/holo`)
        const result = await body.json();
        if (typeof result === "object") return result;
    } catch (error) {
        return "[HUSKY-API wrapper: holo()] We encountered a error on our end. Try again later!";
    };
};

async function wallpaper() {
    try {
        const body = await fetch(`${baseurl}${animeEndpoint}/wallpaper`)
        const result = await body.json();
        if (typeof result === "object") return result;
    } catch (error) {
        return "[HUSKY-API wrapper: wallpaper()] We encountered a error on our end. Try again later!";
    };
};

async function gecg() {
    try {
        const body = await fetch(`${baseurl}${animeEndpoint}/gecg`)
        const result = await body.json();
        if (typeof result === "object") return result;
    } catch (error) {
        return "[HUSKY-API wrapper: gecg()] We encountered a error on our end. Try again later!";
    };
};

async function avatar() {
    try {
        const body = await fetch(`${baseurl}${animeEndpoint}/avatar`)
        const result = await body.json();
        if (typeof result === "object") return result;
    } catch (error) {
        return "[HUSKY-API wrapper: avatar()] We encountered a error on our end. Try again later!";
    };
};

async function waifu() {
    try {
        const body = await fetch(`${baseurl}${animeEndpoint}/waifu`)
        const result = await body.json();
        if (typeof result === "object") return result;
    } catch (error) {
        return "[HUSKY-API wrapper: waifu()] We encountered a error on our end. Try again later!";
    };
};


module.exports = {
    version,
    sfw: {
      eightball,
      subreddit,
      anime,
      smug,
      baka,
      tickle,
      slap,
      poke,
      pat,
      nekoImg,
      nekoGif,
      hug,
      foxGirl,
      feed,
      cuddle,
      kemonomimi,
      holo,
      wallpaper,
      gecg,
      avatar, 
      waifu
   }
};

