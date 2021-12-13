const environment = process.env.NODE_ENV;
const prodUrl = "https://federal-field-notes.ca";
const devUrl = "http://localhost:8080";
const baseUrl = environment === "production" ? prodUrl : devUrl;
const isProd = environment === "production";

const dir = {
  img: `/img/`,
};

module.exports = {
  site: {
    name: "Federal Field Notes",
    shortDesc: "Occasional insights from the land before cloud",
  },
  environment,
  isProd,
  base: {
    site: baseUrl,
    img: `${baseUrl}${dir.img}`,
  },
  ga: "G-SG73J2PLSV",
};
