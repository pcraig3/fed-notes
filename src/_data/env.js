const environment = process.env.NODE_ENV;
const url = "https://federal-field-notes.ca";
const isProd = environment === "production";

module.exports = {
  site: {
    name: "Federal Field Notes",
    shortDesc: "Occasional insights from the land before cloud",
    authorName: "Paul Craig",
    authorHandle: "@pcraig3",
    authorUrl: "https://twitter.com/pcraig3",
  },
  environment,
  isProd,
  url,
  ga: "G-SG73J2PLSV",
};
