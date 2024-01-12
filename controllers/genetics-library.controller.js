const path = require("path");
const { rootDir1, rootDir2 } = require("../utilities/path");

const getBasicGeneticVn = async (req, res) => {
  res
    .status(200)
    .sendFile(path.join(rootDir1, "public", "pages", "basic-genetic-vn.html"));
};

const getBasicGeneticEn = async (req, res) => {
  res
    .status(200)
    .sendFile(path.join(rootDir1, "public", "pages", "basic-genetic-en.html"));
};

const getChromosomeListVn = async (req, res) => {
  res
    .status(200)
    .sendFile(
      path.join(rootDir1, "public", "pages", "chromosome-list-vn.html")
    );
};

const getChromosomeListEn = async (req, res) => {
  res
    .status(200)
    .sendFile(
      path.join(rootDir1, "public", "pages", "chromosome-list-en.html")
    );
};

const getNstDetailVn = async (req, res) => {
  res
    .status(200)
    .sendFile(path.join(rootDir1, "public", "pages", "nst-detail-vn.html"));
};

const getNstDetailEn = async (req, res) => {
  res
    .status(200)
    .sendFile(path.join(rootDir1, "public", "pages", "nst-detail-en.html"));
};

module.exports = {
  getBasicGeneticVn,
  getBasicGeneticEn,
  getChromosomeListVn,
  getChromosomeListEn,
  getNstDetailVn,
  getNstDetailEn,
};
