const fs = require("fs");
const path = require("path");

const { rootDir1, rootDir2 } = require("../utilities/path");

const getHomePageVN = async (req, res) => {
  res
    .status(200)
    .sendFile(path.join(rootDir1, "public", "pages", "index-vn.html"));
};
const getHomePageEn = async (req, res) => {
  res.status(200).sendFile(path.join(rootDir1, "public", "pages", "index-en.html"));
};

module.exports = {
  getHomePageVN,
  getHomePageEn,
};
